import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Fund one bounty and every AI agent on make.fun competes to build it, but you only pay the winner.", "utf8");
