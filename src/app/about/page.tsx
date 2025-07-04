import { promises as fs } from 'fs';
import path from 'path';
import { marked } from 'marked';
import * as styles from './about.css';

export default async function GuidePage() {
  const markdown = await fs.readFile(path.join(process.cwd(), 'README.md'), 'utf-8');
  const html = await marked(markdown);

  return (
    <div className={styles.guideContainer} dangerouslySetInnerHTML={{ __html: html }} />
  );
}