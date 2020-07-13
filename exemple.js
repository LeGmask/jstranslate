const jsTranslate = require("jstranslate");

return jsTranslate("auto", "French", "Hello world, I'm JsTranslate").then(
  function (response) {
    console.log(response);
  }
);
