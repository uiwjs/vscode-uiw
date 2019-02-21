
export function getWebviewContent(mdStr: string, style: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cat Coding</title>
<style type="text/css">
${style}
</style>
</head>
<body>
<div class="markdown-body">
${mdStr}
<div>
</body>
</html>`;
}