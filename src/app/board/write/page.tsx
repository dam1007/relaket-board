// 글 작성/수정

import Link from "next/link";
import { pageTitle, tableRow, tableRowTh, tableRowTd, buttonWrapRight, button } from "@/styles/components.css";
import * as InputText from '@/components/InputText/InputText.css';
import knex from '@/lib/knex';
import WriteForm from './WriteForm';

interface WritePageProps {
  searchParams: { type?: string; id?: string };
}

export default async function Page({ searchParams }: WritePageProps) {
  const { type, id } = searchParams;
  let post = null;
  let files: any[] = [];

  if (type === 'update' && id) {
    post = await knex('relaket_post').where({ id: Number(id) }).first();
    files = await knex('relaket_file').where({ post_id: Number(id) });
  }

  return <WriteForm post={post} files={files} type={type} />;
}