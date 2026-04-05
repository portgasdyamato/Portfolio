import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

// Initialize table on first use
async function ensureTable() {
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
    await ensureTable()
    const notes = await sql`SELECT * FROM scrapbook_notes ORDER BY created_at ASC`
    return NextResponse.json({ notes })
  } catch (error) {
    console.error("GET error:", error)
    return NextResponse.json({ notes: [] }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await ensureTable()
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
