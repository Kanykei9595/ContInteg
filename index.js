const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🚀 Hello my lovely group "JUMP TO TECH", my CI/CD deployed!');
});

server.listen(80, () => {
  console.log('🌐 Server is running on port 80');
});
