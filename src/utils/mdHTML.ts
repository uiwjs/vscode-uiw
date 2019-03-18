
export function getWebviewContent(mdStr: string, style: string, websiteurl: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cat Coding</title>
<style type="text/css">
${style}
.openWebsite {
  position: absolute;
  top: 10px;
  right: 10px;
}
.openWebsite a {
  display: inline-block;
  border-radius: 3px;
  background-color: #008EF0;
  color: #fff;
  line-height: 14px;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 7px;
}
.openWebsite a:hover {
  color: #fff;
  background-color: #0070bd;
}
</style>
</head>
<body>
<div class="openWebsite"><a href="${websiteurl}">组件文档官网地址</a></div>
<div class="markdown-body">
${mdStr}
<div>
</body>
</html>`;
}