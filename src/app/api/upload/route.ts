import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { randomUUID } from 'crypto';

const ALLOWED_EXTS = ['.jpg', '.jpeg', '.png'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // 확장자 체크
  const ext = path.extname(file.name).toLowerCase();
  if (!ALLOWED_EXTS.includes(ext)) {
    return NextResponse.json({ error: 'jpg, png 파일만 업로드 가능합니다.' }, { status: 400 });
  }

  // 용량 체크
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: '10MB 이하 파일만 업로드 가능합니다.' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'tinymce-uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const saveName = `${randomUUID()}${ext}`;
  const savePath = path.join(uploadDir, saveName);

  const arrayBuffer = await file.arrayBuffer();
  await fs.writeFile(savePath, Buffer.from(arrayBuffer));

  // 업로드된 파일의 public URL, 썸네일 URL 반환
  const url = `/tinymce-uploads/${saveName}`;
  return NextResponse.json({ location:url});
}
