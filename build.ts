import * as pathLib from "jsr:@std/path";

async function buildFile(path: string) {
  // add actual md here
  let markdown = "";

  // check if a directory exists with the same name as the markdown file
  // if so, list every file in that directory below the rest of the markdown
  const dir = pathLib.dirname(path);
  const filename = pathLib.basename(path).replace(pathLib.extname(path), "");
  if (dir.endsWith(filename)) {
    const filesInDir = [];
    for await (const dirfile of Deno.readDir(dir)) {
      if (dirfile.name.endsWith(".md") && dirfile.isFile) {
        // dig inside file to find its title, add that plus path
        const fileTitle = await Deno.readTextFile(
          pathLib.join(dir, dirfile.name),
        );
      }
    }
    markdown += "\n\n# Pages in this category\n";
  }
}
