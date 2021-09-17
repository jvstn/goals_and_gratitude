const express = require('express')
const next = require('next')
const {createProxyMiddleware} = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  //apply proxy in dev mode for auth cookies
  const server = express();
  if (dev) {
    server.use('/api', createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true
    }));
  }

  server.all("*", (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, () => {
    console.log('> Ready on port 5000')
  })
}).catch((err) => {
  console.log(err);
})