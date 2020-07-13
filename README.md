# JsTranslate

This is the official repo for the jsTranslate node package. This package permit to call the free google translate api easly by giving the lang of the text, the desired lang for the output and the text who is needed to be translated. For the lang definition you could use lang name (like French, German, English), or you could use ISO 639-1 & ISO 639-2, It will be automaticly parsed to ISO 639-1 because google translate api use this one.

### How use jsTranslate ?

- first install jsTranslate by running the command :
  `npm i --save jsTranslate`

- secondly you must import jsTranslate :

```js
const jsTranslate = require("jsTranslate");
```

- After that you could simply call the jsTranslate module like that (for a working exemple see exemple.js):

```js
return jsTranslate(SourceLang, LangOutput, TextToTranslate).then(function (
  response
) {
  console.log(response);
});
```

:warn: the text in imput should'nt have any point, I will fix it soon !

If you want to help for this project, simply open an issue for reporting bug or feature request, also you could simply open a pull request :smile: !
