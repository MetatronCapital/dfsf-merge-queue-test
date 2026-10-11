import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";

test("there is no forbidden.txt", () => {
  assert.equal(fs.existsSync("forbidden.txt"), false);
});
