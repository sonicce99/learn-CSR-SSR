const component = require("./component");

module.exports = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR | 동수의 로그북</title>
  </head>
  <body>
    <div id="root">
        ${component}
    </div>
    <script src='./hydrateRoot.js'></script>
  </body>
</html>
`;
