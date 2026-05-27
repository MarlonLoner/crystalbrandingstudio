import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import next from "next";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const hostname = "127.0.0.1";
const port = Number(process.env.PORT || 3000);
const logPath = path.join(projectRoot, "dev-server.log");

function log(message) {
  fs.appendFileSync(logPath, `${new Date().toISOString()} ${message}\n`);
}

process.env.NEXT_TEST_WASM = "1";
process.env.NEXT_TEST_WASM_DIR = path.join(
  projectRoot,
  "node_modules",
  "@next",
  "swc-wasm-nodejs"
);

process.chdir(projectRoot);
log(`Starting Crystal POP OUT dev host on http://${hostname}:${port}`);

const app = next({ dev: true, hostname, port, dir: projectRoot });
const handle = app.getRequestHandler();

try {
  await app.prepare();
  createServer((request, response) => {
    handle(request, response);
  }).listen(port, hostname, () => {
    log(`Ready on http://${hostname}:${port}`);
  });
} catch (error) {
  log(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exit(1);
}
