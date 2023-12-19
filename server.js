import { createServer } from "node:http";

export const server = createServer((request, response) => {
  const url = request.url;

  if (url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
  } else if (url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Nemo");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
