import "dotenv/config";
import { Pool } from "@neondatabase/serverless";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const r = await pool.query(`
    SELECT c.slug, c.name, COUNT(b.id) as count 
    FROM "Category" c 
    LEFT JOIN "Business" b ON b."categoryId" = c.id AND b.lat IS NOT NULL 
    GROUP BY c.slug, c.name 
    ORDER BY count DESC
  `);
  console.log(JSON.stringify(r.rows, null, 2));
  await pool.end();
}

main().catch(console.error);
