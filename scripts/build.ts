import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { consola } from "consola";

function run(cmd: string) {
  try {
    consola.start(chalk.cyan(`Running: ${cmd}`));
    execSync(cmd, { stdio: "inherit" });
    consola.success(chalk.green(`Finished: ${cmd}`));
  } catch {
    consola.error(chalk.red(`❌ Failed: ${cmd}`));
    process.exit(1);
  }
}

function copyFolder(src: string, dest: string) {
  if (!fs.existsSync(src)) {
    consola.warn(`${chalk.yellow("Skip:")} ${src} does not exist`);
    return;
  }

  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyFolder(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

try {
  const root = process.cwd();
  const standaloneDir = path.join(root, ".next", "standalone");

  run("next build");

  consola.start("Copying static assets...");
  copyFolder(
    path.join(root, ".next", "static"),
    path.join(standaloneDir, ".next", "static"),
  );
  consola.success(chalk.green("Static assets copied"));

  consola.start("Copying public assets...");
  copyFolder(path.join(root, "public"), path.join(standaloneDir, "public"));
  consola.success(chalk.green("Public assets copied"));

  consola.box(chalk.bold.green("✅ Build completed successfully"));
} catch (err) {
  consola.error(chalk.red("❌ Build script failed:"), err);
  process.exit(1);
}
