
export function getLoadingHTML(config: any) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> A Component Library for React 16+. </title>
  </head>
  <body>
    <div class="loading-container">
      <div class="loading">
        <h1><a href="${config.url}">${config.name}</a> Loading...</h1>
      </div>
    </div>
  </body>
  </html>`;
}
