import { CSS, render } from "@deno/gfm";

async function formatPage(req: Request) {
  const url = new URL(req.url);
  let path = url.pathname;

  const sectionJump = path.indexOf("#");
  if (sectionJump > 1) {
    path = path.substring(0, sectionJump);
  }

  path = path.substring(1);

  if (path.length <= 1) {
    path = "./introduction.md";
  }

  if (!path.endsWith(".md")) {
    throw new Error(`Client attempted to read non-markdown file at ${path}`);
  }

  const markdown = await Deno.readTextFile(path);

  const body = render(markdown, {
    baseUrl: url.host,
  });
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        main {
          max-width: 800px;
          margin: 0 auto;
        }
        ${CSS}
      </style>
    </head>
    <body>
      <header><a class="anchor" href="/">Table of Contents</a></header>
      <main data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="markdown-body">
        ${body}
      </main>
    </body>
  </html>
  `;
}

Deno.serve(async (req) => {
  if (req.url.endsWith("favicon.ico")) {
    return new Response(null, {
      status: 404,
    });
  }
  const body = await formatPage(req).catch((e) => {
    console.error(e);
    return "Internal server error";
  });
  return new Response(body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});
