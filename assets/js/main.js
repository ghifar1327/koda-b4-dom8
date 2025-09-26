require.config({
  baseUrl: "assets/js",
  paths: {
    jquery: "https://code.jquery.com/jquery-3.6.0.min",
    axios: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min",
  },
});

require(["app"], function (app) {
  app.main();
});
