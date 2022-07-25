export default ({markup}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Superdown</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0;font-family: 'Proxima Nova',-apple-system,'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif,sans-serif;">
          <div id="root">${markup}</div>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}
