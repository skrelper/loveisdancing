import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function getFilesRecursively(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await getFilesRecursively(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

export default async function generateFileLists() {
  const musicFolder = 'public/content/music';

  const allFiles = await getFilesRecursively(musicFolder);

  const cleaned = allFiles.map(f =>
    f.replace(/^public[\\/]/, '').replace(/\\/g, '/')
  );

  await writeFile(
    join(musicFolder, 'files.json'),
    JSON.stringify(cleaned, null, 2)
  );

  console.log('Generated files.json:', cleaned);
  console.log("Scanning:", process.cwd(), musicFolder);
}