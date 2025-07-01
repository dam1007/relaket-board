import { NextRequest } from 'next/server';
import knex from '@/lib/knex';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!id) return new Response('Invalid file id', { status: 400 });

  const file = await knex('relaket_file').where({ id }).first();
  if (!file) return new Response('File not found', { status: 404 });

  const filePath = path.join(process.cwd(), 'public', file.file_path);
  try {
    const fileBuffer = await fs.readFile(filePath);
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(file.file_name)}"`,
      },
    });
  } catch {
    return new Response('File not found', { status: 404 });
  }
} 