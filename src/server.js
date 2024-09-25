import http from "node:http";

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Douglas",
      email: "douglas@gmail.com",
    });
  }

  return response.end("Nada foi retornado");
});

server.listen(3333);
