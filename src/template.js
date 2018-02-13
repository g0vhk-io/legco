exports.template = function({ title, app }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">       
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=205317903140183";
          fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        </script>
      </head>
      
      <body>
        <div id="root"></div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.1.0/jquery.countdown.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flipcountdown/3.0.5/jquery.flipcountdown.min.css"></link>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flipcountdown/3.0.5/jquery.flipcountdown.min.js"></script>
      <script src="/assets/clock.js"></script>
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
