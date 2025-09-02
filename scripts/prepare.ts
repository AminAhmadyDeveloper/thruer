import { execSync } from "node:child_process";
import chalk from "chalk";
import { consola } from "consola";

function runScript(script: string) {
  try {
    consola.start(chalk.cyan(`Running: npm run ${script}`));
    execSync(`npm run ${script}`, { stdio: "inherit" });
    consola.success(chalk.green(`Finished: ${script}`));
  } catch {
    consola.error(chalk.red(`❌ Failed: ${script}`));
    process.exit(1);
  }
}

try {
  const scripts = ["husky"];

  for (const script of scripts) {
    runScript(script);
  }

  consola.box(chalk.bold.green("✅ Prepare scripts completed successfully"));
} catch (err) {
  consola.error(chalk.red("❌ Prepare script failed:"), err);
  process.exit(1);
}
