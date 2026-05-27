import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

process.env.NEXT_TEST_WASM = "1";
process.env.NEXT_TEST_WASM_DIR = path.join(
  projectRoot,
  "node_modules",
  "@next",
  "swc-wasm-nodejs"
);

const result = spawnSync(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
