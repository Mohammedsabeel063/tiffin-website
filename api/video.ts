// File: src/api/video.ts (if using Vite)
// Or:   pages/api/video.ts (if using Next.js)

import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = join(process.cwd(), 'public', 'mom-cooking.mp4');

  try {
    const stat = statSync(filePath);
    res.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': stat.size,
    });

    const readStream = createReadStream(filePath);
    readStream.pipe(res);
  } catch (err) {
    res.status(404).json({ error: 'Video not found' });
  }
}
