#!/usr/bin/env zx
import "zx/globals";
import path from "path";
import os from "os";
import fs from "fs";
import glob from "glob";

const homedir = os.homedir();
await $`cd ${homedir} `;

const paths = glob.sync("./*/*/node_modules", {
  cwd: path.join(homedir, "Code"),
  absolute: true,
});

paths.forEach(async (pathname) => {
  const targetPath = pathname.replace(/\/Code\//, "/Code_temp/");
  //   console.log(pathname, targetPath);
  await $`mkdir -p ${path.join(targetPath, "..")}`;
  await $`mv ${pathname} ${targetPath}`;
});
//
// console.log("paths:", path.resolve("~/Code/"), paths);
