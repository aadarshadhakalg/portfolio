define(['dart_sdk', 'packages/zap/src/blocks/async', 'packages/riverpod/riverpod', 'packages/riverpod_zap/riverpod', 'packages/zap/src/core/fragment'], (function load__packages__riverpod_zap__src__riverpod_scope_zap(dart_sdk, packages__zap__src__blocks__async, packages__riverpod__riverpod, packages__riverpod_zap__riverpod, packages__zap__src__core__fragment) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component = packages__zap__src__blocks__async.src__core__component;
  const slot = packages__zap__src__blocks__async.src__blocks__slot;
  const framework = packages__riverpod__riverpod.src__framework;
  const context = packages__riverpod_zap__riverpod.src__context;
  const fragment = packages__zap__src__core__fragment.src__core__fragment;
  var riverpod_scope$46zap = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FnTovoid: () => (T.FnTovoid = dart.constFn(dart.fnType(dart.void, [T.VoidTovoid()])))(),
    VoidTo__$t0: () => (T.VoidTo__$t0 = dart.constFn(dart.fnType(riverpod_scope$46zap.__$t0, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], framework.Override);
    }
  }, false);
  var C = [void 0];
  var I = [
    "org-dartlang-app:///packages/riverpod_zap/src/riverpod-scope.zap.dart",
    "package:riverpod_zap/src/riverpod-scope.zap.dart"
  ];
  var $36slot_$ = dart.privateName(riverpod_scope$46zap, "RiverpodScope.$slot_");
  var __RiverpodScope__$v0 = dart.privateName(riverpod_scope$46zap, "_#RiverpodScope#_$v0");
  var __RiverpodScope__$v1 = dart.privateName(riverpod_scope$46zap, "_#RiverpodScope#_$v1");
  var __RiverpodScope__$v1_isSet = dart.privateName(riverpod_scope$46zap, "_#RiverpodScope#_$v1#isSet");
  var __RiverpodScope__$v2 = dart.privateName(riverpod_scope$46zap, "_#RiverpodScope#_$v2");
  var __RiverpodScope__$n0 = dart.privateName(riverpod_scope$46zap, "_#RiverpodScope#_$n0");
  var _$v0 = dart.privateName(riverpod_scope$46zap, "_$v0");
  var _$v1 = dart.privateName(riverpod_scope$46zap, "_$v1");
  var _$v2 = dart.privateName(riverpod_scope$46zap, "_$v2");
  var _$n0 = dart.privateName(riverpod_scope$46zap, "_$n0");
  riverpod_scope$46zap.RiverpodScope = class RiverpodScope extends component.ZapComponent {
    get $slot_() {
      return this[$36slot_$];
    }
    set $slot_(value) {
      super.$slot_ = value;
    }
    get [_$v0]() {
      let t0;
      t0 = this[__RiverpodScope__$v0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_$v0")) : t0;
    }
    set [_$v0](t0) {
      this[__RiverpodScope__$v0] = t0;
    }
    get [_$v1]() {
      return this[__RiverpodScope__$v1_isSet] ? this[__RiverpodScope__$v1] : dart.throw(new _internal.LateError.fieldNI("_$v1"));
    }
    set [_$v1](t1) {
      this[__RiverpodScope__$v1_isSet] = true;
      this[__RiverpodScope__$v1] = t1;
    }
    get [_$v2]() {
      let t2;
      t2 = this[__RiverpodScope__$v2];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_$v2")) : t2;
    }
    set [_$v2](t2) {
      if (this[__RiverpodScope__$v2] == null)
        this[__RiverpodScope__$v2] = t2;
      else
        dart.throw(new _internal.LateError.fieldAI("_$v2"));
    }
    get [_$n0]() {
      let t3;
      t3 = this[__RiverpodScope__$n0];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_$n0")) : t3;
    }
    set [_$n0](t3) {
      if (this[__RiverpodScope__$n0] == null)
        this[__RiverpodScope__$n0] = t3;
      else
        dart.throw(new _internal.LateError.fieldAI("_$n0"));
    }
    static ['_#new#tearOff']($36overrides, $36slot_) {
      return new riverpod_scope$46zap.RiverpodScope.new($36overrides, $36slot_);
    }
    createInternal(target, anchor = null) {
      let t4;
      this[_$n0] = new slot.Slot.new((t4 = this.$slot_, t4 == null ? dart.fn(() => new riverpod_scope$46zap.__$t0.new(this), T.VoidTo__$t0()) : t4), this);
      this[_$n0].create(target, anchor);
    }
    remove() {
      this[_$n0].destroy();
    }
    update(delta) {
      if ((delta & 1) !== 0) {
        this[_$v2].updateOverrides(this[_$v0]);
      }
      if ((delta & 2) !== 0) {
        if (this[_$v1] != null) {
          dart.nullCheck(this[_$v1])();
          this.$invalidateAssign(core.Null, 2, this[_$v1] = null);
        }
      }
      this[_$n0].update(delta);
    }
    get overrides() {
      return this[_$v0];
    }
    set overrides(value) {
      if (!value[$_equals](this[_$v0])) {
        this[_$v0] = value;
        this.$invalidate(1);
      }
    }
  };
  (riverpod_scope$46zap.RiverpodScope.new = function($36overrides, $36slot_) {
    this[__RiverpodScope__$v0] = null;
    this[__RiverpodScope__$v1] = null;
    this[__RiverpodScope__$v1_isSet] = false;
    this[__RiverpodScope__$v2] = null;
    this[__RiverpodScope__$n0] = null;
    this[$36slot_$] = $36slot_;
    riverpod_scope$46zap.RiverpodScope.__proto__.new.call(this);
    let self = new component.PendingComponent.new();
    this[_$v0] = $36overrides != null ? $36overrides.value : C[0] || CT.C0;
    this[_$v1] = null;
    this[_$v2] = new framework.ProviderContainer.new({parent: context['RiverpodScope|get#container'](self), overrides: this[_$v0]});
    this[_$v2].vsyncOverride = dart.fn(newTask => {
      if (!(this[_$v1] == null)) dart.assertFailed("Two tasks scheduled at the same time, illegal state.", I[0], 24, 14, "_$v1 /* task */ == null");
      this.$invalidateAssign(T.VoidTovoid(), 2, this[_$v1] = newTask);
    }, T.FnTovoid());
    context['RiverpodScope|set#container'](self, this[_$v2]);
    this[_$v2].updateOverrides(this[_$v0]);
    if (this[_$v1] != null) {
      dart.nullCheck(this[_$v1])();
      this.$invalidateAssign(core.Null, 2, this[_$v1] = null);
    }
    self.onDestroy(dart.bind(this[_$v2], 'dispose'));
    this.takeOverPending(self);
  }).prototype = riverpod_scope$46zap.RiverpodScope.prototype;
  dart.addTypeTests(riverpod_scope$46zap.RiverpodScope);
  dart.addTypeCaches(riverpod_scope$46zap.RiverpodScope);
  dart.setMethodSignature(riverpod_scope$46zap.RiverpodScope, () => ({
    __proto__: dart.getMethods(riverpod_scope$46zap.RiverpodScope.__proto__),
    createInternal: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    remove: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(riverpod_scope$46zap.RiverpodScope, () => ({
    __proto__: dart.getGetters(riverpod_scope$46zap.RiverpodScope.__proto__),
    [_$v0]: core.List$(framework.Override),
    [_$v1]: dart.nullable(dart.fnType(dart.void, [])),
    [_$v2]: framework.ProviderContainer,
    [_$n0]: slot.Slot,
    overrides: core.List$(framework.Override)
  }));
  dart.setSetterSignature(riverpod_scope$46zap.RiverpodScope, () => ({
    __proto__: dart.getSetters(riverpod_scope$46zap.RiverpodScope.__proto__),
    [_$v0]: core.List$(framework.Override),
    [_$v1]: dart.nullable(dart.fnType(dart.void, [])),
    [_$v2]: framework.ProviderContainer,
    [_$n0]: slot.Slot,
    overrides: core.List$(framework.Override)
  }));
  dart.setLibraryUri(riverpod_scope$46zap.RiverpodScope, I[1]);
  dart.setFieldSignature(riverpod_scope$46zap.RiverpodScope, () => ({
    __proto__: dart.getFields(riverpod_scope$46zap.RiverpodScope.__proto__),
    [__RiverpodScope__$v0]: dart.fieldType(dart.nullable(core.List$(framework.Override))),
    [__RiverpodScope__$v1]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [__RiverpodScope__$v1_isSet]: dart.fieldType(core.bool),
    [__RiverpodScope__$v2]: dart.fieldType(dart.nullable(framework.ProviderContainer)),
    $slot_: dart.finalFieldType(dart.nullable(dart.fnType(fragment.Fragment, []))),
    [__RiverpodScope__$n0]: dart.fieldType(dart.nullable(slot.Slot))
  }));
  var _$parent = dart.privateName(riverpod_scope$46zap, "_$parent");
  riverpod_scope$46zap.__$t0 = class __$36t0 extends fragment.Fragment {
    static ['_#new#tearOff'](_$36parent) {
      return new riverpod_scope$46zap.__$t0.new(_$36parent);
    }
    create(target, anchor = null) {
    }
    update(delta) {
    }
    destroy() {
    }
  };
  (riverpod_scope$46zap.__$t0.new = function(_$36parent) {
    this[_$parent] = _$36parent;
    ;
  }).prototype = riverpod_scope$46zap.__$t0.prototype;
  dart.addTypeTests(riverpod_scope$46zap.__$t0);
  dart.addTypeCaches(riverpod_scope$46zap.__$t0);
  dart.setMethodSignature(riverpod_scope$46zap.__$t0, () => ({
    __proto__: dart.getMethods(riverpod_scope$46zap.__$t0.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(riverpod_scope$46zap.__$t0, I[1]);
  dart.setFieldSignature(riverpod_scope$46zap.__$t0, () => ({
    __proto__: dart.getFields(riverpod_scope$46zap.__$t0.__proto__),
    [_$parent]: dart.finalFieldType(riverpod_scope$46zap.RiverpodScope)
  }));
  dart.trackLibraries("packages/riverpod_zap/src/riverpod-scope.zap", {
    "package:riverpod_zap/src/riverpod-scope.zap.dart": riverpod_scope$46zap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["riverpod-scope.zap.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWiC;;;;;;;;AAHH;;IAAI;;AAAJ;IAAI;;AACV;IAAI;;AAAJ;;IAAI;;;AACO;;IAAI;;AAAJ;;;;IAAI;;;AAEjB;;IAAI;;AAAJ;;;;IAAI;;;;mBA2BQ,QAAmB;;AACM,MAAvD,aAAW,mBAAiB,kBAAP,aAAU,cAAM,mCAAM,+BAAO;AACvB,MAA3B,AAAK,kBAAO,MAAM,EAAE,MAAM;IAC5B;;AAIgB,MAAd,AAAK;IACP;WAGoB;AAClB,WAAI,AAAM,KAAD,GAAG,OAAK;AAC4C,QAA3D,AAAsB,2BAAgB;;AAExC,WAAI,AAAM,KAAD,GAAG,OAAK;AACf,YAAI;AACsB,UAAR,AAAE,eAAlB;AAC4C,UAA5C,kCAAkB,GAAG,aAAkB;;;AAGzB,MAAlB,AAAK,kBAAO,KAAK;IACnB;;AAEwC;IAAI;kBACP;AACnC,WAAI,KAAK,WAAI;AACC,QAAZ,aAAO,KAAK;AACE,QAAd,iBAAY;;IAEhB;;qDAvDwC,cACjC;iCAPqB;iCACN;;iCACW;iCAEb;IAGb;AAFP;AAIQ,eAAW;AACwC,IAAzD,aAAO,AAAW,uBAAU,AAAW;AAC5B,IAAX,aAAO;AAEqD,IAD5D,aAAW,6CACM,uCAAL,IAAI,cAAuB;AAKtC,IAJD,AAAsB,2BAAgB,QAAC;AACrC,YAAO,AAAgB,uCACnB;AAC2C,MAA/C,uCAAkB,GAAG,aAAkB,OAAO;;AAEX,IAAhC,uCAAL,IAAI,EAAa;AAE0C,IAA3D,AAAsB,2BAAgB;AAEtC,QAAI;AACsB,MAAR,AAAE,eAAlB;AAC4C,MAA5C,kCAAkB,GAAG,aAAkB;;AAEI,IAA7C,AAAK,IAAD,WAAiC,UAAtB;AACM,IAArB,qBAAgB,IAAI;EACtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WAuCwB,QAAmB;IAAU;WAEjC;IAAQ;;IAEZ;;;IANL;;EAAS","file":"riverpod-scope.zap.sound.ddc.js"}');
  // Exports:
  return {
    src__riverpod_scope$46zap: riverpod_scope$46zap
  };
}));

//# sourceMappingURL=riverpod-scope.zap.sound.ddc.js.map
