// server.js or server.ts

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files from Vite's build output
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Serve sitemap.xml with correct MIME type
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml'); // Explicit MIME type
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// 3. Serve robots.txt (optional but recommended)
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// 4. Catch-all route (for client-side routing like React Router)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
