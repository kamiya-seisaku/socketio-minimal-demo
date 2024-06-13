const port = 8080; // You can change the port number if needed

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Read the index.html file and send it to the client
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});