const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  if (req.url === '/api/images') {
    const rawDir = path.join(__dirname, 'assets', 'img', 'raw');
    const files = fs.readdirSync(rawDir).sort();
    const result = files.map(name => {
      const stat = fs.statSync(path.join(rawDir, name));
      return { name, size: stat.size };
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(result));
  }

  let reqPath = decodeURIComponent(req.url === '/' ? '/index.html' : req.url.split('?')[0]);
  let filePath = path.join(__dirname, reqPath);
  let ext = path.extname(filePath).toLowerCase();
  let contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Page non trouvée');
      } else {
        res.writeHead(500);
        res.end('Erreur serveur : ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Preview server running at http://localhost:${PORT}/`);
});
