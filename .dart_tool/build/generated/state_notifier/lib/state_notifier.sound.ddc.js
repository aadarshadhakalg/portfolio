define(['dart_sdk'], (function load__packages__state_notifier__state_notifier(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var state_notifier = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfObject: () => (T$.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    StackTraceN: () => (T$.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    JSArrayOfStackTraceN: () => (T$.JSArrayOfStackTraceN = dart.constFn(_interceptors.JSArray$(T$.StackTraceN())))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidToNever: () => (T$.VoidToNever = dart.constFn(dart.gFnType(T => [dart.Never, []], T => [T$.ObjectN()])))(),
    VoidToTarget: () => (T$.VoidToTarget = dart.constFn(dart.gFnType(Target => [Target, []], Target => [T$.ObjectN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "org-dartlang-app:///packages/state_notifier/state_notifier.dart",
    "package:state_notifier/state_notifier.dart"
  ];
  var errors$ = dart.privateName(state_notifier, "StateNotifierListenerError.errors");
  var stackTraces$ = dart.privateName(state_notifier, "StateNotifierListenerError.stackTraces");
  var stateNotifier$ = dart.privateName(state_notifier, "StateNotifierListenerError.stateNotifier");
  state_notifier.StateNotifierListenerError = class StateNotifierListenerError extends core.Error {
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    get stackTraces() {
      return this[stackTraces$];
    }
    set stackTraces(value) {
      super.stackTraces = value;
    }
    get stateNotifier() {
      return this[stateNotifier$];
    }
    set stateNotifier(value) {
      super.stateNotifier = value;
    }
    static ['_#_#tearOff'](errors, stackTraces, stateNotifier) {
      return new state_notifier.StateNotifierListenerError.__(errors, stackTraces, stateNotifier);
    }
    toString() {
      let t0;
      let buffer = new core.StringBuffer.new();
      for (let i = 0; i < this.errors[$length]; i = i + 1) {
        let error = this.errors[$_get](i);
        let stackTrace = this.stackTraces[$_get](i);
        t0 = buffer;
        (() => {
          t0.writeln(error);
          t0.writeln(stackTrace);
          return t0;
        })();
      }
      return "At least listener of the StateNotifier " + dart.str(this.stateNotifier) + " threw an exception\nwhen the notifier tried to update its state.\n\nThe exceptions thrown are:\n\n" + dart.str(buffer) + "\n";
    }
  };
  (state_notifier.StateNotifierListenerError.__ = function(errors, stackTraces, stateNotifier) {
    this[errors$] = errors;
    this[stackTraces$] = stackTraces;
    this[stateNotifier$] = stateNotifier;
    if (!(errors[$length] === stackTraces[$length])) dart.assertFailed("errors and stackTraces must match", I[0], 50, 11, "errors.length == stackTraces.length");
    state_notifier.StateNotifierListenerError.__proto__.new.call(this);
    ;
  }).prototype = state_notifier.StateNotifierListenerError.prototype;
  dart.addTypeTests(state_notifier.StateNotifierListenerError);
  dart.addTypeCaches(state_notifier.StateNotifierListenerError);
  dart.setLibraryUri(state_notifier.StateNotifierListenerError, I[1]);
  dart.setFieldSignature(state_notifier.StateNotifierListenerError, () => ({
    __proto__: dart.getFields(state_notifier.StateNotifierListenerError.__proto__),
    errors: dart.finalFieldType(core.List$(core.Object)),
    stackTraces: dart.finalFieldType(core.List$(dart.nullable(core.StackTrace))),
    stateNotifier: dart.finalFieldType(state_notifier.StateNotifier$(dart.nullable(core.Object)))
  }));
  dart.defineExtensionMethods(state_notifier.StateNotifierListenerError, ['toString']);
  var onError = dart.privateName(state_notifier, "StateNotifier.onError");
  var _listeners = dart.privateName(state_notifier, "_listeners");
  var _mounted = dart.privateName(state_notifier, "_mounted");
  var _controller = dart.privateName(state_notifier, "_controller");
  var _debugCanAddListeners = dart.privateName(state_notifier, "_debugCanAddListeners");
  var _state$ = dart.privateName(state_notifier, "_state");
  var _debugSetCanAddListeners = dart.privateName(state_notifier, "_debugSetCanAddListeners");
  var _debugIsMounted = dart.privateName(state_notifier, "_debugIsMounted");
  const _is_StateNotifier_default = Symbol('_is_StateNotifier_default');
  state_notifier.StateNotifier$ = dart.generic(T => {
    var __t$_ListenerEntryOfT = () => (__t$_ListenerEntryOfT = dart.constFn(state_notifier._ListenerEntry$(T)))();
    var __t$LinkedListOf_ListenerEntryOfT = () => (__t$LinkedListOf_ListenerEntryOfT = dart.constFn(collection.LinkedList$(__t$_ListenerEntryOfT())))();
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$VoidToT = () => (__t$VoidToT = dart.constFn(dart.fnType(T, [])))();
    var __t$TTodynamic = () => (__t$TTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T])))();
    class StateNotifier extends core.Object {
      get onError() {
        return this[onError];
      }
      set onError(value) {
        this[onError] = value;
      }
      get mounted() {
        return this[_mounted];
      }
      get stream() {
        this[_controller] == null ? this[_controller] = __t$StreamControllerOfT().broadcast() : null;
        return dart.nullCheck(this[_controller]).stream;
      }
      [_debugSetCanAddListeners](value) {
        if (!dart.fn(() => {
          this[_debugCanAddListeners] = value;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[0], 165, 12, "() {\n      _debugCanAddListeners = value;\n      return true;\n    }()");
        return true;
      }
      [_debugIsMounted]() {
        if (!dart.fn(() => {
          if (!this[_mounted]) {
            dart.throw(new core.StateError.new("Tried to use " + dart.str(this[$runtimeType]) + " after `dispose` was called.\n\nConsider checking `mounted`.\n"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[0], 173, 12, "() {\n      if (!_mounted) {\n        throw StateError('''\nTried to use $runtimeType after `dispose` was called.\n\nConsider checking `mounted`.\n''');\n      }\n      return true;\n    }()");
        return true;
      }
      get state() {
        if (!this[_debugIsMounted]()) dart.assertFailed("", I[0], 196, 12, "_debugIsMounted()");
        return this[_state$];
      }
      updateShouldNotify(old, current) {
        T.as(old);
        T.as(current);
        return !core.identical(old, current);
      }
      set state(value) {
        let t0, t1, t0$;
        T.as(value);
        if (!this[_debugIsMounted]()) dart.assertFailed("", I[0], 210, 12, "_debugIsMounted()");
        let previousState = this[_state$];
        this[_state$] = value;
        if (!this.updateShouldNotify(previousState, value)) {
          return;
        }
        t0 = this[_controller];
        t0 == null ? null : t0.add(value);
        let errors = T$.JSArrayOfObject().of([]);
        let stackTraces = T$.JSArrayOfStackTraceN().of([]);
        for (let listenerEntry of this[_listeners]) {
          try {
            t0$ = listenerEntry;
            t1 = value;
            __t$TTovoid().as(t0$.listener)(t1);
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.Object.is(error)) {
              errors[$add](error);
              stackTraces[$add](stackTrace);
              if (this.onError != null) {
                dart.nullCheck(this.onError)(error, stackTrace);
              } else {
                async.Zone.current.handleUncaughtError(error, stackTrace);
              }
            } else
              throw e;
          }
        }
        if (errors[$isNotEmpty]) {
          dart.throw(new state_notifier.StateNotifierListenerError.__(errors, stackTraces, this));
        }
      }
      get debugState() {
        let result = null;
        let result$35isSet = false;
        function result$35get() {
          return result$35isSet ? result : dart.throw(new _internal.LateError.localNI("result"));
        }
        dart.fn(result$35get, __t$VoidToT());
        function result$35set(t4) {
          result$35isSet = true;
          return result = t4;
        }
        dart.fn(result$35set, __t$TTodynamic());
        if (!dart.fn(() => {
          result$35set(this[_state$]);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[0], 250, 12, "() {\n      result = _state;\n      return true;\n    }()");
        return result$35get();
      }
      get hasListeners() {
        if (!this[_debugIsMounted]()) dart.assertFailed("", I[0], 259, 12, "_debugIsMounted()");
        return this[_listeners][$isNotEmpty];
      }
      addListener(listener, opts) {
        let t7;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : true;
        if (!dart.fn(() => {
          if (!this[_debugCanAddListeners]) {
            dart.throw(new core.ConcurrentModificationError.new());
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[0], 285, 12, "() {\n      if (!_debugCanAddListeners) {\n        throw ConcurrentModificationError();\n      }\n      return true;\n    }()");
        if (!this[_debugIsMounted]()) dart.assertFailed("", I[0], 291, 12, "_debugIsMounted()");
        let listenerEntry = new (__t$_ListenerEntryOfT()).new(listener);
        this[_listeners].add(listenerEntry);
        try {
          if (!this[_debugSetCanAddListeners](false)) dart.assertFailed("", I[0], 295, 14, "_debugSetCanAddListeners(false)");
          if (fireImmediately) {
            listener(this.state);
          }
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            listenerEntry.unlink();
            t7 = this.onError;
            t7 == null ? null : t7(err, stack);
            dart.rethrow(e);
          } else
            throw e;
        } finally {
          if (!this[_debugSetCanAddListeners](true)) dart.assertFailed("", I[0], 304, 14, "_debugSetCanAddListeners(true)");
        }
        return dart.fn(() => {
          if (listenerEntry.list != null) {
            listenerEntry.unlink();
          }
        }, T$.VoidTovoid());
      }
      dispose() {
        let t7;
        if (!this[_debugIsMounted]()) dart.assertFailed("", I[0], 320, 12, "_debugIsMounted()");
        this[_listeners].clear();
        t7 = this[_controller];
        t7 == null ? null : t7.close();
        this[_mounted] = false;
      }
    }
    (StateNotifier.new = function(_state) {
      this[_listeners] = new (__t$LinkedListOf_ListenerEntryOfT()).new();
      this[onError] = null;
      this[_mounted] = true;
      this[_controller] = null;
      this[_debugCanAddListeners] = true;
      this[_state$] = _state;
      ;
    }).prototype = StateNotifier.prototype;
    dart.addTypeTests(StateNotifier);
    StateNotifier.prototype[_is_StateNotifier_default] = true;
    dart.addTypeCaches(StateNotifier);
    dart.setMethodSignature(StateNotifier, () => ({
      __proto__: dart.getMethods(StateNotifier.__proto__),
      [_debugSetCanAddListeners]: dart.fnType(core.bool, [core.bool]),
      [_debugIsMounted]: dart.fnType(core.bool, []),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addListener: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(dart.void, [T])], {fireImmediately: core.bool}, {}),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(StateNotifier, () => ({
      __proto__: dart.getGetters(StateNotifier.__proto__),
      mounted: core.bool,
      stream: async.Stream$(T),
      state: T,
      debugState: T,
      hasListeners: core.bool
    }));
    dart.setSetterSignature(StateNotifier, () => ({
      __proto__: dart.getSetters(StateNotifier.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(StateNotifier, I[1]);
    dart.setFieldSignature(StateNotifier, () => ({
      __proto__: dart.getFields(StateNotifier.__proto__),
      [_listeners]: dart.finalFieldType(collection.LinkedList$(state_notifier._ListenerEntry$(T))),
      onError: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))),
      [_mounted]: dart.fieldType(core.bool),
      [_controller]: dart.fieldType(dart.nullable(async.StreamController$(T))),
      [_debugCanAddListeners]: dart.fieldType(core.bool),
      [_state$]: dart.fieldType(T)
    }));
    return StateNotifier;
  });
  state_notifier.StateNotifier = state_notifier.StateNotifier$();
  dart.addTypeTests(state_notifier.StateNotifier, _is_StateNotifier_default);
  const _is__ListenerEntry_default = Symbol('_is__ListenerEntry_default');
  state_notifier._ListenerEntry$ = dart.generic(T => {
    class _ListenerEntry extends collection.LinkedListEntry {
      static ['_#new#tearOff'](T, listener) {
        return new (state_notifier._ListenerEntry$(T)).new(listener);
      }
    }
    (_ListenerEntry.new = function(listener) {
      this.listener = listener;
      _ListenerEntry.__proto__.new.call(this);
      ;
    }).prototype = _ListenerEntry.prototype;
    dart.addTypeTests(_ListenerEntry);
    _ListenerEntry.prototype[_is__ListenerEntry_default] = true;
    dart.addTypeCaches(_ListenerEntry);
    dart.setLibraryUri(_ListenerEntry, I[1]);
    dart.setFieldSignature(_ListenerEntry, () => ({
      __proto__: dart.getFields(_ListenerEntry.__proto__),
      listener: dart.finalFieldType(dart.fnType(dart.void, [T]))
    }));
    return _ListenerEntry;
  }, T => {
    dart.setBaseClass(state_notifier._ListenerEntry$(T), collection.LinkedListEntry$(state_notifier._ListenerEntry$(T)));
  });
  state_notifier._ListenerEntry = state_notifier._ListenerEntry$();
  dart.addTypeTests(state_notifier._ListenerEntry, _is__ListenerEntry_default);
  var _locator = dart.privateName(state_notifier, "_locator");
  var _debugDidInitState = dart.privateName(state_notifier, "_debugDidInitState");
  var _debugIsNotifierMounted = dart.privateName(state_notifier, "_debugIsNotifierMounted");
  state_notifier.LocatorMixin = class LocatorMixin extends core.Object {};
  state_notifier.LocatorMixin[dart.mixinOn] = Object => class LocatorMixin extends Object {
    get read() {
      if (!this[_debugIsNotifierMounted]()) dart.assertFailed("", I[0], 368, 12, "_debugIsNotifierMounted()");
      return this[_locator];
    }
    set read(read) {
      if (!this[_debugIsNotifierMounted]()) dart.assertFailed("", I[0], 373, 12, "_debugIsNotifierMounted()");
      this[_locator] = read;
    }
    [_debugIsNotifierMounted]() {
      if (!dart.fn(() => {
        if (state_notifier.StateNotifier.is(this)) {
          let instance = state_notifier.StateNotifier.as(this);
          if (!instance[_debugIsMounted]()) dart.assertFailed("", I[0], 381, 16, "instance._debugIsMounted()");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[0], 378, 12, "() {\n      if (this is StateNotifier) {\n        final instance = this as StateNotifier;\n        assert(instance._debugIsMounted(), '');\n      }\n      return true;\n    }()");
      return true;
    }
    debugMockDependency(Dependency, value) {
      if (!this[_debugIsNotifierMounted]()) dart.assertFailed("", I[0], 403, 12, "_debugIsNotifierMounted()");
      if (!dart.fn(() => {
        let previousLocator = this.read;
        this.read = dart.fn(Target => {
          if (!this[_debugIsNotifierMounted]()) dart.assertFailed("", I[0], 407, 16, "_debugIsNotifierMounted()");
          if (dart.wrapType(Dependency)._equals(dart.wrapType(Target))) {
            return Target.as(value);
          }
          return previousLocator(Target);
        }, T$.VoidToTarget());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[0], 404, 12, "() {\n      final previousLocator = read;\n      read = <Target>() {\n        assert(_debugIsNotifierMounted(), '');\n        if (Dependency == Target) {\n          return value as Target;\n        }\n        return previousLocator<Target>();\n      };\n      return true;\n    }()");
    }
    initState() {
    }
    update(watch) {
    }
    debugUpdate() {
      if (!dart.fn(() => {
        if (!this[_debugDidInitState]) {
          this[_debugDidInitState] = true;
          this.initState();
        }
        let locator = this.read;
        this.read = dart.fn(T => dart.throw(new core.StateError.new("Cannot use `read` inside `update`")), T$.VoidToNever());
        try {
          this.update(locator);
        } finally {
          this.read = locator;
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[0], 446, 12, "() {\n      if (!_debugDidInitState) {\n        _debugDidInitState = true;\n        initState();\n      }\n\n      final locator = read;\n      read = <T>() => throw StateError('Cannot use `read` inside `update`');\n      try {\n        update(locator);\n      } finally {\n        read = locator;\n      }\n      return true;\n    }()");
    }
  };
  (state_notifier.LocatorMixin[dart.mixinNew] = function() {
    this[_locator] = dart.fn(T => dart.throw(new (state_notifier.DependencyNotFoundException$(T)).new()), T$.VoidToNever());
    this[_debugDidInitState] = false;
  }).prototype = state_notifier.LocatorMixin.prototype;
  dart.addTypeTests(state_notifier.LocatorMixin);
  dart.addTypeCaches(state_notifier.LocatorMixin);
  state_notifier.LocatorMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(state_notifier.LocatorMixin, () => ({
    __proto__: dart.getMethods(state_notifier.LocatorMixin.__proto__),
    [_debugIsNotifierMounted]: dart.fnType(core.bool, []),
    debugMockDependency: dart.gFnType(Dependency => [dart.void, [Dependency]], Dependency => [dart.nullable(core.Object)]),
    initState: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [dart.gFnType(T => [T, []], T => [dart.nullable(core.Object)])]),
    debugUpdate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(state_notifier.LocatorMixin, () => ({
    __proto__: dart.getGetters(state_notifier.LocatorMixin.__proto__),
    read: dart.gFnType(T => [T, []], T => [dart.nullable(core.Object)])
  }));
  dart.setSetterSignature(state_notifier.LocatorMixin, () => ({
    __proto__: dart.getSetters(state_notifier.LocatorMixin.__proto__),
    read: dart.gFnType(T => [T, []], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(state_notifier.LocatorMixin, I[1]);
  dart.setFieldSignature(state_notifier.LocatorMixin, () => ({
    __proto__: dart.getFields(state_notifier.LocatorMixin.__proto__),
    [_locator]: dart.fieldType(dart.gFnType(T => [T, []], T => [dart.nullable(core.Object)])),
    [_debugDidInitState]: dart.fieldType(core.bool)
  }));
  const _is_DependencyNotFoundException_default = Symbol('_is_DependencyNotFoundException_default');
  state_notifier.DependencyNotFoundException$ = dart.generic(T => {
    class DependencyNotFoundException extends core.Object {
      static ['_#new#tearOff'](T) {
        return new (state_notifier.DependencyNotFoundException$(T)).new();
      }
    }
    (DependencyNotFoundException.new = function() {
      ;
    }).prototype = DependencyNotFoundException.prototype;
    dart.addTypeTests(DependencyNotFoundException);
    DependencyNotFoundException.prototype[_is_DependencyNotFoundException_default] = true;
    dart.addTypeCaches(DependencyNotFoundException);
    DependencyNotFoundException[dart.implements] = () => [core.Exception];
    dart.setLibraryUri(DependencyNotFoundException, I[1]);
    return DependencyNotFoundException;
  });
  state_notifier.DependencyNotFoundException = state_notifier.DependencyNotFoundException$();
  dart.addTypeTests(state_notifier.DependencyNotFoundException, _is_DependencyNotFoundException_default);
  dart.trackLibraries("packages/state_notifier/state_notifier", {
    "package:state_notifier/state_notifier.dart": state_notifier
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["state_notifier.dart"],"names":[],"mappings":"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","file":"state_notifier.sound.ddc.js"}');
  // Exports:
  return {
    state_notifier: state_notifier
  };
}));

//# sourceMappingURL=state_notifier.sound.ddc.js.map
