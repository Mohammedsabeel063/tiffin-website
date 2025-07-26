// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// Serve static files
app.use(express.static(distPath));

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.type('application/xml').sendFile(sitemapPath);
  } else {
    res.status(404).send('sitemap.xml not found');
  }
});

// Serve robots.txt (optional)
app.get('/robots.txt', (req, res) => {
  const robotsPath = path.join(distPath, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.type('text/plain').sendFile(robotsPath);
  } else {
    res.status(404).send('robots.txt not found');
  }
});

// Fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
