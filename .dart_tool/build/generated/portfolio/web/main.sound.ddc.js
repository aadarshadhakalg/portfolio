define(['dart_sdk', 'packages/portfolio/app.zap'], (function load__web__main(dart_sdk, packages__portfolio__app$46zap) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app$46zap = packages__portfolio__app$46zap.app$46zap;
  var main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    new app$46zap.App.new().create(dart.nullCheck(html.document.body));
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAM8B,IAA5B,AAAM,+BAAoB,eAAb,AAAS;EACxB","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
