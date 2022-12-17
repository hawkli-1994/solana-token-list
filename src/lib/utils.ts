import * as fs from "fs";

function test() {
  const data = "This is the new content of the file.";
  fs.writeFileSync("file.txt", data);
  console.log("Data has been written to file successfully.");
}
