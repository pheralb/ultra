import { clear } from "./clear.js";
import install from "./install.js";
import { benchmark } from "./benchmark.js";
import upgrade from "./upgrade.js";
import list from "./list.js";
import checkVersion from "../utils/checkVersion.js";

export async function commands(args: string[]) {
  const [command, ...rest] = args;

  await checkVersion();

  switch (command) {
    case "install":
      await install(rest);
      break;
    case "i":
      await install(rest);
      break;
    case "benchmark":
      await benchmark(rest);
      break;
    case "clear":
      await clear();
      break;
    case "upgrade":
      await upgrade();
      break;
    case "ls":
      await list(rest[0]);
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
}
