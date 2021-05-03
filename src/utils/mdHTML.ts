export function reloadHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UIW Document</title>
</head>
<body>
  <div>
    正在加载中....
  <div>
</body>
</html>`;
}

export function reloadErrorHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UIW Document</title>
</head>
<body>
  <div>
    请求加载错误❌
  <div>
</body>
</html>`;
}