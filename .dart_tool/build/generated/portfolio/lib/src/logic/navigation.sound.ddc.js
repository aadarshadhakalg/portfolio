define(['dart_sdk', 'packages/state_notifier/state_notifier', 'packages/riverpod/riverpod'], (function load__packages__portfolio__src__logic__navigation(dart_sdk, packages__state_notifier__state_notifier, packages__riverpod__riverpod) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const state_notifier = packages__state_notifier__state_notifier.state_notifier;
  const state_notifier_provider = packages__riverpod__riverpod.src__state_notifier_provider;
  var navigation = Object.create(dart.library);
  var $history = dartx.history;
  var $host = dartx.host;
  var $location = dartx.location;
  var $pushState = dartx.pushState;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StateNotifierProviderOfRoute$String: () => (T.StateNotifierProviderOfRoute$String = dart.constFn(state_notifier_provider.StateNotifierProvider$(navigation.Route, core.String)))(),
    StateNotifierProviderRefOfRoute$String: () => (T.StateNotifierProviderRefOfRoute$String = dart.constFn(state_notifier_provider.StateNotifierProviderRef$(navigation.Route, core.String)))(),
    StateNotifierProviderRefOfRoute$StringToRoute: () => (T.StateNotifierProviderRefOfRoute$StringToRoute = dart.constFn(dart.fnType(navigation.Route, [T.StateNotifierProviderRefOfRoute$String()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:portfolio/src/logic/navigation.dart"];
  navigation.Route = class Route extends state_notifier.StateNotifier$(core.String) {
    static ['_#new#tearOff']() {
      return new navigation.Route.new();
    }
    goToHome() {
      return this.setUrl({path: "/", name: "Home"});
    }
    goToAbout() {
      return this.setUrl({path: "/about", name: "About"});
    }
    goToBlog() {
      return this.setUrl({path: "/blog", name: "Blog"});
    }
    setUrl(opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let data = opts && 'data' in opts ? opts.data : null;
      html.window[$history][$pushState](data, name + " - Aadarsha Dhakal", "http://" + html.window[$location][$host] + path);
      this.state = path;
    }
  };
  (navigation.Route.new = function() {
    navigation.Route.__proto__.new.call(this, "/");
    ;
  }).prototype = navigation.Route.prototype;
  dart.addTypeTests(navigation.Route);
  dart.addTypeCaches(navigation.Route);
  dart.setMethodSignature(navigation.Route, () => ({
    __proto__: dart.getMethods(navigation.Route.__proto__),
    goToHome: dart.fnType(dart.void, []),
    goToAbout: dart.fnType(dart.void, []),
    goToBlog: dart.fnType(dart.void, []),
    setUrl: dart.fnType(dart.void, [], {data: dart.nullable(core.Map)}, {name: core.String, path: core.String})
  }));
  dart.setLibraryUri(navigation.Route, I[0]);
  dart.defineLazy(navigation, {
    /*navigation.navigationProvider*/get navigationProvider() {
      return new (T.StateNotifierProviderOfRoute$String()).new(dart.fn(_ => new navigation.Route.new(), T.StateNotifierProviderRefOfRoute$StringToRoute()));
    }
  }, false);
  dart.trackLibraries("packages/portfolio/src/logic/navigation", {
    "package:portfolio/src/logic/navigation.dart": navigation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,gCAAa,WAAW;IAAO;;AAC9B,gCAAa,gBAAgB;IAAQ;;AACtC,gCAAa,eAAe;IAAO;;UAEzB;UAAsB;UAAW;AAEhB,MAD5C,AAAO,AAAQ,kCAAU,IAAI,EAAI,AAAuB,IAAnB,yBACjC,AAAuC,YAA7B,AAAO,AAAS,gCAAO,IAAI;AAC7B,MAAZ,aAAQ,IAAI;IACd;;;AAVU,8CAAM;;EAAI;;;;;;;;;;;;MAHhB,6BAAkB;YAAG,mDAAqC,QAAC,KAAM","file":"navigation.sound.ddc.js"}');
  // Exports:
  return {
    src__logic__navigation: navigation
  };
}));

//# sourceMappingURL=navigation.sound.ddc.js.map
