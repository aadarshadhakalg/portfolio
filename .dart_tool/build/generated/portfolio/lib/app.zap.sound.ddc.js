define(['dart_sdk', 'packages/zap/src/blocks/async', 'packages/riverpod_zap/riverpod', 'packages/portfolio/src/logic/navigation', 'packages/zap/src/core/fragment', 'packages/riverpod_zap/src/riverpod-scope.zap'], (function load__packages__portfolio__app_zap(dart_sdk, packages__zap__src__blocks__async, packages__riverpod_zap__riverpod, packages__portfolio__src__logic__navigation, packages__zap__src__core__fragment, packages__riverpod_zap__src__riverpod_scope$46zap) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component = packages__zap__src__blocks__async.src__core__component;
  const dom = packages__zap__src__blocks__async.src__dom__dom;
  const $if = packages__zap__src__blocks__async.src__blocks__if;
  const riverpod = packages__riverpod_zap__riverpod.riverpod;
  const navigation = packages__portfolio__src__logic__navigation.src__logic__navigation;
  const fragment = packages__zap__src__core__fragment.src__core__fragment;
  const riverpod_scope$46zap = packages__riverpod_zap__src__riverpod_scope$46zap.src__riverpod_scope$46zap;
  var header$46zap = Object.create(dart.library);
  var navigation$46zap = Object.create(dart.library);
  var homepage$46zap = Object.create(dart.library);
  var body$46zap = Object.create(dart.library);
  var blogpage$46zap = Object.create(dart.library);
  var aboutpage$46zap = Object.create(dart.library);
  var app$46zap = Object.create(dart.library);
  var $attributes = dartx.attributes;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  var $insertBefore = dartx.insertBefore;
  var $append = dartx.append;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidToNavigation: () => (T.VoidToNavigation = dart.constFn(dart.fnType(navigation$46zap.Navigation, [])))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    __$t4N: () => (T.__$t4N = dart.constFn(dart.nullable(body$46zap.__$t4)))(),
    intTo__$t4N: () => (T.intTo__$t4N = dart.constFn(dart.fnType(T.__$t4N(), [core.int])))(),
    __$t5N: () => (T.__$t5N = dart.constFn(dart.nullable(body$46zap.__$t5)))(),
    intTo__$t5N: () => (T.intTo__$t5N = dart.constFn(dart.fnType(T.__$t5N(), [core.int])))(),
    __$t6N: () => (T.__$t6N = dart.constFn(dart.nullable(body$46zap.__$t6)))(),
    intTo__$t6N: () => (T.intTo__$t6N = dart.constFn(dart.fnType(T.__$t6N(), [core.int])))(),
    VoidToHomepage: () => (T.VoidToHomepage = dart.constFn(dart.fnType(homepage$46zap.Homepage, [])))(),
    VoidToAboutpage: () => (T.VoidToAboutpage = dart.constFn(dart.fnType(aboutpage$46zap.Aboutpage, [])))(),
    VoidToBlogpage: () => (T.VoidToBlogpage = dart.constFn(dart.fnType(blogpage$46zap.Blogpage, [])))(),
    VoidTo__$t0: () => (T.VoidTo__$t0 = dart.constFn(dart.fnType(app$46zap.__$t0, [])))(),
    VoidToRiverpodScope: () => (T.VoidToRiverpodScope = dart.constFn(dart.fnType(riverpod_scope$46zap.RiverpodScope, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:portfolio/src/presentation/header/header.zap.dart",
    "package:portfolio/src/presentation/header/navigation.zap.dart",
    "package:portfolio/src/presentation/pages/homepage.zap.dart",
    "package:portfolio/src/presentation/body/body.zap.dart",
    "package:portfolio/src/presentation/pages/blogpage.zap.dart",
    "package:portfolio/src/presentation/pages/aboutpage.zap.dart",
    "package:portfolio/app.zap.dart"
  ];
  var _$n0 = dart.privateName(header$46zap, "_$n0");
  var _$n1 = dart.privateName(header$46zap, "_$n1");
  var _$n2 = dart.privateName(header$46zap, "_$n2");
  var _$n3 = dart.privateName(header$46zap, "_$n3");
  var _$n4 = dart.privateName(header$46zap, "_$n4");
  var __Header__$n5 = dart.privateName(header$46zap, "_#Header#_$n5");
  var _$n5 = dart.privateName(header$46zap, "_$n5");
  header$46zap.Header = class Header extends component.ZapComponent {
    get [_$n5]() {
      let t0;
      t0 = this[__Header__$n5];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_$n5")) : t0;
    }
    set [_$n5](t0) {
      if (this[__Header__$n5] == null)
        this[__Header__$n5] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n5"));
    }
    static ['_#new#tearOff']() {
      return new header$46zap.Header.new();
    }
    createInternal(target, anchor = null) {
      this[_$n5] = this.$createChildComponent(navigation$46zap.Navigation, dart.fn(() => new navigation$46zap.Navigation.new(), T.VoidToNavigation()));
      this[_$n1][$attributes][$_set]("href", "/"[$toString]());
      this[_$n1][$attributes][$_set]("class", "title"[$toString]());
      target[$insertBefore](this[_$n0], anchor);
      this[_$n0][$append](this[_$n1]);
      this[_$n1][$append](this[_$n2]);
      this[_$n2][$append](this[_$n3]);
      this[_$n0][$append](this[_$n4]);
      this[_$n5].create(this[_$n0], null);
    }
    remove() {
      this[_$n0][$remove]();
      this[_$n5].destroy();
    }
    update(delta) {
    }
  };
  (header$46zap.Header.new = function() {
    this[_$n0] = html.Element.tag("header");
    this[_$n1] = html.AnchorElement.new();
    this[_$n2] = html.HeadingElement.h2();
    this[_$n3] = html.Text.new("Aadarsha Dhakal");
    this[_$n4] = html.Text.new("\n    ");
    this[__Header__$n5] = null;
    header$46zap.Header.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this.takeOverPending(self);
  }).prototype = header$46zap.Header.prototype;
  dart.addTypeTests(header$46zap.Header);
  dart.addTypeCaches(header$46zap.Header);
  dart.setMethodSignature(header$46zap.Header, () => ({
    __proto__: dart.getMethods(header$46zap.Header.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(header$46zap.Header, () => ({
    __proto__: dart.getGetters(header$46zap.Header.__proto__),
    [_$n5]: navigation$46zap.Navigation
  }));
  dart.setSetterSignature(header$46zap.Header, () => ({
    __proto__: dart.getSetters(header$46zap.Header.__proto__),
    [_$n5]: navigation$46zap.Navigation
  }));
  dart.setLibraryUri(header$46zap.Header, I[0]);
  dart.setFieldSignature(header$46zap.Header, () => ({
    __proto__: dart.getFields(header$46zap.Header.__proto__),
    [_$n0]: dart.finalFieldType(html.Element),
    [_$n1]: dart.finalFieldType(html.AnchorElement),
    [_$n2]: dart.finalFieldType(html.HeadingElement),
    [_$n3]: dart.finalFieldType(html.Text),
    [_$n4]: dart.finalFieldType(html.Text),
    [__Header__$n5]: dart.fieldType(dart.nullable(navigation$46zap.Navigation))
  }));
  var __Navigation__$v0 = dart.privateName(navigation$46zap, "_#Navigation#_$v0");
  var _$n0$ = dart.privateName(navigation$46zap, "_$n0");
  var _$n1$ = dart.privateName(navigation$46zap, "_$n1");
  var _$n2$ = dart.privateName(navigation$46zap, "_$n2");
  var _$n3$ = dart.privateName(navigation$46zap, "_$n3");
  var _$n4$ = dart.privateName(navigation$46zap, "_$n4");
  var _$n5$ = dart.privateName(navigation$46zap, "_$n5");
  var _$n6 = dart.privateName(navigation$46zap, "_$n6");
  var _$n7 = dart.privateName(navigation$46zap, "_$n7");
  var _$n8 = dart.privateName(navigation$46zap, "_$n8");
  var _$n9 = dart.privateName(navigation$46zap, "_$n9");
  var _$n10 = dart.privateName(navigation$46zap, "_$n10");
  var _$n11 = dart.privateName(navigation$46zap, "_$n11");
  var _$n12 = dart.privateName(navigation$46zap, "_$n12");
  var _$v0 = dart.privateName(navigation$46zap, "_$v0");
  navigation$46zap.Navigation = class Navigation extends component.ZapComponent {
    get [_$v0]() {
      let t1;
      t1 = this[__Navigation__$v0];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_$v0")) : t1;
    }
    set [_$v0](t1) {
      if (this[__Navigation__$v0] == null)
        this[__Navigation__$v0] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_$v0"));
    }
    static ['_#new#tearOff']() {
      return new navigation$46zap.Navigation.new();
    }
    createInternal(target, anchor = null) {
      html.GlobalEventHandlers.clickEvent.forElement(this[_$n2$]).listen(dart.fn(_ => {
        dart.bind(this[_$v0], 'goToHome')();
      }, T.MouseEventTovoid()));
      this[_$n2$][$attributes][$_set]("title", "Home"[$toString]());
      html.GlobalEventHandlers.clickEvent.forElement(this[_$n5$]).listen(dart.fn(_ => {
        dart.bind(this[_$v0], 'goToBlog')();
      }, T.MouseEventTovoid()));
      this[_$n5$][$attributes][$_set]("title", "blogs"[$toString]());
      html.GlobalEventHandlers.clickEvent.forElement(this[_$n8]).listen(dart.fn(_ => {
        dart.bind(this[_$v0], 'goToAbout')();
      }, T.MouseEventTovoid()));
      this[_$n8][$attributes][$_set]("title", "About me"[$toString]());
      html.GlobalEventHandlers.clickEvent.forElement(this[_$n11]).listen(dart.fn(_ => {
        dart.bind(this[_$v0], 'goToHome')();
      }, T.MouseEventTovoid()));
      this[_$n11][$attributes][$_set]("title", "My Projects"[$toString]());
      target[$insertBefore](this[_$n0$], anchor);
      this[_$n0$][$append](this[_$n1$]);
      this[_$n1$][$append](this[_$n2$]);
      this[_$n2$][$append](this[_$n3$]);
      this[_$n1$][$append](this[_$n4$]);
      this[_$n1$][$append](this[_$n5$]);
      this[_$n5$][$append](this[_$n6]);
      this[_$n1$][$append](this[_$n7]);
      this[_$n1$][$append](this[_$n8]);
      this[_$n8][$append](this[_$n9]);
      this[_$n1$][$append](this[_$n10]);
      this[_$n1$][$append](this[_$n11]);
      this[_$n11][$append](this[_$n12]);
    }
    remove() {
      this[_$n0$][$remove]();
    }
    update(delta) {
    }
  };
  (navigation$46zap.Navigation.new = function() {
    let t1, t1$, t1$0, t1$1, t1$2, t1$3;
    this[__Navigation__$v0] = null;
    this[_$n0$] = (t1 = html.Element.tag("header"), (() => {
      dom['ZapElement|addComponentClass'](t1, "zap-cmmjutqxo9y9o");
      return t1;
    })());
    this[_$n1$] = (t1$ = html.Element.tag("nav"), (() => {
      dom['ZapElement|addComponentClass'](t1$, "zap-cmmjutqxo9y9o");
      return t1$;
    })());
    this[_$n2$] = (t1$0 = html.AnchorElement.new(), (() => {
      dom['ZapElement|addComponentClass'](t1$0, "zap-cmmjutqxo9y9o");
      return t1$0;
    })());
    this[_$n3$] = html.Text.new("Home");
    this[_$n4$] = html.Text.new("\n        ");
    this[_$n5$] = (t1$1 = html.AnchorElement.new(), (() => {
      dom['ZapElement|addComponentClass'](t1$1, "zap-cmmjutqxo9y9o");
      return t1$1;
    })());
    this[_$n6] = html.Text.new("Blog");
    this[_$n7] = html.Text.new("\n        ");
    this[_$n8] = (t1$2 = html.AnchorElement.new(), (() => {
      dom['ZapElement|addComponentClass'](t1$2, "zap-cmmjutqxo9y9o");
      return t1$2;
    })());
    this[_$n9] = html.Text.new("About");
    this[_$n10] = html.Text.new("\n        ");
    this[_$n11] = (t1$3 = html.AnchorElement.new(), (() => {
      dom['ZapElement|addComponentClass'](t1$3, "zap-cmmjutqxo9y9o");
      return t1$3;
    })());
    this[_$n12] = html.Text.new("Projects");
    navigation$46zap.Navigation.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this[_$v0] = riverpod['RiverpodZap|read'](navigation.Route, self, navigation.navigationProvider.notifier);
    this.takeOverPending(self);
  }).prototype = navigation$46zap.Navigation.prototype;
  dart.addTypeTests(navigation$46zap.Navigation);
  dart.addTypeCaches(navigation$46zap.Navigation);
  dart.setMethodSignature(navigation$46zap.Navigation, () => ({
    __proto__: dart.getMethods(navigation$46zap.Navigation.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(navigation$46zap.Navigation, () => ({
    __proto__: dart.getGetters(navigation$46zap.Navigation.__proto__),
    [_$v0]: navigation.Route
  }));
  dart.setSetterSignature(navigation$46zap.Navigation, () => ({
    __proto__: dart.getSetters(navigation$46zap.Navigation.__proto__),
    [_$v0]: navigation.Route
  }));
  dart.setLibraryUri(navigation$46zap.Navigation, I[1]);
  dart.setFieldSignature(navigation$46zap.Navigation, () => ({
    __proto__: dart.getFields(navigation$46zap.Navigation.__proto__),
    [__Navigation__$v0]: dart.fieldType(dart.nullable(navigation.Route)),
    [_$n0$]: dart.finalFieldType(html.Element),
    [_$n1$]: dart.finalFieldType(html.Element),
    [_$n2$]: dart.finalFieldType(html.AnchorElement),
    [_$n3$]: dart.finalFieldType(html.Text),
    [_$n4$]: dart.finalFieldType(html.Text),
    [_$n5$]: dart.finalFieldType(html.AnchorElement),
    [_$n6]: dart.finalFieldType(html.Text),
    [_$n7]: dart.finalFieldType(html.Text),
    [_$n8]: dart.finalFieldType(html.AnchorElement),
    [_$n9]: dart.finalFieldType(html.Text),
    [_$n10]: dart.finalFieldType(html.Text),
    [_$n11]: dart.finalFieldType(html.AnchorElement),
    [_$n12]: dart.finalFieldType(html.Text)
  }));
  var _$n0$0 = dart.privateName(homepage$46zap, "_$n0");
  var _$n1$0 = dart.privateName(homepage$46zap, "_$n1");
  homepage$46zap.Homepage = class Homepage extends component.ZapComponent {
    static ['_#new#tearOff']() {
      return new homepage$46zap.Homepage.new();
    }
    createInternal(target, anchor = null) {
      target[$insertBefore](this[_$n0$0], anchor);
      this[_$n0$0][$append](this[_$n1$0]);
    }
    remove() {
      this[_$n0$0][$remove]();
    }
    update(delta) {
    }
  };
  (homepage$46zap.Homepage.new = function() {
    this[_$n0$0] = html.ParagraphElement.new();
    this[_$n1$0] = html.Text.new("Hi Man");
    homepage$46zap.Homepage.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this.takeOverPending(self);
  }).prototype = homepage$46zap.Homepage.prototype;
  dart.addTypeTests(homepage$46zap.Homepage);
  dart.addTypeCaches(homepage$46zap.Homepage);
  dart.setMethodSignature(homepage$46zap.Homepage, () => ({
    __proto__: dart.getMethods(homepage$46zap.Homepage.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(homepage$46zap.Homepage, I[2]);
  dart.setFieldSignature(homepage$46zap.Homepage, () => ({
    __proto__: dart.getFields(homepage$46zap.Homepage.__proto__),
    [_$n0$0]: dart.finalFieldType(html.ParagraphElement),
    [_$n1$0]: dart.finalFieldType(html.Text)
  }));
  var __Body__$v0 = dart.privateName(body$46zap, "_#Body#_$v0");
  var __Body__$n0 = dart.privateName(body$46zap, "_#Body#_$n0");
  var _$n1$1 = dart.privateName(body$46zap, "_$n1");
  var __Body__$n2 = dart.privateName(body$46zap, "_#Body#_$n2");
  var _$n3$0 = dart.privateName(body$46zap, "_$n3");
  var __Body__$n4 = dart.privateName(body$46zap, "_#Body#_$n4");
  var _$v0$ = dart.privateName(body$46zap, "_$v0");
  var _$n0$1 = dart.privateName(body$46zap, "_$n0");
  var __$t0 = dart.privateName(body$46zap, "__$t0");
  var _$n2$0 = dart.privateName(body$46zap, "_$n2");
  var __$t1 = dart.privateName(body$46zap, "__$t1");
  var _$n4$0 = dart.privateName(body$46zap, "_$n4");
  var __$t2 = dart.privateName(body$46zap, "__$t2");
  body$46zap.Body = class Body extends component.ZapComponent {
    get [_$v0$]() {
      let t2;
      t2 = this[__Body__$v0];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_$v0")) : t2;
    }
    set [_$v0$](t2) {
      this[__Body__$v0] = t2;
    }
    get [_$n0$1]() {
      let t3;
      t3 = this[__Body__$n0];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_$n0")) : t3;
    }
    set [_$n0$1](t3) {
      if (this[__Body__$n0] == null)
        this[__Body__$n0] = t3;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n0"));
    }
    [__$t0]() {
      if (this[_$v0$] === "/") {
        return 0;
      } else {
        return 1;
      }
    }
    get [_$n2$0]() {
      let t4;
      t4 = this[__Body__$n2];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_$n2")) : t4;
    }
    set [_$n2$0](t4) {
      if (this[__Body__$n2] == null)
        this[__Body__$n2] = t4;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n2"));
    }
    [__$t1]() {
      if (this[_$v0$] === "/about") {
        return 0;
      } else {
        return 1;
      }
    }
    get [_$n4$0]() {
      let t5;
      t5 = this[__Body__$n4];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_$n4")) : t5;
    }
    set [_$n4$0](t5) {
      if (this[__Body__$n4] == null)
        this[__Body__$n4] = t5;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n4"));
    }
    [__$t2]() {
      if (this[_$v0$] === "/blog") {
        return 0;
      } else {
        return 1;
      }
    }
    static ['_#new#tearOff']() {
      return new body$46zap.Body.new();
    }
    createInternal(target, anchor = null) {
      this[_$n0$1] = new $if.IfBlock.new(dart.fn(caseNum => {
        switch (caseNum) {
          case 0:
          {
            return new body$46zap.__$t4.new(this);
          }
          default:
          {
            return null;
          }
        }
      }, T.intTo__$t4N()));
      this[_$n2$0] = new $if.IfBlock.new(dart.fn(caseNum => {
        switch (caseNum) {
          case 0:
          {
            return new body$46zap.__$t5.new(this);
          }
          default:
          {
            return null;
          }
        }
      }, T.intTo__$t5N()));
      this[_$n4$0] = new $if.IfBlock.new(dart.fn(caseNum => {
        switch (caseNum) {
          case 0:
          {
            return new body$46zap.__$t6.new(this);
          }
          default:
          {
            return null;
          }
        }
      }, T.intTo__$t6N()));
      this[_$n0$1].create(target, anchor);
      target[$insertBefore](this[_$n1$1], anchor);
      this[_$n2$0].create(target, anchor);
      target[$insertBefore](this[_$n3$0], anchor);
      this[_$n4$0].create(target, anchor);
    }
    remove() {
      this[_$n0$1].destroy();
      this[_$n1$1][$remove]();
      this[_$n2$0].destroy();
      this[_$n3$0][$remove]();
      this[_$n4$0].destroy();
    }
    update(delta) {
      if ((delta & 1) !== 0) {
        this[_$n0$1].reEvaluate(this[__$t0]());
      }
      if ((delta & 1) !== 0) {
        this[_$n2$0].reEvaluate(this[__$t1]());
      }
      if ((delta & 1) !== 0) {
        this[_$n4$0].reEvaluate(this[__$t2]());
      }
      this[_$n0$1].update(delta);
      this[_$n2$0].update(delta);
      this[_$n4$0].update(delta);
    }
  };
  (body$46zap.Body.new = function() {
    this[__Body__$v0] = null;
    this[__Body__$n0] = null;
    this[_$n1$1] = html.Text.new("\n");
    this[__Body__$n2] = null;
    this[_$n3$0] = html.Text.new("\n");
    this[__Body__$n4] = null;
    body$46zap.Body.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    let __$36t3 = riverpod['RiverpodZap|use'](core.String, self, navigation.navigationProvider);
    this[_$v0$] = __$36t3.value;
    __$36t3.transform(core.String, this.lifecycle(core.String)).listen(dart.fn(value => {
      this.$invalidate(1);
      this[_$v0$] = value;
    }, T.StringTovoid()));
    core.print(this[_$v0$]);
    this.takeOverPending(self);
  }).prototype = body$46zap.Body.prototype;
  dart.addTypeTests(body$46zap.Body);
  dart.addTypeCaches(body$46zap.Body);
  dart.setMethodSignature(body$46zap.Body, () => ({
    __proto__: dart.getMethods(body$46zap.Body.__proto__),
    [__$t0]: dart.fnType(core.int, []),
    [__$t1]: dart.fnType(core.int, []),
    [__$t2]: dart.fnType(core.int, []),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(body$46zap.Body, () => ({
    __proto__: dart.getGetters(body$46zap.Body.__proto__),
    [_$v0$]: core.String,
    [_$n0$1]: $if.IfBlock,
    [_$n2$0]: $if.IfBlock,
    [_$n4$0]: $if.IfBlock
  }));
  dart.setSetterSignature(body$46zap.Body, () => ({
    __proto__: dart.getSetters(body$46zap.Body.__proto__),
    [_$v0$]: core.String,
    [_$n0$1]: $if.IfBlock,
    [_$n2$0]: $if.IfBlock,
    [_$n4$0]: $if.IfBlock
  }));
  dart.setLibraryUri(body$46zap.Body, I[3]);
  dart.setFieldSignature(body$46zap.Body, () => ({
    __proto__: dart.getFields(body$46zap.Body.__proto__),
    [__Body__$v0]: dart.fieldType(dart.nullable(core.String)),
    [__Body__$n0]: dart.fieldType(dart.nullable($if.IfBlock)),
    [_$n1$1]: dart.finalFieldType(html.Text),
    [__Body__$n2]: dart.fieldType(dart.nullable($if.IfBlock)),
    [_$n3$0]: dart.finalFieldType(html.Text),
    [__Body__$n4]: dart.fieldType(dart.nullable($if.IfBlock))
  }));
  var ____$t4__$n5 = dart.privateName(body$46zap, "_#__$t4#_$n5");
  var _$parent = dart.privateName(body$46zap, "_$parent");
  var _$n5$0 = dart.privateName(body$46zap, "_$n5");
  body$46zap.__$t4 = class __$36t4 extends fragment.Fragment {
    static ['_#new#tearOff'](_$36parent) {
      return new body$46zap.__$t4.new(_$36parent);
    }
    get [_$n5$0]() {
      let t6;
      t6 = this[____$t4__$n5];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_$n5")) : t6;
    }
    set [_$n5$0](t6) {
      if (this[____$t4__$n5] == null)
        this[____$t4__$n5] = t6;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n5"));
    }
    create(target, anchor = null) {
      this[_$n5$0] = this[_$parent].$createChildComponent(homepage$46zap.Homepage, dart.fn(() => new homepage$46zap.Homepage.new(), T.VoidToHomepage()));
      this[_$n5$0].create(target, anchor);
    }
    update(delta) {
    }
    destroy() {
      this[_$n5$0].destroy();
    }
  };
  (body$46zap.__$t4.new = function(_$36parent) {
    this[____$t4__$n5] = null;
    this[_$parent] = _$36parent;
    ;
  }).prototype = body$46zap.__$t4.prototype;
  dart.addTypeTests(body$46zap.__$t4);
  dart.addTypeCaches(body$46zap.__$t4);
  dart.setMethodSignature(body$46zap.__$t4, () => ({
    __proto__: dart.getMethods(body$46zap.__$t4.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(body$46zap.__$t4, () => ({
    __proto__: dart.getGetters(body$46zap.__$t4.__proto__),
    [_$n5$0]: homepage$46zap.Homepage
  }));
  dart.setSetterSignature(body$46zap.__$t4, () => ({
    __proto__: dart.getSetters(body$46zap.__$t4.__proto__),
    [_$n5$0]: homepage$46zap.Homepage
  }));
  dart.setLibraryUri(body$46zap.__$t4, I[3]);
  dart.setFieldSignature(body$46zap.__$t4, () => ({
    __proto__: dart.getFields(body$46zap.__$t4.__proto__),
    [_$parent]: dart.finalFieldType(body$46zap.Body),
    [____$t4__$n5]: dart.fieldType(dart.nullable(homepage$46zap.Homepage))
  }));
  var ____$t5__$n6 = dart.privateName(body$46zap, "_#__$t5#_$n6");
  var _$n6$ = dart.privateName(body$46zap, "_$n6");
  body$46zap.__$t5 = class __$36t5 extends fragment.Fragment {
    static ['_#new#tearOff'](_$36parent) {
      return new body$46zap.__$t5.new(_$36parent);
    }
    get [_$n6$]() {
      let t7;
      t7 = this[____$t5__$n6];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_$n6")) : t7;
    }
    set [_$n6$](t7) {
      if (this[____$t5__$n6] == null)
        this[____$t5__$n6] = t7;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n6"));
    }
    create(target, anchor = null) {
      this[_$n6$] = this[_$parent].$createChildComponent(aboutpage$46zap.Aboutpage, dart.fn(() => new aboutpage$46zap.Aboutpage.new(), T.VoidToAboutpage()));
      this[_$n6$].create(target, anchor);
    }
    update(delta) {
    }
    destroy() {
      this[_$n6$].destroy();
    }
  };
  (body$46zap.__$t5.new = function(_$36parent) {
    this[____$t5__$n6] = null;
    this[_$parent] = _$36parent;
    ;
  }).prototype = body$46zap.__$t5.prototype;
  dart.addTypeTests(body$46zap.__$t5);
  dart.addTypeCaches(body$46zap.__$t5);
  dart.setMethodSignature(body$46zap.__$t5, () => ({
    __proto__: dart.getMethods(body$46zap.__$t5.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(body$46zap.__$t5, () => ({
    __proto__: dart.getGetters(body$46zap.__$t5.__proto__),
    [_$n6$]: aboutpage$46zap.Aboutpage
  }));
  dart.setSetterSignature(body$46zap.__$t5, () => ({
    __proto__: dart.getSetters(body$46zap.__$t5.__proto__),
    [_$n6$]: aboutpage$46zap.Aboutpage
  }));
  dart.setLibraryUri(body$46zap.__$t5, I[3]);
  dart.setFieldSignature(body$46zap.__$t5, () => ({
    __proto__: dart.getFields(body$46zap.__$t5.__proto__),
    [_$parent]: dart.finalFieldType(body$46zap.Body),
    [____$t5__$n6]: dart.fieldType(dart.nullable(aboutpage$46zap.Aboutpage))
  }));
  var ____$t6__$n7 = dart.privateName(body$46zap, "_#__$t6#_$n7");
  var _$n7$ = dart.privateName(body$46zap, "_$n7");
  body$46zap.__$t6 = class __$36t6 extends fragment.Fragment {
    static ['_#new#tearOff'](_$36parent) {
      return new body$46zap.__$t6.new(_$36parent);
    }
    get [_$n7$]() {
      let t8;
      t8 = this[____$t6__$n7];
      return t8 == null ? dart.throw(new _internal.LateError.fieldNI("_$n7")) : t8;
    }
    set [_$n7$](t8) {
      if (this[____$t6__$n7] == null)
        this[____$t6__$n7] = t8;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n7"));
    }
    create(target, anchor = null) {
      this[_$n7$] = this[_$parent].$createChildComponent(blogpage$46zap.Blogpage, dart.fn(() => new blogpage$46zap.Blogpage.new(), T.VoidToBlogpage()));
      this[_$n7$].create(target, anchor);
    }
    update(delta) {
    }
    destroy() {
      this[_$n7$].destroy();
    }
  };
  (body$46zap.__$t6.new = function(_$36parent) {
    this[____$t6__$n7] = null;
    this[_$parent] = _$36parent;
    ;
  }).prototype = body$46zap.__$t6.prototype;
  dart.addTypeTests(body$46zap.__$t6);
  dart.addTypeCaches(body$46zap.__$t6);
  dart.setMethodSignature(body$46zap.__$t6, () => ({
    __proto__: dart.getMethods(body$46zap.__$t6.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(body$46zap.__$t6, () => ({
    __proto__: dart.getGetters(body$46zap.__$t6.__proto__),
    [_$n7$]: blogpage$46zap.Blogpage
  }));
  dart.setSetterSignature(body$46zap.__$t6, () => ({
    __proto__: dart.getSetters(body$46zap.__$t6.__proto__),
    [_$n7$]: blogpage$46zap.Blogpage
  }));
  dart.setLibraryUri(body$46zap.__$t6, I[3]);
  dart.setFieldSignature(body$46zap.__$t6, () => ({
    __proto__: dart.getFields(body$46zap.__$t6.__proto__),
    [_$parent]: dart.finalFieldType(body$46zap.Body),
    [____$t6__$n7]: dart.fieldType(dart.nullable(blogpage$46zap.Blogpage))
  }));
  var _$n0$2 = dart.privateName(blogpage$46zap, "_$n0");
  var _$n1$2 = dart.privateName(blogpage$46zap, "_$n1");
  blogpage$46zap.Blogpage = class Blogpage extends component.ZapComponent {
    static ['_#new#tearOff']() {
      return new blogpage$46zap.Blogpage.new();
    }
    createInternal(target, anchor = null) {
      target[$insertBefore](this[_$n0$2], anchor);
      this[_$n0$2][$append](this[_$n1$2]);
    }
    remove() {
      this[_$n0$2][$remove]();
    }
    update(delta) {
    }
  };
  (blogpage$46zap.Blogpage.new = function() {
    this[_$n0$2] = html.ParagraphElement.new();
    this[_$n1$2] = html.Text.new("Blog");
    blogpage$46zap.Blogpage.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this.takeOverPending(self);
  }).prototype = blogpage$46zap.Blogpage.prototype;
  dart.addTypeTests(blogpage$46zap.Blogpage);
  dart.addTypeCaches(blogpage$46zap.Blogpage);
  dart.setMethodSignature(blogpage$46zap.Blogpage, () => ({
    __proto__: dart.getMethods(blogpage$46zap.Blogpage.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(blogpage$46zap.Blogpage, I[4]);
  dart.setFieldSignature(blogpage$46zap.Blogpage, () => ({
    __proto__: dart.getFields(blogpage$46zap.Blogpage.__proto__),
    [_$n0$2]: dart.finalFieldType(html.ParagraphElement),
    [_$n1$2]: dart.finalFieldType(html.Text)
  }));
  var _$n0$3 = dart.privateName(aboutpage$46zap, "_$n0");
  var _$n1$3 = dart.privateName(aboutpage$46zap, "_$n1");
  var _$n2$1 = dart.privateName(aboutpage$46zap, "_$n2");
  aboutpage$46zap.Aboutpage = class Aboutpage extends component.ZapComponent {
    static ['_#new#tearOff']() {
      return new aboutpage$46zap.Aboutpage.new();
    }
    createInternal(target, anchor = null) {
      target[$insertBefore](this[_$n0$3], anchor);
      target[$insertBefore](this[_$n1$3], anchor);
      this[_$n1$3][$append](this[_$n2$1]);
    }
    remove() {
      this[_$n0$3][$remove]();
      this[_$n1$3][$remove]();
    }
    update(delta) {
    }
  };
  (aboutpage$46zap.Aboutpage.new = function() {
    this[_$n0$3] = html.Text.new("|\n");
    this[_$n1$3] = html.ParagraphElement.new();
    this[_$n2$1] = html.Text.new("About");
    aboutpage$46zap.Aboutpage.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this.takeOverPending(self);
  }).prototype = aboutpage$46zap.Aboutpage.prototype;
  dart.addTypeTests(aboutpage$46zap.Aboutpage);
  dart.addTypeCaches(aboutpage$46zap.Aboutpage);
  dart.setMethodSignature(aboutpage$46zap.Aboutpage, () => ({
    __proto__: dart.getMethods(aboutpage$46zap.Aboutpage.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(aboutpage$46zap.Aboutpage, I[5]);
  dart.setFieldSignature(aboutpage$46zap.Aboutpage, () => ({
    __proto__: dart.getFields(aboutpage$46zap.Aboutpage.__proto__),
    [_$n0$3]: dart.finalFieldType(html.Text),
    [_$n1$3]: dart.finalFieldType(html.ParagraphElement),
    [_$n2$1]: dart.finalFieldType(html.Text)
  }));
  var __App__$n0 = dart.privateName(app$46zap, "_#App#_$n0");
  var _$n1$4 = dart.privateName(app$46zap, "_$n1");
  var _$n2$2 = dart.privateName(app$46zap, "_$n2");
  var _$n0$4 = dart.privateName(app$46zap, "_$n0");
  app$46zap.App = class App extends component.ZapComponent {
    get [_$n0$4]() {
      let t9;
      t9 = this[__App__$n0];
      return t9 == null ? dart.throw(new _internal.LateError.fieldNI("_$n0")) : t9;
    }
    set [_$n0$4](t9) {
      if (this[__App__$n0] == null)
        this[__App__$n0] = t9;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n0"));
    }
    static ['_#new#tearOff']() {
      return new app$46zap.App.new();
    }
    createInternal(target, anchor = null) {
      this[_$n0$4] = this.$createChildComponent(riverpod_scope$46zap.RiverpodScope, dart.fn(() => new riverpod_scope$46zap.RiverpodScope.new(null, dart.fn(() => new app$46zap.__$t0.new(this), T.VoidTo__$t0())), T.VoidToRiverpodScope()));
      this[_$n0$4].create(target, anchor);
      target[$insertBefore](this[_$n1$4], anchor);
      target[$insertBefore](this[_$n2$2], anchor);
    }
    remove() {
      this[_$n0$4].destroy();
      this[_$n1$4][$remove]();
      this[_$n2$2][$remove]();
    }
    update(delta) {
    }
  };
  (app$46zap.App.new = function() {
    this[__App__$n0] = null;
    this[_$n1$4] = html.Text.new("\n");
    this[_$n2$2] = html.Element.tag("footer");
    app$46zap.App.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this.takeOverPending(self);
  }).prototype = app$46zap.App.prototype;
  dart.addTypeTests(app$46zap.App);
  dart.addTypeCaches(app$46zap.App);
  dart.setMethodSignature(app$46zap.App, () => ({
    __proto__: dart.getMethods(app$46zap.App.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(app$46zap.App, () => ({
    __proto__: dart.getGetters(app$46zap.App.__proto__),
    [_$n0$4]: riverpod_scope$46zap.RiverpodScope
  }));
  dart.setSetterSignature(app$46zap.App, () => ({
    __proto__: dart.getSetters(app$46zap.App.__proto__),
    [_$n0$4]: riverpod_scope$46zap.RiverpodScope
  }));
  dart.setLibraryUri(app$46zap.App, I[6]);
  dart.setFieldSignature(app$46zap.App, () => ({
    __proto__: dart.getFields(app$46zap.App.__proto__),
    [__App__$n0]: dart.fieldType(dart.nullable(riverpod_scope$46zap.RiverpodScope)),
    [_$n1$4]: dart.finalFieldType(html.Text),
    [_$n2$2]: dart.finalFieldType(html.Element)
  }));
  var ____$t0__$n3 = dart.privateName(app$46zap, "_#__$t0#_$n3");
  var _$n4$1 = dart.privateName(app$46zap, "_$n4");
  var ____$t0__$n5 = dart.privateName(app$46zap, "_#__$t0#_$n5");
  var _$parent$ = dart.privateName(app$46zap, "_$parent");
  var _$n3$1 = dart.privateName(app$46zap, "_$n3");
  var _$n5$1 = dart.privateName(app$46zap, "_$n5");
  app$46zap.__$t0 = class __$36t0 extends fragment.Fragment {
    static ['_#new#tearOff'](_$36parent) {
      return new app$46zap.__$t0.new(_$36parent);
    }
    get [_$n3$1]() {
      let t10;
      t10 = this[____$t0__$n3];
      return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_$n3")) : t10;
    }
    set [_$n3$1](t10) {
      if (this[____$t0__$n3] == null)
        this[____$t0__$n3] = t10;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n3"));
    }
    get [_$n5$1]() {
      let t11;
      t11 = this[____$t0__$n5];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_$n5")) : t11;
    }
    set [_$n5$1](t11) {
      if (this[____$t0__$n5] == null)
        this[____$t0__$n5] = t11;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n5"));
    }
    create(target, anchor = null) {
      this[_$n3$1] = new header$46zap.Header.new();
      this[_$n5$1] = new body$46zap.Body.new();
      this[_$n3$1].create(target, anchor);
      target[$insertBefore](this[_$n4$1], anchor);
      this[_$n5$1].create(target, anchor);
    }
    update(delta) {
    }
    destroy() {
      this[_$n3$1].destroy();
      this[_$n4$1][$remove]();
      this[_$n5$1].destroy();
    }
  };
  (app$46zap.__$t0.new = function(_$36parent) {
    this[____$t0__$n3] = null;
    this[_$n4$1] = html.Text.new("\n\n  ");
    this[____$t0__$n5] = null;
    this[_$parent$] = _$36parent;
    ;
  }).prototype = app$46zap.__$t0.prototype;
  dart.addTypeTests(app$46zap.__$t0);
  dart.addTypeCaches(app$46zap.__$t0);
  dart.setMethodSignature(app$46zap.__$t0, () => ({
    __proto__: dart.getMethods(app$46zap.__$t0.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app$46zap.__$t0, () => ({
    __proto__: dart.getGetters(app$46zap.__$t0.__proto__),
    [_$n3$1]: header$46zap.Header,
    [_$n5$1]: body$46zap.Body
  }));
  dart.setSetterSignature(app$46zap.__$t0, () => ({
    __proto__: dart.getSetters(app$46zap.__$t0.__proto__),
    [_$n3$1]: header$46zap.Header,
    [_$n5$1]: body$46zap.Body
  }));
  dart.setLibraryUri(app$46zap.__$t0, I[6]);
  dart.setFieldSignature(app$46zap.__$t0, () => ({
    __proto__: dart.getFields(app$46zap.__$t0.__proto__),
    [_$parent$]: dart.finalFieldType(app$46zap.App),
    [____$t0__$n3]: dart.fieldType(dart.nullable(header$46zap.Header)),
    [_$n4$1]: dart.finalFieldType(html.Text),
    [____$t0__$n5]: dart.fieldType(dart.nullable(body$46zap.Body))
  }));
  dart.trackLibraries("packages/portfolio/app.zap", {
    "package:portfolio/src/presentation/header/header.zap.dart": header$46zap,
    "package:portfolio/src/presentation/header/navigation.zap.dart": navigation$46zap,
    "package:portfolio/src/presentation/pages/homepage.zap.dart": homepage$46zap,
    "package:portfolio/src/presentation/body/body.zap.dart": body$46zap,
    "package:portfolio/src/presentation/pages/blogpage.zap.dart": blogpage$46zap,
    "package:portfolio/src/presentation/pages/aboutpage.zap.dart": aboutpage$46zap,
    "package:portfolio/app.zap.dart": app$46zap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/presentation/header/header.zap.dart","src/presentation/header/navigation.zap.dart","src/presentation/pages/homepage.zap.dart","src/presentation/body/body.zap.dart","src/presentation/pages/blogpage.zap.dart","src/presentation/pages/aboutpage.zap.dart","app.zap.dart"],"names":[],"mappings":"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","file":"app.zap.sound.ddc.js"}');
  // Exports:
  return {
    src__presentation__header__header$46zap: header$46zap,
    src__presentation__header__navigation$46zap: navigation$46zap,
    src__presentation__pages__homepage$46zap: homepage$46zap,
    src__presentation__body__body$46zap: body$46zap,
    src__presentation__pages__blogpage$46zap: blogpage$46zap,
    src__presentation__pages__aboutpage$46zap: aboutpage$46zap,
    app$46zap: app$46zap
  };
}));

//# sourceMappingURL=app.zap.sound.ddc.js.map
