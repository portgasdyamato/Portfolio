import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }
  return neon(process.env.DATABASE_URL)
}

// Initialize table on first use
async function ensureTable() {
  const sql = getSql()
  await sql`
    CREATE TABLE IF NOT EXISTS scrapbook_notes (
      id TEXT PRIMARY KEY,
      content TEXT NOT NULL,
      rotation REAL NOT NULL,
      x TEXT NOT NULL,
      y TEXT NOT NULL,
      color TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
}

const BANNED_WORDS = [
  'hate', 'bad', 'stupid', 'ugly', 'dumb', 'idiot', 'useless', 'worthless',
  'fuck', 'shit', 'bitch', 'asshole', 'kill', 'die', 'death', 'horrible',
  'terrible', 'worst', 'poor', 'trash', 'garbage', 'disgusting', 'negative',
  'evil', 'failure', 'broken', 'eww', 'ew', 'yuck', 'gross', 'nasty'
]

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ notes: [] })
    }
    await ensureTable()
    const sql = getSql()
    // Permanently purge any notes with 'eww', 'ew', or banned words
    await sql`DELETE FROM scrapbook_notes WHERE LOWER(content) LIKE '%eww%' OR LOWER(TRIM(content)) = 'ew' OR LOWER(TRIM(content)) = 'eww'`
    const notes = await sql`SELECT * FROM scrapbook_notes ORDER BY created_at ASC`
    return NextResponse.json({ notes })
  } catch (error) {
    console.error("GET error:", error)
    return NextResponse.json({ notes: [] }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false, error: "Database not configured" }, { status: 500 })
    }
    await ensureTable()
    const sql = getSql()
    const body = await req.json()
    const { id, content, rotation, x, y, color } = body

    if (!content || typeof content !== "string") {
      return NextResponse.json({ success: false, error: "Invalid content" }, { status: 400 })
    }

    const lower = content.toLowerCase().trim()
    const isBanned = BANNED_WORDS.some(w => lower.includes(w) || lower.split(/\s+/).includes(w))
    if (isBanned) {
      return NextResponse.json({ success: false, error: "Inappropriate word" }, { status: 400 })
    }

    await sql`
      INSERT INTO scrapbook_notes (id, content, rotation, x, y, color)
      VALUES (${id}, ${content}, ${rotation}, ${x}, ${y}, ${color})
      ON CONFLICT (id) DO NOTHING
    `
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("POST error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false }, { status: 500 })
    }
    const sql = getSql()
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (id) {
      await sql`DELETE FROM scrapbook_notes WHERE id = ${id}`
    } else {
      await sql`DELETE FROM scrapbook_notes WHERE LOWER(content) LIKE '%eww%' OR LOWER(TRIM(content)) = 'ew' OR LOWER(TRIM(content)) = 'eww'`
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
