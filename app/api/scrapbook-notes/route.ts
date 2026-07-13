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

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ notes: [] })
    }
    await ensureTable()
    const sql = getSql()
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
