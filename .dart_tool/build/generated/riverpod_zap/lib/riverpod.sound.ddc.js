define(['dart_sdk', 'packages/riverpod/riverpod', 'packages/zap/src/blocks/async'], (function load__packages__riverpod_zap__riverpod(dart_sdk, packages__riverpod__riverpod, packages__zap__src__blocks__async) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__riverpod__riverpod.src__framework;
  const watchable = packages__zap__src__blocks__async.src__core__watchable;
  var riverpod = Object.create(dart.library);
  var watchable$ = Object.create(dart.library);
  var context = Object.create(dart.library);
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $_get = dartx._get;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ProviderBaseOfTToT: () => (T$.ProviderBaseOfTToT = dart.constFn(dart.gFnType(T => {
      var __t$ProviderBaseOfT = () => (__t$ProviderBaseOfT = dart.constFn(framework.ProviderBase$(T)))();
      return [T, [__t$ProviderBaseOfT()]];
    }, T => {
      var __t$ProviderBaseOfT = () => (__t$ProviderBaseOfT = dart.constFn(framework.ProviderBase$(T)))();
      return [T$.ObjectN()];
    })))(),
    ProviderListenableOfStateToWatchableOfState: () => (T$.ProviderListenableOfStateToWatchableOfState = dart.constFn(dart.gFnType(State => {
      var __t$WatchableOfState = () => (__t$WatchableOfState = dart.constFn(watchable.Watchable$(State)))();
      var __t$ProviderListenableOfState = () => (__t$ProviderListenableOfState = dart.constFn(framework.ProviderListenable$(State)))();
      return [__t$WatchableOfState(), [__t$ProviderListenableOfState()]];
    }, State => {
      var __t$WatchableOfState = () => (__t$WatchableOfState = dart.constFn(watchable.Watchable$(State)))();
      var __t$ProviderListenableOfState = () => (__t$ProviderListenableOfState = dart.constFn(framework.ProviderListenable$(State)))();
      return [T$.ObjectN()];
    })))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ProviderContainerN: () => (T$.ProviderContainerN = dart.constFn(dart.nullable(framework.ProviderContainer)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _internal.Symbol.new('zap.riverpod.scope'));
    }
  }, false);
  var C = [void 0];
  var I = ["package:riverpod_zap/src/watchable.dart"];
  riverpod['RiverpodZap|get#riverpodContainer'] = function RiverpodZap$124get$35riverpodContainer($this) {
    return dart.nullCheck(context['RiverpodScope|get#container']($this));
  };
  riverpod['RiverpodZap|read'] = function RiverpodZap$124read(T, $this, provider) {
    return riverpod['RiverpodZap|get#riverpodContainer']($this).read(T, provider);
  };
  riverpod['RiverpodZap|get#read'] = function RiverpodZap$124get$35read($this) {
    return dart.fn((T, provider) => riverpod['RiverpodZap|read'](T, $this, provider), T$.ProviderBaseOfTToT());
  };
  riverpod['RiverpodZap|use'] = function RiverpodZap$124use(State, $this, provider) {
    return new (watchable$.ProviderWatchable$(State)).new(riverpod['RiverpodZap|get#riverpodContainer']($this), provider);
  };
  riverpod['RiverpodZap|get#use'] = function RiverpodZap$124get$35use($this) {
    return dart.fn((State, provider) => riverpod['RiverpodZap|use'](State, $this, provider), T$.ProviderListenableOfStateToWatchableOfState());
  };
  var _currentSubscription = dart.privateName(watchable$, "_currentSubscription");
  var _listeners = dart.privateName(watchable$, "_listeners");
  var _streamListeners = dart.privateName(watchable$, "_streamListeners");
  var __ProviderWatchable__dartStream = dart.privateName(watchable$, "_#ProviderWatchable#_dartStream");
  var _container$ = dart.privateName(watchable$, "_container");
  var _provider$ = dart.privateName(watchable$, "_provider");
  var _dartStream = dart.privateName(watchable$, "_dartStream");
  var _newListener = dart.privateName(watchable$, "_newListener");
  var _listenerStopped = dart.privateName(watchable$, "_listenerStopped");
  const _is_ProviderWatchable_default = Symbol('_is_ProviderWatchable_default');
  watchable$.ProviderWatchable$ = dart.generic(State => {
    var __t$MultiStreamControllerOfState = () => (__t$MultiStreamControllerOfState = dart.constFn(async.MultiStreamController$(State)))();
    var __t$JSArrayOfMultiStreamControllerOfState = () => (__t$JSArrayOfMultiStreamControllerOfState = dart.constFn(_interceptors.JSArray$(__t$MultiStreamControllerOfState())))();
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$MultiStreamControllerOfStateTovoid = () => (__t$MultiStreamControllerOfStateTovoid = dart.constFn(dart.fnType(dart.void, [__t$MultiStreamControllerOfState()])))();
    var __t$StateN = () => (__t$StateN = dart.constFn(dart.nullable(State)))();
    var __t$StateNAndStateTovoid = () => (__t$StateNAndStateTovoid = dart.constFn(dart.fnType(dart.void, [__t$StateN(), State])))();
    class ProviderWatchable extends async.Stream$(State) {
      get [_dartStream]() {
        let t5;
        t5 = this[__ProviderWatchable__dartStream];
        return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_dartStream")) : t5;
      }
      set [_dartStream](t5) {
        this[__ProviderWatchable__dartStream] = t5;
      }
      static ['_#new#tearOff'](State, _container, _provider) {
        return new (watchable$.ProviderWatchable$(State)).new(_container, _provider);
      }
      [_newListener]() {
        let t6;
        this[_streamListeners] = this[_streamListeners] + 1;
        t6 = this[_currentSubscription];
        return t6 == null ? this[_currentSubscription] = this[_container$].listen(State, this[_provider$], dart.fn((previous, next) => {
          for (let listener of this[_listeners]) {
            listener.add(next);
          }
        }, __t$StateNAndStateTovoid()), {onError: dart.fn((error, stackTrace) => {
            for (let listener of this[_listeners]) {
              listener.addError(error, stackTrace);
            }
          }, T$.ObjectAndStackTraceTovoid())}) : t6;
      }
      [_listenerStopped]() {
        let t6;
        this[_streamListeners] = this[_streamListeners] - 1;
        if (this[_streamListeners] === 0) {
          t6 = this[_currentSubscription];
          t6 == null ? null : t6.close();
          this[_currentSubscription] = null;
        }
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_dartStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get value() {
        let subscription = this[_newListener]();
        let state = subscription.read();
        this[_listenerStopped]();
        return state;
      }
    }
    (ProviderWatchable.new = function(_container, _provider) {
      this[_currentSubscription] = null;
      this[_listeners] = __t$JSArrayOfMultiStreamControllerOfState().of([]);
      this[_streamListeners] = 0;
      this[__ProviderWatchable__dartStream] = null;
      this[_container$] = _container;
      this[_provider$] = _provider;
      ProviderWatchable.__proto__.new.call(this);
      this[_dartStream] = __t$StreamOfState().multi(dart.fn(listener => {
        let t5;
        const startListening = () => {
          this[_listeners][$add](listener);
          this[_newListener]();
        };
        dart.fn(startListening, T$.VoidTovoid());
        const stopListening = () => {
          if (this[_listeners][$remove](listener)) {
            this[_listenerStopped]();
          }
        };
        dart.fn(stopListening, T$.VoidTovoid());
        t5 = listener;
        (() => {
          t5.onResume = startListening;
          t5.onPause = stopListening;
          t5.onCancel = stopListening;
          return t5;
        })();
        startListening();
      }, __t$MultiStreamControllerOfStateTovoid()), {isBroadcast: true});
    }).prototype = ProviderWatchable.prototype;
    dart.addTypeTests(ProviderWatchable);
    ProviderWatchable.prototype[_is_ProviderWatchable_default] = true;
    dart.addTypeCaches(ProviderWatchable);
    ProviderWatchable[dart.implements] = () => [watchable.Watchable$(State)];
    dart.setMethodSignature(ProviderWatchable, () => ({
      __proto__: dart.getMethods(ProviderWatchable.__proto__),
      [_newListener]: dart.fnType(framework.ProviderSubscription$(State), []),
      [_listenerStopped]: dart.fnType(dart.void, []),
      listen: dart.fnType(async.StreamSubscription$(State), [dart.nullable(dart.fnType(dart.void, [State]))], {cancelOnError: dart.nullable(core.bool), onDone: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(core.Function)}, {})
    }));
    dart.setGetterSignature(ProviderWatchable, () => ({
      __proto__: dart.getGetters(ProviderWatchable.__proto__),
      [_dartStream]: async.Stream$(State),
      value: State
    }));
    dart.setSetterSignature(ProviderWatchable, () => ({
      __proto__: dart.getSetters(ProviderWatchable.__proto__),
      [_dartStream]: async.Stream$(State)
    }));
    dart.setLibraryUri(ProviderWatchable, I[0]);
    dart.setFieldSignature(ProviderWatchable, () => ({
      __proto__: dart.getFields(ProviderWatchable.__proto__),
      [_container$]: dart.finalFieldType(framework.ProviderContainer),
      [_provider$]: dart.finalFieldType(framework.ProviderListenable$(State)),
      [_currentSubscription]: dart.fieldType(dart.nullable(framework.ProviderSubscription$(State))),
      [_listeners]: dart.finalFieldType(core.List$(async.MultiStreamController$(State))),
      [_streamListeners]: dart.fieldType(core.int),
      [__ProviderWatchable__dartStream]: dart.fieldType(dart.nullable(async.Stream$(State)))
    }));
    return ProviderWatchable;
  });
  watchable$.ProviderWatchable = watchable$.ProviderWatchable$();
  dart.addTypeTests(watchable$.ProviderWatchable, _is_ProviderWatchable_default);
  context['RiverpodScope|get#container'] = function RiverpodScope$124get$35container($this) {
    return T$.ProviderContainerN().as($this.context[$_get](context._scopeKey));
  };
  context['RiverpodScope|set#container'] = function RiverpodScope$124set$35container($this, value) {
    $this.context[$_set](context._scopeKey, value);
  };
  dart.defineLazy(context, {
    /*context._scopeKey*/get _scopeKey() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/riverpod_zap/riverpod", {
    "package:riverpod_zap/riverpod.dart": riverpod,
    "package:riverpod_zap/src/watchable.dart": watchable$,
    "package:riverpod_zap/src/context.dart": context
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["riverpod.dart","src/watchable.dart","src/context.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY6C,UAAS,gBAAT;EAAU;wEAE3B;AAAa,UAAA,AAAkB,8DAAK,QAAQ;EAAC;;AAArE,uBAAwB,oDAAxB,QAAQ;EAA6D;0EAEjB;AACpD,UAAO,gDAAkB,sDAAmB,QAAQ;EACtD;;AAFiB,2BAAqC,uDAArC,QAAQ;EAEzB;;;;;;;;;;;;;;;;;;;;;ACJmB;;MAAW;;AAAX;MAAW;;;;;;AA2BV,QAAlB,yBAAA,AAAgB,yBAAA;AAChB,aAAO;cAAqB,cAArB,6BAAyB,AAAW,gCACzC,kBACA,SAAC,UAAU;AACT,mBAAW,WAAY;AACH,YAAlB,AAAS,QAAD,KAAK,IAAI;;kDAGZ,SAAC,OAAO;AACf,qBAAW,WAAY;AACe,cAApC,AAAS,QAAD,UAAU,KAAK,EAAE,UAAU;;;MAI3C;;;AAGoB,QAAlB,yBAAA,AAAgB,yBAAA;AAChB,YAAI,AAAiB,2BAAG;AACO,eAA7B;8BAAsB;AACK,UAA3B,6BAAuB;;MAE3B;aAG6D;YAC9C;YAA0B;YAAc;AACrD,cAAO,AAAY,0BAAO,MAAM,YACnB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;AAKQ,2BAAe;AACf,oBAAQ,AAAa,YAAD;AACR,QAAlB;AAEA,cAAO,MAAK;MACd;;sCAhEuB,YAAiB;MANX;MACY,mBAAa;MAClD,yBAAmB;8CAEJ;MAEI;MAAiB;AAAxC;AAqBG,MApBD,oBAAqB,0BACnB,QAAC;;AACC,cAAK;AACqB,UAAxB,AAAW,uBAAI,QAAQ;AACT,UAAd;;;AAGF,cAAK;AACH,cAAI,AAAW,0BAAO,QAAQ;AACV,YAAlB;;;;AAOwB,aAH5B,QAAQ;QAAR;AACI,wBAAW,cAAc;AACzB,uBAAU,aAAa;AACvB,wBAAW,aAAa;;;AACZ,QAAhB,cAAc;kEAEH;IAEjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AChCoC,UAAmB,4BAAnB,AAAO,qBAAC;EAAgC;4FAE3C;AACL,IAA1B,AAAO,qBAAC,mBAAa,KAAK;EAC5B;;MAPI,iBAAS","file":"riverpod.sound.ddc.js"}');
  // Exports:
  return {
    riverpod: riverpod,
    src__watchable: watchable$,
    src__context: context
  };
}));

//# sourceMappingURL=riverpod.sound.ddc.js.map
