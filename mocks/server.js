const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./mocks/db.json");
const middlewares = jsonServer.defaults();

let db = require("./db/index.js");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

/**
 * 首頁
 */
// getNewInfo
server.post("/api/getNewInfo", (req, res) => {
  console.log(res.body);
  res.status(200).json(db.getNewInfo(res));
});
// getCategory
server.post("/api/getCategory", (req, res) => {
  console.log(res.body);
  res.status(200).json(db.getCategory(res));
});

// rewrite
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("<http://localhost:3000> JSON Server is running");
});
