define(['dart_sdk', 'packages/stack_trace/src/chain', 'packages/state_notifier/state_notifier'], (function load__packages__riverpod__riverpod(dart_sdk, packages__stack_trace__src__chain, packages__state_notifier__state_notifier) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const chain$ = packages__stack_trace__src__chain.src__chain;
  const trace = packages__stack_trace__src__chain.src__trace;
  const frame = packages__stack_trace__src__chain.src__frame;
  const state_notifier = packages__state_notifier__state_notifier.state_notifier;
  var framework = Object.create(dart.library);
  var internals = Object.create(dart.library);
  var value_provider = Object.create(dart.library);
  var stream_provider = Object.create(dart.library);
  var provider$ = Object.create(dart.library);
  var state_notifier_provider = Object.create(dart.library);
  var future_provider = Object.create(dart.library);
  var common = Object.create(dart.library);
  var builders = Object.create(dart.library);
  var async_value_converters = Object.create(dart.library);
  var state_provider = Object.create(dart.library);
  var riverpod = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $contains = dartx.contains;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $entries = dartx.entries;
  var $toList = dartx.toList;
  var $putIfAbsent = dartx.putIfAbsent;
  var $keys = dartx.keys;
  var $forEach = dartx.forEach;
  var $first = dartx.first;
  var $_equals = dartx._equals;
  var $addAll = dartx.addAll;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $map = dartx.map;
  var $where = dartx.where;
  var $fold = dartx.fold;
  var $reversed = dartx.reversed;
  var $values = dartx.values;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfKeepAliveLink: () => (T$.JSArrayOfKeepAliveLink = dart.constFn(_interceptors.JSArray$(framework.KeepAliveLink)))(),
    VoidToKeepAliveLink: () => (T$.VoidToKeepAliveLink = dart.constFn(dart.fnType(framework.KeepAliveLink, [])))(),
    KeepAliveLinkTodynamic: () => (T$.KeepAliveLinkTodynamic = dart.constFn(dart.fnType(dart.dynamic, [framework.KeepAliveLink])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    JSArrayOfProviderElementBase: () => (T$.JSArrayOfProviderElementBase = dart.constFn(_interceptors.JSArray$(framework.ProviderElementBase)))(),
    JSArrayOf_ProviderListener: () => (T$.JSArrayOf_ProviderListener = dart.constFn(_interceptors.JSArray$(framework._ProviderListener)))(),
    LinkedMapOfProviderElementBase$Object: () => (T$.LinkedMapOfProviderElementBase$Object = dart.constFn(_js_helper.LinkedMap$(framework.ProviderElementBase, core.Object)))(),
    ProviderElementBaseTovoid: () => (T$.ProviderElementBaseTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderElementBase])))(),
    ListQueueOfProviderElementBase: () => (T$.ListQueueOfProviderElementBase = dart.constFn(collection.ListQueue$(framework.ProviderElementBase)))(),
    VoidToObject: () => (T$.VoidToObject = dart.constFn(dart.fnType(core.Object, [])))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNAndObjectNTovoid: () => (T$.ObjectNAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN(), T$.ObjectN()])))(),
    JSArrayOfObjectAndStackTraceTovoid: () => (T$.JSArrayOfObjectAndStackTraceTovoid = dart.constFn(_interceptors.JSArray$(T$.ObjectAndStackTraceTovoid())))(),
    FnTovoid: () => (T$.FnTovoid = dart.constFn(dart.fnType(dart.void, [T$.VoidTovoid()])))(),
    JSArrayOfVoidTovoid: () => (T$.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T$.VoidTovoid())))(),
    ProviderBaseOfObjectN: () => (T$.ProviderBaseOfObjectN = dart.constFn(framework.ProviderBase$(T$.ObjectN())))(),
    StackTraceN: () => (T$.StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))(),
    ObjectAndStackTraceN__Tovoid: () => (T$.ObjectAndStackTraceN__Tovoid = dart.constFn(dart.fnType(dart.void, [core.Object, T$.StackTraceN()], {}, {callListeners: core.bool})))(),
    AsyncValueOfvoid: () => (T$.AsyncValueOfvoid = dart.constFn(common.AsyncValue$(dart.void)))(),
    AsyncValueOfvoidTovoid: () => (T$.AsyncValueOfvoidTovoid = dart.constFn(dart.fnType(dart.void, [T$.AsyncValueOfvoid()])))(),
    ResultDataOfObjectN: () => (T$.ResultDataOfObjectN = dart.constFn(framework.ResultData$(T$.ObjectN())))(),
    ResultDataOfObjectNTovoid: () => (T$.ResultDataOfObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ResultDataOfObjectN()])))(),
    ResultErrorTovoid: () => (T$.ResultErrorTovoid = dart.constFn(dart.fnType(dart.void, [framework.ResultError])))(),
    JSArrayOfProviderContainer: () => (T$.JSArrayOfProviderContainer = dart.constFn(_interceptors.JSArray$(framework.ProviderContainer)))(),
    LinkedMapOfProviderBase$ProviderBase: () => (T$.LinkedMapOfProviderBase$ProviderBase = dart.constFn(_js_helper.LinkedMap$(framework.ProviderBase, framework.ProviderBase)))(),
    FamilyOfdynamic$dynamic$ProviderBase: () => (T$.FamilyOfdynamic$dynamic$ProviderBase = dart.constFn(framework.Family$(dart.dynamic, dart.dynamic, framework.ProviderBase)))(),
    LinkedMapOfFamilyOfdynamic$dynamic$ProviderBase$_FamilyOverrideRef: () => (T$.LinkedMapOfFamilyOfdynamic$dynamic$ProviderBase$_FamilyOverrideRef = dart.constFn(_js_helper.LinkedMap$(T$.FamilyOfdynamic$dynamic$ProviderBase(), framework._FamilyOverrideRef)))(),
    JSArrayOfProviderObserver: () => (T$.JSArrayOfProviderObserver = dart.constFn(_interceptors.JSArray$(framework.ProviderObserver)))(),
    LinkedMapOfProviderBase$_StateReader: () => (T$.LinkedMapOfProviderBase$_StateReader = dart.constFn(_js_helper.LinkedMap$(framework.ProviderBase, framework._StateReader)))(),
    IdentityMapOfString$ProviderContainer: () => (T$.IdentityMapOfString$ProviderContainer = dart.constFn(_js_helper.IdentityMap$(core.String, framework.ProviderContainer)))(),
    UnmodifiableListViewOfProviderContainer: () => (T$.UnmodifiableListViewOfProviderContainer = dart.constFn(collection.UnmodifiableListView$(framework.ProviderContainer)))(),
    ProviderContainerTovoid: () => (T$.ProviderContainerTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderContainer])))(),
    ListOfOverride: () => (T$.ListOfOverride = dart.constFn(core.List$(framework.Override)))(),
    ProviderBaseTovoid: () => (T$.ProviderBaseTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderBase])))(),
    LinkedHashSetOfProviderBase: () => (T$.LinkedHashSetOfProviderBase = dart.constFn(collection.LinkedHashSet$(framework.ProviderBase)))(),
    ListQueueOfProviderBase: () => (T$.ListQueueOfProviderBase = dart.constFn(collection.ListQueue$(framework.ProviderBase)))(),
    __Tovoid: () => (T$.__Tovoid = dart.constFn(dart.fnType(dart.void, [], {}, {origin: framework.ProviderBase, override: framework.ProviderBase})))(),
    ProviderContainerN: () => (T$.ProviderContainerN = dart.constFn(dart.nullable(framework.ProviderContainer)))(),
    ProviderOrFamilyToProviderContainerN: () => (T$.ProviderOrFamilyToProviderContainerN = dart.constFn(dart.fnType(T$.ProviderContainerN(), [framework.ProviderOrFamily])))(),
    ProviderContainerNTobool: () => (T$.ProviderContainerNTobool = dart.constFn(dart.fnType(core.bool, [T$.ProviderContainerN()])))(),
    ProviderContainerAndProviderContainerNToProviderContainer: () => (T$.ProviderContainerAndProviderContainerNToProviderContainer = dart.constFn(dart.fnType(framework.ProviderContainer, [framework.ProviderContainer, T$.ProviderContainerN()])))(),
    VoidTo_StateReader: () => (T$.VoidTo_StateReader = dart.constFn(dart.fnType(framework._StateReader, [])))(),
    LinkedHashMapOfString$ProviderContainer: () => (T$.LinkedHashMapOfString$ProviderContainer = dart.constFn(collection.LinkedHashMap$(core.String, framework.ProviderContainer)))(),
    SyncIterableOfProviderElementBase: () => (T$.SyncIterableOfProviderElementBase = dart.constFn(_js_helper.SyncIterable$(framework.ProviderElementBase)))(),
    _HashSetOfProviderElementBase: () => (T$._HashSetOfProviderElementBase = dart.constFn(collection._HashSet$(framework.ProviderElementBase)))(),
    DoubleLinkedQueueOfProviderElementBase: () => (T$.DoubleLinkedQueueOfProviderElementBase = dart.constFn(collection.DoubleLinkedQueue$(framework.ProviderElementBase)))(),
    JSArrayOfAutoDisposeProviderElementBase: () => (T$.JSArrayOfAutoDisposeProviderElementBase = dart.constFn(_interceptors.JSArray$(framework.AutoDisposeProviderElementBase)))(),
    CompleterOfvoid: () => (T$.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    LinkedHashSetOfProviderOrFamily: () => (T$.LinkedHashSetOfProviderOrFamily = dart.constFn(collection.LinkedHashSet$(framework.ProviderOrFamily)))(),
    ProviderOrFamilyTovoid: () => (T$.ProviderOrFamilyTovoid = dart.constFn(dart.fnType(dart.void, [framework.ProviderOrFamily])))(),
    ListOfProviderOrFamily: () => (T$.ListOfProviderOrFamily = dart.constFn(core.List$(framework.ProviderOrFamily)))(),
    JSArrayOfTrace: () => (T$.JSArrayOfTrace = dart.constFn(_interceptors.JSArray$(trace.Trace)))(),
    FrameTobool: () => (T$.FrameTobool = dart.constFn(dart.fnType(core.bool, [frame.Frame])))(),
    ObjectAndStackTraceToNull: () => (T$.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfPostEventCall: () => (T$.JSArrayOfPostEventCall = dart.constFn(_interceptors.JSArray$(provider$.PostEventCall)))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    JSArrayOfProviderOrFamily: () => (T$.JSArrayOfProviderOrFamily = dart.constFn(_interceptors.JSArray$(framework.ProviderOrFamily)))(),
    AsyncErrorN: () => (T$.AsyncErrorN = dart.constFn(dart.nullable(common.AsyncError)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(framework._runGuarded, T$.FnTovoid());
    },
    get C1() {
      return C[1] = dart.constList([], framework.Override);
    },
    get C2() {
      return C[2] = dart.fn(framework._defaultVsync, T$.FnTovoid());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: builders.AutoDisposeStreamProviderFamilyBuilder.prototype
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: builders.StreamProviderFamilyBuilder.prototype
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: builders.AutoDisposeStreamProviderBuilder.prototype
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: builders.AutoDisposeProviderFamilyBuilder.prototype
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: builders.ProviderFamilyBuilder.prototype
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: builders.AutoDisposeProviderBuilder.prototype
      });
    },
    get C9() {
      return C[9] = dart.constMap(T$.ObjectN(), T$.ObjectN(), []);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: builders.AutoDisposeStateNotifierProviderFamilyBuilder.prototype
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: builders.StateNotifierProviderFamilyBuilder.prototype
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: builders.AutoDisposeStateNotifierProviderBuilder.prototype
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: builders.AutoDisposeFutureProviderFamilyBuilder.prototype
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: builders.FutureProviderFamilyBuilder.prototype
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: builders.AutoDisposeFutureProviderBuilder.prototype
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: builders.AutoDisposeStateProviderBuilder.prototype
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: builders.StateProviderFamilyBuilder.prototype
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: builders.AutoDisposeStateProviderFamilyBuilder.prototype
      });
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = [
    "package:riverpod/src/framework.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/selector.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/auto_dispose.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/provider_base.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/async_selector.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/container.dart",
    "org-dartlang-app:///packages/riverpod/src/framework/scheduler.dart",
    "package:riverpod/src/value_provider.dart",
    "package:riverpod/src/common.dart",
    "package:riverpod/src/stream_provider.dart",
    "package:riverpod/src/provider.dart",
    "org-dartlang-app:///packages/riverpod/src/devtool.dart",
    "package:riverpod/src/state_notifier_provider.dart",
    "package:riverpod/src/future_provider.dart",
    "package:riverpod/src/builders.dart",
    "package:riverpod/src/async_value_converters.dart",
    "package:riverpod/src/state_provider.dart"
  ];
  const _is_ProviderListenable_default = Symbol('_is_ProviderListenable_default');
  framework.ProviderListenable$ = dart.generic(State => {
    class ProviderListenable extends core.Object {}
    ProviderListenable[dart.mixinOn] = Object => class ProviderListenable extends Object {
      select(Selected, selector) {
        return new (framework._ProviderSelector$(State, Selected)).new({provider: this, selector: selector});
      }
    };
    (ProviderListenable[dart.mixinNew] = function() {
    }).prototype = ProviderListenable.prototype;
    dart.addTypeTests(ProviderListenable);
    ProviderListenable.prototype[_is_ProviderListenable_default] = true;
    dart.addTypeCaches(ProviderListenable);
    ProviderListenable[dart.implements] = () => [core.Object];
    dart.setMethodSignature(ProviderListenable, () => ({
      __proto__: dart.getMethods(ProviderListenable.__proto__),
      select: dart.gFnType(Selected => [framework.ProviderListenable$(Selected), [dart.fnType(Selected, [State])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ProviderListenable, I[0]);
    return ProviderListenable;
  });
  framework.ProviderListenable = framework.ProviderListenable$();
  dart.addTypeTests(framework.ProviderListenable, _is_ProviderListenable_default);
  const _is_AlwaysAliveProviderListenable_default = Symbol('_is_AlwaysAliveProviderListenable_default');
  framework.AlwaysAliveProviderListenable$ = dart.generic(State => {
    class AlwaysAliveProviderListenable extends framework.ProviderListenable$(State) {}
    AlwaysAliveProviderListenable[dart.mixinOn] = ProviderListenable => class AlwaysAliveProviderListenable extends ProviderListenable {
      select(Selected, selector) {
        return new (framework._AlwaysAliveProviderSelector$(State, Selected)).new({provider: this, selector: selector});
      }
    };
    dart.addTypeTests(AlwaysAliveProviderListenable);
    AlwaysAliveProviderListenable.prototype[_is_AlwaysAliveProviderListenable_default] = true;
    dart.addTypeCaches(AlwaysAliveProviderListenable);
    AlwaysAliveProviderListenable[dart.implements] = () => [framework.ProviderListenable$(State)];
    dart.setMethodSignature(AlwaysAliveProviderListenable, () => ({
      __proto__: dart.getMethods(AlwaysAliveProviderListenable.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [State])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AlwaysAliveProviderListenable, I[0]);
    return AlwaysAliveProviderListenable;
  });
  framework.AlwaysAliveProviderListenable = framework.AlwaysAliveProviderListenable$();
  dart.addTypeTests(framework.AlwaysAliveProviderListenable, _is_AlwaysAliveProviderListenable_default);
  var name$ = dart.privateName(framework, "ProviderBase.name");
  var from$ = dart.privateName(framework, "ProviderBase.from");
  var argument$ = dart.privateName(framework, "ProviderBase.argument");
  var _origin = dart.privateName(framework, "_origin");
  var _override = dart.privateName(framework, "_override");
  var _createSubscription = dart.privateName(framework, "_createSubscription");
  var __ProviderOrFamily_allTransitiveDependencies = dart.privateName(framework, "_#ProviderOrFamily#allTransitiveDependencies");
  var __ProviderOrFamily_allTransitiveDependencies_isSet = dart.privateName(framework, "_#ProviderOrFamily#allTransitiveDependencies#isSet");
  framework.ProviderOrFamily = class ProviderOrFamily extends core.Object {
    get allTransitiveDependencies() {
      if (!this[__ProviderOrFamily_allTransitiveDependencies_isSet]) {
        let t0 = this.dependencies == null ? null : framework._allTransitiveDependencies(dart.nullCheck(this.dependencies));
        if (this[__ProviderOrFamily_allTransitiveDependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("allTransitiveDependencies"));
        this[__ProviderOrFamily_allTransitiveDependencies] = t0;
        this[__ProviderOrFamily_allTransitiveDependencies_isSet] = true;
      }
      return this[__ProviderOrFamily_allTransitiveDependencies];
    }
  };
  (framework.ProviderOrFamily.new = function() {
    this[__ProviderOrFamily_allTransitiveDependencies] = null;
    this[__ProviderOrFamily_allTransitiveDependencies_isSet] = false;
    ;
  }).prototype = framework.ProviderOrFamily.prototype;
  dart.addTypeTests(framework.ProviderOrFamily);
  dart.addTypeCaches(framework.ProviderOrFamily);
  dart.setGetterSignature(framework.ProviderOrFamily, () => ({
    __proto__: dart.getGetters(framework.ProviderOrFamily.__proto__),
    allTransitiveDependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
  }));
  dart.setLibraryUri(framework.ProviderOrFamily, I[0]);
  dart.setFieldSignature(framework.ProviderOrFamily, () => ({
    __proto__: dart.getFields(framework.ProviderOrFamily.__proto__),
    [__ProviderOrFamily_allTransitiveDependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
    [__ProviderOrFamily_allTransitiveDependencies_isSet]: dart.fieldType(core.bool)
  }));
  const _is_ProviderBase_default = Symbol('_is_ProviderBase_default');
  framework.ProviderBase$ = dart.generic(State => {
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    const ProviderOrFamily_ProviderListenable$36 = class ProviderOrFamily_ProviderListenable extends framework.ProviderOrFamily {};
    (ProviderOrFamily_ProviderListenable$36.new = function() {
      ProviderOrFamily_ProviderListenable$36.__proto__.new.call(this);
    }).prototype = ProviderOrFamily_ProviderListenable$36.prototype;
    dart.applyMixin(ProviderOrFamily_ProviderListenable$36, framework.ProviderListenable$(State));
    class ProviderBase extends ProviderOrFamily_ProviderListenable$36 {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get from() {
        return this[from$];
      }
      set from(value) {
        super.from = value;
      }
      get argument() {
        return this[argument$];
      }
      set argument(value) {
        super.argument = value;
      }
      get [_origin]() {
        return this.originProvider;
      }
      get [_override]() {
        return this.originProvider;
      }
      get originProvider() {
        return this;
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
        onError == null ? onError = dart.bind(async.Zone.current, 'handleUncaughtError') : null;
        let element = node.readProviderElement(State, this);
        element.flush();
        if (fireImmediately) {
          framework.handleFireImmediately(State, dart.nullCheck(element.getState()), {listener: listener, onError: onError});
        }
        return node[_createSubscription](State, element, {listener: listener, onError: onError});
      }
      get hashCode() {
        if (this.from == null) return super[$hashCode];
        return (dart.hashCode(this.from) ^ dart.hashCode(this.argument)) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        if (this.from == null) return other === this;
        return other[$runtimeType]._equals(this[$runtimeType]) && __t$ProviderBaseOfState().is(other) && dart.equals(other.from, this.from) && dart.equals(other.argument, this.argument);
      }
      toString() {
        let leading = "";
        if (this.from != null) {
          leading = "(" + dart.str(this.argument) + ")";
        }
        let trailing = "";
        if (this.name != null) {
          trailing = dart.str(this.name) + ":";
        }
        return trailing + framework.describeIdentity(this) + leading;
      }
    }
    (ProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[name$] = name;
      this[from$] = from;
      this[argument$] = argument;
      ProviderBase.__proto__.new.call(this);
      ;
    }).prototype = ProviderBase.prototype;
    dart.addTypeTests(ProviderBase);
    ProviderBase.prototype[_is_ProviderBase_default] = true;
    dart.addTypeCaches(ProviderBase);
    ProviderBase[dart.implements] = () => [framework.ProviderOverride];
    dart.setMethodSignature(ProviderBase, () => ({
      __proto__: dart.getMethods(ProviderBase.__proto__),
      addListener: dart.fnType(framework.ProviderSubscription$(State), [framework.Node, dart.fnType(dart.void, [dart.nullable(State), State])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {})
    }));
    dart.setGetterSignature(ProviderBase, () => ({
      __proto__: dart.getGetters(ProviderBase.__proto__),
      [_origin]: framework.ProviderBase,
      [_override]: framework.ProviderBase,
      originProvider: framework.ProviderBase$(dart.nullable(core.Object))
    }));
    dart.setLibraryUri(ProviderBase, I[0]);
    dart.setFieldSignature(ProviderBase, () => ({
      __proto__: dart.getFields(ProviderBase.__proto__),
      name: dart.finalFieldType(dart.nullable(core.String)),
      from: dart.finalFieldType(dart.nullable(framework.Family$(dart.dynamic, dart.dynamic, framework.ProviderBase))),
      argument: dart.finalFieldType(dart.nullable(core.Object))
    }));
    dart.defineExtensionMethods(ProviderBase, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ProviderBase, ['hashCode']);
    return ProviderBase;
  });
  framework.ProviderBase = framework.ProviderBase$();
  dart.addTypeTests(framework.ProviderBase, _is_ProviderBase_default);
  const _is_AlwaysAliveProviderBase_default = Symbol('_is_AlwaysAliveProviderBase_default');
  framework.AlwaysAliveProviderBase$ = dart.generic(State => {
    const ProviderBase_AlwaysAliveProviderListenable$36 = class ProviderBase_AlwaysAliveProviderListenable extends framework.ProviderBase$(State) {};
    (ProviderBase_AlwaysAliveProviderListenable$36.new = function(opts) {
      ProviderBase_AlwaysAliveProviderListenable$36.__proto__.new.call(this, opts);
    }).prototype = ProviderBase_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(ProviderBase_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(State));
    class AlwaysAliveProviderBase extends ProviderBase_AlwaysAliveProviderListenable$36 {}
    (AlwaysAliveProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      AlwaysAliveProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = AlwaysAliveProviderBase.prototype;
    dart.addTypeTests(AlwaysAliveProviderBase);
    AlwaysAliveProviderBase.prototype[_is_AlwaysAliveProviderBase_default] = true;
    dart.addTypeCaches(AlwaysAliveProviderBase);
    dart.setLibraryUri(AlwaysAliveProviderBase, I[0]);
    return AlwaysAliveProviderBase;
  });
  framework.AlwaysAliveProviderBase = framework.AlwaysAliveProviderBase$();
  dart.addTypeTests(framework.AlwaysAliveProviderBase, _is_AlwaysAliveProviderBase_default);
  var _select = dart.privateName(framework, "_select");
  var _selectOnChange = dart.privateName(framework, "_selectOnChange");
  const _is__ProviderSelector_default = Symbol('_is__ProviderSelector_default');
  framework._ProviderSelector$ = dart.generic((Input, Output) => {
    var __t$ResultDataOfInput = () => (__t$ResultDataOfInput = dart.constFn(framework.ResultData$(Input)))();
    var __t$ResultDataOfInputToResultOfOutput = () => (__t$ResultDataOfInputToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [__t$ResultDataOfInput()])))();
    var __t$ResultErrorOfInput = () => (__t$ResultErrorOfInput = dart.constFn(framework.ResultError$(Input)))();
    var __t$ResultErrorOfInputToResultOfOutput = () => (__t$ResultErrorOfInputToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [__t$ResultErrorOfInput()])))();
    var __t$InputN = () => (__t$InputN = dart.constFn(dart.nullable(Input)))();
    var __t$InputNAndInputTovoid = () => (__t$InputNAndInputTovoid = dart.constFn(dart.fnType(dart.void, [__t$InputN(), Input])))();
    var __t$_SelectorSubscriptionOfInput$Output = () => (__t$_SelectorSubscriptionOfInput$Output = dart.constFn(framework._SelectorSubscription$(Input, Output)))();
    var __t$ResultOfOutput = () => (__t$ResultOfOutput = dart.constFn(framework.Result$(Output)))();
    var __t$ResultDataOfOutput = () => (__t$ResultDataOfOutput = dart.constFn(framework.ResultData$(Output)))();
    var __t$ResultErrorOfOutput = () => (__t$ResultErrorOfOutput = dart.constFn(framework.ResultError$(Output)))();
    var __t$ResultDataOfOutputToNull = () => (__t$ResultDataOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputTovoid = () => (__t$ResultErrorOfOutputTovoid = dart.constFn(dart.fnType(dart.void, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToResultOfOutput = () => (__t$VoidToResultOfOutput = dart.constFn(dart.fnType(__t$ResultOfOutput(), [])))();
    var __t$ResultOfOutputTodynamic = () => (__t$ResultOfOutputTodynamic = dart.constFn(dart.fnType(dart.dynamic, [__t$ResultOfOutput()])))();
    var __t$ResultOfOutputTovoid = () => (__t$ResultOfOutputTovoid = dart.constFn(dart.fnType(dart.void, [__t$ResultOfOutput()])))();
    var __t$ResultDataOfOutputToOutput = () => (__t$ResultDataOfOutputToOutput = dart.constFn(dart.fnType(Output, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputToNever = () => (__t$ResultErrorOfOutputToNever = dart.constFn(dart.fnType(dart.Never, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToOutput = () => (__t$VoidToOutput = dart.constFn(dart.fnType(Output, [])))();
    const Object_ProviderListenable$36 = class Object_ProviderListenable extends core.Object {};
    (Object_ProviderListenable$36.new = function() {
    }).prototype = Object_ProviderListenable$36.prototype;
    dart.applyMixin(Object_ProviderListenable$36, framework.ProviderListenable$(Output));
    class _ProviderSelector extends Object_ProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._ProviderSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      [_select](value) {
        if (!dart.fn(() => {
          framework._debugIsRunningSelector = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[1], 47, 12, "() {\n      _debugIsRunningSelector = true;\n      return true;\n    }()");
        try {
          return value.map(__t$ResultOfOutput(), {data: dart.fn(data => {
              let t1;
              return new (__t$ResultDataOfOutput()).new((t1 = data.state, this.selector(t1)));
            }, __t$ResultDataOfInputToResultOfOutput()), error: dart.fn(error => new (__t$ResultErrorOfOutput()).new(error.error, error.stackTrace), __t$ResultErrorOfInputToResultOfOutput())});
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$ResultErrorOfOutput()).new(err, stack);
          } else
            throw e;
        } finally {
          if (!dart.fn(() => {
            framework._debugIsRunningSelector = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[1], 62, 14, "() {\n        _debugIsRunningSelector = false;\n        return true;\n      }()");
        }
      }
      [_selectOnChange](opts) {
        let newState = opts && 'newState' in opts ? opts.newState : null;
        let lastSelectedValue = opts && 'lastSelectedValue' in opts ? opts.lastSelectedValue : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onChange = opts && 'onChange' in opts ? opts.onChange : null;
        let newSelectedValue = this[_select](new (__t$ResultDataOfInput()).new(newState));
        if (!lastSelectedValue.hasState || !newSelectedValue.hasState || !dart.equals(lastSelectedValue.requireState, newSelectedValue.requireState)) {
          onChange(newSelectedValue);
          newSelectedValue.map(dart.void, {data: dart.fn(data => {
              listener(lastSelectedValue.stateOrNull, data.state);
            }, __t$ResultDataOfOutputToNull()), error: dart.fn(error => onError(error.error, error.stackTrace), __t$ResultErrorOfOutputTovoid())});
        }
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
        onError == null ? onError = dart.bind(async.Zone.current, 'handleUncaughtError') : null;
        let lastSelectedValue = null;
        function lastSelectedValue$35get() {
          let t3;
          t3 = lastSelectedValue;
          return t3 == null ? dart.throw(new _internal.LateError.localNI("lastSelectedValue")) : t3;
        }
        dart.fn(lastSelectedValue$35get, __t$VoidToResultOfOutput());
        function lastSelectedValue$35set(t4) {
          return lastSelectedValue = t4;
        }
        dart.fn(lastSelectedValue$35set, __t$ResultOfOutputTodynamic());
        let sub = node.listen(Input, this.provider, dart.fn((prev, input) => {
          this[_selectOnChange]({newState: input, lastSelectedValue: lastSelectedValue$35get(), listener: listener, onError: dart.nullCheck(onError), onChange: dart.fn(newState => lastSelectedValue$35set(newState), __t$ResultOfOutputTovoid())});
        }, __t$InputNAndInputTovoid()), {onError: onError});
        lastSelectedValue$35set(this[_select](framework.Result.guard(Input, dart.bind(sub, 'read'))));
        if (fireImmediately) {
          framework.handleFireImmediately(Output, lastSelectedValue$35get(), {listener: listener, onError: onError});
        }
        return new (__t$_SelectorSubscriptionOfInput$Output()).new(sub, dart.fn(() => lastSelectedValue$35get().map(Output, {data: dart.fn(data => data.state, __t$ResultDataOfOutputToOutput()), error: dart.fn(error => framework._rethrowProviderError(error.error, error.stackTrace), __t$ResultErrorOfOutputToNever())}), __t$VoidToOutput()));
      }
    }
    (_ProviderSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      this.provider = provider;
      this.selector = selector;
      ;
    }).prototype = _ProviderSelector.prototype;
    dart.addTypeTests(_ProviderSelector);
    _ProviderSelector.prototype[_is__ProviderSelector_default] = true;
    dart.addTypeCaches(_ProviderSelector);
    dart.setMethodSignature(_ProviderSelector, () => ({
      __proto__: dart.getMethods(_ProviderSelector.__proto__),
      [_select]: dart.fnType(framework.Result$(Output), [framework.Result$(Input)]),
      [_selectOnChange]: dart.fnType(dart.void, [], {}, {lastSelectedValue: framework.Result$(Output), listener: dart.fnType(dart.void, [dart.nullable(Output), Output]), newState: Input, onChange: dart.fnType(dart.void, [framework.Result$(Output)]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}),
      addListener: dart.fnType(framework._SelectorSubscription$(Input, Output), [framework.Node, dart.fnType(dart.void, [dart.nullable(Output), Output])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {})
    }));
    dart.setLibraryUri(_ProviderSelector, I[0]);
    dart.setFieldSignature(_ProviderSelector, () => ({
      __proto__: dart.getFields(_ProviderSelector.__proto__),
      provider: dart.finalFieldType(framework.ProviderListenable$(Input)),
      selector: dart.finalFieldType(dart.fnType(Output, [Input]))
    }));
    return _ProviderSelector;
  });
  framework._ProviderSelector = framework._ProviderSelector$();
  dart.addTypeTests(framework._ProviderSelector, _is__ProviderSelector_default);
  const _is__AlwaysAliveProviderSelector_default = Symbol('_is__AlwaysAliveProviderSelector_default');
  framework._AlwaysAliveProviderSelector$ = dart.generic((Input, Output) => {
    const _ProviderSelector_AlwaysAliveProviderListenable$36 = class _ProviderSelector_AlwaysAliveProviderListenable extends framework._ProviderSelector$(Input, Output) {};
    (_ProviderSelector_AlwaysAliveProviderListenable$36.new = function(opts) {
      _ProviderSelector_AlwaysAliveProviderListenable$36.__proto__.new.call(this, opts);
    }).prototype = _ProviderSelector_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(_ProviderSelector_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(Output));
    class _AlwaysAliveProviderSelector extends _ProviderSelector_AlwaysAliveProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AlwaysAliveProviderSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      select(Selected, selector) {
        return super.select(Selected, selector);
      }
    }
    (_AlwaysAliveProviderSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      _AlwaysAliveProviderSelector.__proto__.new.call(this, {provider: provider, selector: selector});
      ;
    }).prototype = _AlwaysAliveProviderSelector.prototype;
    dart.addTypeTests(_AlwaysAliveProviderSelector);
    _AlwaysAliveProviderSelector.prototype[_is__AlwaysAliveProviderSelector_default] = true;
    dart.addTypeCaches(_AlwaysAliveProviderSelector);
    dart.setMethodSignature(_AlwaysAliveProviderSelector, () => ({
      __proto__: dart.getMethods(_AlwaysAliveProviderSelector.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [Output])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_AlwaysAliveProviderSelector, I[0]);
    return _AlwaysAliveProviderSelector;
  });
  framework._AlwaysAliveProviderSelector = framework._AlwaysAliveProviderSelector$();
  dart.addTypeTests(framework._AlwaysAliveProviderSelector, _is__AlwaysAliveProviderSelector_default);
  const _is_Ref_default = Symbol('_is_Ref_default');
  framework.Ref$ = dart.generic(State => {
    class Ref extends core.Object {}
    (Ref.new = function() {
      ;
    }).prototype = Ref.prototype;
    dart.addTypeTests(Ref);
    Ref.prototype[_is_Ref_default] = true;
    dart.addTypeCaches(Ref);
    dart.setLibraryUri(Ref, I[0]);
    return Ref;
  });
  framework.Ref = framework.Ref$();
  dart.addTypeTests(framework.Ref, _is_Ref_default);
  const _is_AutoDisposeRef_default = Symbol('_is_AutoDisposeRef_default');
  framework.AutoDisposeRef$ = dart.generic(State => {
    class AutoDisposeRef extends framework.Ref$(State) {}
    (AutoDisposeRef.new = function() {
      ;
    }).prototype = AutoDisposeRef.prototype;
    dart.addTypeTests(AutoDisposeRef);
    AutoDisposeRef.prototype[_is_AutoDisposeRef_default] = true;
    dart.addTypeCaches(AutoDisposeRef);
    dart.setLibraryUri(AutoDisposeRef, I[0]);
    return AutoDisposeRef;
  });
  framework.AutoDisposeRef = framework.AutoDisposeRef$();
  dart.addTypeTests(framework.AutoDisposeRef, _is_AutoDisposeRef_default);
  var cacheTime$ = dart.privateName(framework, "AutoDisposeProviderBase.cacheTime");
  var disposeDelay$ = dart.privateName(framework, "AutoDisposeProviderBase.disposeDelay");
  const _is_AutoDisposeProviderBase_default = Symbol('_is_AutoDisposeProviderBase_default');
  framework.AutoDisposeProviderBase$ = dart.generic(State => {
    class AutoDisposeProviderBase extends framework.ProviderBase$(State) {
      get cacheTime() {
        return this[cacheTime$];
      }
      set cacheTime(value) {
        super.cacheTime = value;
      }
      get disposeDelay() {
        return this[disposeDelay$];
      }
      set disposeDelay(value) {
        super.disposeDelay = value;
      }
    }
    (AutoDisposeProviderBase.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[cacheTime$] = cacheTime;
      this[disposeDelay$] = disposeDelay;
      AutoDisposeProviderBase.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = AutoDisposeProviderBase.prototype;
    dart.addTypeTests(AutoDisposeProviderBase);
    AutoDisposeProviderBase.prototype[_is_AutoDisposeProviderBase_default] = true;
    dart.addTypeCaches(AutoDisposeProviderBase);
    dart.setLibraryUri(AutoDisposeProviderBase, I[0]);
    dart.setFieldSignature(AutoDisposeProviderBase, () => ({
      __proto__: dart.getFields(AutoDisposeProviderBase.__proto__),
      cacheTime: dart.finalFieldType(dart.nullable(core.Duration)),
      disposeDelay: dart.finalFieldType(dart.nullable(core.Duration))
    }));
    return AutoDisposeProviderBase;
  });
  framework.AutoDisposeProviderBase = framework.AutoDisposeProviderBase$();
  dart.addTypeTests(framework.AutoDisposeProviderBase, _is_AutoDisposeProviderBase_default);
  var _keepAliveLinks = dart.privateName(framework, "_keepAliveLinks");
  var _maintainState = dart.privateName(framework, "_maintainState");
  var __AutoDisposeProviderElementBase__cacheTime = dart.privateName(framework, "_#AutoDisposeProviderElementBase#_cacheTime");
  var __AutoDisposeProviderElementBase__cacheTime_isSet = dart.privateName(framework, "_#AutoDisposeProviderElementBase#_cacheTime#isSet");
  var __AutoDisposeProviderElementBase__disposeDelay = dart.privateName(framework, "_#AutoDisposeProviderElementBase#_disposeDelay");
  var __AutoDisposeProviderElementBase__disposeDelay_isSet = dart.privateName(framework, "_#AutoDisposeProviderElementBase#_disposeDelay#isSet");
  var _cacheTimer = dart.privateName(framework, "_cacheTimer");
  var _disposeDelayLink = dart.privateName(framework, "_disposeDelayLink");
  var _disposeDelayTimer = dart.privateName(framework, "_disposeDelayTimer");
  var _container = dart.privateName(framework, "_container");
  var _cacheTime = dart.privateName(framework, "_cacheTime");
  var _disposeDelay = dart.privateName(framework, "_disposeDelay");
  var _scheduler = dart.privateName(framework, "_scheduler");
  var _buildState = dart.privateName(framework, "_buildState");
  var _state = dart.privateName(framework, "_state");
  var _runOnDispose = dart.privateName(framework, "_runOnDispose");
  var _provider$ = dart.privateName(framework, "ProviderElementBase._provider");
  var _debugSkipNotifyListenersAsserts = dart.privateName(framework, "_debugSkipNotifyListenersAsserts");
  var __ProviderElementBase__origin = dart.privateName(framework, "_#ProviderElementBase#_origin");
  var __ProviderElementBase__container = dart.privateName(framework, "_#ProviderElementBase#_container");
  var _listeners = dart.privateName(framework, "_listeners");
  var _dependents = dart.privateName(framework, "_dependents");
  var _subscriptions = dart.privateName(framework, "_subscriptions");
  var _subscribers = dart.privateName(framework, "_subscribers");
  var _dependencies = dart.privateName(framework, "_dependencies");
  var _previousDependencies = dart.privateName(framework, "_previousDependencies");
  var _onDisposeListeners = dart.privateName(framework, "_onDisposeListeners");
  var _onResumeListeners = dart.privateName(framework, "_onResumeListeners");
  var _onCancelListeners = dart.privateName(framework, "_onCancelListeners");
  var _onAddListeners = dart.privateName(framework, "_onAddListeners");
  var _onRemoveListeners = dart.privateName(framework, "_onRemoveListeners");
  var _onChangeSelfListeners = dart.privateName(framework, "_onChangeSelfListeners");
  var _onErrorSelfListeners = dart.privateName(framework, "_onErrorSelfListeners");
  var _mustRecomputeState = dart.privateName(framework, "_mustRecomputeState");
  var _dependencyMayHaveChanged = dart.privateName(framework, "_dependencyMayHaveChanged");
  var _debugDidChangeDependency = dart.privateName(framework, "_debugDidChangeDependency");
  var _didCancelOnce = dart.privateName(framework, "_didCancelOnce");
  var _mounted = dart.privateName(framework, "_mounted");
  var _debugDidSetState = dart.privateName(framework, "_debugDidSetState");
  var _didBuild = dart.privateName(framework, "_didBuild");
  var _provider = dart.privateName(framework, "_provider");
  var _notifyListeners = dart.privateName(framework, "_notifyListeners");
  var _debugId = dart.privateName(framework, "_debugId");
  var _markDependencyMayHaveChanged = dart.privateName(framework, "_markDependencyMayHaveChanged");
  var _maybeRebuildDependencies = dart.privateName(framework, "_maybeRebuildDependencies");
  var _performBuild = dart.privateName(framework, "_performBuild");
  var _onRemoveListener = dart.privateName(framework, "_onRemoveListener");
  var _listener$ = dart.privateName(framework, "_listener");
  var _didChangeDependency = dart.privateName(framework, "_didChangeDependency");
  var _observers = dart.privateName(framework, "_observers");
  var _debugAssertCanDependOn = dart.privateName(framework, "_debugAssertCanDependOn");
  var _assertNotOutdated = dart.privateName(framework, "_assertNotOutdated");
  var _onListen = dart.privateName(framework, "_onListen");
  const _is_ProviderElementBase_default = Symbol('_is_ProviderElementBase_default');
  framework.ProviderElementBase$ = dart.generic(State => {
    var __t$_ProviderSubscriptionOfState = () => (__t$_ProviderSubscriptionOfState = dart.constFn(framework._ProviderSubscription$(State)))();
    var __t$JSArrayOf_ProviderSubscriptionOfState = () => (__t$JSArrayOf_ProviderSubscriptionOfState = dart.constFn(_interceptors.JSArray$(__t$_ProviderSubscriptionOfState())))();
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(framework.ResultData$(State)))();
    var __t$ResultErrorOfState = () => (__t$ResultErrorOfState = dart.constFn(framework.ResultError$(State)))();
    var __t$ResultErrorOfStateToNever = () => (__t$ResultErrorOfStateToNever = dart.constFn(dart.fnType(dart.Never, [__t$ResultErrorOfState()])))();
    var __t$ResultDataOfStateToState = () => (__t$ResultDataOfStateToState = dart.constFn(dart.fnType(State, [__t$ResultDataOfState()])))();
    var __t$ResultDataOfStateToNull = () => (__t$ResultDataOfStateToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfState()])))();
    var __t$ResultErrorOfStateToNull = () => (__t$ResultErrorOfStateToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultErrorOfState()])))();
    var __t$StateN = () => (__t$StateN = dart.constFn(dart.nullable(State)))();
    var __t$StateNAndStateTovoid = () => (__t$StateNAndStateTovoid = dart.constFn(dart.fnType(dart.void, [__t$StateN(), State])))();
    var __t$JSArrayOfStateNAndStateTovoid = () => (__t$JSArrayOfStateNAndStateTovoid = dart.constFn(_interceptors.JSArray$(__t$StateNAndStateTovoid())))();
    class ProviderElementBase extends core.Object {
      get [_provider]() {
        return this[_provider$];
      }
      set [_provider](value) {
        this[_provider$] = __t$ProviderBaseOfState().as(value);
      }
      get origin() {
        return this[_origin];
      }
      get [_origin]() {
        let t10;
        t10 = this[__ProviderElementBase__origin];
        return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_origin")) : t10;
      }
      set [_origin](t10) {
        this[__ProviderElementBase__origin] = t10;
      }
      get provider() {
        return this[_provider];
      }
      get container() {
        return this[_container];
      }
      get [_container]() {
        let t11;
        t11 = this[__ProviderElementBase__container];
        return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_container")) : t11;
      }
      set [_container](t11) {
        this[__ProviderElementBase__container] = t11;
      }
      get hasListeners() {
        return this[_listeners][$isNotEmpty] || this[_subscribers][$isNotEmpty] || this[_dependents][$isNotEmpty];
      }
      get mounted() {
        return this[_mounted];
      }
      get debugAssertDidSetStateEnabled() {
        return true;
      }
      setState(newState) {
        State.as(newState);
        if (!dart.fn(() => {
          this[_debugDidSetState] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 287, 12, "() {\n      _debugDidSetState = true;\n      return true;\n    }()");
        let previousResult = this.getState();
        let newResult = null;
        if (common.AsyncValue.is(newState) && previousResult != null) {
          let previousState = previousResult.requireState;
          newResult = new (__t$ResultDataOfState()).new(State.as(newState.copyWithPrevious(common.AsyncValue.as(previousState))));
        } else {
          newResult = new (__t$ResultDataOfState()).new(newState);
        }
        let result = this[_state] = newResult;
        if (this[_didBuild]) {
          this[_notifyListeners](result, previousResult);
        }
      }
      getState() {
        return this[_state];
      }
      get requireState() {
        if (!dart.fn(() => {
          if (this.debugAssertDidSetStateEnabled && !this[_debugDidSetState]) {
            dart.throw(new core.StateError.new("Tried to read the state of an uninitialized provider"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 315, 12, "() {\n      if (debugAssertDidSetStateEnabled && !_debugDidSetState) {\n        throw StateError(\n          'Tried to read the state of an uninitialized provider',\n        );\n      }\n      return true;\n    }()");
        let state = this.getState();
        if (state == null) {
          dart.throw(new core.StateError.new("uninitialized"));
        }
        return state.map(State, {error: dart.fn(error => framework._rethrowProviderError(error.error, error.stackTrace), __t$ResultErrorOfStateToNever()), data: dart.fn(data => data.state, __t$ResultDataOfStateToState())});
      }
      mount() {
        this[_mounted] = true;
        if (!dart.fn(() => {
          provider$.RiverpodBinding.debugInstance.providerListChangedFor({containerId: this.container[_debugId]});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 342, 12, "() {\n      RiverpodBinding.debugInstance\n          .providerListChangedFor(containerId: container._debugId);\n\n      return true;\n    }()");
        this[_buildState]();
        dart.nullCheck(this[_state]).map(core.Null, {data: dart.fn(newState => {
            let onChangeSelfListeners = this[_onChangeSelfListeners];
            if (onChangeSelfListeners != null) {
              for (let i = 0; i < onChangeSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Null, State, onChangeSelfListeners[$_get](i), null, newState.state);
              }
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            let onErrorSelfListeners = this[_onErrorSelfListeners];
            if (onErrorSelfListeners != null) {
              for (let i = 0; i < onErrorSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, onErrorSelfListeners[$_get](i), newState.error, newState.stackTrace);
              }
            }
          }, __t$ResultErrorOfStateToNull())});
      }
      update(newProvider) {
        __t$ProviderBaseOfState().as(newProvider);
        this[_provider] = newProvider;
      }
      invalidate(provider) {
        this[_container].invalidate(provider);
      }
      invalidateSelf() {
        if (this[_mustRecomputeState]) return;
        this[_mustRecomputeState] = true;
        this[_runOnDispose]();
        this[_container][_scheduler].scheduleProviderRefresh(this);
        this.visitChildren(dart.fn(element => element[_markDependencyMayHaveChanged](), T$.ProviderElementBaseTovoid()));
      }
      flush() {
        this[_maybeRebuildDependencies]();
        if (this[_mustRecomputeState]) {
          this[_mustRecomputeState] = false;
          this[_performBuild]();
        }
      }
      [_maybeRebuildDependencies]() {
        if (!this[_dependencyMayHaveChanged]) {
          return;
        }
        this[_dependencyMayHaveChanged] = false;
        this.visitAncestors(dart.fn(element => element.flush(), T$.ProviderElementBaseTovoid()));
      }
      [_performBuild]() {
        let t12;
        this[_previousDependencies] = this[_dependencies];
        this[_dependencies] = new (T$.LinkedMapOfProviderElementBase$Object()).new();
        let previousStateResult = this[_state];
        if (!dart.fn(() => {
          this[_debugDidSetState] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 434, 12, "() {\n      _debugDidSetState = false;\n      return true;\n    }()");
        this[_buildState]();
        if (this[_state] != previousStateResult) {
          if (!dart.fn(() => {
            this[_debugSkipNotifyListenersAsserts] = true;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[3], 441, 14, "() {\n        // Asserts would otherwise prevent a provider rebuild from updating\n        // other providers\n        _debugSkipNotifyListenersAsserts = true;\n        return true;\n      }()");
          this[_notifyListeners](dart.nullCheck(this[_state]), previousStateResult);
          if (!dart.fn(() => {
            this[_debugSkipNotifyListenersAsserts] = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[3], 448, 14, "() {\n        _debugSkipNotifyListenersAsserts = false;\n        return true;\n      }()");
        }
        for (let sub of dart.nullCheck(this[_previousDependencies])[$entries]) {
          t12 = sub.key;
          (() => {
            t12[_dependents][$remove](this);
            t12[_onRemoveListener]();
            return t12;
          })();
        }
        this[_previousDependencies] = null;
      }
      [_buildState]() {
        let debugPreviouslyBuildingElement = null;
        if (!dart.fn(() => {
          this[_debugDidChangeDependency] = false;
          debugPreviouslyBuildingElement = framework.ProviderElementBase._debugCurrentlyBuildingElement;
          framework.ProviderElementBase._debugCurrentlyBuildingElement = this;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 466, 12, "() {\n      _debugDidChangeDependency = false;\n      debugPreviouslyBuildingElement = _debugCurrentlyBuildingElement;\n      _debugCurrentlyBuildingElement = this;\n      return true;\n    }()");
        this[_didBuild] = false;
        try {
          this[_mounted] = true;
          this.setState(this[_provider].create(this));
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            if (!dart.fn(() => {
              this[_debugDidSetState] = true;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed("", I[3], 478, 14, "() {\n        _debugDidSetState = true;\n        return true;\n      }()");
            this[_state] = new (__t$ResultErrorOfState()).new(err, stack);
          } else
            throw e;
        } finally {
          this[_didBuild] = true;
          if (!dart.fn(() => {
            framework.ProviderElementBase._debugCurrentlyBuildingElement = debugPreviouslyBuildingElement;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[3], 485, 14, "() {\n        _debugCurrentlyBuildingElement = debugPreviouslyBuildingElement;\n        return true;\n      }()");
        }
      }
      [_notifyListeners](newState, previousStateResult) {
        let t13;
        if (!dart.fn(() => {
          let t13;
          if (this[_debugSkipNotifyListenersAsserts]) return true;
          if (!(framework.ProviderElementBase._debugCurrentlyBuildingElement == null || dart.equals(framework.ProviderElementBase._debugCurrentlyBuildingElement, this))) dart.assertFailed("Providers are not allowed to modify other providers during their initialization.\n\nThe provider " + dart.str(dart.nullCheck(framework.ProviderElementBase._debugCurrentlyBuildingElement).origin) + " modified " + dart.str(this.origin) + " while building.\n", I[3], 500, 11, "_debugCurrentlyBuildingElement == null ||\n              _debugCurrentlyBuildingElement == this");
          t13 = this.container.debugCanModifyProviders;
          t13 == null ? null : t13();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 496, 12, "() {\n      if (_debugSkipNotifyListenersAsserts) return true;\n\n      assert(\n          _debugCurrentlyBuildingElement == null ||\n              _debugCurrentlyBuildingElement == this,\n          '''\nProviders are not allowed to modify other providers during their initialization.\n\nThe provider ${_debugCurrentlyBuildingElement!.origin} modified $origin while building.\n''');\n\n      container.debugCanModifyProviders?.call();\n      return true;\n    }()");
        let previousState = (t13 = previousStateResult, t13 == null ? null : t13.stateOrNull);
        newState.map(core.Null, {data: dart.fn(newState => {
            let onChangeSelfListeners = this[_onChangeSelfListeners];
            if (onChangeSelfListeners != null) {
              for (let i = 0; i < onChangeSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(__t$StateN(), State, onChangeSelfListeners[$_get](i), previousState, newState.state);
              }
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            let onErrorSelfListeners = this[_onErrorSelfListeners];
            if (onErrorSelfListeners != null) {
              for (let i = 0; i < onErrorSelfListeners[$length]; i = i + 1) {
                async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, onErrorSelfListeners[$_get](i), newState.error, newState.stackTrace);
              }
            }
          }, __t$ResultErrorOfStateToNull())});
        if (previousStateResult != null && previousStateResult.hasState && newState.hasState && !this.provider.updateShouldNotify(State.as(previousState), newState.requireState)) {
          return;
        }
        let listeners = this[_listeners][$toList]({growable: false});
        let subscribers = this[_subscribers][$toList]({growable: false});
        newState.map(core.Null, {data: dart.fn(newState => {
            for (let i = 0; i < listeners[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(__t$StateN(), State, __t$StateNAndStateTovoid().as(listeners[$_get](i)[_listener$]), previousState, newState.state);
            }
            for (let i = 0; i < subscribers[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(__t$StateN(), State, subscribers[$_get](i).listener, previousState, newState.state);
            }
          }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
            for (let i = 0; i < listeners[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, listeners[$_get](i).onError, newState.error, newState.stackTrace);
            }
            for (let i = 0; i < subscribers[$length]; i = i + 1) {
              async.Zone.current.runBinaryGuarded(core.Object, core.StackTrace, subscribers[$_get](i).onError, newState.error, newState.stackTrace);
            }
          }, __t$ResultErrorOfStateToNull())});
        for (let i = 0; i < this[_dependents][$length]; i = i + 1) {
          this[_dependents][$_get](i)[_didChangeDependency]();
        }
        for (let observer of this[_container][_observers]) {
          framework._runQuaternaryGuarded(__t$ProviderBaseOfState(), __t$StateN(), __t$StateN(), framework.ProviderContainer, dart.bind(observer, 'didUpdateProvider'), this.provider, previousState, newState.stateOrNull, this[_container]);
        }
        for (let observer of this[_container][_observers]) {
          newState.map(core.Null, {data: dart.fn(_ => {
            }, __t$ResultDataOfStateToNull()), error: dart.fn(newState => {
              framework._runQuaternaryGuarded(__t$ProviderBaseOfState(), core.Object, core.StackTrace, framework.ProviderContainer, dart.bind(observer, 'providerDidFail'), this.provider, newState.error, newState.stackTrace, this[_container]);
            }, __t$ResultErrorOfStateToNull())});
        }
      }
      [_didChangeDependency]() {
        if (!dart.fn(() => {
          this[_debugDidChangeDependency] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 620, 12, "() {\n      _debugDidChangeDependency = true;\n      return true;\n    }()");
        if (this[_mustRecomputeState]) return;
        this.invalidateSelf();
      }
      [_markDependencyMayHaveChanged]() {
        if (this[_dependencyMayHaveChanged]) return;
        this[_dependencyMayHaveChanged] = true;
        this.visitChildren(dart.fn(element => element[_markDependencyMayHaveChanged](), T$.ProviderElementBaseTovoid()));
      }
      [_debugAssertCanDependOn](listenable) {
        if (!dart.fn(() => {
          if (!framework.ProviderBase.is(listenable)) return true;
          if (!!listenable.originProvider._equals(this.origin)) dart.assertFailed("A provider cannot depend on itself", I[3], 643, 9, "listenable.originProvider != origin");
          if (!(!this.provider._equals(this.origin) || this.origin.dependencies == null || dart.nullCheck(this.origin.dependencies)[$contains](listenable.from) || dart.nullCheck(this.origin.dependencies)[$contains](listenable))) dart.assertFailed("The provider " + dart.str(this.origin) + " tried to read " + dart.str(listenable) + ", but it specified a " + "'dependendencies' list yet that list does not contain " + dart.str(listenable) + ".\n\n" + "To fix, add " + dart.str(listenable) + " to " + dart.str(this.origin) + "'s 'dependencies' parameter", I[3], 648, 9, "provider != origin ||\n            origin.dependencies == null ||\n            origin.dependencies!.contains(listenable.from) ||\n            origin.dependencies!.contains(listenable)");
          let queue = T$.ListQueueOfProviderElementBase().from(this[_dependents]);
          while (queue[$isNotEmpty]) {
            let current = queue.removeFirst();
            queue.addAll(current[_dependents]);
            if (current.origin._equals(listenable)) {
              dart.throw(new framework.CircularDependencyError.__());
            }
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 639, 12, "() {\n      if (listenable is! ProviderBase) return true;\n\n      assert(\n        listenable.originProvider != origin,\n        'A provider cannot depend on itself',\n      );\n\n      assert(\n        provider != origin ||\n            origin.dependencies == null ||\n            origin.dependencies!.contains(listenable.from) ||\n            origin.dependencies!.contains(listenable),\n        'The provider $origin tried to read $listenable, but it specified a '\n        \"'dependendencies' list yet that list does not contain $listenable.\\n\\n\"\n        \"To fix, add $listenable to $origin's 'dependencies' parameter\",\n      );\n\n      final queue = Queue<ProviderElementBase>.from(_dependents);\n\n      while (queue.isNotEmpty) {\n        final current = queue.removeFirst();\n        queue.addAll(current._dependents);\n\n        if (current.origin == listenable) {\n          throw CircularDependencyError._();\n        }\n      }\n\n      return true;\n    }()");
        return true;
      }
      [_assertNotOutdated]() {
        if (!(this[_debugDidChangeDependency] === false)) dart.assertFailed("Cannot use ref functions after the dependency of a provider changed but before the provider rebuilt", I[3], 675, 7, "_debugDidChangeDependency == false");
      }
      refresh(T, provider) {
        this[_assertNotOutdated]();
        return this[_container].refresh(T, provider);
      }
      read(T, provider) {
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.read inside a selector", I[3], 689, 12, "!_debugIsRunningSelector");
        if (!this[_debugAssertCanDependOn](provider)) dart.assertFailed("", I[3], 690, 12, "_debugAssertCanDependOn(provider)");
        return this[_container].read(T, provider);
      }
      watch(T, listenable) {
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.watch inside a selector", I[3], 697, 12, "!_debugIsRunningSelector");
        if (!framework.ProviderBase$(T).is(listenable)) {
          let initialized = false;
          let firstValue = null;
          function firstValue$35get() {
            let t14;
            t14 = firstValue;
            return t14 == null ? dart.throw(new _internal.LateError.localNI("firstValue")) : t14;
          }
          dart.fn(firstValue$35get, dart.fnType(framework.Result$(T), []));
          function firstValue$35set(t15) {
            return firstValue = t15;
          }
          dart.fn(firstValue$35set, dart.fnType(dart.dynamic, [framework.Result$(T)]));
          this.listen(T, listenable, dart.fn((prev, value) => {
            if (initialized) {
              this[_didChangeDependency]();
            } else {
              firstValue$35set(new (framework.ResultData$(T)).new(value));
              initialized = true;
            }
          }, dart.fnType(dart.void, [dart.nullable(T), T])), {onError: dart.fn((err, stack) => {
              if (initialized) {
                this[_didChangeDependency]();
              } else {
                initialized = true;
                firstValue$35set(new (framework.ResultError$(T)).new(err, stack));
              }
            }, T$.ObjectAndStackTraceTovoid()), fireImmediately: true});
          return firstValue$35get().requireState;
        }
        if (!this[_debugAssertCanDependOn](listenable)) dart.assertFailed("", I[3], 727, 12, "_debugAssertCanDependOn(listenable)");
        let element = this[_container].readProviderElement(T, listenable);
        this[_dependencies][$putIfAbsent](element, dart.fn(() => {
          let t17, t17$;
          let previousSub = (t17 = this[_previousDependencies], t17 == null ? null : t17[$remove](element));
          if (previousSub != null) {
            return previousSub;
          }
          if (!dart.fn(() => {
            element.flush();
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[3], 736, 14, "() {\n        // Flushing the provider before adding a new dependency\n        // as otherwise this could cause false positives with certain asserts.\n        // It's done only in debug mode since `readSelf` will flush the value\n        // again anyway, and the only value of this flush is to not break asserts.\n        element.flush();\n        return true;\n      }()");
          t17$ = element;
          (() => {
            t17$[_onListen]();
            t17$[_dependents][$add](this);
            return t17$;
          })();
          return new core.Object.new();
        }, T$.VoidToObject()));
        return element.readSelf();
      }
      readProviderElement(T, provider) {
        return this[_container].readProviderElement(T, provider);
      }
      [_createSubscription](T, element, opts) {
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        element[_onListen]();
        let sub = new (framework._ProviderListener$(T)).__({listenedElement: element, dependentElement: this, listener: dart.fn((prev, value) => listener(dart.nullable(T).as(prev), T.as(value)), T$.ObjectNAndObjectNTovoid()), onError: onError});
        element[_subscribers][$add](sub);
        this[_subscriptions][$add](sub);
        return sub;
      }
      listen(T, listenable, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
        this[_assertNotOutdated]();
        if (!!framework._debugIsRunningSelector) dart.assertFailed("Cannot call ref.read inside a selector", I[3], 789, 12, "!_debugIsRunningSelector");
        if (!this[_debugAssertCanDependOn](listenable)) dart.assertFailed("", I[3], 790, 12, "_debugAssertCanDependOn(listenable)");
        return listenable.addListener(this, listener, {fireImmediately: fireImmediately, onError: onError});
      }
      listenSelf(listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        this[_onChangeSelfListeners] == null ? this[_onChangeSelfListeners] = __t$JSArrayOfStateNAndStateTovoid().of([]) : null;
        dart.nullCheck(this[_onChangeSelfListeners])[$add](listener);
        if (onError != null) {
          this[_onErrorSelfListeners] == null ? this[_onErrorSelfListeners] = T$.JSArrayOfObjectAndStackTraceTovoid().of([]) : null;
          dart.nullCheck(this[_onErrorSelfListeners])[$add](onError);
        }
      }
      readSelf() {
        this.flush();
        return this.requireState;
      }
      visitChildren(visitor) {
        for (let i = 0; i < this[_dependents][$length]; i = i + 1) {
          visitor(this[_dependents][$_get](i));
        }
        for (let i = 0; i < this[_subscribers][$length]; i = i + 1) {
          visitor(this[_subscribers][$_get](i).dependentElement);
        }
      }
      visitAncestors(visitor) {
        this[_dependencies][$keys][$forEach](visitor);
        for (let i = 0; i < this[_subscriptions][$length]; i = i + 1) {
          visitor(this[_subscriptions][$_get](i).listenedElement);
        }
      }
      dispose() {
        if (!dart.fn(() => {
          provider$.RiverpodBinding.debugInstance.providerListChangedFor({containerId: this.container[_debugId]});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[3], 864, 12, "() {\n      RiverpodBinding.debugInstance\n          .providerListChangedFor(containerId: container._debugId);\n      return true;\n    }()");
        this[_runOnDispose]();
        for (let sub of this[_dependencies][$entries]) {
          sub.key[_dependents][$remove](this);
          sub.key[_onRemoveListener]();
        }
        this[_dependencies][$clear]();
        this[_listeners][$clear]();
      }
      [_onListen]() {
        let t17, t17$;
        t17 = this[_onAddListeners];
        t17 == null ? null : t17[$forEach](C[0] || CT.C0);
        if (this[_didCancelOnce] && !this.hasListeners) {
          t17$ = this[_onResumeListeners];
          t17$ == null ? null : t17$[$forEach](C[0] || CT.C0);
        }
      }
      [_onRemoveListener]() {
        let t17, t17$;
        t17 = this[_onRemoveListeners];
        t17 == null ? null : t17[$forEach](C[0] || CT.C0);
        if (!this.hasListeners) {
          this[_didCancelOnce] = true;
          t17$ = this[_onCancelListeners];
          t17$ == null ? null : t17$[$forEach](C[0] || CT.C0);
        }
        this.mayNeedDispose();
      }
      mayNeedDispose() {
      }
      onDispose(listener) {
        this[_assertNotOutdated]();
        if (!this[_mounted]) {
          dart.throw(new core.StateError.new("Cannot call onDispose after a provider was dispose"));
        }
        this[_onDisposeListeners] == null ? this[_onDisposeListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onDisposeListeners])[$add](listener);
      }
      [_runOnDispose]() {
        let t17;
        if (!this[_mounted]) return;
        this[_mounted] = false;
        while (this[_subscriptions][$isNotEmpty]) {
          this[_subscriptions][$first].close();
        }
        t17 = this[_onDisposeListeners];
        t17 == null ? null : t17[$forEach](C[0] || CT.C0);
        for (let observer of this[_container][_observers]) {
          framework._runBinaryGuarded(T$.ProviderBaseOfObjectN(), framework.ProviderContainer, dart.bind(observer, 'didDisposeProvider'), this[_origin], this[_container]);
        }
        this[_onDisposeListeners] = null;
        this[_onCancelListeners] = null;
        this[_onResumeListeners] = null;
        this[_onAddListeners] = null;
        this[_onRemoveListeners] = null;
        this[_onChangeSelfListeners] = null;
        this[_onErrorSelfListeners] = null;
        this[_didCancelOnce] = false;
      }
      onAddListener(cb) {
        this[_onAddListeners] == null ? this[_onAddListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onAddListeners])[$add](cb);
      }
      onRemoveListener(cb) {
        this[_onRemoveListeners] == null ? this[_onRemoveListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onRemoveListeners])[$add](cb);
      }
      onCancel(cb) {
        this[_onCancelListeners] == null ? this[_onCancelListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onCancelListeners])[$add](cb);
      }
      onResume(cb) {
        this[_onResumeListeners] == null ? this[_onResumeListeners] = T$.JSArrayOfVoidTovoid().of([]) : null;
        dart.nullCheck(this[_onResumeListeners])[$add](cb);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(provider: " + dart.str(this.provider) + ", origin: " + dart.str(this.origin) + ")";
      }
    }
    (ProviderElementBase.new = function(_provider) {
      this[_debugSkipNotifyListenersAsserts] = false;
      this[__ProviderElementBase__origin] = null;
      this[__ProviderElementBase__container] = null;
      this[_listeners] = __t$JSArrayOf_ProviderSubscriptionOfState().of([]);
      this[_dependents] = T$.JSArrayOfProviderElementBase().of([]);
      this[_subscriptions] = T$.JSArrayOf_ProviderListener().of([]);
      this[_subscribers] = T$.JSArrayOf_ProviderListener().of([]);
      this[_dependencies] = new (T$.LinkedMapOfProviderElementBase$Object()).new();
      this[_previousDependencies] = null;
      this[_onDisposeListeners] = null;
      this[_onResumeListeners] = null;
      this[_onCancelListeners] = null;
      this[_onAddListeners] = null;
      this[_onRemoveListeners] = null;
      this[_onChangeSelfListeners] = null;
      this[_onErrorSelfListeners] = null;
      this[_mustRecomputeState] = false;
      this[_dependencyMayHaveChanged] = false;
      this[_debugDidChangeDependency] = false;
      this[_didCancelOnce] = false;
      this[_mounted] = false;
      this[_debugDidSetState] = false;
      this[_didBuild] = false;
      this[_state] = null;
      this[_provider$] = _provider;
      ;
    }).prototype = ProviderElementBase.prototype;
    dart.addTypeTests(ProviderElementBase);
    ProviderElementBase.prototype[_is_ProviderElementBase_default] = true;
    dart.addTypeCaches(ProviderElementBase);
    ProviderElementBase[dart.implements] = () => [framework.Ref$(State), framework.Node];
    dart.setMethodSignature(ProviderElementBase, () => ({
      __proto__: dart.getMethods(ProviderElementBase.__proto__),
      setState: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      getState: dart.fnType(dart.nullable(framework.Result$(State)), []),
      mount: dart.fnType(dart.void, []),
      update: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      invalidate: dart.fnType(dart.void, [framework.ProviderBase$(dart.nullable(core.Object))]),
      invalidateSelf: dart.fnType(dart.void, []),
      flush: dart.fnType(dart.void, []),
      [_maybeRebuildDependencies]: dart.fnType(dart.void, []),
      [_performBuild]: dart.fnType(dart.void, []),
      [_buildState]: dart.fnType(dart.void, []),
      [_notifyListeners]: dart.fnType(dart.void, [framework.Result$(State), dart.nullable(framework.Result$(State))]),
      [_didChangeDependency]: dart.fnType(dart.void, []),
      [_markDependencyMayHaveChanged]: dart.fnType(dart.void, []),
      [_debugAssertCanDependOn]: dart.fnType(core.bool, [framework.ProviderListenable]),
      [_assertNotOutdated]: dart.fnType(dart.void, []),
      refresh: dart.gFnType(T => [T, [framework.ProviderBase$(T)]], T => [dart.nullable(core.Object)]),
      read: dart.gFnType(T => [T, [framework.ProviderBase$(T)]], T => [dart.nullable(core.Object)]),
      watch: dart.gFnType(T => [T, [framework.ProviderListenable$(T)]], T => [dart.nullable(core.Object)]),
      readProviderElement: dart.gFnType(T => [framework.ProviderElementBase$(T), [framework.ProviderBase$(T)]], T => [dart.nullable(core.Object)]),
      [_createSubscription]: dart.gFnType(T => [framework.ProviderSubscription$(T), [framework.ProviderElementBase$(T)], {}, {listener: dart.fnType(dart.void, [dart.nullable(T), T]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}], T => [dart.nullable(core.Object)]),
      listen: dart.gFnType(T => [framework.ProviderSubscription$(T), [framework.ProviderListenable$(T), dart.fnType(dart.void, [dart.nullable(T), T])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], T => [dart.nullable(core.Object)]),
      listenSelf: dart.fnType(dart.void, [dart.fnType(dart.void, [dart.nullable(State), State])], {onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}),
      readSelf: dart.fnType(State, []),
      visitChildren: dart.fnType(dart.void, [dart.fnType(dart.void, [framework.ProviderElementBase])]),
      visitAncestors: dart.fnType(dart.void, [dart.fnType(dart.void, [framework.ProviderElementBase])]),
      dispose: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onRemoveListener]: dart.fnType(dart.void, []),
      mayNeedDispose: dart.fnType(dart.void, []),
      onDispose: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      [_runOnDispose]: dart.fnType(dart.void, []),
      onAddListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onRemoveListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onResume: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(ProviderElementBase, () => ({
      __proto__: dart.getGetters(ProviderElementBase.__proto__),
      origin: framework.ProviderBase$(dart.nullable(core.Object)),
      [_origin]: framework.ProviderBase$(dart.nullable(core.Object)),
      provider: framework.ProviderBase$(State),
      container: framework.ProviderContainer,
      [_container]: framework.ProviderContainer,
      hasListeners: core.bool,
      mounted: core.bool,
      debugAssertDidSetStateEnabled: core.bool,
      requireState: State
    }));
    dart.setSetterSignature(ProviderElementBase, () => ({
      __proto__: dart.getSetters(ProviderElementBase.__proto__),
      [_origin]: framework.ProviderBase$(dart.nullable(core.Object)),
      [_container]: framework.ProviderContainer
    }));
    dart.setLibraryUri(ProviderElementBase, I[0]);
    dart.setFieldSignature(ProviderElementBase, () => ({
      __proto__: dart.getFields(ProviderElementBase.__proto__),
      [_debugSkipNotifyListenersAsserts]: dart.fieldType(core.bool),
      [__ProviderElementBase__origin]: dart.fieldType(dart.nullable(framework.ProviderBase$(dart.nullable(core.Object)))),
      [_provider]: dart.fieldType(framework.ProviderBase$(State)),
      [__ProviderElementBase__container]: dart.fieldType(dart.nullable(framework.ProviderContainer)),
      [_listeners]: dart.finalFieldType(core.List$(framework._ProviderSubscription$(State))),
      [_dependents]: dart.finalFieldType(core.List$(framework.ProviderElementBase)),
      [_subscriptions]: dart.finalFieldType(core.List$(framework._ProviderListener)),
      [_subscribers]: dart.finalFieldType(core.List$(framework._ProviderListener)),
      [_dependencies]: dart.fieldType(collection.HashMap$(framework.ProviderElementBase, core.Object)),
      [_previousDependencies]: dart.fieldType(dart.nullable(collection.HashMap$(framework.ProviderElementBase, core.Object))),
      [_onDisposeListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onResumeListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onCancelListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onAddListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onRemoveListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [])))),
      [_onChangeSelfListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [dart.nullable(State), State])))),
      [_onErrorSelfListeners]: dart.fieldType(dart.nullable(core.List$(dart.fnType(dart.void, [core.Object, core.StackTrace])))),
      [_mustRecomputeState]: dart.fieldType(core.bool),
      [_dependencyMayHaveChanged]: dart.fieldType(core.bool),
      [_debugDidChangeDependency]: dart.fieldType(core.bool),
      [_didCancelOnce]: dart.fieldType(core.bool),
      [_mounted]: dart.fieldType(core.bool),
      [_debugDidSetState]: dart.fieldType(core.bool),
      [_didBuild]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(dart.nullable(framework.Result$(State)))
    }));
    dart.setStaticFieldSignature(ProviderElementBase, () => ['_debugCurrentlyBuildingElement']);
    dart.defineExtensionMethods(ProviderElementBase, ['toString']);
    return ProviderElementBase;
  });
  framework.ProviderElementBase = framework.ProviderElementBase$();
  dart.defineLazy(framework.ProviderElementBase, {
    /*framework.ProviderElementBase._debugCurrentlyBuildingElement*/get _debugCurrentlyBuildingElement() {
      return null;
    },
    set _debugCurrentlyBuildingElement(_) {}
  }, false);
  dart.addTypeTests(framework.ProviderElementBase, _is_ProviderElementBase_default);
  const _is_AutoDisposeProviderElementBase_default = Symbol('_is_AutoDisposeProviderElementBase_default');
  framework.AutoDisposeProviderElementBase$ = dart.generic(State => {
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(framework.ResultData$(State)))();
    var __t$StateN = () => (__t$StateN = dart.constFn(dart.nullable(State)))();
    var __t$StateNAndStateTovoid = () => (__t$StateNAndStateTovoid = dart.constFn(dart.fnType(dart.void, [__t$StateN(), State])))();
    class AutoDisposeProviderElementBase extends framework.ProviderElementBase$(State) {
      get [_cacheTime]() {
        let t7, t7$, t6;
        t6 = this[__AutoDisposeProviderElementBase__cacheTime];
        return t6 == null ? (t7$ = (t7 = framework.AutoDisposeProviderBase.as(this.provider).cacheTime, t7 == null ? this[_container].cacheTime : t7), this[__AutoDisposeProviderElementBase__cacheTime] == null ? this[__AutoDisposeProviderElementBase__cacheTime] = t7$ : dart.throw(new _internal.LateError.fieldADI("_cacheTime"))) : t6;
      }
      get [_disposeDelay]() {
        let t7, t7$, t6;
        t6 = this[__AutoDisposeProviderElementBase__disposeDelay];
        return t6 == null ? (t7$ = (t7 = framework.AutoDisposeProviderBase.as(this.provider).disposeDelay, t7 == null ? this[_container].disposeDelay : t7), this[__AutoDisposeProviderElementBase__disposeDelay] == null ? this[__AutoDisposeProviderElementBase__disposeDelay] = t7$ : dart.throw(new _internal.LateError.fieldADI("_disposeDelay"))) : t6;
      }
      get maintainState() {
        return this[_maintainState];
      }
      set maintainState(value) {
        this[_maintainState] = value;
        if (!value) this.mayNeedDispose();
      }
      keepAlive() {
        let link = null;
        function link$35get() {
          let t7;
          t7 = link;
          return t7 == null ? dart.throw(new _internal.LateError.localNI("link")) : t7;
        }
        dart.fn(link$35get, T$.VoidToKeepAliveLink());
        function link$35set(t8) {
          return link = t8;
        }
        dart.fn(link$35set, T$.KeepAliveLinkTodynamic());
        link$35set(new framework.KeepAliveLink.__(dart.fn(() => {
          this[_keepAliveLinks][$remove](link$35get());
          if (this[_keepAliveLinks][$isEmpty]) this.mayNeedDispose();
        }, T$.VoidTovoid())));
        this[_keepAliveLinks][$add](link$35get());
        return link$35get();
      }
      mayNeedDispose() {
        if (!this.maintainState && !this.hasListeners && this[_keepAliveLinks][$isEmpty]) {
          this[_container][_scheduler].scheduleProviderDispose(this);
        }
      }
      [_buildState]() {
        super[_buildState]();
        if (!this[_disposeDelay]._equals(core.Duration.zero)) {
          if (!(this[_disposeDelayLink] == null || !this[_keepAliveLinks][$contains](this[_disposeDelayLink]))) dart.assertFailed("Bad state", I[2], 162, 9, "_disposeDelayLink == null ||\n            !_keepAliveLinks.contains(_disposeDelayLink)");
          this[_disposeDelayLink] = this.keepAlive();
          this.onCancel(dart.fn(() => {
            if (!(this[_disposeDelayLink] != null)) dart.assertFailed("Bad state", I[2], 169, 16, "_disposeDelayLink != null");
            if (!(this[_disposeDelayTimer] == null)) dart.assertFailed("Bad state", I[2], 170, 16, "_disposeDelayTimer == null");
            this[_disposeDelayTimer] = async.Timer.new(this[_disposeDelay], dart.fn(() => {
              this[_disposeDelayTimer] = null;
              dart.nullCheck(this[_disposeDelayLink]).close();
              this[_disposeDelayLink] = null;
            }, T$.VoidTovoid()));
          }, T$.VoidTovoid()));
          this.onResume(dart.fn(() => {
            let t10;
            t10 = this[_disposeDelayTimer];
            t10 == null ? null : t10.cancel();
            this[_disposeDelayTimer] = null;
            this[_disposeDelayLink] == null ? this[_disposeDelayLink] = this.keepAlive() : null;
          }, T$.VoidTovoid()));
        }
        if (!this[_cacheTime]._equals(core.Duration.zero)) {
          let link = null;
          this.listenSelf(dart.fn((previous, next) => {
            let t10;
            link == null ? link = this.keepAlive() : null;
            t10 = this[_cacheTimer];
            t10 == null ? null : t10.cancel();
            this[_cacheTimer] = async.Timer.new(this[_cacheTime], dart.fn(() => {
              dart.nullCheck(link).close();
              link = null;
              this[_cacheTimer] = null;
              let state = dart.nullCheck(this[_state]).requireState;
              if (common.AsyncValue.is(state)) {
                this[_state] = new (__t$ResultDataOfState()).new(State.as(state.unwrapPrevious()));
              }
            }, T$.VoidTovoid()));
          }, __t$StateNAndStateTovoid()), {onError: dart.fn((err, stack) => {
              let t10;
              link == null ? link = this.keepAlive() : null;
              t10 = this[_cacheTimer];
              t10 == null ? null : t10.cancel();
              this[_cacheTimer] = async.Timer.new(this[_cacheTime], dart.fn(() => {
                dart.nullCheck(link).close();
                link = null;
                this[_cacheTimer] = null;
              }, T$.VoidTovoid()));
            }, T$.ObjectAndStackTraceTovoid())});
        }
      }
      [_runOnDispose]() {
        this[_keepAliveLinks][$clear]();
        super[_runOnDispose]();
        if (!this[_keepAliveLinks][$isEmpty]) dart.assertFailed("Cannot call keepAlive() within onDispose listeners", I[2], 234, 7, "_keepAliveLinks.isEmpty");
      }
    }
    (AutoDisposeProviderElementBase.new = function(provider) {
      this[_keepAliveLinks] = T$.JSArrayOfKeepAliveLink().of([]);
      this[_maintainState] = false;
      this[__AutoDisposeProviderElementBase__cacheTime] = null;
      this[__AutoDisposeProviderElementBase__cacheTime_isSet] = false;
      this[__AutoDisposeProviderElementBase__disposeDelay] = null;
      this[__AutoDisposeProviderElementBase__disposeDelay_isSet] = false;
      this[_cacheTimer] = null;
      this[_disposeDelayLink] = null;
      this[_disposeDelayTimer] = null;
      AutoDisposeProviderElementBase.__proto__.new.call(this, provider);
      ;
    }).prototype = AutoDisposeProviderElementBase.prototype;
    dart.addTypeTests(AutoDisposeProviderElementBase);
    AutoDisposeProviderElementBase.prototype[_is_AutoDisposeProviderElementBase_default] = true;
    dart.addTypeCaches(AutoDisposeProviderElementBase);
    AutoDisposeProviderElementBase[dart.implements] = () => [framework.AutoDisposeRef$(State)];
    dart.setMethodSignature(AutoDisposeProviderElementBase, () => ({
      __proto__: dart.getMethods(AutoDisposeProviderElementBase.__proto__),
      keepAlive: dart.fnType(framework.KeepAliveLink, [])
    }));
    dart.setGetterSignature(AutoDisposeProviderElementBase, () => ({
      __proto__: dart.getGetters(AutoDisposeProviderElementBase.__proto__),
      [_cacheTime]: core.Duration,
      [_disposeDelay]: core.Duration,
      maintainState: core.bool
    }));
    dart.setSetterSignature(AutoDisposeProviderElementBase, () => ({
      __proto__: dart.getSetters(AutoDisposeProviderElementBase.__proto__),
      maintainState: core.bool
    }));
    dart.setLibraryUri(AutoDisposeProviderElementBase, I[0]);
    dart.setFieldSignature(AutoDisposeProviderElementBase, () => ({
      __proto__: dart.getFields(AutoDisposeProviderElementBase.__proto__),
      [_keepAliveLinks]: dart.finalFieldType(core.List$(framework.KeepAliveLink)),
      [_maintainState]: dart.fieldType(core.bool),
      [__AutoDisposeProviderElementBase__cacheTime]: dart.fieldType(dart.nullable(core.Duration)),
      [__AutoDisposeProviderElementBase__cacheTime_isSet]: dart.fieldType(core.bool),
      [__AutoDisposeProviderElementBase__disposeDelay]: dart.fieldType(dart.nullable(core.Duration)),
      [__AutoDisposeProviderElementBase__disposeDelay_isSet]: dart.fieldType(core.bool),
      [_cacheTimer]: dart.fieldType(dart.nullable(async.Timer)),
      [_disposeDelayLink]: dart.fieldType(dart.nullable(framework.KeepAliveLink)),
      [_disposeDelayTimer]: dart.fieldType(dart.nullable(async.Timer))
    }));
    return AutoDisposeProviderElementBase;
  });
  framework.AutoDisposeProviderElementBase = framework.AutoDisposeProviderElementBase$();
  dart.addTypeTests(framework.AutoDisposeProviderElementBase, _is_AutoDisposeProviderElementBase_default);
  var _close$ = dart.privateName(framework, "_close");
  framework.KeepAliveLink = class KeepAliveLink extends core.Object {
    static ['_#_#tearOff'](_close) {
      return new framework.KeepAliveLink.__(_close);
    }
    close() {
      return this[_close$]();
    }
  };
  (framework.KeepAliveLink.__ = function(_close) {
    this[_close$] = _close;
    ;
  }).prototype = framework.KeepAliveLink.prototype;
  dart.addTypeTests(framework.KeepAliveLink);
  dart.addTypeCaches(framework.KeepAliveLink);
  dart.setMethodSignature(framework.KeepAliveLink, () => ({
    __proto__: dart.getMethods(framework.KeepAliveLink.__proto__),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(framework.KeepAliveLink, I[0]);
  dart.setFieldSignature(framework.KeepAliveLink, () => ({
    __proto__: dart.getFields(framework.KeepAliveLink.__proto__),
    [_close$]: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const _is__AsyncSelector_default = Symbol('_is__AsyncSelector_default');
  framework._AsyncSelector$ = dart.generic((Input, Output) => {
    var __t$AsyncDataOfInput = () => (__t$AsyncDataOfInput = dart.constFn(common.AsyncData$(Input)))();
    var __t$AsyncDataOfInputToNull = () => (__t$AsyncDataOfInputToNull = dart.constFn(dart.fnType(core.Null, [__t$AsyncDataOfInput()])))();
    var __t$AsyncErrorOfInput = () => (__t$AsyncErrorOfInput = dart.constFn(common.AsyncError$(Input)))();
    var __t$AsyncErrorOfInputToNull = () => (__t$AsyncErrorOfInputToNull = dart.constFn(dart.fnType(core.Null, [__t$AsyncErrorOfInput()])))();
    var __t$AsyncValueOfInput = () => (__t$AsyncValueOfInput = dart.constFn(common.AsyncValue$(Input)))();
    var __t$AsyncValueOfInput__Tovoid = () => (__t$AsyncValueOfInput__Tovoid = dart.constFn(dart.fnType(dart.void, [__t$AsyncValueOfInput()], {callListeners: core.bool}, {})))();
    var __t$AsyncValueNOfInput = () => (__t$AsyncValueNOfInput = dart.constFn(dart.nullable(__t$AsyncValueOfInput())))();
    var __t$AsyncValueNOfInputAndAsyncValueOfInputTovoid = () => (__t$AsyncValueNOfInputAndAsyncValueOfInputTovoid = dart.constFn(dart.fnType(dart.void, [__t$AsyncValueNOfInput(), __t$AsyncValueOfInput()])))();
    var __t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput = () => (__t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput = dart.constFn(framework._SelectorSubscription$(__t$AsyncValueOfInput(), __t$FutureOfOutput())))();
    var __t$ResultDataOfOutput = () => (__t$ResultDataOfOutput = dart.constFn(framework.ResultData$(Output)))();
    var __t$ResultErrorOfOutput = () => (__t$ResultErrorOfOutput = dart.constFn(framework.ResultError$(Output)))();
    var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
    var __t$Output__Tovoid = () => (__t$Output__Tovoid = dart.constFn(dart.fnType(dart.void, [Output], {}, {callListeners: core.bool})))();
    var __t$CompleterOfOutput = () => (__t$CompleterOfOutput = dart.constFn(async.Completer$(Output)))();
    var __t$ResultDataOfOutputToNull = () => (__t$ResultDataOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultDataOfOutput()])))();
    var __t$ResultErrorOfOutputToNull = () => (__t$ResultErrorOfOutputToNull = dart.constFn(dart.fnType(core.Null, [__t$ResultErrorOfOutput()])))();
    var __t$VoidToFutureOfOutput = () => (__t$VoidToFutureOfOutput = dart.constFn(dart.fnType(__t$FutureOfOutput(), [])))();
    const Object_ProviderListenable$36 = class Object_ProviderListenable extends core.Object {};
    (Object_ProviderListenable$36.new = function() {
    }).prototype = Object_ProviderListenable$36.prototype;
    dart.applyMixin(Object_ProviderListenable$36, framework.ProviderListenable$(async.Future$(Output)));
    class _AsyncSelector extends Object_ProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AsyncSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      [_select](value) {
        let t17;
        if (!dart.fn(() => {
          framework._debugIsRunningSelector = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed("", I[4], 71, 12, "() {\n      _debugIsRunningSelector = true;\n      return true;\n    }()");
        try {
          return new (__t$ResultDataOfOutput()).new((t17 = value, this.selector(t17)));
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$ResultErrorOfOutput()).new(err, stack);
          } else
            throw e;
        } finally {
          if (!dart.fn(() => {
            framework._debugIsRunningSelector = false;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[4], 81, 14, "() {\n        _debugIsRunningSelector = false;\n        return true;\n      }()");
        }
      }
      addListener(node, listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
        let lastSelectedValue = null;
        let selectedCompleter = null;
        let selectedFuture = null;
        function emitData(data, opts) {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : null;
          let previousFuture = selectedFuture;
          if (selectedCompleter != null) {
            dart.nullCheck(selectedCompleter).complete(data);
            selectedCompleter = null;
          } else {
            selectedFuture = __t$FutureOfOutput().value(data);
            if (callListeners) listener(previousFuture, dart.nullCheck(selectedFuture));
          }
        }
        dart.fn(emitData, __t$Output__Tovoid());
        function emitError(err, stack, opts) {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : null;
          let previousFuture = selectedFuture;
          if (selectedCompleter != null) {
            dart.nullCheck(selectedCompleter).completeError(err, stack);
            selectedCompleter = null;
          } else {
            selectedFuture = __t$FutureOfOutput().error(err, stack);
            if (callListeners) listener(previousFuture, dart.nullCheck(selectedFuture));
          }
        }
        dart.fn(emitError, T$.ObjectAndStackTraceN__Tovoid());
        const playValue = (value, opts) => {
          let callListeners = opts && 'callListeners' in opts ? opts.callListeners : true;
          function onLoading(loading) {
            if (selectedFuture == null) {
              selectedCompleter = __t$CompleterOfOutput().new();
              selectedFuture = dart.nullCheck(selectedCompleter).future;
            }
          }
          dart.fn(onLoading, T$.AsyncValueOfvoidTovoid());
          value.map(dart.void, {loading: onLoading, data: dart.fn(value => {
              if (common['AsyncValueX|get#isRefreshing'](Input, value)) {
                onLoading(value);
                return;
              }
              let newSelectedValue = this[_select](value.value);
              newSelectedValue.map(core.Null, {data: dart.fn(newSelectedValue => {
                  if (!newSelectedValue._equals(lastSelectedValue)) {
                    emitData(newSelectedValue.state, {callListeners: callListeners});
                  }
                }, __t$ResultDataOfOutputToNull()), error: dart.fn(newSelectedValue => {
                  emitError(newSelectedValue.error, newSelectedValue.stackTrace, {callListeners: callListeners});
                }, __t$ResultErrorOfOutputToNull())});
              lastSelectedValue = newSelectedValue;
            }, __t$AsyncDataOfInputToNull()), error: dart.fn(value => {
              let t18;
              if (common['AsyncValueX|get#isRefreshing'](Input, value)) {
                onLoading(value);
                return;
              }
              let stack = (t18 = value.stackTrace, t18 == null ? core.StackTrace.empty : t18);
              emitError(value.error, stack, {callListeners: callListeners});
              async['FutureExtensions|ignore'](Output, dart.nullCheck(selectedFuture));
            }, __t$AsyncErrorOfInputToNull())});
        };
        dart.fn(playValue, __t$AsyncValueOfInput__Tovoid());
        let sub = node.listen(__t$AsyncValueOfInput(), this.provider, dart.fn((prev, input) => playValue(input), __t$AsyncValueNOfInputAndAsyncValueOfInputTovoid()), {onError: onError});
        playValue(sub.read(), {callListeners: false});
        if (fireImmediately) {
          listener(null, dart.nullCheck(selectedFuture));
        }
        return new (__t$_SelectorSubscriptionOfAsyncValueOfInput$FutureOfOutput()).new(sub, dart.fn(() => dart.nullCheck(selectedFuture), __t$VoidToFutureOfOutput()));
      }
    }
    (_AsyncSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      this.provider = provider;
      this.selector = selector;
      ;
    }).prototype = _AsyncSelector.prototype;
    dart.addTypeTests(_AsyncSelector);
    _AsyncSelector.prototype[_is__AsyncSelector_default] = true;
    dart.addTypeCaches(_AsyncSelector);
    dart.setMethodSignature(_AsyncSelector, () => ({
      __proto__: dart.getMethods(_AsyncSelector.__proto__),
      [_select]: dart.fnType(framework.Result$(Output), [Input]),
      addListener: dart.fnType(framework._SelectorSubscription$(common.AsyncValue$(Input), async.Future$(Output)), [framework.Node, dart.fnType(dart.void, [dart.nullable(async.Future$(Output)), async.Future$(Output)])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {})
    }));
    dart.setLibraryUri(_AsyncSelector, I[0]);
    dart.setFieldSignature(_AsyncSelector, () => ({
      __proto__: dart.getFields(_AsyncSelector.__proto__),
      provider: dart.finalFieldType(framework.ProviderListenable$(common.AsyncValue$(Input))),
      selector: dart.finalFieldType(dart.fnType(Output, [Input]))
    }));
    return _AsyncSelector;
  });
  framework._AsyncSelector = framework._AsyncSelector$();
  dart.addTypeTests(framework._AsyncSelector, _is__AsyncSelector_default);
  const _is__AlwaysAliveAsyncSelector_default = Symbol('_is__AlwaysAliveAsyncSelector_default');
  framework._AlwaysAliveAsyncSelector$ = dart.generic((Input, Output) => {
    const _AsyncSelector_AlwaysAliveProviderListenable$36 = class _AsyncSelector_AlwaysAliveProviderListenable extends framework._AsyncSelector$(Input, Output) {};
    (_AsyncSelector_AlwaysAliveProviderListenable$36.new = function(opts) {
      _AsyncSelector_AlwaysAliveProviderListenable$36.__proto__.new.call(this, opts);
    }).prototype = _AsyncSelector_AlwaysAliveProviderListenable$36.prototype;
    dart.applyMixin(_AsyncSelector_AlwaysAliveProviderListenable$36, framework.AlwaysAliveProviderListenable$(async.Future$(Output)));
    class _AlwaysAliveAsyncSelector extends _AsyncSelector_AlwaysAliveProviderListenable$36 {
      static ['_#new#tearOff'](Input, Output, opts) {
        let provider = opts && 'provider' in opts ? opts.provider : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({provider: provider, selector: selector});
      }
      select(Selected, selector) {
        return super.select(Selected, selector);
      }
    }
    (_AlwaysAliveAsyncSelector.new = function(opts) {
      let provider = opts && 'provider' in opts ? opts.provider : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      _AlwaysAliveAsyncSelector.__proto__.new.call(this, {provider: provider, selector: selector});
      ;
    }).prototype = _AlwaysAliveAsyncSelector.prototype;
    dart.addTypeTests(_AlwaysAliveAsyncSelector);
    _AlwaysAliveAsyncSelector.prototype[_is__AlwaysAliveAsyncSelector_default] = true;
    dart.addTypeCaches(_AlwaysAliveAsyncSelector);
    dart.setMethodSignature(_AlwaysAliveAsyncSelector, () => ({
      __proto__: dart.getMethods(_AlwaysAliveAsyncSelector.__proto__),
      select: dart.gFnType(Selected => [framework.AlwaysAliveProviderListenable$(Selected), [dart.fnType(Selected, [async.Future$(Output)])]], Selected => [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_AlwaysAliveAsyncSelector, I[0]);
    return _AlwaysAliveAsyncSelector;
  });
  framework._AlwaysAliveAsyncSelector = framework._AlwaysAliveAsyncSelector$();
  dart.addTypeTests(framework._AlwaysAliveAsyncSelector, _is__AlwaysAliveAsyncSelector_default);
  var _closed = dart.privateName(framework, "_closed");
  var _listenedElement$ = dart.privateName(framework, "_listenedElement");
  const _is__ProviderSubscription_default = Symbol('_is__ProviderSubscription_default');
  framework._ProviderSubscription$ = dart.generic(State => {
    class _ProviderSubscription extends core.Object {
      static ['_#_#tearOff'](State, _listenedElement, _listener, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (framework._ProviderSubscription$(State)).__(_listenedElement, _listener, {onError: onError});
      }
      close() {
        this[_closed] = true;
        this[_listenedElement$][_listeners][$remove](this);
        this[_listenedElement$][_onRemoveListener]();
      }
      read() {
        if (this[_closed]) {
          dart.throw(new core.StateError.new("called ProviderSubscription.read on a subscription that was closed"));
        }
        return this[_listenedElement$].readSelf();
      }
    }
    (_ProviderSubscription.__ = function(_listenedElement, _listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this[_closed] = false;
      this[_listenedElement$] = _listenedElement;
      this[_listener$] = _listener;
      this.onError = onError;
      ;
    }).prototype = _ProviderSubscription.prototype;
    dart.addTypeTests(_ProviderSubscription);
    _ProviderSubscription.prototype[_is__ProviderSubscription_default] = true;
    dart.addTypeCaches(_ProviderSubscription);
    _ProviderSubscription[dart.implements] = () => [framework.ProviderSubscription$(State)];
    dart.setMethodSignature(_ProviderSubscription, () => ({
      __proto__: dart.getMethods(_ProviderSubscription.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(State, [])
    }));
    dart.setLibraryUri(_ProviderSubscription, I[0]);
    dart.setFieldSignature(_ProviderSubscription, () => ({
      __proto__: dart.getFields(_ProviderSubscription.__proto__),
      [_listener$]: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(State), State])),
      [_listenedElement$]: dart.finalFieldType(framework.ProviderElementBase$(State)),
      onError: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace])),
      [_closed]: dart.fieldType(core.bool)
    }));
    return _ProviderSubscription;
  });
  framework._ProviderSubscription = framework._ProviderSubscription$();
  dart.addTypeTests(framework._ProviderSubscription, _is__ProviderSubscription_default);
  const _is__ProviderListener_default = Symbol('_is__ProviderListener_default');
  framework._ProviderListener$ = dart.generic(State => {
    class _ProviderListener extends core.Object {
      static ['_#_#tearOff'](State, opts) {
        let listenedElement = opts && 'listenedElement' in opts ? opts.listenedElement : null;
        let dependentElement = opts && 'dependentElement' in opts ? opts.dependentElement : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (framework._ProviderListener$(State)).__({listenedElement: listenedElement, dependentElement: dependentElement, listener: listener, onError: onError});
      }
      close() {
        let t18;
        this.dependentElement[_subscriptions][$remove](this);
        t18 = this.listenedElement;
        (() => {
          t18[_subscribers][$remove](this);
          t18[_onRemoveListener]();
          return t18;
        })();
      }
      read() {
        return this.listenedElement.readSelf();
      }
    }
    (_ProviderListener.__ = function(opts) {
      let listenedElement = opts && 'listenedElement' in opts ? opts.listenedElement : null;
      let dependentElement = opts && 'dependentElement' in opts ? opts.dependentElement : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this.listenedElement = listenedElement;
      this.dependentElement = dependentElement;
      this.listener = listener;
      this.onError = onError;
      ;
    }).prototype = _ProviderListener.prototype;
    dart.addTypeTests(_ProviderListener);
    _ProviderListener.prototype[_is__ProviderListener_default] = true;
    dart.addTypeCaches(_ProviderListener);
    _ProviderListener[dart.implements] = () => [framework.ProviderSubscription$(State)];
    dart.setMethodSignature(_ProviderListener, () => ({
      __proto__: dart.getMethods(_ProviderListener.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(State, [])
    }));
    dart.setLibraryUri(_ProviderListener, I[0]);
    dart.setFieldSignature(_ProviderListener, () => ({
      __proto__: dart.getFields(_ProviderListener.__proto__),
      listener: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)])),
      dependentElement: dart.finalFieldType(framework.ProviderElementBase$(dart.nullable(core.Object))),
      listenedElement: dart.finalFieldType(framework.ProviderElementBase$(State)),
      onError: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace]))
    }));
    return _ProviderListener;
  });
  framework._ProviderListener = framework._ProviderListener$();
  dart.addTypeTests(framework._ProviderListener, _is__ProviderListener_default);
  const _is_OverrideWithValueMixin_default = Symbol('_is_OverrideWithValueMixin_default');
  framework.OverrideWithValueMixin$ = dart.generic(State => {
    var __t$ValueProviderOfState = () => (__t$ValueProviderOfState = dart.constFn(value_provider.ValueProvider$(State)))();
    class OverrideWithValueMixin extends framework.ProviderBase$(State) {}
    OverrideWithValueMixin[dart.mixinOn] = ProviderBase => class OverrideWithValueMixin extends ProviderBase {
      overrideWithValue(value) {
        State.as(value);
        return new framework.ProviderOverride.new({origin: this, override: new (__t$ValueProviderOfState()).new(value)});
      }
    };
    dart.addTypeTests(OverrideWithValueMixin);
    OverrideWithValueMixin.prototype[_is_OverrideWithValueMixin_default] = true;
    dart.addTypeCaches(OverrideWithValueMixin);
    OverrideWithValueMixin[dart.implements] = () => [framework.ProviderBase$(State)];
    dart.setMethodSignature(OverrideWithValueMixin, () => ({
      __proto__: dart.getMethods(OverrideWithValueMixin.__proto__),
      overrideWithValue: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(OverrideWithValueMixin, I[0]);
    return OverrideWithValueMixin;
  });
  framework.OverrideWithValueMixin = framework.OverrideWithValueMixin$();
  dart.addTypeTests(framework.OverrideWithValueMixin, _is_OverrideWithValueMixin_default);
  const _is_OverrideWithProviderMixin_default = Symbol('_is_OverrideWithProviderMixin_default');
  framework.OverrideWithProviderMixin$ = dart.generic((State, ProviderType) => {
    class OverrideWithProviderMixin extends core.Object {}
    OverrideWithProviderMixin[dart.mixinOn] = Object => class OverrideWithProviderMixin extends Object {
      overrideWithProvider(value) {
        ProviderType.as(value);
        if (!(value.originProvider.dependencies == null)) dart.assertFailed("When using overrideWithProvider, the override cannot specify `dependencies`.", I[3], 1071, 7, "value.originProvider.dependencies == null");
        return new framework.ProviderOverride.new({origin: this.originProvider, override: value.originProvider});
      }
    };
    (OverrideWithProviderMixin[dart.mixinNew] = function() {
    }).prototype = OverrideWithProviderMixin.prototype;
    dart.addTypeTests(OverrideWithProviderMixin);
    OverrideWithProviderMixin.prototype[_is_OverrideWithProviderMixin_default] = true;
    dart.addTypeCaches(OverrideWithProviderMixin);
    OverrideWithProviderMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(OverrideWithProviderMixin, () => ({
      __proto__: dart.getMethods(OverrideWithProviderMixin.__proto__),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(OverrideWithProviderMixin, I[0]);
    return OverrideWithProviderMixin;
  });
  framework.OverrideWithProviderMixin = framework.OverrideWithProviderMixin$();
  dart.addTypeTests(framework.OverrideWithProviderMixin, _is_OverrideWithProviderMixin_default);
  const _is_Result_default = Symbol('_is_Result_default');
  framework.Result$ = dart.generic(State => {
    class Result extends core.Object {
      static ['_#data#tearOff'](State, state) {
        return new (framework.ResultData$(State)).new(state);
      }
      static ['_#error#tearOff'](State, error, stackTrace) {
        return new (framework.ResultError$(State)).new(error, stackTrace);
      }
      static guard(State, cb) {
        try {
          return new (framework.ResultData$(State)).new(cb());
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (framework.ResultError$(State)).new(err, stack);
          } else
            throw e;
        }
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.addTypeCaches(Result);
    dart.setStaticMethodSignature(Result, () => ['data', 'error', 'guard']);
    dart.setLibraryUri(Result, I[0]);
    dart.setStaticFieldSignature(Result, () => ['_redirecting#']);
    return Result;
  });
  framework.Result = framework.Result$();
  dart.addTypeTests(framework.Result, _is_Result_default);
  var state$ = dart.privateName(framework, "ResultData.state");
  const _is_ResultData_default = Symbol('_is_ResultData_default');
  framework.ResultData$ = dart.generic(State => {
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(framework.ResultData$(State)))();
    class ResultData extends core.Object {
      get state() {
        return this[state$];
      }
      set state(value) {
        super.state = value;
      }
      static ['_#new#tearOff'](State, state) {
        return new (framework.ResultData$(State)).new(state);
      }
      get hasState() {
        return true;
      }
      get stateOrNull() {
        return this.state;
      }
      get requireState() {
        return this.state;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return data(this);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$ResultDataOfState().is(other) && dart.runtimeType(other)._equals(this[$runtimeType]) && dart.equals(other.state, this.state);
      }
      get hashCode() {
        return core.Object.hash(this[$runtimeType], this.state);
      }
    }
    (ResultData.new = function(state) {
      this[state$] = state;
      ;
    }).prototype = ResultData.prototype;
    dart.addTypeTests(ResultData);
    ResultData.prototype[_is_ResultData_default] = true;
    dart.addTypeCaches(ResultData);
    ResultData[dart.implements] = () => [framework.Result$(State)];
    dart.setMethodSignature(ResultData, () => ({
      __proto__: dart.getMethods(ResultData.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [framework.ResultData$(State)]), error: dart.fnType(R, [framework.ResultError$(State)])}], R => [dart.nullable(core.Object)]),
      _equals: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$_equals]: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ResultData, () => ({
      __proto__: dart.getGetters(ResultData.__proto__),
      hasState: core.bool,
      stateOrNull: dart.nullable(State),
      requireState: State
    }));
    dart.setLibraryUri(ResultData, I[0]);
    dart.setFieldSignature(ResultData, () => ({
      __proto__: dart.getFields(ResultData.__proto__),
      state: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(ResultData, ['_equals']);
    dart.defineExtensionAccessors(ResultData, ['hashCode']);
    return ResultData;
  });
  framework.ResultData = framework.ResultData$();
  dart.addTypeTests(framework.ResultData, _is_ResultData_default);
  var error$ = dart.privateName(framework, "ResultError.error");
  var stackTrace$ = dart.privateName(framework, "ResultError.stackTrace");
  const _is_ResultError_default = Symbol('_is_ResultError_default');
  framework.ResultError$ = dart.generic(State => {
    var __t$ResultErrorOfState = () => (__t$ResultErrorOfState = dart.constFn(framework.ResultError$(State)))();
    class ResultError extends core.Object {
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static ['_#new#tearOff'](State, error, stackTrace) {
        return new (framework.ResultError$(State)).new(error, stackTrace);
      }
      get hasState() {
        return false;
      }
      get stateOrNull() {
        return null;
      }
      get requireState() {
        return dart.throw(this.error);
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        return error(this);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$ResultErrorOfState().is(other) && dart.runtimeType(other)._equals(this[$runtimeType]) && other.stackTrace[$_equals](this.stackTrace) && other.error[$_equals](this.error);
      }
      get hashCode() {
        return core.Object.hash(this[$runtimeType], this.error, this.stackTrace);
      }
    }
    (ResultError.new = function(error, stackTrace) {
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      ;
    }).prototype = ResultError.prototype;
    dart.addTypeTests(ResultError);
    ResultError.prototype[_is_ResultError_default] = true;
    dart.addTypeCaches(ResultError);
    ResultError[dart.implements] = () => [framework.Result$(State)];
    dart.setMethodSignature(ResultError, () => ({
      __proto__: dart.getMethods(ResultError.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [framework.ResultData$(State)]), error: dart.fnType(R, [framework.ResultError$(State)])}], R => [dart.nullable(core.Object)]),
      _equals: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$_equals]: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ResultError, () => ({
      __proto__: dart.getGetters(ResultError.__proto__),
      hasState: core.bool,
      stateOrNull: dart.nullable(State),
      requireState: State
    }));
    dart.setLibraryUri(ResultError, I[0]);
    dart.setFieldSignature(ResultError, () => ({
      __proto__: dart.getFields(ResultError.__proto__),
      error: dart.finalFieldType(core.Object),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(ResultError, ['_equals']);
    dart.defineExtensionAccessors(ResultError, ['hashCode']);
    return ResultError;
  });
  framework.ResultError = framework.ResultError$();
  dart.addTypeTests(framework.ResultError, _is_ResultError_default);
  framework._FamilyOverrideRef = class _FamilyOverrideRef extends core.Object {
    static ['_#new#tearOff'](override, container) {
      return new framework._FamilyOverrideRef.new(override, container);
    }
  };
  (framework._FamilyOverrideRef.new = function(override, container) {
    this.override = override;
    this.container = container;
    ;
  }).prototype = framework._FamilyOverrideRef.prototype;
  dart.addTypeTests(framework._FamilyOverrideRef);
  dart.addTypeCaches(framework._FamilyOverrideRef);
  dart.setLibraryUri(framework._FamilyOverrideRef, I[0]);
  dart.setFieldSignature(framework._FamilyOverrideRef, () => ({
    __proto__: dart.getFields(framework._FamilyOverrideRef.__proto__),
    override: dart.fieldType(framework.FamilyOverride),
    container: dart.finalFieldType(framework.ProviderContainer)
  }));
  var _element = dart.privateName(framework, "_element");
  var _create = dart.privateName(framework, "_create");
  framework._StateReader = class _StateReader extends core.Object {
    static ['_#new#tearOff'](opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let override = opts && 'override' in opts ? opts.override : null;
      let container = opts && 'container' in opts ? opts.container : null;
      let isDynamicallyCreated = opts && 'isDynamicallyCreated' in opts ? opts.isDynamicallyCreated : null;
      return new framework._StateReader.new({origin: origin, override: override, container: container, isDynamicallyCreated: isDynamicallyCreated});
    }
    getElement() {
      let t19;
      t19 = this[_element];
      return t19 == null ? this[_element] = this[_create]() : t19;
    }
    [_create]() {
      let t19;
      if (this.origin._equals(framework._circularDependencyLock)) {
        dart.throw(new framework.CircularDependencyError.__());
      }
      framework._circularDependencyLock == null ? framework._circularDependencyLock = this.origin : null;
      try {
        let element = (t19 = this.override.createElement(), (() => {
          t19[_provider] = this.override;
          t19[_origin] = this.origin;
          t19[_container] = this.container;
          t19.mount();
          return t19;
        })());
        dart.nullCheck(element.getState()).map(dart.void, {data: dart.fn(data => {
            for (let observer of this.container[_observers]) {
              framework._runTernaryGuarded(framework.ProviderBase, T$.ObjectN(), framework.ProviderContainer, dart.bind(observer, 'didAddProvider'), this.origin, data.state, this.container);
            }
          }, T$.ResultDataOfObjectNTovoid()), error: dart.fn(error => {
            for (let observer of this.container[_observers]) {
              framework._runTernaryGuarded(framework.ProviderBase, core.Null, framework.ProviderContainer, dart.bind(observer, 'didAddProvider'), this.origin, null, this.container);
            }
            for (let observer of this.container[_observers]) {
              framework._runQuaternaryGuarded(framework.ProviderBase, core.Object, core.StackTrace, framework.ProviderContainer, dart.bind(observer, 'providerDidFail'), this.origin, error.error, error.stackTrace, this.container);
            }
          }, T$.ResultErrorTovoid())});
        return element;
      } finally {
        if (dart.equals(framework._circularDependencyLock, this.origin)) {
          framework._circularDependencyLock = null;
        }
      }
    }
  };
  (framework._StateReader.new = function(opts) {
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let override = opts && 'override' in opts ? opts.override : null;
    let container = opts && 'container' in opts ? opts.container : null;
    let isDynamicallyCreated = opts && 'isDynamicallyCreated' in opts ? opts.isDynamicallyCreated : null;
    this[_element] = null;
    this.origin = origin;
    this.override = override;
    this.container = container;
    this.isDynamicallyCreated = isDynamicallyCreated;
    ;
  }).prototype = framework._StateReader.prototype;
  dart.addTypeTests(framework._StateReader);
  dart.addTypeCaches(framework._StateReader);
  dart.setMethodSignature(framework._StateReader, () => ({
    __proto__: dart.getMethods(framework._StateReader.__proto__),
    getElement: dart.fnType(framework.ProviderElementBase, []),
    [_create]: dart.fnType(framework.ProviderElementBase, [])
  }));
  dart.setLibraryUri(framework._StateReader, I[0]);
  dart.setFieldSignature(framework._StateReader, () => ({
    __proto__: dart.getFields(framework._StateReader.__proto__),
    origin: dart.finalFieldType(framework.ProviderBase),
    override: dart.fieldType(framework.ProviderBase),
    container: dart.finalFieldType(framework.ProviderContainer),
    isDynamicallyCreated: dart.finalFieldType(core.bool),
    [_element]: dart.fieldType(dart.nullable(framework.ProviderElementBase))
  }));
  var cacheTime$0 = dart.privateName(framework, "ProviderContainer.cacheTime");
  var disposeDelay$0 = dart.privateName(framework, "ProviderContainer.disposeDelay");
  var vsyncOverride = dart.privateName(framework, "ProviderContainer.vsyncOverride");
  var depth = dart.privateName(framework, "ProviderContainer.depth");
  var debugCanModifyProviders = dart.privateName(framework, "ProviderContainer.debugCanModifyProviders");
  var __ProviderContainer__scheduler = dart.privateName(framework, "_#ProviderContainer#_scheduler");
  var __ProviderContainer__debugId = dart.privateName(framework, "_#ProviderContainer#_debugId");
  var _children = dart.privateName(framework, "_children");
  var _overrideForProvider = dart.privateName(framework, "_overrideForProvider");
  var _overrideForFamily = dart.privateName(framework, "_overrideForFamily");
  var _disposed = dart.privateName(framework, "_disposed");
  var _debugOverridesLength = dart.privateName(framework, "_debugOverridesLength");
  var _parent = dart.privateName(framework, "_parent");
  var _stateReaders = dart.privateName(framework, "_stateReaders");
  var _root = dart.privateName(framework, "_root");
  var _getStateReader = dart.privateName(framework, "_getStateReader");
  var _disposeProvider = dart.privateName(framework, "_disposeProvider");
  framework.ProviderContainer = class ProviderContainer extends core.Object {
    get cacheTime() {
      return this[cacheTime$0];
    }
    set cacheTime(value) {
      super.cacheTime = value;
    }
    get disposeDelay() {
      return this[disposeDelay$0];
    }
    set disposeDelay(value) {
      super.disposeDelay = value;
    }
    get vsyncOverride() {
      return this[vsyncOverride];
    }
    set vsyncOverride(value) {
      this[vsyncOverride] = value;
    }
    get depth() {
      return this[depth];
    }
    set depth(value) {
      super.depth = value;
    }
    get debugCanModifyProviders() {
      return this[debugCanModifyProviders];
    }
    set debugCanModifyProviders(value) {
      this[debugCanModifyProviders] = value;
    }
    static ['_#new#tearOff'](opts) {
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      let overrides = opts && 'overrides' in opts ? opts.overrides : C[1] || CT.C1;
      let observers = opts && 'observers' in opts ? opts.observers : null;
      return new framework.ProviderContainer.new({parent: parent, cacheTime: cacheTime, disposeDelay: disposeDelay, overrides: overrides, observers: observers});
    }
    get vsync() {
      let t24;
      t24 = this.vsyncOverride;
      return t24 == null ? C[2] || CT.C2 : t24;
    }
    get [_scheduler]() {
      let t25, t25$, t25$0, t24;
      t24 = this[__ProviderContainer__scheduler];
      return t24 == null ? (t25$0 = (t25$ = (t25 = this[_parent], t25 == null ? null : t25[_scheduler]), t25$ == null ? new framework._ProviderScheduler.new(this.vsync) : t25$), this[__ProviderContainer__scheduler] == null ? this[__ProviderContainer__scheduler] = t25$0 : dart.throw(new _internal.LateError.fieldADI("_scheduler"))) : t24;
    }
    get [_debugId]() {
      let t24;
      t24 = this[__ProviderContainer__debugId];
      return t24 == null ? dart.throw(new _internal.LateError.fieldNI("_debugId")) : t24;
    }
    set [_debugId](t24) {
      if (this[__ProviderContainer__debugId] == null)
        this[__ProviderContainer__debugId] = t24;
      else
        dart.throw(new _internal.LateError.fieldAI("_debugId"));
    }
    get debugId() {
      let id = null;
      if (!dart.fn(() => {
        id = this[_debugId];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[5], 252, 12, "() {\n      id = _debugId;\n      return true;\n    }()");
      return dart.nullCheck(id);
    }
    get debugChildren() {
      return new (T$.UnmodifiableListViewOfProviderContainer()).new(this[_children]);
    }
    pump() {
      return async.async(dart.void, (function* pump() {
        return this[_scheduler].pendingFuture;
      }).bind(this));
    }
    read(Result, provider) {
      let element = this.readProviderElement(Result, provider);
      element.flush();
      element.mayNeedDispose();
      return element.readSelf();
    }
    [_createSubscription](State, element, opts) {
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      element[_onListen]();
      let sub = new (framework._ProviderSubscription$(State)).__(element, listener, {onError: onError});
      element[_listeners][$add](sub);
      return sub;
    }
    listen(State, provider, listener, opts) {
      let fireImmediately = opts && 'fireImmediately' in opts ? opts.fireImmediately : false;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return provider.addListener(this, listener, {fireImmediately: fireImmediately, onError: onError});
    }
    invalidate(provider) {
      let reader = this[_getStateReader](provider.originProvider);
      if (reader[_element] != null) {
        let element = dart.nullCheck(reader[_element]);
        element.invalidateSelf();
      }
    }
    refresh(Created, provider) {
      this.invalidate(provider);
      return this.read(Created, provider);
    }
    [_disposeProvider](provider) {
      let element = this.readProviderElement(T$.ObjectN(), provider);
      element.dispose();
      let reader = dart.nullCheck(this[_stateReaders][$_get](element[_origin]));
      if (reader.isDynamicallyCreated) {
        function removeStateReaderFrom(container) {
          container[_stateReaders][$remove](element[_origin]);
          for (let i = 0; i < container[_children][$length]; i = i + 1) {
            removeStateReaderFrom(container[_children][$_get](i));
          }
        }
        dart.fn(removeStateReaderFrom, T$.ProviderContainerTovoid());
        removeStateReaderFrom(this);
      } else {
        reader[_element] = null;
      }
    }
    updateOverrides(overrides) {
      let t28, t27, t26;
      if (this[_disposed]) {
        dart.throw(new core.StateError.new("Called updateOverrides on a ProviderContainer that was already disposed"));
      }
      if (!(this[_debugOverridesLength] === overrides[$length])) dart.assertFailed("Tried to change the number of overrides. This is not allowed – " + "overrides cannot be removed/added, they can only be updated.", I[5], 416, 7, "_debugOverridesLength == overrides.length");
      let unusedOverrides = null;
      if (!dart.fn(() => {
        unusedOverrides = (() => {
          let t25 = T$.ListOfOverride().of(overrides);
          return t25;
        })();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[5], 422, 12, "() {\n      unusedOverrides = [...overrides];\n      return true;\n    }()");
      for (let override of overrides) {
        if (framework.ProviderOverride.is(override)) {
          if (!dart.fn(() => {
            dart.nullCheck(unusedOverrides)[$remove](override);
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[5], 429, 16, "() {\n          unusedOverrides!.remove(override);\n          return true;\n        }()");
          if (!dart.runtimeType(this[_overrideForProvider][$_get](override[_origin]))._equals(override[_override][$runtimeType])) dart.assertFailed("Replaced the override of type " + dart.str(dart.runtimeType(this[_overrideForProvider][$_get](override[_origin]))) + " " + "with an override of type " + dart.str(override[_override][$runtimeType]) + ", which is different.\n" + "Changing the kind of override or reordering overrides is not supported.", I[5], 435, 11, "_overrideForProvider[override._origin].runtimeType ==\n              override._override.runtimeType");
          let reader = dart.nullCheck(this[_stateReaders][$_get](override[_origin]));
          reader.override = (t26 = this[_overrideForProvider], t27 = override[_origin], t28 = override[_override], t26[$_set](t27, t28), t28);
          let element = reader[_element];
          if (element == null) continue;
          framework._runUnaryGuarded(framework.ProviderBase, dart.void, T$.ProviderBaseTovoid().as(dart.bind(element, 'update')), override[_override]);
        } else if (framework.FamilyOverride.is(override)) {
          if (!dart.fn(() => {
            dart.nullCheck(unusedOverrides)[$remove](override);
            return true;
          }, T$.VoidTobool())()) dart.assertFailed("", I[5], 453, 16, "() {\n          unusedOverrides!.remove(override);\n          return true;\n        }()");
          dart.nullCheck(this[_overrideForFamily][$_get](override.overriddenFamily)).override = override;
        }
      }
      if (!dart.nullCheck(unusedOverrides)[$isEmpty]) dart.assertFailed("Updated the list of overrides with providers that were not overridden before", I[5], 464, 7, "unusedOverrides!.isEmpty");
    }
    readProviderElement(State, provider) {
      if (this[_disposed]) {
        dart.throw(new core.StateError.new("Tried to read a provider from a ProviderContainer that was already disposed"));
      }
      let reader = this[_getStateReader](provider);
      if (!dart.fn(() => {
        if (!framework._debugVerifyDependenciesAreRespectedEnabled) return true;
        try {
          framework._debugVerifyDependenciesAreRespectedEnabled = false;
          let targetElement = reader.getElement();
          let visitedDependencies = T$.LinkedHashSetOfProviderBase().new();
          let queue = new (T$.ListQueueOfProviderBase()).new();
          targetElement.visitAncestors(dart.fn(e => queue.add(e.origin), T$.ProviderElementBaseTovoid()));
          while (queue[$isNotEmpty]) {
            let dependency = queue.removeFirst();
            if (visitedDependencies.add(dependency)) {
              let dependencyElement = this.readProviderElement(T$.ObjectN(), dependency);
              if (!(!targetElement.provider._equals(targetElement.origin) || dependencyElement[$_equals](targetElement.container.readProviderElement(T$.ObjectN(), dependency)))) dart.assertFailed("Tried to read " + dart.str(provider) + " from a place where one of its dependencies were overridden but the provider is not.\n\nTo fix this error, you can add add \"dependencies\" to " + dart.str(provider) + " such that we have:\n\n```\nfinal a = Provider(...);\nfinal b = Provider((ref) => ref.watch(a), dependencies: [a]);\n```\n", I[5], 501, 17, "targetElement.provider != targetElement.origin ||\n                    dependencyElement ==\n                        targetElement.container\n                            .readProviderElement<Object?>(dependency)");
              dependencyElement.visitAncestors(dart.fn(e => queue.add(e.origin), T$.ProviderElementBaseTovoid()));
            }
          }
        } finally {
          framework._debugVerifyDependenciesAreRespectedEnabled = true;
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[5], 481, 12, "() {\n      // Avoid having the assert trigger itself exponentially\n      if (!_debugVerifyDependenciesAreRespectedEnabled) return true;\n\n      try {\n        _debugVerifyDependenciesAreRespectedEnabled = false;\n\n        // Check that this containers doesn't have access to an overridden\n        // dependency of the targetted provider\n        final targetElement = reader.getElement();\n        final visitedDependencies = <ProviderBase>{};\n        final queue = Queue<ProviderBase>();\n        targetElement.visitAncestors((e) => queue.add(e.origin));\n\n        while (queue.isNotEmpty) {\n          final dependency = queue.removeFirst();\n          if (visitedDependencies.add(dependency)) {\n            final dependencyElement = readProviderElement<Object?>(dependency);\n\n            assert(\n                targetElement.provider != targetElement.origin ||\n                    dependencyElement ==\n                        targetElement.container\n                            .readProviderElement<Object?>(dependency),\n                '''\nTried to read $provider from a place where one of its dependencies were overridden but the provider is not.\n\nTo fix this error, you can add add \"dependencies\" to $provider such that we have:\n\n```\nfinal a = Provider(...);\nfinal b = Provider((ref) => ref.watch(a), dependencies: [a]);\n```\n''');\n\n            dependencyElement.visitAncestors((e) => queue.add(e.origin));\n          }\n        }\n      } finally {\n        _debugVerifyDependenciesAreRespectedEnabled = true;\n      }\n      return true;\n    }()");
      return framework.ProviderElementBase$(State).as(reader.getElement());
    }
    [_getStateReader](provider) {
      let t28, t27, t26;
      let currentReader = this[_stateReaders][$_get](provider);
      if (currentReader != null) return currentReader;
      const getReader = () => {
        let t26, t26$, t26$0, t26$1, t26$2, t26$3, t26$4;
        if (provider.from != null) {
          let familyOverrideRef = this[_overrideForFamily][$_get](provider.from);
          if (familyOverrideRef != null) {
            if (familyOverrideRef.container[_stateReaders][$containsKey](provider)) {
              return dart.nullCheck(familyOverrideRef.container[_stateReaders][$_get](provider));
            }
            function setupOverride(opts) {
              let t27, t26;
              let origin = opts && 'origin' in opts ? opts.origin : null;
              let override = opts && 'override' in opts ? opts.override : null;
              if (!(origin._equals(override) || override.dependencies == null)) dart.assertFailed("A provider override cannot specify `dependencies`", I[5], 549, 15, "origin == override || override.dependencies == null");
              t26 = familyOverrideRef.container[_stateReaders];
              t27 = origin;
              t26[$_get](t27) == null ? t26[$_set](t27, new framework._StateReader.new({origin: origin, override: override, container: familyOverrideRef.container, isDynamicallyCreated: true})) : null;
            }
            dart.fn(setupOverride, T$.__Tovoid());
            familyOverrideRef.override.setupOverride(provider.argument, setupOverride);
            t26 = familyOverrideRef.container[_stateReaders][$_get](provider);
            return t26 == null ? new framework._StateReader.new({origin: provider, override: provider, container: familyOverrideRef.container, isDynamicallyCreated: true}) : t26;
          }
        }
        let root = this[_root];
        if (root != null) {
          let dependencies = (t26$0 = (t26$ = provider.from, t26$ == null ? null : t26$.allTransitiveDependencies), t26$0 == null ? provider.allTransitiveDependencies : t26$0);
          let containerForDependencyOverride = (t26$1 = dependencies, t26$1 == null ? null : t26$1[$map](T$.ProviderContainerN(), dart.fn(dep => {
            let t27;
            let reader = this[_stateReaders][$_get](dep);
            if (reader != null) {
              return reader.container;
            }
            let familyOverride = this[_overrideForFamily][$_get](dep);
            t27 = familyOverride;
            return t27 == null ? null : t27.container;
          }, T$.ProviderOrFamilyToProviderContainerN()))[$where](dart.fn(container => container != null, T$.ProviderContainerNTobool()))[$toList]());
          if (containerForDependencyOverride != null && containerForDependencyOverride[$isNotEmpty]) {
            let deepestOverrideContainer = containerForDependencyOverride[$fold](framework.ProviderContainer, root, dart.fn((previous, container) => {
              if (dart.nullCheck(container).depth > previous.depth) {
                return container;
              }
              return previous;
            }, T$.ProviderContainerAndProviderContainerNToProviderContainer()));
            return deepestOverrideContainer[_stateReaders][$putIfAbsent](provider, dart.fn(() => new framework._StateReader.new({origin: provider, override: provider, container: deepestOverrideContainer, isDynamicallyCreated: true}), T$.VoidTo_StateReader()));
          }
        }
        if (dart.test((t26$3 = (t26$2 = this[_root], t26$2 == null ? null : t26$2[_stateReaders][$containsKey](provider)), t26$3 == null ? false : t26$3))) {
          return dart.nullCheck(dart.nullCheck(this[_root])[_stateReaders][$_get](provider));
        }
        let reader = new framework._StateReader.new({origin: provider, override: provider, container: (t26$4 = this[_root], t26$4 == null ? this : t26$4), isDynamicallyCreated: true});
        if (this[_root] != null) {
          dart.nullCheck(this[_root])[_stateReaders][$_set](provider, reader);
        }
        return reader;
      };
      dart.fn(getReader, T$.VoidTo_StateReader());
      t26 = this[_stateReaders];
      t27 = provider;
      t28 = getReader();
      t26[$_set](t27, t28);
      return t28;
    }
    dispose() {
      let t26;
      if (this[_disposed]) {
        return;
      }
      if (this[_children][$isNotEmpty]) {
        dart.throw(new core.StateError.new("Tried to dispose a ProviderContainer that still has children containers."));
      }
      if (!dart.fn(() => {
        let t26;
        provider$.RiverpodBinding.debugInstance.containers = (t26 = T$.LinkedHashMapOfString$ProviderContainer().from(provider$.RiverpodBinding.debugInstance.containers), (() => {
          t26[$remove](this[_debugId]);
          return t26;
        })());
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[5], 668, 12, "() {\n      RiverpodBinding.debugInstance.containers =\n          Map.from(RiverpodBinding.debugInstance.containers)..remove(_debugId);\n      return true;\n    }()");
      t26 = this[_parent];
      t26 == null ? null : t26[_children][$remove](this);
      this[_disposed] = true;
      for (let element of this.getAllProviderElementsInOrder()[$toList]()[$reversed]) {
        element.dispose();
      }
      if (this[_root] == null) this[_scheduler].dispose();
    }
    getAllProviderElements() {
      return new (T$.SyncIterableOfProviderElementBase()).new((function* getAllProviderElements() {
        for (let reader of this[_stateReaders][$values]) {
          if (reader[_element] != null && reader.container[$_equals](this)) {
            yield dart.nullCheck(reader[_element]);
          }
        }
      }).bind(this));
    }
    getAllProviderElementsInOrder() {
      return new (T$.SyncIterableOfProviderElementBase()).new((function* getAllProviderElementsInOrder() {
        let visitedNodes = new (T$._HashSetOfProviderElementBase()).new();
        let queue = new (T$.DoubleLinkedQueueOfProviderElementBase()).new();
        for (let reader of this[_stateReaders][$values]) {
          if (!reader.container[$_equals](this)) continue;
          let element = reader[_element];
          if (element == null) continue;
          let hasAncestorsInContainer = false;
          element.visitAncestors(dart.fn(element => {
            if (element[_container][$_equals](this)) {
              hasAncestorsInContainer = true;
            }
          }, T$.ProviderElementBaseTovoid()));
          if (!hasAncestorsInContainer) {
            queue.add(element);
          }
        }
        while (queue[$isNotEmpty]) {
          let element = queue.removeFirst();
          if (!visitedNodes.add(element)) {
            continue;
          }
          yield element;
          element.visitChildren(dart.fn(dependent => {
            if (dependent.container[$_equals](this)) {
              let areAllAncestorsAlreadyVisited = true;
              dependent.visitAncestors(dart.fn(e => {
                if (e[_container][$_equals](this) && !visitedNodes.contains(e)) {
                  areAllAncestorsAlreadyVisited = false;
                }
              }, T$.ProviderElementBaseTovoid()));
              if (areAllAncestorsAlreadyVisited) queue.add(dependent);
            }
          }, T$.ProviderElementBaseTovoid()));
        }
      }).bind(this));
    }
  };
  (framework.ProviderContainer.new = function(opts) {
    let t20, t19, t19$, t20$, t19$0, t19$1, t22, t22$;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
    let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
    let overrides = opts && 'overrides' in opts ? opts.overrides : C[1] || CT.C1;
    let observers = opts && 'observers' in opts ? opts.observers : null;
    this[vsyncOverride] = null;
    this[__ProviderContainer__scheduler] = null;
    this[__ProviderContainer__debugId] = null;
    this[_children] = T$.JSArrayOfProviderContainer().of([]);
    this[_overrideForProvider] = new (T$.LinkedMapOfProviderBase$ProviderBase()).new();
    this[_overrideForFamily] = new (T$.LinkedMapOfFamilyOfdynamic$dynamic$ProviderBase$_FamilyOverrideRef()).new();
    this[debugCanModifyProviders] = null;
    this[_disposed] = false;
    this[_debugOverridesLength] = overrides[$length];
    this[depth] = parent == null ? 0 : parent.depth + 1;
    this[_parent] = parent;
    this[cacheTime$0] = (t19$ = (t19 = cacheTime, t19 == null ? (t20 = parent, t20 == null ? null : t20.cacheTime) : t19), t19$ == null ? core.Duration.zero : t19$);
    this[disposeDelay$0] = (t19$1 = (t19$0 = disposeDelay, t19$0 == null ? (t20$ = parent, t20$ == null ? null : t20$.disposeDelay) : t19$0), t19$1 == null ? core.Duration.zero : t19$1);
    this[_observers] = (() => {
      let t19 = T$.JSArrayOfProviderObserver().of([]);
      let t20 = observers;
      if (t20 != null) t19[$addAll](t20);
      if (parent != null) t19[$addAll](parent[_observers]);
      return t19;
    })();
    this[_stateReaders] = (() => {
      let t21 = new (T$.LinkedMapOfProviderBase$_StateReader()).new();
      if (parent != null) for (let entry of parent[_stateReaders][$entries])
        if (!entry.value.isDynamicallyCreated) t21[$_set](entry.key, entry.value);
      return t21;
    })();
    this[_root] = (t22$ = (t22 = parent, t22 == null ? null : t22[_root]), t22$ == null ? parent : t22$);
    if (!dart.fn(() => {
      let t22;
      this[_debugId] = dart.str((t22 = framework._debugNextId, framework._debugNextId = t22 + 1, t22));
      provider$.RiverpodBinding.debugInstance.containers = (() => {
        let t22 = new (T$.IdentityMapOfString$ProviderContainer()).new();
        for (let t23 of provider$.RiverpodBinding.debugInstance.containers[$entries])
          t22[$_set](t23.key, t23.value);
        t22[$_set](this[_debugId], this);
        return t22;
      })();
      return true;
    }, T$.VoidTobool())()) dart.assertFailed("", I[5], 180, 12, "() {\n      _debugId = '${_debugNextId++}';\n      RiverpodBinding.debugInstance.containers = {\n        ...RiverpodBinding.debugInstance.containers,\n        _debugId: this,\n      };\n      return true;\n    }()");
    if (parent != null) {
      parent[_children][$add](this);
      this[_overrideForFamily][$addAll](parent[_overrideForFamily]);
    }
    for (let override of overrides) {
      if (framework.ProviderOverride.is(override)) {
        this[_overrideForProvider][$_set](override[_origin], override[_override]);
        this[_stateReaders][$_set](override[_origin], new framework._StateReader.new({origin: override[_origin], override: override[_override], container: this, isDynamicallyCreated: false}));
      } else if (framework.FamilyOverride.is(override)) {
        this[_overrideForFamily][$_set](override.overriddenFamily, new framework._FamilyOverrideRef.new(override, this));
      }
    }
  }).prototype = framework.ProviderContainer.prototype;
  dart.addTypeTests(framework.ProviderContainer);
  dart.addTypeCaches(framework.ProviderContainer);
  framework.ProviderContainer[dart.implements] = () => [framework.Node];
  dart.setMethodSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getMethods(framework.ProviderContainer.__proto__),
    pump: dart.fnType(async.Future$(dart.void), []),
    read: dart.gFnType(Result => [Result, [framework.ProviderBase$(Result)]], Result => [dart.nullable(core.Object)]),
    [_createSubscription]: dart.gFnType(State => [framework.ProviderSubscription$(State), [framework.ProviderElementBase$(State)], {}, {listener: dart.fnType(dart.void, [dart.nullable(State), State]), onError: dart.fnType(dart.void, [core.Object, core.StackTrace])}], State => [dart.nullable(core.Object)]),
    listen: dart.gFnType(State => [framework.ProviderSubscription$(State), [framework.ProviderListenable$(State), dart.fnType(dart.void, [dart.nullable(State), State])], {fireImmediately: core.bool, onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {}], State => [dart.nullable(core.Object)]),
    invalidate: dart.fnType(dart.void, [framework.ProviderBase$(dart.nullable(core.Object))]),
    refresh: dart.gFnType(Created => [Created, [framework.ProviderBase$(Created)]], Created => [dart.nullable(core.Object)]),
    [_disposeProvider]: dart.fnType(dart.void, [framework.ProviderBase$(dart.nullable(core.Object))]),
    updateOverrides: dart.fnType(dart.void, [core.List$(framework.Override)]),
    readProviderElement: dart.gFnType(State => [framework.ProviderElementBase$(State), [framework.ProviderBase$(State)]], State => [dart.nullable(core.Object)]),
    [_getStateReader]: dart.fnType(framework._StateReader, [framework.ProviderBase]),
    dispose: dart.fnType(dart.void, []),
    getAllProviderElements: dart.fnType(core.Iterable$(framework.ProviderElementBase), []),
    getAllProviderElementsInOrder: dart.fnType(core.Iterable$(framework.ProviderElementBase), [])
  }));
  dart.setGetterSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getGetters(framework.ProviderContainer.__proto__),
    vsync: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_scheduler]: framework._ProviderScheduler,
    [_debugId]: core.String,
    debugId: core.String,
    debugChildren: core.List$(framework.ProviderContainer)
  }));
  dart.setSetterSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getSetters(framework.ProviderContainer.__proto__),
    [_debugId]: core.String
  }));
  dart.setLibraryUri(framework.ProviderContainer, I[0]);
  dart.setFieldSignature(framework.ProviderContainer, () => ({
    __proto__: dart.getFields(framework.ProviderContainer.__proto__),
    cacheTime: dart.finalFieldType(core.Duration),
    disposeDelay: dart.finalFieldType(core.Duration),
    [_debugOverridesLength]: dart.finalFieldType(core.int),
    vsyncOverride: dart.fieldType(dart.nullable(dart.fnType(dart.void, [dart.fnType(dart.void, [])]))),
    [__ProviderContainer__scheduler]: dart.fieldType(dart.nullable(framework._ProviderScheduler)),
    [__ProviderContainer__debugId]: dart.fieldType(dart.nullable(core.String)),
    depth: dart.finalFieldType(core.int),
    [_root]: dart.finalFieldType(dart.nullable(framework.ProviderContainer)),
    [_parent]: dart.finalFieldType(dart.nullable(framework.ProviderContainer)),
    [_children]: dart.finalFieldType(core.List$(framework.ProviderContainer)),
    [_overrideForProvider]: dart.finalFieldType(collection.HashMap$(framework.ProviderBase, framework.ProviderBase)),
    [_overrideForFamily]: dart.finalFieldType(collection.HashMap$(framework.Family$(dart.dynamic, dart.dynamic, framework.ProviderBase), framework._FamilyOverrideRef)),
    [_stateReaders]: dart.finalFieldType(core.Map$(framework.ProviderBase, framework._StateReader)),
    [_observers]: dart.finalFieldType(core.List$(framework.ProviderObserver)),
    debugCanModifyProviders: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_disposed]: dart.fieldType(core.bool)
  }));
  framework.ProviderObserver = class ProviderObserver extends core.Object {
    didAddProvider(provider, value, container) {
    }
    providerDidFail(provider, error, stackTrace, container) {
    }
    didUpdateProvider(provider, previousValue, newValue, container) {
    }
    didDisposeProvider(provider, container) {
    }
  };
  (framework.ProviderObserver.new = function() {
    ;
  }).prototype = framework.ProviderObserver.prototype;
  dart.addTypeTests(framework.ProviderObserver);
  dart.addTypeCaches(framework.ProviderObserver);
  dart.setMethodSignature(framework.ProviderObserver, () => ({
    __proto__: dart.getMethods(framework.ProviderObserver.__proto__),
    didAddProvider: dart.fnType(dart.void, [framework.ProviderBase, dart.nullable(core.Object), framework.ProviderContainer]),
    providerDidFail: dart.fnType(dart.void, [framework.ProviderBase, core.Object, core.StackTrace, framework.ProviderContainer]),
    didUpdateProvider: dart.fnType(dart.void, [framework.ProviderBase, dart.nullable(core.Object), dart.nullable(core.Object), framework.ProviderContainer]),
    didDisposeProvider: dart.fnType(dart.void, [framework.ProviderBase, framework.ProviderContainer])
  }));
  dart.setLibraryUri(framework.ProviderObserver, I[0]);
  framework.ProviderOverride = class ProviderOverride extends core.Object {
    static ['_#new#tearOff'](opts) {
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let override = opts && 'override' in opts ? opts.override : null;
      return new framework.ProviderOverride.new({origin: origin, override: override});
    }
  };
  (framework.ProviderOverride.new = function(opts) {
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let override = opts && 'override' in opts ? opts.override : null;
    this[_origin] = origin;
    this[_override] = override;
    ;
  }).prototype = framework.ProviderOverride.prototype;
  dart.addTypeTests(framework.ProviderOverride);
  dart.addTypeCaches(framework.ProviderOverride);
  framework.ProviderOverride[dart.implements] = () => [framework.Override];
  dart.setLibraryUri(framework.ProviderOverride, I[0]);
  dart.setFieldSignature(framework.ProviderOverride, () => ({
    __proto__: dart.getFields(framework.ProviderOverride.__proto__),
    [_origin]: dart.finalFieldType(framework.ProviderBase),
    [_override]: dart.finalFieldType(framework.ProviderBase)
  }));
  framework.Override = class Override extends core.Object {};
  (framework.Override.new = function() {
    ;
  }).prototype = framework.Override.prototype;
  dart.addTypeTests(framework.Override);
  dart.addTypeCaches(framework.Override);
  dart.setLibraryUri(framework.Override, I[0]);
  framework.CircularDependencyError = class CircularDependencyError extends core.Error {
    static ['_#_#tearOff']() {
      return new framework.CircularDependencyError.__();
    }
  };
  (framework.CircularDependencyError.__ = function() {
    framework.CircularDependencyError.__proto__.new.call(this);
    ;
  }).prototype = framework.CircularDependencyError.prototype;
  dart.addTypeTests(framework.CircularDependencyError);
  dart.addTypeCaches(framework.CircularDependencyError);
  dart.setLibraryUri(framework.CircularDependencyError, I[0]);
  var cacheTime$1 = dart.privateName(framework, "Family.cacheTime");
  var disposeDelay$1 = dart.privateName(framework, "Family.disposeDelay");
  var dependencies$ = dart.privateName(framework, "Family.dependencies");
  var name$0 = dart.privateName(framework, "Family.name");
  const _is_Family_default = Symbol('_is_Family_default');
  framework.Family$ = dart.generic((State, Arg, FamilyProvider) => {
    class Family extends framework.ProviderOrFamily {
      get cacheTime() {
        return this[cacheTime$1];
      }
      set cacheTime(value) {
        super.cacheTime = value;
      }
      get disposeDelay() {
        return this[disposeDelay$1];
      }
      set disposeDelay(value) {
        super.disposeDelay = value;
      }
      get dependencies() {
        return this[dependencies$];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      get name() {
        return this[name$0];
      }
      set name(value) {
        super.name = value;
      }
      get from() {
        return null;
      }
      get overriddenFamily() {
        return this;
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        setup({origin: this.call(argument), override: this.call(argument)});
      }
      call(argument) {
        Arg.as(argument);
        return this.create(argument);
      }
    }
    (Family.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[name$0] = name;
      this[dependencies$] = dependencies;
      this[cacheTime$1] = cacheTime;
      this[disposeDelay$1] = disposeDelay;
      Family.__proto__.new.call(this);
      ;
    }).prototype = Family.prototype;
    dart.addTypeTests(Family);
    Family.prototype[_is_Family_default] = true;
    dart.addTypeCaches(Family);
    Family[dart.implements] = () => [framework.FamilyOverride$(Arg)];
    dart.setMethodSignature(Family, () => ({
      __proto__: dart.getMethods(Family.__proto__),
      setupOverride: dart.fnType(dart.void, [dart.nullable(core.Object), dart.fnType(dart.void, [], {}, {origin: framework.ProviderBase, override: framework.ProviderBase})]),
      call: dart.fnType(FamilyProvider, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(Family, () => ({
      __proto__: dart.getGetters(Family.__proto__),
      from: dart.nullable(framework.Family$(dart.dynamic, dart.dynamic, framework.ProviderBase)),
      overriddenFamily: framework.Family$(dart.nullable(core.Object), Arg, framework.ProviderBase$(dart.nullable(core.Object)))
    }));
    dart.setLibraryUri(Family, I[0]);
    dart.setFieldSignature(Family, () => ({
      __proto__: dart.getFields(Family.__proto__),
      cacheTime: dart.finalFieldType(dart.nullable(core.Duration)),
      disposeDelay: dart.finalFieldType(dart.nullable(core.Duration)),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      name: dart.finalFieldType(dart.nullable(core.String))
    }));
    return Family;
  });
  framework.Family = framework.Family$();
  dart.addTypeTests(framework.Family, _is_Family_default);
  const _is_FamilyOverride_default = Symbol('_is_FamilyOverride_default');
  framework.FamilyOverride$ = dart.generic(Arg => {
    class FamilyOverride extends core.Object {
      static ['_#new#tearOff'](Arg, overriddenFamily, setup) {
        return new (framework._FamilyOverride$(Arg)).new(overriddenFamily, setup);
      }
    }
    (FamilyOverride[dart.mixinNew] = function() {
    }).prototype = FamilyOverride.prototype;
    dart.addTypeTests(FamilyOverride);
    FamilyOverride.prototype[_is_FamilyOverride_default] = true;
    dart.addTypeCaches(FamilyOverride);
    FamilyOverride[dart.implements] = () => [framework.Override];
    dart.setStaticMethodSignature(FamilyOverride, () => ['new']);
    dart.setLibraryUri(FamilyOverride, I[0]);
    dart.setStaticFieldSignature(FamilyOverride, () => ['_redirecting#']);
    return FamilyOverride;
  });
  framework.FamilyOverride = framework.FamilyOverride$();
  dart.addTypeTests(framework.FamilyOverride, _is_FamilyOverride_default);
  var _setup$ = dart.privateName(framework, "_setup");
  const _is__FamilyOverride_default = Symbol('_is__FamilyOverride_default');
  framework._FamilyOverride$ = dart.generic(Arg => {
    class _FamilyOverride extends core.Object {
      static ['_#new#tearOff'](Arg, overriddenFamily, _setup) {
        return new (framework._FamilyOverride$(Arg)).new(overriddenFamily, _setup);
      }
      setupOverride(argument, setup) {
        let t27, t26;
        Arg.as(argument);
        t26 = argument;
        t27 = setup;
        this[_setup$](t26, t27);
      }
    }
    (_FamilyOverride.new = function(overriddenFamily, _setup) {
      this.overriddenFamily = overriddenFamily;
      this[_setup$] = _setup;
      ;
    }).prototype = _FamilyOverride.prototype;
    dart.addTypeTests(_FamilyOverride);
    _FamilyOverride.prototype[_is__FamilyOverride_default] = true;
    dart.addTypeCaches(_FamilyOverride);
    _FamilyOverride[dart.implements] = () => [framework.FamilyOverride$(Arg)];
    dart.setMethodSignature(_FamilyOverride, () => ({
      __proto__: dart.getMethods(_FamilyOverride.__proto__),
      setupOverride: dart.fnType(dart.void, [dart.nullable(core.Object), dart.fnType(dart.void, [], {}, {origin: framework.ProviderBase, override: framework.ProviderBase})])
    }));
    dart.setLibraryUri(_FamilyOverride, I[0]);
    dart.setFieldSignature(_FamilyOverride, () => ({
      __proto__: dart.getFields(_FamilyOverride.__proto__),
      overriddenFamily: dart.finalFieldType(framework.Family$(dart.nullable(core.Object), Arg, framework.ProviderBase$(dart.nullable(core.Object)))),
      [_setup$]: dart.finalFieldType(dart.fnType(dart.void, [Arg, dart.fnType(dart.void, [], {}, {origin: framework.ProviderBase, override: framework.ProviderBase})]))
    }));
    return _FamilyOverride;
  });
  framework._FamilyOverride = framework._FamilyOverride$();
  dart.addTypeTests(framework._FamilyOverride, _is__FamilyOverride_default);
  const _is_ProviderSubscription_default = Symbol('_is_ProviderSubscription_default');
  framework.ProviderSubscription$ = dart.generic(State => {
    class ProviderSubscription extends core.Object {}
    (ProviderSubscription.new = function() {
      ;
    }).prototype = ProviderSubscription.prototype;
    dart.addTypeTests(ProviderSubscription);
    ProviderSubscription.prototype[_is_ProviderSubscription_default] = true;
    dart.addTypeCaches(ProviderSubscription);
    dart.setLibraryUri(ProviderSubscription, I[0]);
    return ProviderSubscription;
  });
  framework.ProviderSubscription = framework.ProviderSubscription$();
  dart.addTypeTests(framework.ProviderSubscription, _is_ProviderSubscription_default);
  framework.Node = class Node extends core.Object {};
  (framework.Node.new = function() {
    ;
  }).prototype = framework.Node.prototype;
  dart.addTypeTests(framework.Node);
  dart.addTypeCaches(framework.Node);
  dart.setLibraryUri(framework.Node, I[0]);
  var _internalSub$ = dart.privateName(framework, "_internalSub");
  var _read$ = dart.privateName(framework, "_read");
  const _is__SelectorSubscription_default = Symbol('_is__SelectorSubscription_default');
  framework._SelectorSubscription$ = dart.generic((Input, Output) => {
    class _SelectorSubscription extends core.Object {
      static ['_#new#tearOff'](Input, Output, _internalSub, _read) {
        return new (framework._SelectorSubscription$(Input, Output)).new(_internalSub, _read);
      }
      close() {
        this[_closed] = true;
        this[_internalSub$].close();
      }
      read() {
        if (this[_closed]) {
          dart.throw(new core.StateError.new("called ProviderSubscription.read on a subscription that was closed"));
        }
        this[_internalSub$].read();
        return this[_read$]();
      }
    }
    (_SelectorSubscription.new = function(_internalSub, _read) {
      this[_closed] = false;
      this[_internalSub$] = _internalSub;
      this[_read$] = _read;
      ;
    }).prototype = _SelectorSubscription.prototype;
    dart.addTypeTests(_SelectorSubscription);
    _SelectorSubscription.prototype[_is__SelectorSubscription_default] = true;
    dart.addTypeCaches(_SelectorSubscription);
    _SelectorSubscription[dart.implements] = () => [framework.ProviderSubscription$(Output)];
    dart.setMethodSignature(_SelectorSubscription, () => ({
      __proto__: dart.getMethods(_SelectorSubscription.__proto__),
      close: dart.fnType(dart.void, []),
      read: dart.fnType(Output, [])
    }));
    dart.setLibraryUri(_SelectorSubscription, I[0]);
    dart.setFieldSignature(_SelectorSubscription, () => ({
      __proto__: dart.getFields(_SelectorSubscription.__proto__),
      [_internalSub$]: dart.finalFieldType(framework.ProviderSubscription$(Input)),
      [_read$]: dart.finalFieldType(dart.fnType(Output, [])),
      [_closed]: dart.fieldType(core.bool)
    }));
    return _SelectorSubscription;
  });
  framework._SelectorSubscription = framework._SelectorSubscription$();
  dart.addTypeTests(framework._SelectorSubscription, _is__SelectorSubscription_default);
  var _scheduledTask = dart.privateName(framework, "_scheduledTask");
  var _stateToDispose = dart.privateName(framework, "_stateToDispose");
  var _stateToRefresh = dart.privateName(framework, "_stateToRefresh");
  var _pendingTaskCompleter = dart.privateName(framework, "_pendingTaskCompleter");
  var _scheduleTask = dart.privateName(framework, "_scheduleTask");
  var _task = dart.privateName(framework, "_task");
  var _performRefresh = dart.privateName(framework, "_performRefresh");
  var _performDispose = dart.privateName(framework, "_performDispose");
  framework._ProviderScheduler = class _ProviderScheduler extends core.Object {
    static ['_#new#tearOff'](vsync) {
      return new framework._ProviderScheduler.new(vsync);
    }
    get pendingFuture() {
      let t26;
      t26 = this[_pendingTaskCompleter];
      return t26 == null ? null : t26.future;
    }
    scheduleProviderRefresh(element) {
      this[_stateToRefresh][$add](element);
      this[_scheduleTask]();
    }
    [_scheduleTask]() {
      let t26;
      if (!!this[_disposed]) dart.assertFailed("tried to emit updates with a disposed Scheduler", I[6], 29, 12, "!_disposed");
      if (this[_scheduledTask]) return;
      this[_scheduledTask] = true;
      if (!(this[_pendingTaskCompleter] == null)) dart.assertFailed("bad state", I[6], 33, 12, "_pendingTaskCompleter == null");
      this[_pendingTaskCompleter] = T$.CompleterOfvoid().new();
      t26 = dart.bind(this, _task);
      this.vsync(t26);
    }
    [_task]() {
      dart.nullCheck(this[_pendingTaskCompleter]).complete();
      if (this[_disposed]) return;
      this[_performRefresh]();
      this[_performDispose]();
      this[_scheduledTask] = false;
      this[_stateToRefresh][$clear]();
      this[_stateToDispose][$clear]();
      this[_pendingTaskCompleter] = null;
    }
    [_performRefresh]() {
      for (let i = 0; i < this[_stateToRefresh][$length]; i = i + 1) {
        let element = this[_stateToRefresh][$_get](i);
        if (element.hasListeners) element.flush();
      }
    }
    scheduleProviderDispose(element) {
      if (!!element.hasListeners) dart.assertFailed("Tried to dispose " + dart.str(element[_provider]) + " , but still has listeners", I[6], 61, 7, "!element.hasListeners");
      this[_stateToDispose][$add](element);
      this[_scheduleTask]();
    }
    [_performDispose]() {
      for (let i = 0; i < this[_stateToDispose][$length]; i = i + 1) {
        let element = this[_stateToDispose][$_get](i);
        if (element.maintainState || element[_keepAliveLinks][$isNotEmpty] || element.hasListeners || !element[_mounted]) {
          continue;
        }
        element[_container][_disposeProvider](element[_origin]);
      }
    }
    dispose() {
      this[_disposed] = true;
    }
  };
  (framework._ProviderScheduler.new = function(vsync) {
    this[_disposed] = false;
    this[_scheduledTask] = false;
    this[_stateToDispose] = T$.JSArrayOfAutoDisposeProviderElementBase().of([]);
    this[_stateToRefresh] = T$.JSArrayOfProviderElementBase().of([]);
    this[_pendingTaskCompleter] = null;
    this.vsync = vsync;
    ;
  }).prototype = framework._ProviderScheduler.prototype;
  dart.addTypeTests(framework._ProviderScheduler);
  dart.addTypeCaches(framework._ProviderScheduler);
  dart.setMethodSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getMethods(framework._ProviderScheduler.__proto__),
    scheduleProviderRefresh: dart.fnType(dart.void, [framework.ProviderElementBase]),
    [_scheduleTask]: dart.fnType(dart.void, []),
    [_task]: dart.fnType(dart.void, []),
    [_performRefresh]: dart.fnType(dart.void, []),
    scheduleProviderDispose: dart.fnType(dart.void, [framework.AutoDisposeProviderElementBase]),
    [_performDispose]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getGetters(framework._ProviderScheduler.__proto__),
    pendingFuture: dart.nullable(async.Future$(dart.void))
  }));
  dart.setLibraryUri(framework._ProviderScheduler, I[0]);
  dart.setFieldSignature(framework._ProviderScheduler, () => ({
    __proto__: dart.getFields(framework._ProviderScheduler.__proto__),
    vsync: dart.finalFieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [])])),
    [_disposed]: dart.fieldType(core.bool),
    [_scheduledTask]: dart.fieldType(core.bool),
    [_stateToDispose]: dart.finalFieldType(core.List$(framework.AutoDisposeProviderElementBase)),
    [_stateToRefresh]: dart.finalFieldType(core.List$(framework.ProviderElementBase)),
    [_pendingTaskCompleter]: dart.fieldType(dart.nullable(async.Completer$(dart.void)))
  }));
  framework['AsyncSelector|selectAsync'] = function AsyncSelector$124selectAsync(Input, Output, $this, selector) {
    return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({selector: selector, provider: $this});
  };
  framework['AsyncSelector|get#selectAsync'] = function AsyncSelector$124get$35selectAsync(Input, $this) {
    return dart.fn((Output, selector) => framework['AsyncSelector|selectAsync'](Input, Output, $this, selector), dart.gFnType(Output => {
      var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
      var __t$ProviderListenableOfFutureOfOutput = () => (__t$ProviderListenableOfFutureOfOutput = dart.constFn(framework.ProviderListenable$(__t$FutureOfOutput())))();
      return [__t$ProviderListenableOfFutureOfOutput(), [dart.fnType(Output, [Input])]];
    }, Output => {
      var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
      var __t$ProviderListenableOfFutureOfOutput = () => (__t$ProviderListenableOfFutureOfOutput = dart.constFn(framework.ProviderListenable$(__t$FutureOfOutput())))();
      return [T$.ObjectN()];
    }));
  };
  framework['AlwaysAliveAsyncSelector|selectAsync'] = function AlwaysAliveAsyncSelector$124selectAsync(Input, Output, $this, selector) {
    return new (framework._AlwaysAliveAsyncSelector$(Input, Output)).new({selector: selector, provider: $this});
  };
  framework['AlwaysAliveAsyncSelector|get#selectAsync'] = function AlwaysAliveAsyncSelector$124get$35selectAsync(Input, $this) {
    return dart.fn((Output, selector) => framework['AlwaysAliveAsyncSelector|selectAsync'](Input, Output, $this, selector), dart.gFnType(Output => {
      var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
      var __t$AlwaysAliveProviderListenableOfFutureOfOutput = () => (__t$AlwaysAliveProviderListenableOfFutureOfOutput = dart.constFn(framework.AlwaysAliveProviderListenable$(__t$FutureOfOutput())))();
      return [__t$AlwaysAliveProviderListenableOfFutureOfOutput(), [dart.fnType(Output, [Input])]];
    }, Output => {
      var __t$FutureOfOutput = () => (__t$FutureOfOutput = dart.constFn(async.Future$(Output)))();
      var __t$AlwaysAliveProviderListenableOfFutureOfOutput = () => (__t$AlwaysAliveProviderListenableOfFutureOfOutput = dart.constFn(framework.AlwaysAliveProviderListenable$(__t$FutureOfOutput())))();
      return [T$.ObjectN()];
    }));
  };
  framework._runGuarded = function _runGuarded(cb) {
    try {
      cb();
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  framework._runUnaryGuarded = function _runUnaryGuarded(T, Res, cb, value) {
    try {
      cb(value);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  framework._runBinaryGuarded = function _runBinaryGuarded(A, B, cb, value, value2) {
    try {
      cb(value, value2);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  framework._runTernaryGuarded = function _runTernaryGuarded(A, B, C, cb, value, value2, value3) {
    try {
      cb(value, value2, value3);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  framework._runQuaternaryGuarded = function _runQuaternaryGuarded(A, B, C, D, cb, value, value2, value3, value4) {
    try {
      cb(value, value2, value3, value4);
    } catch (e) {
      let err = dart.getThrown(e);
      let stack = dart.stackTrace(e);
      if (core.Object.is(err)) {
        async.Zone.current.handleUncaughtError(err, stack);
      } else
        throw e;
    }
  };
  framework._defaultVsync = function _defaultVsync(task) {
    T$.FutureOfvoid().new(task);
  };
  framework['XFamily|overrideWithProvider'] = function XFamily$124overrideWithProvider(State, Arg, FamilyProvider, $this, override) {
    return new (framework._FamilyOverride$(Arg)).new($this, dart.fn((arg, setup) => {
      setup({origin: $this.call(arg), override: override(arg)});
    }, dart.fnType(dart.void, [Arg, T$.__Tovoid()])));
  };
  framework['XFamily|get#overrideWithProvider'] = function XFamily$124get$35overrideWithProvider(State, Arg, FamilyProvider, $this) {
    return dart.fn(override => framework['XFamily|overrideWithProvider'](State, Arg, FamilyProvider, $this, override), dart.fnType(framework.Override, [dart.fnType(framework.AlwaysAliveProviderBase$(State), [Arg])]));
  };
  framework['XAutoDisposeFamily|overrideWithProvider'] = function XAutoDisposeFamily$124overrideWithProvider(State, Arg, FamilyProvider, $this, override) {
    return new (framework._FamilyOverride$(Arg)).new($this, dart.fn((arg, setup) => {
      setup({origin: $this.call(arg), override: override(arg)});
    }, dart.fnType(dart.void, [Arg, T$.__Tovoid()])));
  };
  framework['XAutoDisposeFamily|get#overrideWithProvider'] = function XAutoDisposeFamily$124get$35overrideWithProvider(State, Arg, FamilyProvider, $this) {
    return dart.fn(override => framework['XAutoDisposeFamily|overrideWithProvider'](State, Arg, FamilyProvider, $this, override), dart.fnType(framework.Override, [dart.fnType(framework.AutoDisposeProviderBase$(State), [Arg])]));
  };
  framework._allTransitiveDependencies = function _allTransitiveDependencies(dependencies) {
    let result = T$.LinkedHashSetOfProviderOrFamily().new();
    function visitDependency(dep) {
      if (result.add(dep) && dep.dependencies != null) {
        dart.nullCheck(dep.dependencies)[$forEach](visitDependency);
      }
      let depFamily = dep.from;
      if (depFamily != null && result.add(depFamily) && depFamily.dependencies != null) {
        dart.nullCheck(depFamily.dependencies)[$forEach](visitDependency);
      }
    }
    dart.fn(visitDependency, T$.ProviderOrFamilyTovoid());
    dependencies[$forEach](visitDependency);
    return T$.ListOfProviderOrFamily().unmodifiable(result);
  };
  framework.describeIdentity = function describeIdentity(object) {
    return dart.str(dart.runtimeType(object)) + "#" + framework.shortHash(object);
  };
  framework.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  framework.handleFireImmediately = function handleFireImmediately(State, currentState, opts) {
    let listener = opts && 'listener' in opts ? opts.listener : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    currentState.map(dart.void, {data: dart.fn(data => framework._runBinaryGuarded(core.Null, State, listener, null, data.state), dart.fnType(dart.void, [framework.ResultData$(State)])), error: dart.fn(error => framework._runBinaryGuarded(core.Object, core.StackTrace, onError, error.error, error.stackTrace), dart.fnType(dart.void, [framework.ResultError$(State)]))});
  };
  framework._rethrowProviderError = function _rethrowProviderError(error, stackTrace) {
    let chain = new chain$.Chain.new((() => {
      let t39 = T$.JSArrayOfTrace().of([trace.Trace.current()]);
      t39[$addAll](chain$.Chain.forTrace(stackTrace).traces);
      return t39;
    })()).foldFrames(dart.fn(frame => frame.package === "riverpod", T$.FrameTobool()));
    core.Error.throwWithStackTrace(error, chain);
  };
  dart.defineLazy(framework, {
    /*framework._debugIsRunningSelector*/get _debugIsRunningSelector() {
      return false;
    },
    set _debugIsRunningSelector(_) {},
    /*framework._circularDependencyLock*/get _circularDependencyLock() {
      return null;
    },
    set _circularDependencyLock(_) {},
    /*framework._debugNextId*/get _debugNextId() {
      return 0;
    },
    set _debugNextId(_) {},
    /*framework._debugVerifyDependenciesAreRespectedEnabled*/get _debugVerifyDependenciesAreRespectedEnabled() {
      return true;
    },
    set _debugVerifyDependenciesAreRespectedEnabled(_) {}
  }, false);
  var _value$ = dart.privateName(value_provider, "_value");
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  value_provider.ValueProvider$ = dart.generic(State => {
    var __t$ValueProviderElementOfState = () => (__t$ValueProviderElementOfState = dart.constFn(value_provider.ValueProviderElement$(State)))();
    class ValueProvider extends framework.AlwaysAliveProviderBase$(State) {
      static ['_#new#tearOff'](State, _value) {
        return new (value_provider.ValueProvider$(State)).new(_value);
      }
      get dependencies() {
        return null;
      }
      create(ref) {
        __t$ValueProviderElementOfState().as(ref);
        return this[_value$];
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
      createElement() {
        return new (__t$ValueProviderElementOfState()).new(this);
      }
    }
    (ValueProvider.new = function(_value) {
      this[_value$] = _value;
      ValueProvider.__proto__.new.call(this, {name: null, from: null, argument: null});
      ;
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    dart.addTypeCaches(ValueProvider);
    dart.setMethodSignature(ValueProvider, () => ({
      __proto__: dart.getMethods(ValueProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(value_provider.ValueProviderElement$(State), [])
    }));
    dart.setGetterSignature(ValueProvider, () => ({
      __proto__: dart.getGetters(ValueProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(ValueProvider, I[7]);
    dart.setFieldSignature(ValueProvider, () => ({
      __proto__: dart.getFields(ValueProvider.__proto__),
      [_value$]: dart.finalFieldType(State)
    }));
    return ValueProvider;
  });
  value_provider.ValueProvider = value_provider.ValueProvider$();
  dart.addTypeTests(value_provider.ValueProvider, _is_ValueProvider_default);
  var onChange = dart.privateName(value_provider, "ValueProviderElement.onChange");
  const _is_ValueProviderElement_default = Symbol('_is_ValueProviderElement_default');
  value_provider.ValueProviderElement$ = dart.generic(State => {
    var __t$ProviderBaseOfState = () => (__t$ProviderBaseOfState = dart.constFn(framework.ProviderBase$(State)))();
    var __t$ValueProviderOfState = () => (__t$ValueProviderOfState = dart.constFn(value_provider.ValueProvider$(State)))();
    var __t$ResultDataOfState = () => (__t$ResultDataOfState = dart.constFn(framework.ResultData$(State)))();
    class ValueProviderElement extends framework.ProviderElementBase$(State) {
      get onChange() {
        return this[onChange];
      }
      set onChange(value) {
        this[onChange] = value;
      }
      static ['_#new#tearOff'](State, provider) {
        return new (value_provider.ValueProviderElement$(State)).new(provider);
      }
      update(newProvider) {
        let t40;
        __t$ProviderBaseOfState().as(newProvider);
        super.update(newProvider);
        let newValue = __t$ValueProviderOfState().as(this.provider)[_value$];
        let previousState = __t$ResultDataOfState().as(dart.nullCheck(this.getState()));
        if (!dart.equals(newValue, previousState.state)) {
          this.setState(newValue);
          t40 = this.onChange;
          t40 == null ? null : t40(newValue);
        }
      }
    }
    (ValueProviderElement.new = function(provider) {
      this[onChange] = null;
      ValueProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = ValueProviderElement.prototype;
    dart.addTypeTests(ValueProviderElement);
    ValueProviderElement.prototype[_is_ValueProviderElement_default] = true;
    dart.addTypeCaches(ValueProviderElement);
    dart.setLibraryUri(ValueProviderElement, I[7]);
    dart.setFieldSignature(ValueProviderElement, () => ({
      __proto__: dart.getFields(ValueProviderElement.__proto__),
      onChange: dart.fieldType(dart.nullable(dart.fnType(dart.void, [State])))
    }));
    return ValueProviderElement;
  });
  value_provider.ValueProviderElement = value_provider.ValueProviderElement$();
  dart.addTypeTests(value_provider.ValueProviderElement, _is_ValueProviderElement_default);
  var _listenStream = dart.privateName(stream_provider, "_listenStream");
  const _is_AsyncValue_default = Symbol('_is_AsyncValue_default');
  common.AsyncValue$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncLoadingOfT = () => (__t$AsyncLoadingOfT = dart.constFn(common.AsyncLoading$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$AsyncDataOfTToAsyncValueOfT = () => (__t$AsyncDataOfTToAsyncValueOfT = dart.constFn(dart.fnType(__t$AsyncValueOfT(), [__t$AsyncDataOfT()])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$AsyncErrorOfTToAsyncValueOfT = () => (__t$AsyncErrorOfTToAsyncValueOfT = dart.constFn(dart.fnType(__t$AsyncValueOfT(), [__t$AsyncErrorOfT()])))();
    var __t$AsyncLoadingOfTToAsyncLoadingOfT = () => (__t$AsyncLoadingOfTToAsyncLoadingOfT = dart.constFn(dart.fnType(__t$AsyncLoadingOfT(), [__t$AsyncLoadingOfT()])))();
    class AsyncValue extends core.Object {
      static ['_#data#tearOff'](T, value) {
        return new (common.AsyncData$(T)).new(value);
      }
      static ['_#loading#tearOff'](T) {
        return new (common.AsyncLoading$(T)).new();
      }
      static ['_#error#tearOff'](T, error, opts) {
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        return new (common.AsyncError$(T)).new(error, {stackTrace: stackTrace});
      }
      static guard(T, future) {
        return async.async(common.AsyncValue$(T), function* guard() {
          try {
            return new (common.AsyncData$(T)).new(yield future());
          } catch (e) {
            let err = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(err)) {
              return new (common.AsyncError$(T)).new(err, {stackTrace: stack});
            } else
              throw e;
          }
        });
      }
      unwrapPrevious() {
        return this.map(__t$AsyncValueOfT(), {data: dart.fn(d => {
            if (d.isLoading) return new (__t$AsyncLoadingOfT()).new();
            return new (__t$AsyncDataOfT()).new(d.value);
          }, __t$AsyncDataOfTToAsyncValueOfT()), error: dart.fn(e => {
            if (e.isLoading) return new (__t$AsyncLoadingOfT()).new();
            return new (__t$AsyncErrorOfT()).new(e.error, {stackTrace: e.stackTrace});
          }, __t$AsyncErrorOfTToAsyncValueOfT()), loading: dart.fn(l => l, __t$AsyncLoadingOfTToAsyncLoadingOfT())});
      }
      toString() {
        let content = (() => {
          let t42 = T$.JSArrayOfString().of([]);
          if (this.isLoading) t42.push("isLoading: " + dart.str(this.isLoading));
          if (this.hasValue) t42.push("value: " + dart.str(this.value));
          if (common['AsyncValueX|get#hasError'](T, this)) t42[$addAll](T$.JSArrayOfString().of(["error: " + dart.str(this.error), "stackTrace: " + dart.str(this.stackTrace)]));
          return t42;
        })()[$join](", ");
        return dart.str(this[$runtimeType]) + "(" + content + ")";
      }
      _equals(other) {
        if (other == null) return false;
        return this[$runtimeType]._equals(other[$runtimeType]) && __t$AsyncValueOfT().is(other) && other.isLoading === this.isLoading && other.hasValue === this.hasValue && dart.equals(other.error, this.error) && dart.equals(other.stackTrace, this.stackTrace) && dart.equals(other.value, this.value);
      }
      get hashCode() {
        return core.Object.hash(this[$runtimeType], this.value, this.isLoading, this.hasValue, this.error, this.stackTrace);
      }
    }
    (AsyncValue.__ = function() {
      ;
    }).prototype = AsyncValue.prototype;
    dart.addTypeTests(AsyncValue);
    AsyncValue.prototype[_is_AsyncValue_default] = true;
    dart.addTypeCaches(AsyncValue);
    dart.setMethodSignature(AsyncValue, () => ({
      __proto__: dart.getMethods(AsyncValue.__proto__),
      unwrapPrevious: dart.fnType(common.AsyncValue$(T), [])
    }));
    dart.setStaticMethodSignature(AsyncValue, () => ['data', 'loading', 'error', 'guard']);
    dart.setLibraryUri(AsyncValue, I[8]);
    dart.setStaticFieldSignature(AsyncValue, () => ['_redirecting#']);
    dart.defineExtensionMethods(AsyncValue, ['toString', '_equals']);
    dart.defineExtensionAccessors(AsyncValue, ['hashCode']);
    return AsyncValue;
  });
  common.AsyncValue = common.AsyncValue$();
  dart.addTypeTests(common.AsyncValue, _is_AsyncValue_default);
  const _is__StreamProviderElementMixin_default = Symbol('_is__StreamProviderElementMixin_default');
  stream_provider._StreamProviderElementMixin$ = dart.generic(State => {
    var __t$AsyncDataOfState = () => (__t$AsyncDataOfState = dart.constFn(common.AsyncData$(State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$AsyncErrorOfState = () => (__t$AsyncErrorOfState = dart.constFn(common.AsyncError$(State)))();
    var __t$AsyncLoadingOfState = () => (__t$AsyncLoadingOfState = dart.constFn(common.AsyncLoading$(State)))();
    class _StreamProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(State)) {}
    _StreamProviderElementMixin[dart.mixinOn] = ProviderElementBase => class _StreamProviderElementMixin extends ProviderElementBase {
      [_listenStream](stream) {
        try {
          let sub = stream().listen(dart.fn(event => this.setState(new (__t$AsyncDataOfState()).new(event)), __t$StateTovoid()), {onError: dart.fn((err, stack) => {
              this.setState(new (__t$AsyncErrorOfState()).new(err, {stackTrace: stack}));
            }, T$.ObjectAndStackTraceToNull())});
          this.onDispose(dart.bind(sub, 'cancel'));
          return new (__t$AsyncLoadingOfState()).new();
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$AsyncErrorOfState()).new(err, {stackTrace: stack});
          } else
            throw e;
        }
      }
    };
    dart.addTypeTests(_StreamProviderElementMixin);
    _StreamProviderElementMixin.prototype[_is__StreamProviderElementMixin_default] = true;
    dart.addTypeCaches(_StreamProviderElementMixin);
    _StreamProviderElementMixin[dart.implements] = () => [framework.ProviderElementBase$(common.AsyncValue$(State))];
    dart.setMethodSignature(_StreamProviderElementMixin, () => ({
      __proto__: dart.getMethods(_StreamProviderElementMixin.__proto__),
      [_listenStream]: dart.fnType(common.AsyncValue$(State), [dart.fnType(async.Stream$(State), [])])
    }));
    dart.setLibraryUri(_StreamProviderElementMixin, I[9]);
    return _StreamProviderElementMixin;
  });
  stream_provider._StreamProviderElementMixin = stream_provider._StreamProviderElementMixin$();
  dart.addTypeTests(stream_provider._StreamProviderElementMixin, _is__StreamProviderElementMixin_default);
  const _is_AutoDisposeStreamProviderRef_default = Symbol('_is_AutoDisposeStreamProviderRef_default');
  stream_provider.AutoDisposeStreamProviderRef$ = dart.generic(State => {
    class AutoDisposeStreamProviderRef extends core.Object {}
    (AutoDisposeStreamProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStreamProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderRef);
    AutoDisposeStreamProviderRef.prototype[_is_AutoDisposeStreamProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderRef);
    AutoDisposeStreamProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(common.AsyncValue$(State))];
    dart.setLibraryUri(AutoDisposeStreamProviderRef, I[9]);
    return AutoDisposeStreamProviderRef;
  });
  stream_provider.AutoDisposeStreamProviderRef = stream_provider.AutoDisposeStreamProviderRef$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderRef, _is_AutoDisposeStreamProviderRef_default);
  var dependencies$0 = dart.privateName(stream_provider, "AutoDisposeStreamProvider.dependencies");
  var __AutoDisposeStreamProvider_stream = dart.privateName(stream_provider, "_#AutoDisposeStreamProvider#stream");
  var __AutoDisposeStreamProvider_future = dart.privateName(stream_provider, "_#AutoDisposeStreamProvider#future");
  var _create$ = dart.privateName(stream_provider, "_create");
  const _is_AutoDisposeStreamProvider_default = Symbol('_is_AutoDisposeStreamProvider_default');
  stream_provider.AutoDisposeStreamProvider$ = dart.generic(State => {
    var __t$AutoDisposeAsyncValueAsStreamProviderOfState = () => (__t$AutoDisposeAsyncValueAsStreamProviderOfState = dart.constFn(async_value_converters.AutoDisposeAsyncValueAsStreamProvider$(State)))();
    var __t$AutoDisposeAsyncValueAsFutureProviderOfState = () => (__t$AutoDisposeAsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AutoDisposeAsyncValueAsFutureProvider$(State)))();
    var __t$AutoDisposeStreamProviderElementOfState = () => (__t$AutoDisposeStreamProviderElementOfState = dart.constFn(stream_provider.AutoDisposeStreamProviderElement$(State)))();
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$VoidToStreamOfState = () => (__t$VoidToStreamOfState = dart.constFn(dart.fnType(__t$StreamOfState(), [])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AutoDisposeProviderBase_OverrideWithValueMixin$36 = class AutoDisposeProviderBase_OverrideWithValueMixin extends framework.AutoDisposeProviderBase$(common.AsyncValue$(State)) {};
    (AutoDisposeProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(common.AsyncValue$(State)));
    const AutoDisposeProviderBase_OverrideWithProviderMixin$36 = class AutoDisposeProviderBase_OverrideWithProviderMixin extends AutoDisposeProviderBase_OverrideWithValueMixin$36 {};
    (AutoDisposeProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(common.AsyncValue$(State), framework.AutoDisposeProviderBase$(common.AsyncValue$(State))));
    class AutoDisposeStreamProvider extends AutoDisposeProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$0];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (stream_provider.AutoDisposeStreamProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get originProvider() {
        return this;
      }
      get stream() {
        let t44, t43;
        t43 = this[__AutoDisposeStreamProvider_stream];
        return t43 == null ? (t44 = new (__t$AutoDisposeAsyncValueAsStreamProviderOfState()).new(this, {from: this.from, argument: this.argument, cacheTime: this.cacheTime, disposeDelay: this.disposeDelay}), this[__AutoDisposeStreamProvider_stream] == null ? this[__AutoDisposeStreamProvider_stream] = t44 : dart.throw(new _internal.LateError.fieldADI("stream"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__AutoDisposeStreamProvider_future];
        return t43 == null ? (t44 = new (__t$AutoDisposeAsyncValueAsFutureProviderOfState()).new(this, {from: this.from, argument: this.argument, cacheTime: this.cacheTime, disposeDelay: this.disposeDelay}), this[__AutoDisposeStreamProvider_future] == null ? this[__AutoDisposeStreamProvider_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      get last() {
        return this.future;
      }
      create(ref) {
        __t$AutoDisposeStreamProviderElementOfState().as(ref);
        return ref[_listenStream](dart.fn(() => {
          let t43;
          t43 = ref;
          return this[_create$](t43);
        }, __t$VoidToStreamOfState()));
      }
      updateShouldNotify(previousState, newState) {
        __t$AsyncValueOfState().as(previousState);
        __t$AsyncValueOfState().as(newState);
        let wasLoading = common.AsyncLoading.is(previousState);
        let isLoading = common.AsyncLoading.is(newState);
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      createElement() {
        return new (__t$AutoDisposeStreamProviderElementOfState()).new(this);
      }
    }
    (AutoDisposeStreamProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[__AutoDisposeStreamProvider_stream] = null;
      this[__AutoDisposeStreamProvider_future] = null;
      this[_create$] = _create;
      this[dependencies$0] = dependencies;
      AutoDisposeStreamProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStreamProvider.prototype;
    dart.addTypeTests(AutoDisposeStreamProvider);
    AutoDisposeStreamProvider.prototype[_is_AutoDisposeStreamProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProvider);
    dart.setMethodSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStreamProvider.__proto__),
      create: dart.fnType(common.AsyncValue$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(stream_provider.AutoDisposeStreamProviderElement$(State), [])
    }));
    dart.setGetterSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeStreamProvider.__proto__),
      originProvider: framework.ProviderBase$(common.AsyncValue$(State)),
      stream: framework.AutoDisposeProviderBase$(async.Stream$(State)),
      future: framework.AutoDisposeProviderBase$(async.Future$(State)),
      last: framework.AutoDisposeProviderBase$(async.Future$(State))
    }));
    dart.setLibraryUri(AutoDisposeStreamProvider, I[9]);
    dart.setFieldSignature(AutoDisposeStreamProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStreamProvider.__proto__),
      [_create$]: dart.finalFieldType(dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeStreamProvider_stream]: dart.fieldType(dart.nullable(framework.AutoDisposeProviderBase$(async.Stream$(State)))),
      [__AutoDisposeStreamProvider_future]: dart.fieldType(dart.nullable(framework.AutoDisposeProviderBase$(async.Future$(State))))
    }));
    dart.setStaticFieldSignature(AutoDisposeStreamProvider, () => ['family']);
    return AutoDisposeStreamProvider;
  });
  stream_provider.AutoDisposeStreamProvider = stream_provider.AutoDisposeStreamProvider$();
  dart.defineLazy(stream_provider.AutoDisposeStreamProvider, {
    /*stream_provider.AutoDisposeStreamProvider.family*/get family() {
      return C[3] || CT.C3;
    }
  }, false);
  dart.addTypeTests(stream_provider.AutoDisposeStreamProvider, _is_AutoDisposeStreamProvider_default);
  const _is_AutoDisposeStreamProviderElement_default = Symbol('_is_AutoDisposeStreamProviderElement_default');
  stream_provider.AutoDisposeStreamProviderElement$ = dart.generic(State => {
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AutoDisposeProviderElementBase__StreamProviderElementMixin$36 = class AutoDisposeProviderElementBase__StreamProviderElementMixin extends framework.AutoDisposeProviderElementBase$(common.AsyncValue$(State)) {};
    (AutoDisposeProviderElementBase__StreamProviderElementMixin$36.new = function(provider) {
      AutoDisposeProviderElementBase__StreamProviderElementMixin$36.__proto__.new.call(this, provider);
    }).prototype = AutoDisposeProviderElementBase__StreamProviderElementMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderElementBase__StreamProviderElementMixin$36, stream_provider._StreamProviderElementMixin$(State));
    class AutoDisposeStreamProviderElement extends AutoDisposeProviderElementBase__StreamProviderElementMixin$36 {
      static ['_#new#tearOff'](State, provider) {
        return new (stream_provider.AutoDisposeStreamProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        __t$AsyncValueOfState().as(newState);
        return this.setState(newState);
      }
    }
    (AutoDisposeStreamProviderElement.new = function(provider) {
      AutoDisposeStreamProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = AutoDisposeStreamProviderElement.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderElement);
    AutoDisposeStreamProviderElement.prototype[_is_AutoDisposeStreamProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderElement);
    AutoDisposeStreamProviderElement[dart.implements] = () => [stream_provider.AutoDisposeStreamProviderRef$(State)];
    dart.setGetterSignature(AutoDisposeStreamProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeStreamProviderElement.__proto__),
      state: common.AsyncValue$(State)
    }));
    dart.setSetterSignature(AutoDisposeStreamProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeStreamProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(AutoDisposeStreamProviderElement, I[9]);
    return AutoDisposeStreamProviderElement;
  });
  stream_provider.AutoDisposeStreamProviderElement = stream_provider.AutoDisposeStreamProviderElement$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderElement, _is_AutoDisposeStreamProviderElement_default);
  const _is_AutoDisposeStreamProviderFamily_default = Symbol('_is_AutoDisposeStreamProviderFamily_default');
  stream_provider.AutoDisposeStreamProviderFamily$ = dart.generic((State, Arg) => {
    var __t$AutoDisposeStreamProviderOfState = () => (__t$AutoDisposeStreamProviderOfState = dart.constFn(stream_provider.AutoDisposeStreamProvider$(State)))();
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$AutoDisposeStreamProviderRefOfState = () => (__t$AutoDisposeStreamProviderRefOfState = dart.constFn(stream_provider.AutoDisposeStreamProviderRef$(State)))();
    var __t$AutoDisposeStreamProviderRefOfStateToStreamOfState = () => (__t$AutoDisposeStreamProviderRefOfStateToStreamOfState = dart.constFn(dart.fnType(__t$StreamOfState(), [__t$AutoDisposeStreamProviderRefOfState()])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    var __t$AutoDisposeProviderBaseOfAsyncValueOfState = () => (__t$AutoDisposeProviderBaseOfAsyncValueOfState = dart.constFn(framework.AutoDisposeProviderBase$(__t$AsyncValueOfState())))();
    var __t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState = () => (__t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState = dart.constFn(dart.fnType(__t$AutoDisposeProviderBaseOfAsyncValueOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class AutoDisposeStreamProviderFamily extends framework.Family$(common.AsyncValue$(State), Arg, stream_provider.AutoDisposeStreamProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (stream_provider.AutoDisposeStreamProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$AutoDisposeStreamProviderOfState()).new(dart.fn(ref => {
          let t44, t43;
          t43 = ref;
          t44 = argument;
          return this[_create$](t43, t44);
        }, __t$AutoDisposeStreamProviderRefOfStateToStreamOfState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider, override: provider});
      }
      overrideWithProvider(override) {
        __t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          setup({origin: provider, override: override(arg)});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (AutoDisposeStreamProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$] = _create;
      AutoDisposeStreamProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStreamProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStreamProviderFamily);
    AutoDisposeStreamProviderFamily.prototype[_is_AutoDisposeStreamProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStreamProviderFamily);
    dart.setMethodSignature(AutoDisposeStreamProviderFamily, () => ({
      __proto__: dart.getMethods(AutoDisposeStreamProviderFamily.__proto__),
      create: dart.fnType(stream_provider.AutoDisposeStreamProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AutoDisposeStreamProviderFamily, I[9]);
    dart.setFieldSignature(AutoDisposeStreamProviderFamily, () => ({
      __proto__: dart.getFields(AutoDisposeStreamProviderFamily.__proto__),
      [_create$]: dart.finalFieldType(dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State), Arg]))
    }));
    return AutoDisposeStreamProviderFamily;
  });
  stream_provider.AutoDisposeStreamProviderFamily = stream_provider.AutoDisposeStreamProviderFamily$();
  dart.addTypeTests(stream_provider.AutoDisposeStreamProviderFamily, _is_AutoDisposeStreamProviderFamily_default);
  const _is_StreamProviderRef_default = Symbol('_is_StreamProviderRef_default');
  stream_provider.StreamProviderRef$ = dart.generic(State => {
    class StreamProviderRef extends core.Object {}
    (StreamProviderRef.new = function() {
      ;
    }).prototype = StreamProviderRef.prototype;
    dart.addTypeTests(StreamProviderRef);
    StreamProviderRef.prototype[_is_StreamProviderRef_default] = true;
    dart.addTypeCaches(StreamProviderRef);
    StreamProviderRef[dart.implements] = () => [framework.Ref$(common.AsyncValue$(State))];
    dart.setLibraryUri(StreamProviderRef, I[9]);
    return StreamProviderRef;
  });
  stream_provider.StreamProviderRef = stream_provider.StreamProviderRef$();
  dart.addTypeTests(stream_provider.StreamProviderRef, _is_StreamProviderRef_default);
  var dependencies$1 = dart.privateName(stream_provider, "StreamProvider.dependencies");
  var __StreamProvider_stream = dart.privateName(stream_provider, "_#StreamProvider#stream");
  var __StreamProvider_future = dart.privateName(stream_provider, "_#StreamProvider#future");
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  stream_provider.StreamProvider$ = dart.generic(State => {
    var __t$AsyncValueAsStreamProviderOfState = () => (__t$AsyncValueAsStreamProviderOfState = dart.constFn(async_value_converters.AsyncValueAsStreamProvider$(State)))();
    var __t$AsyncValueAsFutureProviderOfState = () => (__t$AsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AsyncValueAsFutureProvider$(State)))();
    var __t$StreamProviderElementOfState = () => (__t$StreamProviderElementOfState = dart.constFn(stream_provider.StreamProviderElement$(State)))();
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$VoidToStreamOfState = () => (__t$VoidToStreamOfState = dart.constFn(dart.fnType(__t$StreamOfState(), [])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AlwaysAliveProviderBase_OverrideWithValueMixin$36 = class AlwaysAliveProviderBase_OverrideWithValueMixin extends framework.AlwaysAliveProviderBase$(common.AsyncValue$(State)) {};
    (AlwaysAliveProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(common.AsyncValue$(State)));
    const AlwaysAliveProviderBase_OverrideWithProviderMixin$36 = class AlwaysAliveProviderBase_OverrideWithProviderMixin extends AlwaysAliveProviderBase_OverrideWithValueMixin$36 {};
    (AlwaysAliveProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(common.AsyncValue$(State), framework.AlwaysAliveProviderBase$(common.AsyncValue$(State))));
    class StreamProvider extends AlwaysAliveProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$1];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (stream_provider.StreamProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      get originProvider() {
        return this;
      }
      get stream() {
        let t44, t43;
        t43 = this[__StreamProvider_stream];
        return t43 == null ? (t44 = new (__t$AsyncValueAsStreamProviderOfState()).new(this, {from: this.from, argument: this.argument}), this[__StreamProvider_stream] == null ? this[__StreamProvider_stream] = t44 : dart.throw(new _internal.LateError.fieldADI("stream"))) : t43;
      }
      get future() {
        let t44, t43;
        t43 = this[__StreamProvider_future];
        return t43 == null ? (t44 = new (__t$AsyncValueAsFutureProviderOfState()).new(this, {from: this.from, argument: this.argument}), this[__StreamProvider_future] == null ? this[__StreamProvider_future] = t44 : dart.throw(new _internal.LateError.fieldADI("future"))) : t43;
      }
      get last() {
        return this.future;
      }
      create(ref) {
        __t$StreamProviderElementOfState().as(ref);
        return ref[_listenStream](dart.fn(() => {
          let t43;
          t43 = ref;
          return this[_create$](t43);
        }, __t$VoidToStreamOfState()));
      }
      updateShouldNotify(previousState, newState) {
        __t$AsyncValueOfState().as(previousState);
        __t$AsyncValueOfState().as(newState);
        let wasLoading = common.AsyncLoading.is(previousState);
        let isLoading = common.AsyncLoading.is(newState);
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      createElement() {
        return new (__t$StreamProviderElementOfState()).new(this);
      }
    }
    (StreamProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[__StreamProvider_stream] = null;
      this[__StreamProvider_future] = null;
      this[_create$] = _create;
      this[dependencies$1] = dependencies;
      StreamProvider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    dart.addTypeCaches(StreamProvider);
    dart.setMethodSignature(StreamProvider, () => ({
      __proto__: dart.getMethods(StreamProvider.__proto__),
      create: dart.fnType(common.AsyncValue$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(stream_provider.StreamProviderElement$(State), [])
    }));
    dart.setGetterSignature(StreamProvider, () => ({
      __proto__: dart.getGetters(StreamProvider.__proto__),
      originProvider: framework.ProviderBase$(common.AsyncValue$(State)),
      stream: framework.AlwaysAliveProviderBase$(async.Stream$(State)),
      future: framework.AlwaysAliveProviderBase$(async.Future$(State)),
      last: framework.AlwaysAliveProviderBase$(async.Future$(State))
    }));
    dart.setLibraryUri(StreamProvider, I[9]);
    dart.setFieldSignature(StreamProvider, () => ({
      __proto__: dart.getFields(StreamProvider.__proto__),
      [_create$]: dart.finalFieldType(dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__StreamProvider_stream]: dart.fieldType(dart.nullable(framework.AlwaysAliveProviderBase$(async.Stream$(State)))),
      [__StreamProvider_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveProviderBase$(async.Future$(State))))
    }));
    dart.setStaticFieldSignature(StreamProvider, () => ['family', 'autoDispose']);
    return StreamProvider;
  });
  stream_provider.StreamProvider = stream_provider.StreamProvider$();
  dart.defineLazy(stream_provider.StreamProvider, {
    /*stream_provider.StreamProvider.family*/get family() {
      return C[4] || CT.C4;
    },
    /*stream_provider.StreamProvider.autoDispose*/get autoDispose() {
      return C[5] || CT.C5;
    }
  }, false);
  dart.addTypeTests(stream_provider.StreamProvider, _is_StreamProvider_default);
  const _is_StreamProviderElement_default = Symbol('_is_StreamProviderElement_default');
  stream_provider.StreamProviderElement$ = dart.generic(State => {
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const ProviderElementBase__StreamProviderElementMixin$36 = class ProviderElementBase__StreamProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(State)) {};
    (ProviderElementBase__StreamProviderElementMixin$36.new = function(_provider) {
      ProviderElementBase__StreamProviderElementMixin$36.__proto__.new.call(this, _provider);
    }).prototype = ProviderElementBase__StreamProviderElementMixin$36.prototype;
    dart.applyMixin(ProviderElementBase__StreamProviderElementMixin$36, stream_provider._StreamProviderElementMixin$(State));
    class StreamProviderElement extends ProviderElementBase__StreamProviderElementMixin$36 {
      static ['_#new#tearOff'](State, provider) {
        return new (stream_provider.StreamProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        __t$AsyncValueOfState().as(newState);
        return this.setState(newState);
      }
    }
    (StreamProviderElement.new = function(provider) {
      StreamProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = StreamProviderElement.prototype;
    dart.addTypeTests(StreamProviderElement);
    StreamProviderElement.prototype[_is_StreamProviderElement_default] = true;
    dart.addTypeCaches(StreamProviderElement);
    StreamProviderElement[dart.implements] = () => [stream_provider.StreamProviderRef$(State)];
    dart.setGetterSignature(StreamProviderElement, () => ({
      __proto__: dart.getGetters(StreamProviderElement.__proto__),
      state: common.AsyncValue$(State)
    }));
    dart.setSetterSignature(StreamProviderElement, () => ({
      __proto__: dart.getSetters(StreamProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(StreamProviderElement, I[9]);
    return StreamProviderElement;
  });
  stream_provider.StreamProviderElement = stream_provider.StreamProviderElement$();
  dart.addTypeTests(stream_provider.StreamProviderElement, _is_StreamProviderElement_default);
  const _is_StreamProviderFamily_default = Symbol('_is_StreamProviderFamily_default');
  stream_provider.StreamProviderFamily$ = dart.generic((State, Arg) => {
    var __t$StreamProviderOfState = () => (__t$StreamProviderOfState = dart.constFn(stream_provider.StreamProvider$(State)))();
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$StreamProviderRefOfState = () => (__t$StreamProviderRefOfState = dart.constFn(stream_provider.StreamProviderRef$(State)))();
    var __t$StreamProviderRefOfStateToStreamOfState = () => (__t$StreamProviderRefOfStateToStreamOfState = dart.constFn(dart.fnType(__t$StreamOfState(), [__t$StreamProviderRefOfState()])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    var __t$AlwaysAliveProviderBaseOfAsyncValueOfState = () => (__t$AlwaysAliveProviderBaseOfAsyncValueOfState = dart.constFn(framework.AlwaysAliveProviderBase$(__t$AsyncValueOfState())))();
    var __t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState = () => (__t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState = dart.constFn(dart.fnType(__t$AlwaysAliveProviderBaseOfAsyncValueOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class StreamProviderFamily extends framework.Family$(common.AsyncValue$(State), Arg, stream_provider.StreamProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (stream_provider.StreamProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$StreamProviderOfState()).new(dart.fn(ref => {
          let t44, t43;
          t43 = ref;
          t44 = argument;
          return this[_create$](t43, t44);
        }, __t$StreamProviderRefOfStateToStreamOfState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider, override: provider});
      }
      overrideWithProvider(override) {
        __t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          setup({origin: provider, override: override(arg)});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (StreamProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[_create$] = _create;
      StreamProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies});
      ;
    }).prototype = StreamProviderFamily.prototype;
    dart.addTypeTests(StreamProviderFamily);
    StreamProviderFamily.prototype[_is_StreamProviderFamily_default] = true;
    dart.addTypeCaches(StreamProviderFamily);
    dart.setMethodSignature(StreamProviderFamily, () => ({
      __proto__: dart.getMethods(StreamProviderFamily.__proto__),
      create: dart.fnType(stream_provider.StreamProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(StreamProviderFamily, I[9]);
    dart.setFieldSignature(StreamProviderFamily, () => ({
      __proto__: dart.getFields(StreamProviderFamily.__proto__),
      [_create$]: dart.finalFieldType(dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State), Arg]))
    }));
    return StreamProviderFamily;
  });
  stream_provider.StreamProviderFamily = stream_provider.StreamProviderFamily$();
  dart.addTypeTests(stream_provider.StreamProviderFamily, _is_StreamProviderFamily_default);
  var eventKind$ = dart.privateName(provider$, "PostEventCall.eventKind");
  var event$ = dart.privateName(provider$, "PostEventCall.event");
  provider$.PostEventCall = class PostEventCall extends core.Object {
    get eventKind() {
      return this[eventKind$];
    }
    set eventKind(value) {
      super.eventKind = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
    static ['_#_#tearOff'](eventKind, event) {
      return new provider$.PostEventCall.__(eventKind, event);
    }
  };
  (provider$.PostEventCall.__ = function(eventKind, event) {
    this[eventKind$] = eventKind;
    this[event$] = event;
    ;
  }).prototype = provider$.PostEventCall.prototype;
  dart.addTypeTests(provider$.PostEventCall);
  dart.addTypeCaches(provider$.PostEventCall);
  dart.setLibraryUri(provider$.PostEventCall, I[10]);
  dart.setFieldSignature(provider$.PostEventCall, () => ({
    __proto__: dart.getFields(provider$.PostEventCall.__proto__),
    eventKind: dart.finalFieldType(core.String),
    event: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))
  }));
  var logs = dart.privateName(provider$, "PostEventSpy.logs");
  var _postEvent = dart.privateName(provider$, "_postEvent");
  provider$.PostEventSpy = class PostEventSpy extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      super.logs = value;
    }
    static ['_#_#tearOff']() {
      return new provider$.PostEventSpy.__();
    }
    dispose() {
      if (!dart.equals(provider$._debugPostEventOverride, dart.bind(this, _postEvent))) dart.assertFailed("disposed a spy different from the current spy", I[11], 43, 7, "_debugPostEventOverride == _postEvent");
      provider$._debugPostEventOverride = null;
    }
    [_postEvent](eventKind, event) {
      this.logs[$add](new provider$.PostEventCall.__(eventKind, event));
    }
  };
  (provider$.PostEventSpy.__ = function() {
    this[logs] = T$.JSArrayOfPostEventCall().of([]);
    ;
  }).prototype = provider$.PostEventSpy.prototype;
  dart.addTypeTests(provider$.PostEventSpy);
  dart.addTypeCaches(provider$.PostEventSpy);
  dart.setMethodSignature(provider$.PostEventSpy, () => ({
    __proto__: dart.getMethods(provider$.PostEventSpy.__proto__),
    dispose: dart.fnType(dart.void, []),
    [_postEvent]: dart.fnType(dart.void, [core.String, core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))])
  }));
  dart.setLibraryUri(provider$.PostEventSpy, I[10]);
  dart.setFieldSignature(provider$.PostEventSpy, () => ({
    __proto__: dart.getFields(provider$.PostEventSpy.__proto__),
    logs: dart.finalFieldType(core.List$(provider$.PostEventCall))
  }));
  var _containers = dart.privateName(provider$, "_containers");
  provider$.RiverpodBinding = class RiverpodBinding extends core.Object {
    static ['_#_#tearOff']() {
      return new provider$.RiverpodBinding.__();
    }
    static get debugInstance() {
      let binding = null;
      if (!dart.fn(() => {
        binding = provider$.RiverpodBinding._instance;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed("", I[11], 65, 12, "() {\n      binding = _instance;\n      return true;\n    }()");
      return dart.nullCheck(binding);
    }
    get containers() {
      return this[_containers];
    }
    set containers(value) {
      provider$.debugPostEvent("riverpod:container_list_changed");
      this[_containers] = value;
    }
    providerListChangedFor(opts) {
      let containerId = opts && 'containerId' in opts ? opts.containerId : null;
      provider$.debugPostEvent("riverpod:provider_list_changed", new (T$.LinkedMapOfObjectN$ObjectN()).from(["container_id", containerId]));
    }
    providerChanged(opts) {
      let containerId = opts && 'containerId' in opts ? opts.containerId : null;
      let providerId = opts && 'providerId' in opts ? opts.providerId : null;
      provider$.debugPostEvent("riverpod:provider_changed", new (T$.LinkedMapOfObjectN$ObjectN()).from(["container_id", containerId, "provider_id", providerId]));
    }
  };
  (provider$.RiverpodBinding.__ = function() {
    this[_containers] = new (T$.IdentityMapOfString$ProviderContainer()).new();
    ;
  }).prototype = provider$.RiverpodBinding.prototype;
  dart.addTypeTests(provider$.RiverpodBinding);
  dart.addTypeCaches(provider$.RiverpodBinding);
  dart.setMethodSignature(provider$.RiverpodBinding, () => ({
    __proto__: dart.getMethods(provider$.RiverpodBinding.__proto__),
    providerListChangedFor: dart.fnType(dart.void, [], {}, {containerId: core.String}),
    providerChanged: dart.fnType(dart.void, [], {}, {containerId: core.String, providerId: core.String})
  }));
  dart.setGetterSignature(provider$.RiverpodBinding, () => ({
    __proto__: dart.getGetters(provider$.RiverpodBinding.__proto__),
    containers: core.Map$(core.String, framework.ProviderContainer)
  }));
  dart.setSetterSignature(provider$.RiverpodBinding, () => ({
    __proto__: dart.getSetters(provider$.RiverpodBinding.__proto__),
    containers: core.Map$(core.String, framework.ProviderContainer)
  }));
  dart.setStaticGetterSignature(provider$.RiverpodBinding, () => ['debugInstance']);
  dart.setLibraryUri(provider$.RiverpodBinding, I[10]);
  dart.setFieldSignature(provider$.RiverpodBinding, () => ({
    __proto__: dart.getFields(provider$.RiverpodBinding.__proto__),
    [_containers]: dart.fieldType(core.Map$(core.String, framework.ProviderContainer))
  }));
  dart.setStaticFieldSignature(provider$.RiverpodBinding, () => ['_instance']);
  dart.defineLazy(provider$.RiverpodBinding, {
    /*provider$.RiverpodBinding._instance*/get _instance() {
      return new provider$.RiverpodBinding.__();
    }
  }, false);
  const _is_AutoDisposeProviderRef_default = Symbol('_is_AutoDisposeProviderRef_default');
  provider$.AutoDisposeProviderRef$ = dart.generic(State => {
    class AutoDisposeProviderRef extends core.Object {}
    (AutoDisposeProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeProviderRef.prototype;
    dart.addTypeTests(AutoDisposeProviderRef);
    AutoDisposeProviderRef.prototype[_is_AutoDisposeProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeProviderRef);
    AutoDisposeProviderRef[dart.implements] = () => [provider$.ProviderRef$(State), framework.AutoDisposeRef$(State)];
    dart.setLibraryUri(AutoDisposeProviderRef, I[10]);
    return AutoDisposeProviderRef;
  });
  provider$.AutoDisposeProviderRef = provider$.AutoDisposeProviderRef$();
  dart.addTypeTests(provider$.AutoDisposeProviderRef, _is_AutoDisposeProviderRef_default);
  var dependencies$2 = dart.privateName(provider$, "AutoDisposeProvider.dependencies");
  var _create$0 = dart.privateName(provider$, "_create");
  const _is_AutoDisposeProvider_default = Symbol('_is_AutoDisposeProvider_default');
  provider$.AutoDisposeProvider$ = dart.generic(State => {
    var __t$AutoDisposeProviderRefOfState = () => (__t$AutoDisposeProviderRefOfState = dart.constFn(provider$.AutoDisposeProviderRef$(State)))();
    var __t$AutoDisposeProviderElementOfState = () => (__t$AutoDisposeProviderElementOfState = dart.constFn(provider$.AutoDisposeProviderElement$(State)))();
    const AutoDisposeProviderBase_OverrideWithValueMixin$36 = class AutoDisposeProviderBase_OverrideWithValueMixin extends framework.AutoDisposeProviderBase$(State) {};
    (AutoDisposeProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(State));
    const AutoDisposeProviderBase_OverrideWithProviderMixin$36 = class AutoDisposeProviderBase_OverrideWithProviderMixin extends AutoDisposeProviderBase_OverrideWithValueMixin$36 {};
    (AutoDisposeProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(State, framework.AutoDisposeProviderBase$(State)));
    class AutoDisposeProvider extends AutoDisposeProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$2];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (provider$.AutoDisposeProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get originProvider() {
        return this;
      }
      create(ref) {
        let t43;
        __t$AutoDisposeProviderRefOfState().as(ref);
        t43 = ref;
        return this[_create$0](t43);
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return !dart.equals(previousState, newState);
      }
      createElement() {
        return new (__t$AutoDisposeProviderElementOfState()).new(this);
      }
    }
    (AutoDisposeProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$0] = _create;
      this[dependencies$2] = dependencies;
      AutoDisposeProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeProvider.prototype;
    dart.addTypeTests(AutoDisposeProvider);
    AutoDisposeProvider.prototype[_is_AutoDisposeProvider_default] = true;
    dart.addTypeCaches(AutoDisposeProvider);
    dart.setMethodSignature(AutoDisposeProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.AutoDisposeProviderElement$(State), [])
    }));
    dart.setGetterSignature(AutoDisposeProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeProvider.__proto__),
      originProvider: framework.ProviderBase$(State)
    }));
    dart.setLibraryUri(AutoDisposeProvider, I[10]);
    dart.setFieldSignature(AutoDisposeProvider, () => ({
      __proto__: dart.getFields(AutoDisposeProvider.__proto__),
      [_create$0]: dart.finalFieldType(dart.fnType(State, [provider$.AutoDisposeProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    dart.setStaticFieldSignature(AutoDisposeProvider, () => ['family']);
    return AutoDisposeProvider;
  });
  provider$.AutoDisposeProvider = provider$.AutoDisposeProvider$();
  dart.defineLazy(provider$.AutoDisposeProvider, {
    /*provider$.AutoDisposeProvider.family*/get family() {
      return C[6] || CT.C6;
    }
  }, false);
  dart.addTypeTests(provider$.AutoDisposeProvider, _is_AutoDisposeProvider_default);
  const _is_AutoDisposeProviderElement_default = Symbol('_is_AutoDisposeProviderElement_default');
  provider$.AutoDisposeProviderElement$ = dart.generic(State => {
    class AutoDisposeProviderElement extends framework.AutoDisposeProviderElementBase$(State) {
      static ['_#new#tearOff'](State, provider) {
        return new (provider$.AutoDisposeProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        State.as(newState);
        return this.setState(newState);
      }
    }
    (AutoDisposeProviderElement.new = function(provider) {
      AutoDisposeProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = AutoDisposeProviderElement.prototype;
    dart.addTypeTests(AutoDisposeProviderElement);
    AutoDisposeProviderElement.prototype[_is_AutoDisposeProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeProviderElement);
    AutoDisposeProviderElement[dart.implements] = () => [provider$.AutoDisposeProviderRef$(State)];
    dart.setGetterSignature(AutoDisposeProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeProviderElement.__proto__),
      state: State
    }));
    dart.setSetterSignature(AutoDisposeProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(AutoDisposeProviderElement, I[10]);
    return AutoDisposeProviderElement;
  });
  provider$.AutoDisposeProviderElement = provider$.AutoDisposeProviderElement$();
  dart.addTypeTests(provider$.AutoDisposeProviderElement, _is_AutoDisposeProviderElement_default);
  const _is_AutoDisposeProviderFamily_default = Symbol('_is_AutoDisposeProviderFamily_default');
  provider$.AutoDisposeProviderFamily$ = dart.generic((State, Arg) => {
    var __t$AutoDisposeProviderOfState = () => (__t$AutoDisposeProviderOfState = dart.constFn(provider$.AutoDisposeProvider$(State)))();
    var __t$AutoDisposeProviderRefOfState = () => (__t$AutoDisposeProviderRefOfState = dart.constFn(provider$.AutoDisposeProviderRef$(State)))();
    var __t$AutoDisposeProviderRefOfStateToState = () => (__t$AutoDisposeProviderRefOfStateToState = dart.constFn(dart.fnType(State, [__t$AutoDisposeProviderRefOfState()])))();
    class AutoDisposeProviderFamily extends framework.Family$(State, Arg, provider$.AutoDisposeProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (provider$.AutoDisposeProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$AutoDisposeProviderOfState()).new(dart.fn(ref => {
          let t44, t43;
          t43 = ref;
          t44 = argument;
          return this[_create$0](t43, t44);
        }, __t$AutoDisposeProviderRefOfStateToState()), {name: this.name, from: this, argument: argument});
      }
    }
    (AutoDisposeProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$0] = _create;
      AutoDisposeProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeProviderFamily);
    AutoDisposeProviderFamily.prototype[_is_AutoDisposeProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeProviderFamily);
    dart.setMethodSignature(AutoDisposeProviderFamily, () => ({
      __proto__: dart.getMethods(AutoDisposeProviderFamily.__proto__),
      create: dart.fnType(provider$.AutoDisposeProvider$(State), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AutoDisposeProviderFamily, I[10]);
    dart.setFieldSignature(AutoDisposeProviderFamily, () => ({
      __proto__: dart.getFields(AutoDisposeProviderFamily.__proto__),
      [_create$0]: dart.finalFieldType(dart.fnType(State, [provider$.AutoDisposeProviderRef$(State), Arg]))
    }));
    return AutoDisposeProviderFamily;
  });
  provider$.AutoDisposeProviderFamily = provider$.AutoDisposeProviderFamily$();
  dart.addTypeTests(provider$.AutoDisposeProviderFamily, _is_AutoDisposeProviderFamily_default);
  const _is_ProviderRef_default = Symbol('_is_ProviderRef_default');
  provider$.ProviderRef$ = dart.generic(State => {
    class ProviderRef extends core.Object {}
    (ProviderRef.new = function() {
      ;
    }).prototype = ProviderRef.prototype;
    dart.addTypeTests(ProviderRef);
    ProviderRef.prototype[_is_ProviderRef_default] = true;
    dart.addTypeCaches(ProviderRef);
    ProviderRef[dart.implements] = () => [framework.Ref$(State)];
    dart.setLibraryUri(ProviderRef, I[10]);
    return ProviderRef;
  });
  provider$.ProviderRef = provider$.ProviderRef$();
  dart.addTypeTests(provider$.ProviderRef, _is_ProviderRef_default);
  const _is_ProviderElement_default = Symbol('_is_ProviderElement_default');
  provider$.ProviderElement$ = dart.generic(State => {
    class ProviderElement extends framework.ProviderElementBase$(State) {
      static ['_#new#tearOff'](State, provider) {
        return new (provider$.ProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        State.as(newState);
        return this.setState(newState);
      }
    }
    (ProviderElement.new = function(provider) {
      ProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = ProviderElement.prototype;
    dart.addTypeTests(ProviderElement);
    ProviderElement.prototype[_is_ProviderElement_default] = true;
    dart.addTypeCaches(ProviderElement);
    ProviderElement[dart.implements] = () => [provider$.ProviderRef$(State)];
    dart.setGetterSignature(ProviderElement, () => ({
      __proto__: dart.getGetters(ProviderElement.__proto__),
      state: State
    }));
    dart.setSetterSignature(ProviderElement, () => ({
      __proto__: dart.getSetters(ProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ProviderElement, I[10]);
    return ProviderElement;
  });
  provider$.ProviderElement = provider$.ProviderElement$();
  dart.addTypeTests(provider$.ProviderElement, _is_ProviderElement_default);
  var dependencies$3 = dart.privateName(provider$, "Provider.dependencies");
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider$.Provider$ = dart.generic(State => {
    var __t$ProviderRefOfState = () => (__t$ProviderRefOfState = dart.constFn(provider$.ProviderRef$(State)))();
    var __t$ProviderElementOfState = () => (__t$ProviderElementOfState = dart.constFn(provider$.ProviderElement$(State)))();
    const AlwaysAliveProviderBase_OverrideWithValueMixin$36 = class AlwaysAliveProviderBase_OverrideWithValueMixin extends framework.AlwaysAliveProviderBase$(State) {};
    (AlwaysAliveProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(State));
    const AlwaysAliveProviderBase_OverrideWithProviderMixin$36 = class AlwaysAliveProviderBase_OverrideWithProviderMixin extends AlwaysAliveProviderBase_OverrideWithValueMixin$36 {};
    (AlwaysAliveProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(State, framework.AlwaysAliveProviderBase$(State)));
    class Provider extends AlwaysAliveProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$3];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (provider$.Provider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      get originProvider() {
        return this;
      }
      create(ref) {
        let t43;
        __t$ProviderRefOfState().as(ref);
        t43 = ref;
        return this[_create$0](t43);
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return !dart.equals(previousState, newState);
      }
      createElement() {
        return new (__t$ProviderElementOfState()).new(this);
      }
    }
    (Provider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[_create$0] = _create;
      this[dependencies$3] = dependencies;
      Provider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.ProviderElement$(State), [])
    }));
    dart.setGetterSignature(Provider, () => ({
      __proto__: dart.getGetters(Provider.__proto__),
      originProvider: framework.ProviderBase$(State)
    }));
    dart.setLibraryUri(Provider, I[10]);
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [_create$0]: dart.finalFieldType(dart.fnType(State, [provider$.ProviderRef$(State)]))
    }));
    dart.setStaticFieldSignature(Provider, () => ['family', 'autoDispose']);
    return Provider;
  });
  provider$.Provider = provider$.Provider$();
  dart.defineLazy(provider$.Provider, {
    /*provider$.Provider.family*/get family() {
      return C[7] || CT.C7;
    },
    /*provider$.Provider.autoDispose*/get autoDispose() {
      return C[8] || CT.C8;
    }
  }, false);
  dart.addTypeTests(provider$.Provider, _is_Provider_default);
  const _is_ProviderFamily_default = Symbol('_is_ProviderFamily_default');
  provider$.ProviderFamily$ = dart.generic((State, Arg) => {
    var __t$ProviderOfState = () => (__t$ProviderOfState = dart.constFn(provider$.Provider$(State)))();
    var __t$ProviderRefOfState = () => (__t$ProviderRefOfState = dart.constFn(provider$.ProviderRef$(State)))();
    var __t$ProviderRefOfStateToState = () => (__t$ProviderRefOfStateToState = dart.constFn(dart.fnType(State, [__t$ProviderRefOfState()])))();
    class ProviderFamily extends framework.Family$(State, Arg, provider$.Provider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (provider$.ProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$ProviderOfState()).new(dart.fn(ref => {
          let t44, t43;
          t43 = ref;
          t44 = argument;
          return this[_create$0](t43, t44);
        }, __t$ProviderRefOfStateToState()), {name: this.name, from: this, argument: argument});
      }
    }
    (ProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[_create$0] = _create;
      ProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies});
      ;
    }).prototype = ProviderFamily.prototype;
    dart.addTypeTests(ProviderFamily);
    ProviderFamily.prototype[_is_ProviderFamily_default] = true;
    dart.addTypeCaches(ProviderFamily);
    dart.setMethodSignature(ProviderFamily, () => ({
      __proto__: dart.getMethods(ProviderFamily.__proto__),
      create: dart.fnType(provider$.Provider$(State), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(ProviderFamily, I[10]);
    dart.setFieldSignature(ProviderFamily, () => ({
      __proto__: dart.getFields(ProviderFamily.__proto__),
      [_create$0]: dart.finalFieldType(dart.fnType(State, [provider$.ProviderRef$(State), Arg]))
    }));
    return ProviderFamily;
  });
  provider$.ProviderFamily = provider$.ProviderFamily$();
  dart.addTypeTests(provider$.ProviderFamily, _is_ProviderFamily_default);
  provider$.debugPostEvent = function debugPostEvent(eventKind, event = C[9] || CT.C9) {
    if (provider$._debugPostEventOverride != null) {
      dart.nullCheck(provider$._debugPostEventOverride)(eventKind, event);
    } else {
      developer.postEvent(eventKind, event);
    }
  };
  provider$.spyPostEvent = function spyPostEvent() {
    if (!(provider$._debugPostEventOverride == null)) dart.assertFailed("postEvent is already spied", I[11], 22, 10, "_debugPostEventOverride == null");
    let spy = new provider$.PostEventSpy.__();
    provider$._debugPostEventOverride = dart.bind(spy, _postEvent);
    return spy;
  };
  dart.defineLazy(provider$, {
    /*provider$._debugPostEventOverride*/get _debugPostEventOverride() {
      return null;
    },
    set _debugPostEventOverride(_) {}
  }, false);
  var _$35StateNotifierProviderOverrideMixin$35dependencies = dart.privateName(state_notifier_provider, "StateNotifierProviderOverrideMixin._#StateNotifierProviderOverrideMixin#dependencies");
  var _$35StateNotifierProviderOverrideMixin$35dependencies$35isSet = dart.privateName(state_notifier_provider, "StateNotifierProviderOverrideMixin._#StateNotifierProviderOverrideMixin#dependencies#isSet");
  var __StateNotifierProviderOverrideMixin_dependencies = dart.privateName(state_notifier_provider, "_#StateNotifierProviderOverrideMixin#dependencies");
  var __StateNotifierProviderOverrideMixin_dependencies_isSet = dart.privateName(state_notifier_provider, "_#StateNotifierProviderOverrideMixin#dependencies#isSet");
  const _is_StateNotifierProviderOverrideMixin_default = Symbol('_is_StateNotifierProviderOverrideMixin_default');
  state_notifier_provider.StateNotifierProviderOverrideMixin$ = dart.generic((Notifier, State) => {
    var __t$ValueProviderOfNotifier = () => (__t$ValueProviderOfNotifier = dart.constFn(value_provider.ValueProvider$(Notifier)))();
    class StateNotifierProviderOverrideMixin extends framework.ProviderBase$(State) {}
    StateNotifierProviderOverrideMixin[dart.mixinOn] = ProviderBase => class StateNotifierProviderOverrideMixin extends ProviderBase {
      get [__StateNotifierProviderOverrideMixin_dependencies]() {
        return this[_$35StateNotifierProviderOverrideMixin$35dependencies];
      }
      set [__StateNotifierProviderOverrideMixin_dependencies](value) {
        this[_$35StateNotifierProviderOverrideMixin$35dependencies] = value;
      }
      get [__StateNotifierProviderOverrideMixin_dependencies_isSet]() {
        return this[_$35StateNotifierProviderOverrideMixin$35dependencies$35isSet];
      }
      set [__StateNotifierProviderOverrideMixin_dependencies_isSet](value) {
        this[_$35StateNotifierProviderOverrideMixin$35dependencies$35isSet] = value;
      }
      get dependencies() {
        if (!this[__StateNotifierProviderOverrideMixin_dependencies_isSet]) {
          let t43 = T$.JSArrayOfProviderOrFamily().of([this.notifier]);
          if (this[__StateNotifierProviderOverrideMixin_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__StateNotifierProviderOverrideMixin_dependencies] = t43;
          this[__StateNotifierProviderOverrideMixin_dependencies_isSet] = true;
        }
        return this[__StateNotifierProviderOverrideMixin_dependencies];
      }
      get originProvider() {
        return this.notifier;
      }
      overrideWithValue(value) {
        Notifier.as(value);
        return new framework.ProviderOverride.new({origin: this.notifier, override: new (__t$ValueProviderOfNotifier()).new(value)});
      }
    };
    (StateNotifierProviderOverrideMixin[dart.mixinNew] = function() {
      this[_$35StateNotifierProviderOverrideMixin$35dependencies] = null;
      this[_$35StateNotifierProviderOverrideMixin$35dependencies$35isSet] = false;
    }).prototype = StateNotifierProviderOverrideMixin.prototype;
    dart.addTypeTests(StateNotifierProviderOverrideMixin);
    StateNotifierProviderOverrideMixin.prototype[_is_StateNotifierProviderOverrideMixin_default] = true;
    dart.addTypeCaches(StateNotifierProviderOverrideMixin);
    StateNotifierProviderOverrideMixin[dart.implements] = () => [framework.ProviderBase$(State)];
    dart.setMethodSignature(StateNotifierProviderOverrideMixin, () => ({
      __proto__: dart.getMethods(StateNotifierProviderOverrideMixin.__proto__),
      overrideWithValue: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(StateNotifierProviderOverrideMixin, () => ({
      __proto__: dart.getGetters(StateNotifierProviderOverrideMixin.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)),
      originProvider: framework.ProviderBase$(Notifier)
    }));
    dart.setLibraryUri(StateNotifierProviderOverrideMixin, I[12]);
    dart.setFieldSignature(StateNotifierProviderOverrideMixin, () => ({
      __proto__: dart.getFields(StateNotifierProviderOverrideMixin.__proto__),
      [__StateNotifierProviderOverrideMixin_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__StateNotifierProviderOverrideMixin_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    return StateNotifierProviderOverrideMixin;
  });
  state_notifier_provider.StateNotifierProviderOverrideMixin = state_notifier_provider.StateNotifierProviderOverrideMixin$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderOverrideMixin, _is_StateNotifierProviderOverrideMixin_default);
  const _is_AutoDisposeStateNotifierProviderRef_default = Symbol('_is_AutoDisposeStateNotifierProviderRef_default');
  state_notifier_provider.AutoDisposeStateNotifierProviderRef$ = dart.generic((Notifier, State) => {
    class AutoDisposeStateNotifierProviderRef extends core.Object {}
    (AutoDisposeStateNotifierProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStateNotifierProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProviderRef);
    AutoDisposeStateNotifierProviderRef.prototype[_is_AutoDisposeStateNotifierProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProviderRef);
    AutoDisposeStateNotifierProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(Notifier)];
    dart.setLibraryUri(AutoDisposeStateNotifierProviderRef, I[12]);
    return AutoDisposeStateNotifierProviderRef;
  });
  state_notifier_provider.AutoDisposeStateNotifierProviderRef = state_notifier_provider.AutoDisposeStateNotifierProviderRef$();
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProviderRef, _is_AutoDisposeStateNotifierProviderRef_default);
  var notifier = dart.privateName(state_notifier_provider, "AutoDisposeStateNotifierProvider.notifier");
  const _is_AutoDisposeStateNotifierProvider_default = Symbol('_is_AutoDisposeStateNotifierProvider_default');
  state_notifier_provider.AutoDisposeStateNotifierProvider$ = dart.generic((Notifier, State) => {
    var __t$_AutoDisposeNotifierProviderOfNotifier$State = () => (__t$_AutoDisposeNotifierProviderOfNotifier$State = dart.constFn(state_notifier_provider._AutoDisposeNotifierProvider$(Notifier, State)))();
    var __t$AutoDisposeProviderElementBaseOfState = () => (__t$AutoDisposeProviderElementBaseOfState = dart.constFn(framework.AutoDisposeProviderElementBase$(State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$AutoDisposeProviderElementOfState = () => (__t$AutoDisposeProviderElementOfState = dart.constFn(provider$.AutoDisposeProviderElement$(State)))();
    const AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36 = class AutoDisposeProviderBase_StateNotifierProviderOverrideMixin extends framework.AutoDisposeProviderBase$(State) {};
    (AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36.new = function(opts) {
      state_notifier_provider.StateNotifierProviderOverrideMixin$(Notifier, State)[dart.mixinNew].call(this);
      AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36, state_notifier_provider.StateNotifierProviderOverrideMixin$(Notifier, State));
    const AutoDisposeProviderBase_OverrideWithProviderMixin$36 = class AutoDisposeProviderBase_OverrideWithProviderMixin extends AutoDisposeProviderBase_StateNotifierProviderOverrideMixin$36 {};
    (AutoDisposeProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithProviderMixin$36.prototype;
    class AutoDisposeStateNotifierProvider extends AutoDisposeProviderBase_OverrideWithProviderMixin$36 {
      get notifier() {
        return this[notifier];
      }
      set notifier(value) {
        super.notifier = value;
      }
      static ['_#new#tearOff'](Notifier, State, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(ref) {
        __t$AutoDisposeProviderElementBaseOfState().as(ref);
        let notifier = ref.watch(Notifier, this.notifier);
        function listener(newState) {
          ref.setState(newState);
        }
        dart.fn(listener, __t$StateTovoid());
        let removeListener = notifier.addListener(listener);
        ref.onDispose(removeListener);
        return ref.requireState;
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
      createElement() {
        return new (__t$AutoDisposeProviderElementOfState()).new(this);
      }
    }
    (AutoDisposeStateNotifierProvider.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[notifier] = new (__t$_AutoDisposeNotifierProviderOfNotifier$State()).new(create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      AutoDisposeStateNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStateNotifierProvider.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProvider);
    AutoDisposeStateNotifierProvider.prototype[_is_AutoDisposeStateNotifierProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProvider);
    dart.setMethodSignature(AutoDisposeStateNotifierProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStateNotifierProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(framework.AutoDisposeProviderElementBase$(State), [])
    }));
    dart.setLibraryUri(AutoDisposeStateNotifierProvider, I[12]);
    dart.setFieldSignature(AutoDisposeStateNotifierProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStateNotifierProvider.__proto__),
      notifier: dart.finalFieldType(framework.AutoDisposeProviderBase$(Notifier))
    }));
    dart.setStaticFieldSignature(AutoDisposeStateNotifierProvider, () => ['family']);
    return AutoDisposeStateNotifierProvider;
  }, (Notifier, State) => {
    dart.applyMixin(state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State).__proto__, framework.OverrideWithProviderMixin$(Notifier, state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)));
  });
  state_notifier_provider.AutoDisposeStateNotifierProvider = state_notifier_provider.AutoDisposeStateNotifierProvider$();
  dart.defineLazy(state_notifier_provider.AutoDisposeStateNotifierProvider, {
    /*state_notifier_provider.AutoDisposeStateNotifierProvider.family*/get family() {
      return C[10] || CT.C10;
    }
  }, false);
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProvider, _is_AutoDisposeStateNotifierProvider_default);
  var dependencies$4 = dart.privateName(state_notifier_provider, "_AutoDisposeNotifierProvider.dependencies");
  var _create$1 = dart.privateName(state_notifier_provider, "_create");
  const _is__AutoDisposeNotifierProvider_default = Symbol('_is__AutoDisposeNotifierProvider_default');
  state_notifier_provider._AutoDisposeNotifierProvider$ = dart.generic((Notifier, State) => {
    var __t$AutoDisposeStateNotifierProviderRefOfNotifier$State = () => (__t$AutoDisposeStateNotifierProviderRefOfNotifier$State = dart.constFn(state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)))();
    var __t$_AutoDisposeNotifierProviderElementOfNotifier$State = () => (__t$_AutoDisposeNotifierProviderElementOfNotifier$State = dart.constFn(state_notifier_provider._AutoDisposeNotifierProviderElement$(Notifier, State)))();
    class _AutoDisposeNotifierProvider extends framework.AutoDisposeProviderBase$(Notifier) {
      get dependencies() {
        return this[dependencies$4];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](Notifier, State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_notifier_provider._AutoDisposeNotifierProvider$(Notifier, State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(ref) {
        let t44;
        __t$AutoDisposeStateNotifierProviderRefOfNotifier$State().as(ref);
        let notifier = (t44 = ref, this[_create$1](t44));
        ref.onDispose(dart.bind(notifier, 'dispose'));
        return notifier;
      }
      updateShouldNotify(previousState, newState) {
        Notifier.as(previousState);
        Notifier.as(newState);
        return true;
      }
      createElement() {
        return new (__t$_AutoDisposeNotifierProviderElementOfNotifier$State()).new(this);
      }
    }
    (_AutoDisposeNotifierProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$1] = _create;
      this[dependencies$4] = dependencies;
      _AutoDisposeNotifierProvider.__proto__.new.call(this, {name: name == null ? null : dart.str(name) + ".notifier", from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = _AutoDisposeNotifierProvider.prototype;
    dart.addTypeTests(_AutoDisposeNotifierProvider);
    _AutoDisposeNotifierProvider.prototype[_is__AutoDisposeNotifierProvider_default] = true;
    dart.addTypeCaches(_AutoDisposeNotifierProvider);
    dart.setMethodSignature(_AutoDisposeNotifierProvider, () => ({
      __proto__: dart.getMethods(_AutoDisposeNotifierProvider.__proto__),
      create: dart.fnType(Notifier, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_notifier_provider._AutoDisposeNotifierProviderElement$(Notifier, State), [])
    }));
    dart.setLibraryUri(_AutoDisposeNotifierProvider, I[12]);
    dart.setFieldSignature(_AutoDisposeNotifierProvider, () => ({
      __proto__: dart.getFields(_AutoDisposeNotifierProvider.__proto__),
      [_create$1]: dart.finalFieldType(dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _AutoDisposeNotifierProvider;
  });
  state_notifier_provider._AutoDisposeNotifierProvider = state_notifier_provider._AutoDisposeNotifierProvider$();
  dart.addTypeTests(state_notifier_provider._AutoDisposeNotifierProvider, _is__AutoDisposeNotifierProvider_default);
  const _is__AutoDisposeNotifierProviderElement_default = Symbol('_is__AutoDisposeNotifierProviderElement_default');
  state_notifier_provider._AutoDisposeNotifierProviderElement$ = dart.generic((Notifier, State) => {
    class _AutoDisposeNotifierProviderElement extends framework.AutoDisposeProviderElementBase$(Notifier) {
      static ['_#new#tearOff'](Notifier, State, provider) {
        return new (state_notifier_provider._AutoDisposeNotifierProviderElement$(Notifier, State)).new(provider);
      }
      get notifier() {
        return this.requireState;
      }
    }
    (_AutoDisposeNotifierProviderElement.new = function(provider) {
      _AutoDisposeNotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = _AutoDisposeNotifierProviderElement.prototype;
    dart.addTypeTests(_AutoDisposeNotifierProviderElement);
    _AutoDisposeNotifierProviderElement.prototype[_is__AutoDisposeNotifierProviderElement_default] = true;
    dart.addTypeCaches(_AutoDisposeNotifierProviderElement);
    _AutoDisposeNotifierProviderElement[dart.implements] = () => [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)];
    dart.setGetterSignature(_AutoDisposeNotifierProviderElement, () => ({
      __proto__: dart.getGetters(_AutoDisposeNotifierProviderElement.__proto__),
      notifier: Notifier
    }));
    dart.setLibraryUri(_AutoDisposeNotifierProviderElement, I[12]);
    return _AutoDisposeNotifierProviderElement;
  });
  state_notifier_provider._AutoDisposeNotifierProviderElement = state_notifier_provider._AutoDisposeNotifierProviderElement$();
  dart.addTypeTests(state_notifier_provider._AutoDisposeNotifierProviderElement, _is__AutoDisposeNotifierProviderElement_default);
  const _is_AutoDisposeStateNotifierProviderFamily_default = Symbol('_is_AutoDisposeStateNotifierProviderFamily_default');
  state_notifier_provider.AutoDisposeStateNotifierProviderFamily$ = dart.generic((Notifier, State, Arg) => {
    var __t$AutoDisposeStateNotifierProviderOfNotifier$State = () => (__t$AutoDisposeStateNotifierProviderOfNotifier$State = dart.constFn(state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)))();
    var __t$AutoDisposeStateNotifierProviderRefOfNotifier$State = () => (__t$AutoDisposeStateNotifierProviderRefOfNotifier$State = dart.constFn(state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)))();
    var __t$AutoDisposeStateNotifierProviderRefOfNotifier$StateToNotifier = () => (__t$AutoDisposeStateNotifierProviderRefOfNotifier$StateToNotifier = dart.constFn(dart.fnType(Notifier, [__t$AutoDisposeStateNotifierProviderRefOfNotifier$State()])))();
    var __t$ArgToAutoDisposeStateNotifierProviderOfNotifier$State = () => (__t$ArgToAutoDisposeStateNotifierProviderOfNotifier$State = dart.constFn(dart.fnType(__t$AutoDisposeStateNotifierProviderOfNotifier$State(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class AutoDisposeStateNotifierProviderFamily extends framework.Family$(State, Arg, state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)) {
      static ['_#new#tearOff'](Notifier, State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(Notifier, State, Arg)).new(_create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$AutoDisposeStateNotifierProviderOfNotifier$State()).new(dart.fn(ref => {
          let t45, t44;
          t44 = ref;
          t45 = argument;
          return this[_create$1](t44, t45);
        }, __t$AutoDisposeStateNotifierProviderRefOfNotifier$StateToNotifier()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider, override: provider});
        setup({origin: provider.notifier, override: provider.notifier});
      }
      overrideWithProvider(override) {
        __t$ArgToAutoDisposeStateNotifierProviderOfNotifier$State().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          setup({origin: provider.notifier, override: override(arg).notifier});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (AutoDisposeStateNotifierProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$1] = _create;
      AutoDisposeStateNotifierProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStateNotifierProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStateNotifierProviderFamily);
    AutoDisposeStateNotifierProviderFamily.prototype[_is_AutoDisposeStateNotifierProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStateNotifierProviderFamily);
    dart.setMethodSignature(AutoDisposeStateNotifierProviderFamily, () => ({
      __proto__: dart.getMethods(AutoDisposeStateNotifierProviderFamily.__proto__),
      create: dart.fnType(state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AutoDisposeStateNotifierProviderFamily, I[12]);
    dart.setFieldSignature(AutoDisposeStateNotifierProviderFamily, () => ({
      __proto__: dart.getFields(AutoDisposeStateNotifierProviderFamily.__proto__),
      [_create$1]: dart.finalFieldType(dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State), Arg]))
    }));
    return AutoDisposeStateNotifierProviderFamily;
  });
  state_notifier_provider.AutoDisposeStateNotifierProviderFamily = state_notifier_provider.AutoDisposeStateNotifierProviderFamily$();
  dart.addTypeTests(state_notifier_provider.AutoDisposeStateNotifierProviderFamily, _is_AutoDisposeStateNotifierProviderFamily_default);
  const _is_StateNotifierProviderRef_default = Symbol('_is_StateNotifierProviderRef_default');
  state_notifier_provider.StateNotifierProviderRef$ = dart.generic((Notifier, State) => {
    class StateNotifierProviderRef extends core.Object {}
    (StateNotifierProviderRef.new = function() {
      ;
    }).prototype = StateNotifierProviderRef.prototype;
    dart.addTypeTests(StateNotifierProviderRef);
    StateNotifierProviderRef.prototype[_is_StateNotifierProviderRef_default] = true;
    dart.addTypeCaches(StateNotifierProviderRef);
    StateNotifierProviderRef[dart.implements] = () => [framework.Ref$(Notifier)];
    dart.setLibraryUri(StateNotifierProviderRef, I[12]);
    return StateNotifierProviderRef;
  });
  state_notifier_provider.StateNotifierProviderRef = state_notifier_provider.StateNotifierProviderRef$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderRef, _is_StateNotifierProviderRef_default);
  var notifier$ = dart.privateName(state_notifier_provider, "StateNotifierProvider.notifier");
  const _is_StateNotifierProvider_default = Symbol('_is_StateNotifierProvider_default');
  state_notifier_provider.StateNotifierProvider$ = dart.generic((Notifier, State) => {
    var __t$_NotifierProviderOfNotifier$State = () => (__t$_NotifierProviderOfNotifier$State = dart.constFn(state_notifier_provider._NotifierProvider$(Notifier, State)))();
    var __t$ProviderElementBaseOfState = () => (__t$ProviderElementBaseOfState = dart.constFn(framework.ProviderElementBase$(State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$ProviderElementOfState = () => (__t$ProviderElementOfState = dart.constFn(provider$.ProviderElement$(State)))();
    const AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36 = class AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin extends framework.AlwaysAliveProviderBase$(State) {};
    (AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36.new = function(opts) {
      state_notifier_provider.StateNotifierProviderOverrideMixin$(Notifier, State)[dart.mixinNew].call(this);
      AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36, state_notifier_provider.StateNotifierProviderOverrideMixin$(Notifier, State));
    const AlwaysAliveProviderBase_OverrideWithProviderMixin$36 = class AlwaysAliveProviderBase_OverrideWithProviderMixin extends AlwaysAliveProviderBase_StateNotifierProviderOverrideMixin$36 {};
    (AlwaysAliveProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithProviderMixin$36.prototype;
    class StateNotifierProvider extends AlwaysAliveProviderBase_OverrideWithProviderMixin$36 {
      get notifier() {
        return this[notifier$];
      }
      set notifier(value) {
        super.notifier = value;
      }
      static ['_#new#tearOff'](Notifier, State, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_notifier_provider.StateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      create(ref) {
        __t$ProviderElementBaseOfState().as(ref);
        let notifier = ref.watch(Notifier, this.notifier);
        function listener(newState) {
          ref.setState(newState);
        }
        dart.fn(listener, __t$StateTovoid());
        let removeListener = notifier.addListener(listener);
        ref.onDispose(removeListener);
        return ref.requireState;
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
      createElement() {
        return new (__t$ProviderElementOfState()).new(this);
      }
    }
    (StateNotifierProvider.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[notifier$] = new (__t$_NotifierProviderOfNotifier$State()).new(create, {name: name, dependencies: dependencies, from: from, argument: argument});
      StateNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = StateNotifierProvider.prototype;
    dart.addTypeTests(StateNotifierProvider);
    StateNotifierProvider.prototype[_is_StateNotifierProvider_default] = true;
    dart.addTypeCaches(StateNotifierProvider);
    dart.setMethodSignature(StateNotifierProvider, () => ({
      __proto__: dart.getMethods(StateNotifierProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(framework.ProviderElementBase$(State), [])
    }));
    dart.setLibraryUri(StateNotifierProvider, I[12]);
    dart.setFieldSignature(StateNotifierProvider, () => ({
      __proto__: dart.getFields(StateNotifierProvider.__proto__),
      notifier: dart.finalFieldType(framework.AlwaysAliveProviderBase$(Notifier))
    }));
    dart.setStaticFieldSignature(StateNotifierProvider, () => ['family', 'autoDispose']);
    return StateNotifierProvider;
  }, (Notifier, State) => {
    dart.applyMixin(state_notifier_provider.StateNotifierProvider$(Notifier, State).__proto__, framework.OverrideWithProviderMixin$(Notifier, state_notifier_provider.StateNotifierProvider$(Notifier, State)));
  });
  state_notifier_provider.StateNotifierProvider = state_notifier_provider.StateNotifierProvider$();
  dart.defineLazy(state_notifier_provider.StateNotifierProvider, {
    /*state_notifier_provider.StateNotifierProvider.family*/get family() {
      return C[11] || CT.C11;
    },
    /*state_notifier_provider.StateNotifierProvider.autoDispose*/get autoDispose() {
      return C[12] || CT.C12;
    }
  }, false);
  dart.addTypeTests(state_notifier_provider.StateNotifierProvider, _is_StateNotifierProvider_default);
  var dependencies$5 = dart.privateName(state_notifier_provider, "_NotifierProvider.dependencies");
  const _is__NotifierProvider_default = Symbol('_is__NotifierProvider_default');
  state_notifier_provider._NotifierProvider$ = dart.generic((Notifier, State) => {
    var __t$StateNotifierProviderRefOfNotifier$State = () => (__t$StateNotifierProviderRefOfNotifier$State = dart.constFn(state_notifier_provider.StateNotifierProviderRef$(Notifier, State)))();
    var __t$_NotifierProviderElementOfNotifier$State = () => (__t$_NotifierProviderElementOfNotifier$State = dart.constFn(state_notifier_provider._NotifierProviderElement$(Notifier, State)))();
    class _NotifierProvider extends framework.AlwaysAliveProviderBase$(Notifier) {
      get dependencies() {
        return this[dependencies$5];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](Notifier, State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_notifier_provider._NotifierProvider$(Notifier, State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      create(ref) {
        let t44;
        __t$StateNotifierProviderRefOfNotifier$State().as(ref);
        let notifier = (t44 = ref, this[_create$1](t44));
        ref.onDispose(dart.bind(notifier, 'dispose'));
        return notifier;
      }
      updateShouldNotify(previousState, newState) {
        Notifier.as(previousState);
        Notifier.as(newState);
        return true;
      }
      createElement() {
        return new (__t$_NotifierProviderElementOfNotifier$State()).new(this);
      }
    }
    (_NotifierProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[_create$1] = _create;
      this[dependencies$5] = dependencies;
      _NotifierProvider.__proto__.new.call(this, {name: name == null ? null : dart.str(name) + ".notifier", from: from, argument: argument});
      ;
    }).prototype = _NotifierProvider.prototype;
    dart.addTypeTests(_NotifierProvider);
    _NotifierProvider.prototype[_is__NotifierProvider_default] = true;
    dart.addTypeCaches(_NotifierProvider);
    dart.setMethodSignature(_NotifierProvider, () => ({
      __proto__: dart.getMethods(_NotifierProvider.__proto__),
      create: dart.fnType(Notifier, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_notifier_provider._NotifierProviderElement$(Notifier, State), [])
    }));
    dart.setLibraryUri(_NotifierProvider, I[12]);
    dart.setFieldSignature(_NotifierProvider, () => ({
      __proto__: dart.getFields(_NotifierProvider.__proto__),
      [_create$1]: dart.finalFieldType(dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _NotifierProvider;
  });
  state_notifier_provider._NotifierProvider = state_notifier_provider._NotifierProvider$();
  dart.addTypeTests(state_notifier_provider._NotifierProvider, _is__NotifierProvider_default);
  const _is__NotifierProviderElement_default = Symbol('_is__NotifierProviderElement_default');
  state_notifier_provider._NotifierProviderElement$ = dart.generic((Notifier, State) => {
    class _NotifierProviderElement extends framework.ProviderElementBase$(Notifier) {
      static ['_#new#tearOff'](Notifier, State, provider) {
        return new (state_notifier_provider._NotifierProviderElement$(Notifier, State)).new(provider);
      }
      get notifier() {
        return this.requireState;
      }
    }
    (_NotifierProviderElement.new = function(provider) {
      _NotifierProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = _NotifierProviderElement.prototype;
    dart.addTypeTests(_NotifierProviderElement);
    _NotifierProviderElement.prototype[_is__NotifierProviderElement_default] = true;
    dart.addTypeCaches(_NotifierProviderElement);
    _NotifierProviderElement[dart.implements] = () => [state_notifier_provider.StateNotifierProviderRef$(Notifier, State)];
    dart.setGetterSignature(_NotifierProviderElement, () => ({
      __proto__: dart.getGetters(_NotifierProviderElement.__proto__),
      notifier: Notifier
    }));
    dart.setLibraryUri(_NotifierProviderElement, I[12]);
    return _NotifierProviderElement;
  });
  state_notifier_provider._NotifierProviderElement = state_notifier_provider._NotifierProviderElement$();
  dart.addTypeTests(state_notifier_provider._NotifierProviderElement, _is__NotifierProviderElement_default);
  const _is_StateNotifierProviderFamily_default = Symbol('_is_StateNotifierProviderFamily_default');
  state_notifier_provider.StateNotifierProviderFamily$ = dart.generic((Notifier, State, Arg) => {
    var __t$StateNotifierProviderOfNotifier$State = () => (__t$StateNotifierProviderOfNotifier$State = dart.constFn(state_notifier_provider.StateNotifierProvider$(Notifier, State)))();
    var __t$StateNotifierProviderRefOfNotifier$State = () => (__t$StateNotifierProviderRefOfNotifier$State = dart.constFn(state_notifier_provider.StateNotifierProviderRef$(Notifier, State)))();
    var __t$StateNotifierProviderRefOfNotifier$StateToNotifier = () => (__t$StateNotifierProviderRefOfNotifier$StateToNotifier = dart.constFn(dart.fnType(Notifier, [__t$StateNotifierProviderRefOfNotifier$State()])))();
    var __t$ArgToStateNotifierProviderOfNotifier$State = () => (__t$ArgToStateNotifierProviderOfNotifier$State = dart.constFn(dart.fnType(__t$StateNotifierProviderOfNotifier$State(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class StateNotifierProviderFamily extends framework.Family$(State, Arg, state_notifier_provider.StateNotifierProvider$(Notifier, State)) {
      static ['_#new#tearOff'](Notifier, State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_notifier_provider.StateNotifierProviderFamily$(Notifier, State, Arg)).new(_create, {name: name, dependencies: dependencies});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$StateNotifierProviderOfNotifier$State()).new(dart.fn(ref => {
          let t45, t44;
          t44 = ref;
          t45 = argument;
          return this[_create$1](t44, t45);
        }, __t$StateNotifierProviderRefOfNotifier$StateToNotifier()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider.notifier, override: provider.notifier});
      }
      overrideWithProvider(override) {
        __t$ArgToStateNotifierProviderOfNotifier$State().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          setup({origin: provider.notifier, override: override(arg).notifier});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (StateNotifierProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[_create$1] = _create;
      StateNotifierProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies});
      ;
    }).prototype = StateNotifierProviderFamily.prototype;
    dart.addTypeTests(StateNotifierProviderFamily);
    StateNotifierProviderFamily.prototype[_is_StateNotifierProviderFamily_default] = true;
    dart.addTypeCaches(StateNotifierProviderFamily);
    dart.setMethodSignature(StateNotifierProviderFamily, () => ({
      __proto__: dart.getMethods(StateNotifierProviderFamily.__proto__),
      create: dart.fnType(state_notifier_provider.StateNotifierProvider$(Notifier, State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(StateNotifierProviderFamily, I[12]);
    dart.setFieldSignature(StateNotifierProviderFamily, () => ({
      __proto__: dart.getFields(StateNotifierProviderFamily.__proto__),
      [_create$1]: dart.finalFieldType(dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State), Arg]))
    }));
    return StateNotifierProviderFamily;
  });
  state_notifier_provider.StateNotifierProviderFamily = state_notifier_provider.StateNotifierProviderFamily$();
  dart.addTypeTests(state_notifier_provider.StateNotifierProviderFamily, _is_StateNotifierProviderFamily_default);
  var _listenFuture = dart.privateName(future_provider, "_listenFuture");
  const _is__FutureProviderElementMixin_default = Symbol('_is__FutureProviderElementMixin_default');
  future_provider._FutureProviderElementMixin$ = dart.generic(State => {
    var __t$FutureOfState = () => (__t$FutureOfState = dart.constFn(async.Future$(State)))();
    var __t$AsyncLoadingOfState = () => (__t$AsyncLoadingOfState = dart.constFn(common.AsyncLoading$(State)))();
    var __t$AsyncDataOfState = () => (__t$AsyncDataOfState = dart.constFn(common.AsyncData$(State)))();
    var __t$StateToNull = () => (__t$StateToNull = dart.constFn(dart.fnType(core.Null, [State])))();
    var __t$AsyncErrorOfState = () => (__t$AsyncErrorOfState = dart.constFn(common.AsyncError$(State)))();
    class _FutureProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(State)) {}
    _FutureProviderElementMixin[dart.mixinOn] = ProviderElementBase => class _FutureProviderElementMixin extends ProviderElementBase {
      [_listenFuture](future) {
        let running = true;
        this.onDispose(dart.fn(() => running = false, T$.VoidTovoid()));
        try {
          let value = future();
          if (__t$FutureOfState().is(value)) {
            this.setState(new (__t$AsyncLoadingOfState()).new());
            value.then(core.Null, dart.fn(event => {
              if (running) this.setState(new (__t$AsyncDataOfState()).new(event));
            }, __t$StateToNull()), {onError: dart.fn((err, stack) => {
                if (running) {
                  this.setState(new (__t$AsyncErrorOfState()).new(err, {stackTrace: stack}));
                }
              }, T$.ObjectAndStackTraceToNull())});
          } else {
            return new (__t$AsyncDataOfState()).new(value);
          }
          return this.requireState;
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (__t$AsyncErrorOfState()).new(err, {stackTrace: stack});
          } else
            throw e;
        }
      }
    };
    dart.addTypeTests(_FutureProviderElementMixin);
    _FutureProviderElementMixin.prototype[_is__FutureProviderElementMixin_default] = true;
    dart.addTypeCaches(_FutureProviderElementMixin);
    _FutureProviderElementMixin[dart.implements] = () => [framework.ProviderElementBase$(common.AsyncValue$(State))];
    dart.setMethodSignature(_FutureProviderElementMixin, () => ({
      __proto__: dart.getMethods(_FutureProviderElementMixin.__proto__),
      [_listenFuture]: dart.fnType(common.AsyncValue$(State), [dart.fnType(async.FutureOr$(State), [])])
    }));
    dart.setLibraryUri(_FutureProviderElementMixin, I[13]);
    return _FutureProviderElementMixin;
  });
  future_provider._FutureProviderElementMixin = future_provider._FutureProviderElementMixin$();
  dart.addTypeTests(future_provider._FutureProviderElementMixin, _is__FutureProviderElementMixin_default);
  const _is_AutoDisposeFutureProviderRef_default = Symbol('_is_AutoDisposeFutureProviderRef_default');
  future_provider.AutoDisposeFutureProviderRef$ = dart.generic(State => {
    class AutoDisposeFutureProviderRef extends core.Object {}
    (AutoDisposeFutureProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeFutureProviderRef.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderRef);
    AutoDisposeFutureProviderRef.prototype[_is_AutoDisposeFutureProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderRef);
    AutoDisposeFutureProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(common.AsyncValue$(State))];
    dart.setLibraryUri(AutoDisposeFutureProviderRef, I[13]);
    return AutoDisposeFutureProviderRef;
  });
  future_provider.AutoDisposeFutureProviderRef = future_provider.AutoDisposeFutureProviderRef$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderRef, _is_AutoDisposeFutureProviderRef_default);
  var dependencies$6 = dart.privateName(future_provider, "AutoDisposeFutureProvider.dependencies");
  var __AutoDisposeFutureProvider_future = dart.privateName(future_provider, "_#AutoDisposeFutureProvider#future");
  var _create$2 = dart.privateName(future_provider, "_create");
  const _is_AutoDisposeFutureProvider_default = Symbol('_is_AutoDisposeFutureProvider_default');
  future_provider.AutoDisposeFutureProvider$ = dart.generic(State => {
    var __t$AutoDisposeAsyncValueAsFutureProviderOfState = () => (__t$AutoDisposeAsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AutoDisposeAsyncValueAsFutureProvider$(State)))();
    var __t$AutoDisposeFutureProviderElementOfState = () => (__t$AutoDisposeFutureProviderElementOfState = dart.constFn(future_provider.AutoDisposeFutureProviderElement$(State)))();
    var __t$FutureOrOfState = () => (__t$FutureOrOfState = dart.constFn(async.FutureOr$(State)))();
    var __t$VoidToFutureOrOfState = () => (__t$VoidToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AutoDisposeProviderBase_OverrideWithValueMixin$36 = class AutoDisposeProviderBase_OverrideWithValueMixin extends framework.AutoDisposeProviderBase$(common.AsyncValue$(State)) {};
    (AutoDisposeProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(common.AsyncValue$(State)));
    const AutoDisposeProviderBase_OverrideWithProviderMixin$36 = class AutoDisposeProviderBase_OverrideWithProviderMixin extends AutoDisposeProviderBase_OverrideWithValueMixin$36 {};
    (AutoDisposeProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(common.AsyncValue$(State), framework.AutoDisposeProviderBase$(common.AsyncValue$(State))));
    class AutoDisposeFutureProvider extends AutoDisposeProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$6];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (future_provider.AutoDisposeFutureProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get originProvider() {
        return this;
      }
      get future() {
        let t46, t45;
        t45 = this[__AutoDisposeFutureProvider_future];
        return t45 == null ? (t46 = new (__t$AutoDisposeAsyncValueAsFutureProviderOfState()).new(this, {from: this.from, argument: this.argument, cacheTime: this.cacheTime, disposeDelay: this.disposeDelay}), this[__AutoDisposeFutureProvider_future] == null ? this[__AutoDisposeFutureProvider_future] = t46 : dart.throw(new _internal.LateError.fieldADI("future"))) : t45;
      }
      create(ref) {
        __t$AutoDisposeFutureProviderElementOfState().as(ref);
        return ref[_listenFuture](dart.fn(() => {
          let t45;
          t45 = ref;
          return this[_create$2](t45);
        }, __t$VoidToFutureOrOfState()));
      }
      updateShouldNotify(previousState, newState) {
        __t$AsyncValueOfState().as(previousState);
        __t$AsyncValueOfState().as(newState);
        let wasLoading = common.AsyncLoading.is(previousState);
        let isLoading = common.AsyncLoading.is(newState);
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      createElement() {
        return new (__t$AutoDisposeFutureProviderElementOfState()).new(this);
      }
    }
    (AutoDisposeFutureProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[__AutoDisposeFutureProvider_future] = null;
      this[_create$2] = _create;
      this[dependencies$6] = dependencies;
      AutoDisposeFutureProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeFutureProvider.prototype;
    dart.addTypeTests(AutoDisposeFutureProvider);
    AutoDisposeFutureProvider.prototype[_is_AutoDisposeFutureProvider_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProvider);
    dart.setMethodSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeFutureProvider.__proto__),
      create: dart.fnType(common.AsyncValue$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(future_provider.AutoDisposeFutureProviderElement$(State), [])
    }));
    dart.setGetterSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeFutureProvider.__proto__),
      originProvider: framework.ProviderBase$(common.AsyncValue$(State)),
      future: framework.AutoDisposeProviderBase$(async.Future$(State))
    }));
    dart.setLibraryUri(AutoDisposeFutureProvider, I[13]);
    dart.setFieldSignature(AutoDisposeFutureProvider, () => ({
      __proto__: dart.getFields(AutoDisposeFutureProvider.__proto__),
      [_create$2]: dart.finalFieldType(dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeFutureProvider_future]: dart.fieldType(dart.nullable(framework.AutoDisposeProviderBase$(async.Future$(State))))
    }));
    dart.setStaticFieldSignature(AutoDisposeFutureProvider, () => ['family']);
    return AutoDisposeFutureProvider;
  });
  future_provider.AutoDisposeFutureProvider = future_provider.AutoDisposeFutureProvider$();
  dart.defineLazy(future_provider.AutoDisposeFutureProvider, {
    /*future_provider.AutoDisposeFutureProvider.family*/get family() {
      return C[13] || CT.C13;
    }
  }, false);
  dart.addTypeTests(future_provider.AutoDisposeFutureProvider, _is_AutoDisposeFutureProvider_default);
  const _is_AutoDisposeFutureProviderElement_default = Symbol('_is_AutoDisposeFutureProviderElement_default');
  future_provider.AutoDisposeFutureProviderElement$ = dart.generic(State => {
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AutoDisposeProviderElementBase__FutureProviderElementMixin$36 = class AutoDisposeProviderElementBase__FutureProviderElementMixin extends framework.AutoDisposeProviderElementBase$(common.AsyncValue$(State)) {};
    (AutoDisposeProviderElementBase__FutureProviderElementMixin$36.new = function(provider) {
      AutoDisposeProviderElementBase__FutureProviderElementMixin$36.__proto__.new.call(this, provider);
    }).prototype = AutoDisposeProviderElementBase__FutureProviderElementMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderElementBase__FutureProviderElementMixin$36, future_provider._FutureProviderElementMixin$(State));
    class AutoDisposeFutureProviderElement extends AutoDisposeProviderElementBase__FutureProviderElementMixin$36 {
      static ['_#new#tearOff'](State, provider) {
        return new (future_provider.AutoDisposeFutureProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        __t$AsyncValueOfState().as(newState);
        return this.setState(newState);
      }
    }
    (AutoDisposeFutureProviderElement.new = function(provider) {
      AutoDisposeFutureProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = AutoDisposeFutureProviderElement.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderElement);
    AutoDisposeFutureProviderElement.prototype[_is_AutoDisposeFutureProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderElement);
    AutoDisposeFutureProviderElement[dart.implements] = () => [future_provider.AutoDisposeFutureProviderRef$(State)];
    dart.setGetterSignature(AutoDisposeFutureProviderElement, () => ({
      __proto__: dart.getGetters(AutoDisposeFutureProviderElement.__proto__),
      state: common.AsyncValue$(State)
    }));
    dart.setSetterSignature(AutoDisposeFutureProviderElement, () => ({
      __proto__: dart.getSetters(AutoDisposeFutureProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(AutoDisposeFutureProviderElement, I[13]);
    return AutoDisposeFutureProviderElement;
  });
  future_provider.AutoDisposeFutureProviderElement = future_provider.AutoDisposeFutureProviderElement$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderElement, _is_AutoDisposeFutureProviderElement_default);
  const _is_AutoDisposeFutureProviderFamily_default = Symbol('_is_AutoDisposeFutureProviderFamily_default');
  future_provider.AutoDisposeFutureProviderFamily$ = dart.generic((State, Arg) => {
    var __t$AutoDisposeFutureProviderOfState = () => (__t$AutoDisposeFutureProviderOfState = dart.constFn(future_provider.AutoDisposeFutureProvider$(State)))();
    var __t$FutureOrOfState = () => (__t$FutureOrOfState = dart.constFn(async.FutureOr$(State)))();
    var __t$AutoDisposeFutureProviderRefOfState = () => (__t$AutoDisposeFutureProviderRefOfState = dart.constFn(future_provider.AutoDisposeFutureProviderRef$(State)))();
    var __t$AutoDisposeFutureProviderRefOfStateToFutureOrOfState = () => (__t$AutoDisposeFutureProviderRefOfStateToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [__t$AutoDisposeFutureProviderRefOfState()])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    var __t$AutoDisposeProviderBaseOfAsyncValueOfState = () => (__t$AutoDisposeProviderBaseOfAsyncValueOfState = dart.constFn(framework.AutoDisposeProviderBase$(__t$AsyncValueOfState())))();
    var __t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState = () => (__t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState = dart.constFn(dart.fnType(__t$AutoDisposeProviderBaseOfAsyncValueOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class AutoDisposeFutureProviderFamily extends framework.Family$(common.AsyncValue$(State), Arg, future_provider.AutoDisposeFutureProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (future_provider.AutoDisposeFutureProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$AutoDisposeFutureProviderOfState()).new(dart.fn(ref => {
          let t46, t45;
          t45 = ref;
          t46 = argument;
          return this[_create$2](t45, t46);
        }, __t$AutoDisposeFutureProviderRefOfStateToFutureOrOfState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let futureProvider = this.call(argument);
        setup({origin: futureProvider, override: futureProvider});
      }
      overrideWithProvider(override) {
        __t$ArgToAutoDisposeProviderBaseOfAsyncValueOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let futureProvider = this.call(arg);
          setup({origin: futureProvider, override: override(arg)});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (AutoDisposeFutureProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$2] = _create;
      AutoDisposeFutureProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeFutureProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeFutureProviderFamily);
    AutoDisposeFutureProviderFamily.prototype[_is_AutoDisposeFutureProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeFutureProviderFamily);
    dart.setMethodSignature(AutoDisposeFutureProviderFamily, () => ({
      __proto__: dart.getMethods(AutoDisposeFutureProviderFamily.__proto__),
      create: dart.fnType(future_provider.AutoDisposeFutureProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AutoDisposeFutureProviderFamily, I[13]);
    dart.setFieldSignature(AutoDisposeFutureProviderFamily, () => ({
      __proto__: dart.getFields(AutoDisposeFutureProviderFamily.__proto__),
      [_create$2]: dart.finalFieldType(dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State), Arg]))
    }));
    return AutoDisposeFutureProviderFamily;
  });
  future_provider.AutoDisposeFutureProviderFamily = future_provider.AutoDisposeFutureProviderFamily$();
  dart.addTypeTests(future_provider.AutoDisposeFutureProviderFamily, _is_AutoDisposeFutureProviderFamily_default);
  const _is_FutureProviderRef_default = Symbol('_is_FutureProviderRef_default');
  future_provider.FutureProviderRef$ = dart.generic(State => {
    class FutureProviderRef extends core.Object {}
    (FutureProviderRef.new = function() {
      ;
    }).prototype = FutureProviderRef.prototype;
    dart.addTypeTests(FutureProviderRef);
    FutureProviderRef.prototype[_is_FutureProviderRef_default] = true;
    dart.addTypeCaches(FutureProviderRef);
    FutureProviderRef[dart.implements] = () => [framework.Ref$(common.AsyncValue$(State))];
    dart.setLibraryUri(FutureProviderRef, I[13]);
    return FutureProviderRef;
  });
  future_provider.FutureProviderRef = future_provider.FutureProviderRef$();
  dart.addTypeTests(future_provider.FutureProviderRef, _is_FutureProviderRef_default);
  var dependencies$7 = dart.privateName(future_provider, "FutureProvider.dependencies");
  var __FutureProvider_future = dart.privateName(future_provider, "_#FutureProvider#future");
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  future_provider.FutureProvider$ = dart.generic(State => {
    var __t$AsyncValueAsFutureProviderOfState = () => (__t$AsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AsyncValueAsFutureProvider$(State)))();
    var __t$FutureProviderElementOfState = () => (__t$FutureProviderElementOfState = dart.constFn(future_provider.FutureProviderElement$(State)))();
    var __t$FutureOrOfState = () => (__t$FutureOrOfState = dart.constFn(async.FutureOr$(State)))();
    var __t$VoidToFutureOrOfState = () => (__t$VoidToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const AlwaysAliveProviderBase_OverrideWithValueMixin$36 = class AlwaysAliveProviderBase_OverrideWithValueMixin extends framework.AlwaysAliveProviderBase$(common.AsyncValue$(State)) {};
    (AlwaysAliveProviderBase_OverrideWithValueMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithValueMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithValueMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithValueMixin$36, framework.OverrideWithValueMixin$(common.AsyncValue$(State)));
    const AlwaysAliveProviderBase_OverrideWithProviderMixin$36 = class AlwaysAliveProviderBase_OverrideWithProviderMixin extends AlwaysAliveProviderBase_OverrideWithValueMixin$36 {};
    (AlwaysAliveProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithProviderMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_OverrideWithProviderMixin$36, framework.OverrideWithProviderMixin$(common.AsyncValue$(State), framework.AlwaysAliveProviderBase$(common.AsyncValue$(State))));
    class FutureProvider extends AlwaysAliveProviderBase_OverrideWithProviderMixin$36 {
      get dependencies() {
        return this[dependencies$7];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (future_provider.FutureProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      get originProvider() {
        return this;
      }
      get future() {
        let t46, t45;
        t45 = this[__FutureProvider_future];
        return t45 == null ? (t46 = new (__t$AsyncValueAsFutureProviderOfState()).new(this, {from: this.from, argument: this.argument}), this[__FutureProvider_future] == null ? this[__FutureProvider_future] = t46 : dart.throw(new _internal.LateError.fieldADI("future"))) : t45;
      }
      create(ref) {
        __t$FutureProviderElementOfState().as(ref);
        return ref[_listenFuture](dart.fn(() => {
          let t45;
          t45 = ref;
          return this[_create$2](t45);
        }, __t$VoidToFutureOrOfState()));
      }
      updateShouldNotify(previousState, newState) {
        __t$AsyncValueOfState().as(previousState);
        __t$AsyncValueOfState().as(newState);
        let wasLoading = common.AsyncLoading.is(previousState);
        let isLoading = common.AsyncLoading.is(newState);
        if (wasLoading || isLoading) return wasLoading !== isLoading;
        return true;
      }
      createElement() {
        return new (__t$FutureProviderElementOfState()).new(this);
      }
    }
    (FutureProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[__FutureProvider_future] = null;
      this[_create$2] = _create;
      this[dependencies$7] = dependencies;
      FutureProvider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    dart.addTypeCaches(FutureProvider);
    dart.setMethodSignature(FutureProvider, () => ({
      __proto__: dart.getMethods(FutureProvider.__proto__),
      create: dart.fnType(common.AsyncValue$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(future_provider.FutureProviderElement$(State), [])
    }));
    dart.setGetterSignature(FutureProvider, () => ({
      __proto__: dart.getGetters(FutureProvider.__proto__),
      originProvider: framework.ProviderBase$(common.AsyncValue$(State)),
      future: framework.AlwaysAliveProviderBase$(async.Future$(State))
    }));
    dart.setLibraryUri(FutureProvider, I[13]);
    dart.setFieldSignature(FutureProvider, () => ({
      __proto__: dart.getFields(FutureProvider.__proto__),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [_create$2]: dart.finalFieldType(dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State)])),
      [__FutureProvider_future]: dart.fieldType(dart.nullable(framework.AlwaysAliveProviderBase$(async.Future$(State))))
    }));
    dart.setStaticFieldSignature(FutureProvider, () => ['family', 'autoDispose']);
    return FutureProvider;
  });
  future_provider.FutureProvider = future_provider.FutureProvider$();
  dart.defineLazy(future_provider.FutureProvider, {
    /*future_provider.FutureProvider.family*/get family() {
      return C[14] || CT.C14;
    },
    /*future_provider.FutureProvider.autoDispose*/get autoDispose() {
      return C[15] || CT.C15;
    }
  }, false);
  dart.addTypeTests(future_provider.FutureProvider, _is_FutureProvider_default);
  const _is_FutureProviderElement_default = Symbol('_is_FutureProviderElement_default');
  future_provider.FutureProviderElement$ = dart.generic(State => {
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    const ProviderElementBase__FutureProviderElementMixin$36 = class ProviderElementBase__FutureProviderElementMixin extends framework.ProviderElementBase$(common.AsyncValue$(State)) {};
    (ProviderElementBase__FutureProviderElementMixin$36.new = function(_provider) {
      ProviderElementBase__FutureProviderElementMixin$36.__proto__.new.call(this, _provider);
    }).prototype = ProviderElementBase__FutureProviderElementMixin$36.prototype;
    dart.applyMixin(ProviderElementBase__FutureProviderElementMixin$36, future_provider._FutureProviderElementMixin$(State));
    class FutureProviderElement extends ProviderElementBase__FutureProviderElementMixin$36 {
      static ['_#new#tearOff'](State, provider) {
        return new (future_provider.FutureProviderElement$(State)).new(provider);
      }
      get state() {
        return this.requireState;
      }
      set state(newState) {
        __t$AsyncValueOfState().as(newState);
        return this.setState(newState);
      }
    }
    (FutureProviderElement.new = function(provider) {
      FutureProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = FutureProviderElement.prototype;
    dart.addTypeTests(FutureProviderElement);
    FutureProviderElement.prototype[_is_FutureProviderElement_default] = true;
    dart.addTypeCaches(FutureProviderElement);
    FutureProviderElement[dart.implements] = () => [future_provider.FutureProviderRef$(State)];
    dart.setGetterSignature(FutureProviderElement, () => ({
      __proto__: dart.getGetters(FutureProviderElement.__proto__),
      state: common.AsyncValue$(State)
    }));
    dart.setSetterSignature(FutureProviderElement, () => ({
      __proto__: dart.getSetters(FutureProviderElement.__proto__),
      state: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(FutureProviderElement, I[13]);
    return FutureProviderElement;
  });
  future_provider.FutureProviderElement = future_provider.FutureProviderElement$();
  dart.addTypeTests(future_provider.FutureProviderElement, _is_FutureProviderElement_default);
  const _is_FutureProviderFamily_default = Symbol('_is_FutureProviderFamily_default');
  future_provider.FutureProviderFamily$ = dart.generic((State, Arg) => {
    var __t$FutureProviderOfState = () => (__t$FutureProviderOfState = dart.constFn(future_provider.FutureProvider$(State)))();
    var __t$FutureOrOfState = () => (__t$FutureOrOfState = dart.constFn(async.FutureOr$(State)))();
    var __t$FutureProviderRefOfState = () => (__t$FutureProviderRefOfState = dart.constFn(future_provider.FutureProviderRef$(State)))();
    var __t$FutureProviderRefOfStateToFutureOrOfState = () => (__t$FutureProviderRefOfStateToFutureOrOfState = dart.constFn(dart.fnType(__t$FutureOrOfState(), [__t$FutureProviderRefOfState()])))();
    var __t$AsyncValueOfState = () => (__t$AsyncValueOfState = dart.constFn(common.AsyncValue$(State)))();
    var __t$AlwaysAliveProviderBaseOfAsyncValueOfState = () => (__t$AlwaysAliveProviderBaseOfAsyncValueOfState = dart.constFn(framework.AlwaysAliveProviderBase$(__t$AsyncValueOfState())))();
    var __t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState = () => (__t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState = dart.constFn(dart.fnType(__t$AlwaysAliveProviderBaseOfAsyncValueOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class FutureProviderFamily extends framework.Family$(common.AsyncValue$(State), Arg, future_provider.FutureProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (future_provider.FutureProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$FutureProviderOfState()).new(dart.fn(ref => {
          let t46, t45;
          t45 = ref;
          t46 = argument;
          return this[_create$2](t45, t46);
        }, __t$FutureProviderRefOfStateToFutureOrOfState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let futureProvider = this.call(argument);
        setup({origin: futureProvider, override: futureProvider});
      }
      overrideWithProvider(override) {
        __t$ArgToAlwaysAliveProviderBaseOfAsyncValueOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let futureProvider = this.call(arg);
          setup({origin: futureProvider, override: override(arg)});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (FutureProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[_create$2] = _create;
      FutureProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies});
      ;
    }).prototype = FutureProviderFamily.prototype;
    dart.addTypeTests(FutureProviderFamily);
    FutureProviderFamily.prototype[_is_FutureProviderFamily_default] = true;
    dart.addTypeCaches(FutureProviderFamily);
    dart.setMethodSignature(FutureProviderFamily, () => ({
      __proto__: dart.getMethods(FutureProviderFamily.__proto__),
      create: dart.fnType(future_provider.FutureProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(FutureProviderFamily, I[13]);
    dart.setFieldSignature(FutureProviderFamily, () => ({
      __proto__: dart.getFields(FutureProviderFamily.__proto__),
      [_create$2]: dart.finalFieldType(dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State), Arg]))
    }));
    return FutureProviderFamily;
  });
  future_provider.FutureProviderFamily = future_provider.FutureProviderFamily$();
  dart.addTypeTests(future_provider.FutureProviderFamily, _is_FutureProviderFamily_default);
  var value$ = dart.privateName(common, "AsyncData.value");
  var isLoading$ = dart.privateName(common, "AsyncData.isLoading");
  var error$0 = dart.privateName(common, "AsyncData.error");
  var stackTrace$0 = dart.privateName(common, "AsyncData.stackTrace");
  const _is_AsyncData_default = Symbol('_is_AsyncData_default');
  common.AsyncData$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    class AsyncData extends common.AsyncValue$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isLoading() {
        return this[isLoading$];
      }
      set isLoading(value) {
        super.isLoading = value;
      }
      get error() {
        return this[error$0];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$0];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static ['_#new#tearOff'](T, value) {
        return new (common.AsyncData$(T)).new(value);
      }
      static ['_#_#tearOff'](T, value, opts) {
        let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        return new (common.AsyncData$(T)).__(value, {isLoading: isLoading, error: error, stackTrace: stackTrace});
      }
      get hasValue() {
        return true;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return data(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return this;
      }
    }
    (AsyncData.new = function(value) {
      AsyncData.__.call(this, value, {isLoading: false, error: null, stackTrace: null});
    }).prototype = AsyncData.prototype;
    (AsyncData.__ = function(value, opts) {
      let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      this[value$] = value;
      this[isLoading$] = isLoading;
      this[error$0] = error;
      this[stackTrace$0] = stackTrace;
      AsyncData.__proto__.__.call(this);
      ;
    }).prototype = AsyncData.prototype;
    dart.addTypeTests(AsyncData);
    AsyncData.prototype[_is_AsyncData_default] = true;
    dart.addTypeCaches(AsyncData);
    dart.setMethodSignature(AsyncData, () => ({
      __proto__: dart.getMethods(AsyncData.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncData$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncData, () => ({
      __proto__: dart.getGetters(AsyncData.__proto__),
      hasValue: core.bool
    }));
    dart.setLibraryUri(AsyncData, I[8]);
    dart.setFieldSignature(AsyncData, () => ({
      __proto__: dart.getFields(AsyncData.__proto__),
      value: dart.finalFieldType(T),
      isLoading: dart.finalFieldType(core.bool),
      error: dart.finalFieldType(dart.nullable(core.Object)),
      stackTrace: dart.finalFieldType(dart.nullable(core.StackTrace))
    }));
    return AsyncData;
  });
  common.AsyncData = common.AsyncData$();
  dart.addTypeTests(common.AsyncData, _is_AsyncData_default);
  const _is_AsyncLoading_default = Symbol('_is_AsyncLoading_default');
  common.AsyncLoading$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncDataOfT = () => (__t$AsyncDataOfT = dart.constFn(common.AsyncData$(T)))();
    var __t$AsyncDataOfTToAsyncDataOfT = () => (__t$AsyncDataOfTToAsyncDataOfT = dart.constFn(dart.fnType(__t$AsyncDataOfT(), [__t$AsyncDataOfT()])))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    var __t$AsyncErrorOfTToAsyncErrorOfT = () => (__t$AsyncErrorOfTToAsyncErrorOfT = dart.constFn(dart.fnType(__t$AsyncErrorOfT(), [__t$AsyncErrorOfT()])))();
    var __t$AsyncLoadingOfT = () => (__t$AsyncLoadingOfT = dart.constFn(common.AsyncLoading$(T)))();
    var __t$AsyncLoadingOfTToAsyncLoadingOfT = () => (__t$AsyncLoadingOfTToAsyncLoadingOfT = dart.constFn(dart.fnType(__t$AsyncLoadingOfT(), [__t$AsyncLoadingOfT()])))();
    class AsyncLoading extends common.AsyncValue$(T) {
      static ['_#new#tearOff'](T) {
        return new (common.AsyncLoading$(T)).new();
      }
      get isLoading() {
        return true;
      }
      get hasValue() {
        return false;
      }
      get value() {
        return null;
      }
      get error() {
        return null;
      }
      get stackTrace() {
        return null;
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return loading(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return previous.map(__t$AsyncValueOfT(), {data: dart.fn(d => new (__t$AsyncDataOfT()).__(d.value, {isLoading: true, error: d.error, stackTrace: d.stackTrace}), __t$AsyncDataOfTToAsyncDataOfT()), error: dart.fn(e => new (__t$AsyncErrorOfT()).__(e.error, {isLoading: true, value: e.value, stackTrace: e.stackTrace, hasValue: e.hasValue}), __t$AsyncErrorOfTToAsyncErrorOfT()), loading: dart.fn(_ => this, __t$AsyncLoadingOfTToAsyncLoadingOfT())});
      }
      toString() {
        return "AsyncLoading<" + dart.str(dart.wrapType(T)) + ">()";
      }
    }
    (AsyncLoading.new = function() {
      AsyncLoading.__proto__.__.call(this);
      ;
    }).prototype = AsyncLoading.prototype;
    dart.addTypeTests(AsyncLoading);
    AsyncLoading.prototype[_is_AsyncLoading_default] = true;
    dart.addTypeCaches(AsyncLoading);
    dart.setMethodSignature(AsyncLoading, () => ({
      __proto__: dart.getMethods(AsyncLoading.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncValue$(T), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncLoading, () => ({
      __proto__: dart.getGetters(AsyncLoading.__proto__),
      isLoading: core.bool,
      hasValue: core.bool,
      value: dart.nullable(T),
      error: dart.nullable(core.Object),
      stackTrace: dart.nullable(core.StackTrace)
    }));
    dart.setLibraryUri(AsyncLoading, I[8]);
    dart.defineExtensionMethods(AsyncLoading, ['toString']);
    return AsyncLoading;
  });
  common.AsyncLoading = common.AsyncLoading$();
  dart.addTypeTests(common.AsyncLoading, _is_AsyncLoading_default);
  var isLoading$0 = dart.privateName(common, "AsyncError.isLoading");
  var hasValue$ = dart.privateName(common, "AsyncError.hasValue");
  var value$0 = dart.privateName(common, "AsyncError.value");
  var error$1 = dart.privateName(common, "AsyncError.error");
  var stackTrace$1 = dart.privateName(common, "AsyncError.stackTrace");
  const _is_AsyncError_default = Symbol('_is_AsyncError_default');
  common.AsyncError$ = dart.generic(T => {
    var __t$AsyncValueOfT = () => (__t$AsyncValueOfT = dart.constFn(common.AsyncValue$(T)))();
    var __t$AsyncErrorOfT = () => (__t$AsyncErrorOfT = dart.constFn(common.AsyncError$(T)))();
    class AsyncError extends common.AsyncValue$(T) {
      get isLoading() {
        return this[isLoading$0];
      }
      set isLoading(value) {
        super.isLoading = value;
      }
      get hasValue() {
        return this[hasValue$];
      }
      set hasValue(value) {
        super.hasValue = value;
      }
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$1];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$1];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static ['_#new#tearOff'](T, error, opts) {
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        return new (common.AsyncError$(T)).new(error, {stackTrace: stackTrace});
      }
      static ['_#_#tearOff'](T, error, opts) {
        let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let hasValue = opts && 'hasValue' in opts ? opts.hasValue : null;
        let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
        return new (common.AsyncError$(T)).__(error, {stackTrace: stackTrace, value: value, hasValue: hasValue, isLoading: isLoading});
      }
      map(R, opts) {
        let data = opts && 'data' in opts ? opts.data : null;
        let error = opts && 'error' in opts ? opts.error : null;
        let loading = opts && 'loading' in opts ? opts.loading : null;
        return error(this);
      }
      copyWithPrevious(previous) {
        __t$AsyncValueOfT().as(previous);
        return new (__t$AsyncErrorOfT()).__(this.error, {stackTrace: this.stackTrace, isLoading: this.isLoading, value: previous.value, hasValue: previous.hasValue});
      }
    }
    (AsyncError.new = function(error, opts) {
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      AsyncError.__.call(this, error, {stackTrace: stackTrace, isLoading: false, hasValue: false, value: null});
    }).prototype = AsyncError.prototype;
    (AsyncError.__ = function(error, opts) {
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let hasValue = opts && 'hasValue' in opts ? opts.hasValue : null;
      let isLoading = opts && 'isLoading' in opts ? opts.isLoading : null;
      this[error$1] = error;
      this[stackTrace$1] = stackTrace;
      this[value$0] = value;
      this[hasValue$] = hasValue;
      this[isLoading$0] = isLoading;
      AsyncError.__proto__.__.call(this);
      ;
    }).prototype = AsyncError.prototype;
    dart.addTypeTests(AsyncError);
    AsyncError.prototype[_is_AsyncError_default] = true;
    dart.addTypeCaches(AsyncError);
    dart.setMethodSignature(AsyncError, () => ({
      __proto__: dart.getMethods(AsyncError.__proto__),
      map: dart.gFnType(R => [R, [], {}, {data: dart.fnType(R, [common.AsyncData$(T)]), error: dart.fnType(R, [common.AsyncError$(T)]), loading: dart.fnType(R, [common.AsyncLoading$(T)])}], R => [dart.nullable(core.Object)]),
      copyWithPrevious: dart.fnType(common.AsyncError$(T), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AsyncError, I[8]);
    dart.setFieldSignature(AsyncError, () => ({
      __proto__: dart.getFields(AsyncError.__proto__),
      isLoading: dart.finalFieldType(core.bool),
      hasValue: dart.finalFieldType(core.bool),
      value: dart.finalFieldType(dart.nullable(T)),
      error: dart.finalFieldType(core.Object),
      stackTrace: dart.finalFieldType(dart.nullable(core.StackTrace))
    }));
    return AsyncError;
  });
  common.AsyncError = common.AsyncError$();
  dart.addTypeTests(common.AsyncError, _is_AsyncError_default);
  common.modifierName = function modifierName(from, modifier) {
    return from == null ? null : dart.str(from) + "." + modifier;
  };
  common['AsyncValueX|get#isRefreshing'] = function AsyncValueX$124get$35isRefreshing(T, $this) {
    return $this.isLoading && ($this.hasValue || common['AsyncValueX|get#hasError'](T, $this));
  };
  common['AsyncValueX|get#hasError'] = function AsyncValueX$124get$35hasError(T, $this) {
    return $this.error != null;
  };
  common['AsyncValueX|get#asData'] = function AsyncValueX$124get$35asData(T, $this) {
    return $this.map(dart.nullable(common.AsyncData$(T)), {data: dart.fn(d => d, dart.fnType(common.AsyncData$(T), [common.AsyncData$(T)])), error: dart.fn(e => null, dart.fnType(core.Null, [common.AsyncError$(T)])), loading: dart.fn(l => null, dart.fnType(core.Null, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#asError'] = function AsyncValueX$124get$35asError(T, $this) {
    return $this.map(T$.AsyncErrorN(), {data: dart.fn(_ => null, dart.fnType(core.Null, [common.AsyncData$(T)])), error: dart.fn(e => e, dart.fnType(common.AsyncError$(T), [common.AsyncError$(T)])), loading: dart.fn(_ => null, dart.fnType(core.Null, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|whenData'] = function AsyncValueX$124whenData(T, R, $this, cb) {
    return $this.map(common.AsyncValue$(R), {data: dart.fn(d => {
        try {
          return new (common.AsyncData$(R)).new(cb(d.value));
        } catch (e) {
          let err = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(err)) {
            return new (common.AsyncError$(R)).new(err, {stackTrace: stack});
          } else
            throw e;
        }
      }, dart.fnType(common.AsyncValue$(R), [common.AsyncData$(T)])), error: dart.fn(e => new (common.AsyncError$(R)).new(e.error, {stackTrace: e.stackTrace}), dart.fnType(common.AsyncError$(R), [common.AsyncError$(T)])), loading: dart.fn(l => new (common.AsyncLoading$(R)).new(), dart.fnType(common.AsyncLoading$(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#whenData'] = function AsyncValueX$124get$35whenData(T, $this) {
    return dart.fn((R, cb) => common['AsyncValueX|whenData'](T, R, $this, cb), dart.gFnType(R => {
      var __t$AsyncValueOfR = () => (__t$AsyncValueOfR = dart.constFn(common.AsyncValue$(R)))();
      return [__t$AsyncValueOfR(), [dart.fnType(R, [T])]];
    }, R => {
      var __t$AsyncValueOfR = () => (__t$AsyncValueOfR = dart.constFn(common.AsyncValue$(R)))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|maybeWhen'] = function AsyncValueX$124maybeWhen(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return $this.map(R, {data: dart.fn(d => {
        if (data != null) return data(d.value);
        return orElse();
      }, dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(e => {
        if (error != null) return error(e.error, e.stackTrace);
        return orElse();
      }, dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(l => {
        if (loading != null) return loading();
        return orElse();
      }, dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#maybeWhen'] = function AsyncValueX$124get$35maybeWhen(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      return common['AsyncValueX|maybeWhen'](T, R, $this, {data: data, error: error, loading: loading, orElse: orElse});
    }, dart.gFnType(R => {
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$ObjectAndStackTraceNToNR = () => (__t$ObjectAndStackTraceNToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceNToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [R, [], {data: dart.nullable(dart.fnType(R, [T])), error: __t$ObjectAndStackTraceNToNR(), loading: __t$VoidToNR(), orElse: __t$VoidToR()}, {}];
    }, R => {
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$ObjectAndStackTraceNToNR = () => (__t$ObjectAndStackTraceNToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceNToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|when'] = function AsyncValueX$124when(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(R, {data: dart.fn(d => data(d.value), dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(e => error(e.error, e.stackTrace), dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(l => loading(), dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#when'] = function AsyncValueX$124get$35when(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|when'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [R, [], {data: dart.fnType(R, [T]), error: __t$ObjectAndStackTraceNToR(), loading: __t$VoidToR()}, {}];
    }, R => {
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|whenOrNull'] = function AsyncValueX$124whenOrNull(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(dart.nullable(R), {data: dart.fn(d => {
        let t57;
        t57 = data;
        return t57 == null ? null : t57(d.value);
      }, dart.fnType(dart.nullable(R), [common.AsyncData$(T)])), error: dart.fn(e => {
        let t57;
        t57 = error;
        return t57 == null ? null : t57(e.error, e.stackTrace);
      }, dart.fnType(dart.nullable(R), [common.AsyncError$(T)])), loading: dart.fn(l => {
        let t57;
        t57 = loading;
        return t57 == null ? null : t57();
      }, dart.fnType(dart.nullable(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#whenOrNull'] = function AsyncValueX$124get$35whenOrNull(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|whenOrNull'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$ObjectAndStackTraceNToNR = () => (__t$ObjectAndStackTraceNToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceNToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [__t$RN(), [], {data: dart.nullable(dart.fnType(R, [T])), error: __t$ObjectAndStackTraceNToNR(), loading: __t$VoidToNR()}, {}];
    }, R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      var __t$ObjectAndStackTraceNToR = () => (__t$ObjectAndStackTraceNToR = dart.constFn(dart.fnType(R, [core.Object, T$.StackTraceN()])))();
      var __t$ObjectAndStackTraceNToNR = () => (__t$ObjectAndStackTraceNToNR = dart.constFn(dart.nullable(__t$ObjectAndStackTraceNToR())))();
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      var __t$VoidToNR = () => (__t$VoidToNR = dart.constFn(dart.nullable(__t$VoidToR())))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|maybeMap'] = function AsyncValueX$124maybeMap(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return $this.map(R, {data: dart.fn(d => {
        if (data != null) return data(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncData$(T)])), error: dart.fn(d => {
        if (error != null) return error(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncError$(T)])), loading: dart.fn(d => {
        if (loading != null) return loading(d);
        return orElse();
      }, dart.fnType(R, [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#maybeMap'] = function AsyncValueX$124get$35maybeMap(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      return common['AsyncValueX|maybeMap'](T, R, $this, {data: data, error: error, loading: loading, orElse: orElse});
    }, dart.gFnType(R => {
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [R, [], {data: dart.nullable(dart.fnType(R, [common.AsyncData$(T)])), error: dart.nullable(dart.fnType(R, [common.AsyncError$(T)])), loading: dart.nullable(dart.fnType(R, [common.AsyncLoading$(T)])), orElse: __t$VoidToR()}, {}];
    }, R => {
      var __t$VoidToR = () => (__t$VoidToR = dart.constFn(dart.fnType(R, [])))();
      return [T$.ObjectN()];
    }));
  };
  common['AsyncValueX|mapOrNull'] = function AsyncValueX$124mapOrNull(T, R, $this, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let error = opts && 'error' in opts ? opts.error : null;
    let loading = opts && 'loading' in opts ? opts.loading : null;
    return $this.map(dart.nullable(R), {data: dart.fn(d => {
        let t61;
        t61 = data;
        return t61 == null ? null : t61(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncData$(T)])), error: dart.fn(d => {
        let t61;
        t61 = error;
        return t61 == null ? null : t61(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncError$(T)])), loading: dart.fn(d => {
        let t61;
        t61 = loading;
        return t61 == null ? null : t61(d);
      }, dart.fnType(dart.nullable(R), [common.AsyncLoading$(T)]))});
  };
  common['AsyncValueX|get#mapOrNull'] = function AsyncValueX$124get$35mapOrNull(T, $this) {
    return dart.fn((R, opts) => {
      let data = opts && 'data' in opts ? opts.data : null;
      let error = opts && 'error' in opts ? opts.error : null;
      let loading = opts && 'loading' in opts ? opts.loading : null;
      return common['AsyncValueX|mapOrNull'](T, R, $this, {data: data, error: error, loading: loading});
    }, dart.gFnType(R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      return [__t$RN(), [], {data: dart.nullable(dart.fnType(R, [common.AsyncData$(T)])), error: dart.nullable(dart.fnType(R, [common.AsyncError$(T)])), loading: dart.nullable(dart.fnType(R, [common.AsyncLoading$(T)]))}, {}];
    }, R => {
      var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
      return [T$.ObjectN()];
    }));
  };
  builders.StateProviderBuilder = class StateProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.StateProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[16] || CT.C16;
    }
    get family() {
      return C[17] || CT.C17;
    }
  };
  (builders.StateProviderBuilder.new = function() {
    ;
  }).prototype = builders.StateProviderBuilder.prototype;
  dart.addTypeTests(builders.StateProviderBuilder);
  dart.addTypeCaches(builders.StateProviderBuilder);
  dart.setMethodSignature(builders.StateProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StateProviderBuilder.__proto__),
    call: dart.gFnType(State => [state_provider.StateProvider$(State), [dart.fnType(State, [state_provider.StateProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StateProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateProviderBuilder,
    family: builders.StateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateProviderBuilder, I[14]);
  builders.StateProviderFamilyBuilder = class StateProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_provider.StateProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[18] || CT.C18;
    }
  };
  (builders.StateProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StateProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StateProviderFamilyBuilder);
  dart.addTypeCaches(builders.StateProviderFamilyBuilder);
  dart.setMethodSignature(builders.StateProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StateProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [state_provider.StateProviderFamily$(State, Arg), [dart.fnType(State, [state_provider.StateProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StateProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateProviderFamilyBuilder, I[14]);
  builders.StateNotifierProviderBuilder = class StateNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateNotifierProviderBuilder.new();
    }
    call(Notifier, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.StateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[12] || CT.C12;
    }
    get family() {
      return C[11] || CT.C11;
    }
  };
  (builders.StateNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.StateNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.StateNotifierProviderBuilder);
  dart.addTypeCaches(builders.StateNotifierProviderBuilder);
  dart.setMethodSignature(builders.StateNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StateNotifierProviderBuilder.__proto__),
    call: dart.gFnType((Notifier, State) => [state_notifier_provider.StateNotifierProvider$(Notifier, State), [dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StateNotifierProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateNotifierProviderBuilder,
    family: builders.StateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateNotifierProviderBuilder, I[14]);
  builders.StateNotifierProviderFamilyBuilder = class StateNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StateNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (state_notifier_provider.StateNotifierProviderFamily$(Notifier, State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[10] || CT.C10;
    }
  };
  (builders.StateNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StateNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StateNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.StateNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.StateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StateNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, State, Arg) => [state_notifier_provider.StateNotifierProviderFamily$(Notifier, State, Arg), [dart.fnType(Notifier, [state_notifier_provider.StateNotifierProviderRef$(Notifier, State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (Notifier, State, Arg) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StateNotifierProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StateNotifierProviderFamilyBuilder, I[14]);
  builders.ProviderBuilder = class ProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.Provider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[8] || CT.C8;
    }
    get family() {
      return C[7] || CT.C7;
    }
  };
  (builders.ProviderBuilder.new = function() {
    ;
  }).prototype = builders.ProviderBuilder.prototype;
  dart.addTypeTests(builders.ProviderBuilder);
  dart.addTypeCaches(builders.ProviderBuilder);
  dart.setMethodSignature(builders.ProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.ProviderBuilder.__proto__),
    call: dart.gFnType(State => [provider$.Provider$(State), [dart.fnType(State, [provider$.ProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.ProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.ProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeProviderBuilder,
    family: builders.ProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ProviderBuilder, I[14]);
  builders.ProviderFamilyBuilder = class ProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.ProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (provider$.ProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[6] || CT.C6;
    }
  };
  (builders.ProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.ProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.ProviderFamilyBuilder);
  dart.addTypeCaches(builders.ProviderFamilyBuilder);
  dart.setMethodSignature(builders.ProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.ProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [provider$.ProviderFamily$(State, Arg), [dart.fnType(State, [provider$.ProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.ProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.ProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.ProviderFamilyBuilder, I[14]);
  builders.FutureProviderBuilder = class FutureProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.FutureProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.FutureProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[15] || CT.C15;
    }
    get family() {
      return C[14] || CT.C14;
    }
  };
  (builders.FutureProviderBuilder.new = function() {
    ;
  }).prototype = builders.FutureProviderBuilder.prototype;
  dart.addTypeTests(builders.FutureProviderBuilder);
  dart.addTypeCaches(builders.FutureProviderBuilder);
  dart.setMethodSignature(builders.FutureProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.FutureProviderBuilder.__proto__),
    call: dart.gFnType(State => [future_provider.FutureProvider$(State), [dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.FutureProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.FutureProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeFutureProviderBuilder,
    family: builders.FutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.FutureProviderBuilder, I[14]);
  builders.FutureProviderFamilyBuilder = class FutureProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.FutureProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (future_provider.FutureProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[13] || CT.C13;
    }
  };
  (builders.FutureProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.FutureProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.FutureProviderFamilyBuilder);
  dart.addTypeCaches(builders.FutureProviderFamilyBuilder);
  dart.setMethodSignature(builders.FutureProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.FutureProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [future_provider.FutureProviderFamily$(State, Arg), [dart.fnType(async.FutureOr$(State), [future_provider.FutureProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.FutureProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.FutureProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeFutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.FutureProviderFamilyBuilder, I[14]);
  builders.StreamProviderBuilder = class StreamProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StreamProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.StreamProvider$(State)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[5] || CT.C5;
    }
    get family() {
      return C[4] || CT.C4;
    }
  };
  (builders.StreamProviderBuilder.new = function() {
    ;
  }).prototype = builders.StreamProviderBuilder.prototype;
  dart.addTypeTests(builders.StreamProviderBuilder);
  dart.addTypeCaches(builders.StreamProviderBuilder);
  dart.setMethodSignature(builders.StreamProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.StreamProviderBuilder.__proto__),
    call: dart.gFnType(State => [stream_provider.StreamProvider$(State), [dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State)])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StreamProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.StreamProviderBuilder.__proto__),
    autoDispose: builders.AutoDisposeStreamProviderBuilder,
    family: builders.StreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StreamProviderBuilder, I[14]);
  builders.StreamProviderFamilyBuilder = class StreamProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.StreamProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      return new (stream_provider.StreamProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies});
    }
    get autoDispose() {
      return C[3] || CT.C3;
    }
  };
  (builders.StreamProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.StreamProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.StreamProviderFamilyBuilder);
  dart.addTypeCaches(builders.StreamProviderFamilyBuilder);
  dart.setMethodSignature(builders.StreamProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.StreamProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [stream_provider.StreamProviderFamily$(State, Arg), [dart.fnType(async.Stream$(State), [stream_provider.StreamProviderRef$(State), Arg])], {dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.StreamProviderFamilyBuilder, () => ({
    __proto__: dart.getGetters(builders.StreamProviderFamilyBuilder.__proto__),
    autoDispose: builders.AutoDisposeStreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.StreamProviderFamilyBuilder, I[14]);
  builders.AutoDisposeStateProviderBuilder = class AutoDisposeStateProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (state_provider.AutoDisposeStateProvider$(State)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
    get family() {
      return C[18] || CT.C18;
    }
  };
  (builders.AutoDisposeStateProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateProviderBuilder.__proto__),
    call: dart.gFnType(State => [state_provider.AutoDisposeStateProvider$(State), [dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State)])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStateProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStateProviderBuilder.__proto__),
    family: builders.AutoDisposeStateProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStateProviderBuilder, I[14]);
  builders.AutoDisposeStateProviderFamilyBuilder = class AutoDisposeStateProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (state_provider.AutoDisposeStateProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
  };
  (builders.AutoDisposeStateProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [state_provider.AutoDisposeStateProviderFamily$(State, Arg), [dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State), Arg])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStateProviderFamilyBuilder, I[14]);
  builders.AutoDisposeStateNotifierProviderBuilder = class AutoDisposeStateNotifierProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateNotifierProviderBuilder.new();
    }
    call(Notifier, State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
    get family() {
      return C[10] || CT.C10;
    }
  };
  (builders.AutoDisposeStateNotifierProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateNotifierProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateNotifierProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateNotifierProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateNotifierProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateNotifierProviderBuilder.__proto__),
    call: dart.gFnType((Notifier, State) => [state_notifier_provider.AutoDisposeStateNotifierProvider$(Notifier, State), [dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State)])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (Notifier, State) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStateNotifierProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStateNotifierProviderBuilder.__proto__),
    family: builders.AutoDisposeStateNotifierProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStateNotifierProviderBuilder, I[14]);
  builders.AutoDisposeStateNotifierProviderFamilyBuilder = class AutoDisposeStateNotifierProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStateNotifierProviderFamilyBuilder.new();
    }
    call(Notifier, State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(Notifier, State, Arg)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
  };
  (builders.AutoDisposeStateNotifierProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStateNotifierProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStateNotifierProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStateNotifierProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStateNotifierProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStateNotifierProviderFamilyBuilder.__proto__),
    call: dart.gFnType((Notifier, State, Arg) => [state_notifier_provider.AutoDisposeStateNotifierProviderFamily$(Notifier, State, Arg), [dart.fnType(Notifier, [state_notifier_provider.AutoDisposeStateNotifierProviderRef$(Notifier, State), Arg])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (Notifier, State, Arg) => [state_notifier.StateNotifier$(State), dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStateNotifierProviderFamilyBuilder, I[14]);
  builders.AutoDisposeProviderBuilder = class AutoDisposeProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (provider$.AutoDisposeProvider$(State)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
    get family() {
      return C[6] || CT.C6;
    }
  };
  (builders.AutoDisposeProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeProviderBuilder.__proto__),
    call: dart.gFnType(State => [provider$.AutoDisposeProvider$(State), [dart.fnType(State, [provider$.AutoDisposeProviderRef$(State)])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeProviderBuilder.__proto__),
    family: builders.AutoDisposeProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeProviderBuilder, I[14]);
  builders.AutoDisposeProviderFamilyBuilder = class AutoDisposeProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (provider$.AutoDisposeProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
  };
  (builders.AutoDisposeProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [provider$.AutoDisposeProviderFamily$(State, Arg), [dart.fnType(State, [provider$.AutoDisposeProviderRef$(State), Arg])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeProviderFamilyBuilder, I[14]);
  builders.AutoDisposeFutureProviderBuilder = class AutoDisposeFutureProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeFutureProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (future_provider.AutoDisposeFutureProvider$(State)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
    get family() {
      return C[13] || CT.C13;
    }
  };
  (builders.AutoDisposeFutureProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeFutureProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeFutureProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeFutureProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeFutureProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeFutureProviderBuilder.__proto__),
    call: dart.gFnType(State => [future_provider.AutoDisposeFutureProvider$(State), [dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State)])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeFutureProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeFutureProviderBuilder.__proto__),
    family: builders.AutoDisposeFutureProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeFutureProviderBuilder, I[14]);
  builders.AutoDisposeFutureProviderFamilyBuilder = class AutoDisposeFutureProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeFutureProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (future_provider.AutoDisposeFutureProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
  };
  (builders.AutoDisposeFutureProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeFutureProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeFutureProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeFutureProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeFutureProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeFutureProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [future_provider.AutoDisposeFutureProviderFamily$(State, Arg), [dart.fnType(async.FutureOr$(State), [future_provider.AutoDisposeFutureProviderRef$(State), Arg])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeFutureProviderFamilyBuilder, I[14]);
  builders.AutoDisposeStreamProviderBuilder = class AutoDisposeStreamProviderBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStreamProviderBuilder.new();
    }
    call(State, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (stream_provider.AutoDisposeStreamProvider$(State)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
    get family() {
      return C[3] || CT.C3;
    }
  };
  (builders.AutoDisposeStreamProviderBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStreamProviderBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStreamProviderBuilder);
  dart.addTypeCaches(builders.AutoDisposeStreamProviderBuilder);
  dart.setMethodSignature(builders.AutoDisposeStreamProviderBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStreamProviderBuilder.__proto__),
    call: dart.gFnType(State => [stream_provider.AutoDisposeStreamProvider$(State), [dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State)])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], State => [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(builders.AutoDisposeStreamProviderBuilder, () => ({
    __proto__: dart.getGetters(builders.AutoDisposeStreamProviderBuilder.__proto__),
    family: builders.AutoDisposeStreamProviderFamilyBuilder
  }));
  dart.setLibraryUri(builders.AutoDisposeStreamProviderBuilder, I[14]);
  builders.AutoDisposeStreamProviderFamilyBuilder = class AutoDisposeStreamProviderFamilyBuilder extends core.Object {
    static ['_#new#tearOff']() {
      return new builders.AutoDisposeStreamProviderFamilyBuilder.new();
    }
    call(State, Arg, create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      return new (stream_provider.AutoDisposeStreamProviderFamily$(State, Arg)).new(create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
    }
  };
  (builders.AutoDisposeStreamProviderFamilyBuilder.new = function() {
    ;
  }).prototype = builders.AutoDisposeStreamProviderFamilyBuilder.prototype;
  dart.addTypeTests(builders.AutoDisposeStreamProviderFamilyBuilder);
  dart.addTypeCaches(builders.AutoDisposeStreamProviderFamilyBuilder);
  dart.setMethodSignature(builders.AutoDisposeStreamProviderFamilyBuilder, () => ({
    __proto__: dart.getMethods(builders.AutoDisposeStreamProviderFamilyBuilder.__proto__),
    call: dart.gFnType((State, Arg) => [stream_provider.AutoDisposeStreamProviderFamily$(State, Arg), [dart.fnType(async.Stream$(State), [stream_provider.AutoDisposeStreamProviderRef$(State), Arg])], {cacheTime: dart.nullable(core.Duration), dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)), disposeDelay: dart.nullable(core.Duration), name: dart.nullable(core.String)}, {}], (State, Arg) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(builders.AutoDisposeStreamProviderFamilyBuilder, I[14]);
  var __AsyncValueAsStreamProvider_dependencies = dart.privateName(async_value_converters, "_#AsyncValueAsStreamProvider#dependencies");
  var __AsyncValueAsStreamProvider_dependencies_isSet = dart.privateName(async_value_converters, "_#AsyncValueAsStreamProvider#dependencies#isSet");
  var _provider$0 = dart.privateName(async_value_converters, "_provider");
  const _is_AsyncValueAsStreamProvider_default = Symbol('_is_AsyncValueAsStreamProvider_default');
  async_value_converters.AsyncValueAsStreamProvider$ = dart.generic(State => {
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$ProviderElementBaseOfStreamOfState = () => (__t$ProviderElementBaseOfStreamOfState = dart.constFn(framework.ProviderElementBase$(__t$StreamOfState())))();
    var __t$ProviderElementOfStreamOfState = () => (__t$ProviderElementOfStreamOfState = dart.constFn(provider$.ProviderElement$(__t$StreamOfState())))();
    var __t$AsyncValueAsStreamProviderOfState = () => (__t$AsyncValueAsStreamProviderOfState = dart.constFn(async_value_converters.AsyncValueAsStreamProvider$(State)))();
    class AsyncValueAsStreamProvider extends framework.AlwaysAliveProviderBase$(async.Stream$(State)) {
      static ['_#new#tearOff'](State, _provider, opts) {
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (async_value_converters.AsyncValueAsStreamProvider$(State)).new(_provider, {from: from, argument: argument});
      }
      get dependencies() {
        if (!this[__AsyncValueAsStreamProvider_dependencies_isSet]) {
          let t62 = T$.JSArrayOfProviderOrFamily().of([this[_provider$0]]);
          if (this[__AsyncValueAsStreamProvider_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__AsyncValueAsStreamProvider_dependencies] = t62;
          this[__AsyncValueAsStreamProvider_dependencies_isSet] = true;
        }
        return this[__AsyncValueAsStreamProvider_dependencies];
      }
      get originProvider() {
        return this[_provider$0];
      }
      create(ref) {
        __t$ProviderElementBaseOfStreamOfState().as(ref);
        return async_value_converters._asyncValueToStream(State, this[_provider$0], ref);
      }
      createElement() {
        return new (__t$ProviderElementOfStreamOfState()).new(this);
      }
      updateShouldNotify(previousState, newState) {
        __t$StreamOfState().as(previousState);
        __t$StreamOfState().as(newState);
        return true;
      }
      _equals(other) {
        if (other == null) return false;
        return __t$AsyncValueAsStreamProviderOfState().is(other) && other[_provider$0]._equals(this[_provider$0]);
      }
      get hashCode() {
        return this[_provider$0].hashCode;
      }
    }
    (AsyncValueAsStreamProvider.new = function(_provider, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[__AsyncValueAsStreamProvider_dependencies] = null;
      this[__AsyncValueAsStreamProvider_dependencies_isSet] = false;
      this[_provider$0] = _provider;
      AsyncValueAsStreamProvider.__proto__.new.call(this, {name: common.modifierName(_provider.name, "stream"), from: from, argument: argument});
      ;
    }).prototype = AsyncValueAsStreamProvider.prototype;
    dart.addTypeTests(AsyncValueAsStreamProvider);
    AsyncValueAsStreamProvider.prototype[_is_AsyncValueAsStreamProvider_default] = true;
    dart.addTypeCaches(AsyncValueAsStreamProvider);
    dart.setMethodSignature(AsyncValueAsStreamProvider, () => ({
      __proto__: dart.getMethods(AsyncValueAsStreamProvider.__proto__),
      create: dart.fnType(async.Stream$(State), [dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.ProviderElement$(async.Stream$(State)), []),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AsyncValueAsStreamProvider, () => ({
      __proto__: dart.getGetters(AsyncValueAsStreamProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AsyncValueAsStreamProvider, I[15]);
    dart.setFieldSignature(AsyncValueAsStreamProvider, () => ({
      __proto__: dart.getFields(AsyncValueAsStreamProvider.__proto__),
      [_provider$0]: dart.finalFieldType(framework.AlwaysAliveProviderBase$(common.AsyncValue$(State))),
      [__AsyncValueAsStreamProvider_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AsyncValueAsStreamProvider_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(AsyncValueAsStreamProvider, ['_equals']);
    dart.defineExtensionAccessors(AsyncValueAsStreamProvider, ['hashCode']);
    return AsyncValueAsStreamProvider;
  });
  async_value_converters.AsyncValueAsStreamProvider = async_value_converters.AsyncValueAsStreamProvider$();
  dart.addTypeTests(async_value_converters.AsyncValueAsStreamProvider, _is_AsyncValueAsStreamProvider_default);
  var __AutoDisposeAsyncValueAsStreamProvider_dependencies = dart.privateName(async_value_converters, "_#AutoDisposeAsyncValueAsStreamProvider#dependencies");
  var __AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet = dart.privateName(async_value_converters, "_#AutoDisposeAsyncValueAsStreamProvider#dependencies#isSet");
  const _is_AutoDisposeAsyncValueAsStreamProvider_default = Symbol('_is_AutoDisposeAsyncValueAsStreamProvider_default');
  async_value_converters.AutoDisposeAsyncValueAsStreamProvider$ = dart.generic(State => {
    var __t$StreamOfState = () => (__t$StreamOfState = dart.constFn(async.Stream$(State)))();
    var __t$AutoDisposeProviderElementBaseOfStreamOfState = () => (__t$AutoDisposeProviderElementBaseOfStreamOfState = dart.constFn(framework.AutoDisposeProviderElementBase$(__t$StreamOfState())))();
    var __t$AutoDisposeProviderElementOfStreamOfState = () => (__t$AutoDisposeProviderElementOfStreamOfState = dart.constFn(provider$.AutoDisposeProviderElement$(__t$StreamOfState())))();
    var __t$AutoDisposeAsyncValueAsStreamProviderOfState = () => (__t$AutoDisposeAsyncValueAsStreamProviderOfState = dart.constFn(async_value_converters.AutoDisposeAsyncValueAsStreamProvider$(State)))();
    class AutoDisposeAsyncValueAsStreamProvider extends framework.AutoDisposeProviderBase$(async.Stream$(State)) {
      static ['_#new#tearOff'](State, _provider, opts) {
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (async_value_converters.AutoDisposeAsyncValueAsStreamProvider$(State)).new(_provider, {from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get dependencies() {
        if (!this[__AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet]) {
          let t63 = T$.JSArrayOfProviderOrFamily().of([this[_provider$0]]);
          if (this[__AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__AutoDisposeAsyncValueAsStreamProvider_dependencies] = t63;
          this[__AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet] = true;
        }
        return this[__AutoDisposeAsyncValueAsStreamProvider_dependencies];
      }
      get originProvider() {
        return this[_provider$0];
      }
      create(ref) {
        __t$AutoDisposeProviderElementBaseOfStreamOfState().as(ref);
        return async_value_converters._asyncValueToStream(State, this[_provider$0], ref);
      }
      createElement() {
        return new (__t$AutoDisposeProviderElementOfStreamOfState()).new(this);
      }
      updateShouldNotify(previousState, newState) {
        __t$StreamOfState().as(previousState);
        __t$StreamOfState().as(newState);
        return true;
      }
      _equals(other) {
        if (other == null) return false;
        return __t$AutoDisposeAsyncValueAsStreamProviderOfState().is(other) && other[_provider$0]._equals(this[_provider$0]);
      }
      get hashCode() {
        return this[_provider$0].hashCode;
      }
    }
    (AutoDisposeAsyncValueAsStreamProvider.new = function(_provider, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[__AutoDisposeAsyncValueAsStreamProvider_dependencies] = null;
      this[__AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet] = false;
      this[_provider$0] = _provider;
      AutoDisposeAsyncValueAsStreamProvider.__proto__.new.call(this, {name: common.modifierName(_provider.name, "stream"), from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeAsyncValueAsStreamProvider.prototype;
    dart.addTypeTests(AutoDisposeAsyncValueAsStreamProvider);
    AutoDisposeAsyncValueAsStreamProvider.prototype[_is_AutoDisposeAsyncValueAsStreamProvider_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncValueAsStreamProvider);
    dart.setMethodSignature(AutoDisposeAsyncValueAsStreamProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeAsyncValueAsStreamProvider.__proto__),
      create: dart.fnType(async.Stream$(State), [dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.AutoDisposeProviderElement$(async.Stream$(State)), []),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AutoDisposeAsyncValueAsStreamProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeAsyncValueAsStreamProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AutoDisposeAsyncValueAsStreamProvider, I[15]);
    dart.setFieldSignature(AutoDisposeAsyncValueAsStreamProvider, () => ({
      __proto__: dart.getFields(AutoDisposeAsyncValueAsStreamProvider.__proto__),
      [_provider$0]: dart.finalFieldType(framework.AutoDisposeProviderBase$(common.AsyncValue$(State))),
      [__AutoDisposeAsyncValueAsStreamProvider_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeAsyncValueAsStreamProvider_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(AutoDisposeAsyncValueAsStreamProvider, ['_equals']);
    dart.defineExtensionAccessors(AutoDisposeAsyncValueAsStreamProvider, ['hashCode']);
    return AutoDisposeAsyncValueAsStreamProvider;
  });
  async_value_converters.AutoDisposeAsyncValueAsStreamProvider = async_value_converters.AutoDisposeAsyncValueAsStreamProvider$();
  dart.addTypeTests(async_value_converters.AutoDisposeAsyncValueAsStreamProvider, _is_AutoDisposeAsyncValueAsStreamProvider_default);
  var __AsyncValueAsFutureProvider_dependencies = dart.privateName(async_value_converters, "_#AsyncValueAsFutureProvider#dependencies");
  var __AsyncValueAsFutureProvider_dependencies_isSet = dart.privateName(async_value_converters, "_#AsyncValueAsFutureProvider#dependencies#isSet");
  const _is_AsyncValueAsFutureProvider_default = Symbol('_is_AsyncValueAsFutureProvider_default');
  async_value_converters.AsyncValueAsFutureProvider$ = dart.generic(State => {
    var __t$FutureOfState = () => (__t$FutureOfState = dart.constFn(async.Future$(State)))();
    var __t$ProviderElementBaseOfFutureOfState = () => (__t$ProviderElementBaseOfFutureOfState = dart.constFn(framework.ProviderElementBase$(__t$FutureOfState())))();
    var __t$ProviderElementOfFutureOfState = () => (__t$ProviderElementOfFutureOfState = dart.constFn(provider$.ProviderElement$(__t$FutureOfState())))();
    var __t$AsyncValueAsFutureProviderOfState = () => (__t$AsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AsyncValueAsFutureProvider$(State)))();
    class AsyncValueAsFutureProvider extends framework.AlwaysAliveProviderBase$(async.Future$(State)) {
      static ['_#new#tearOff'](State, _provider, opts) {
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (async_value_converters.AsyncValueAsFutureProvider$(State)).new(_provider, {from: from, argument: argument});
      }
      get dependencies() {
        if (!this[__AsyncValueAsFutureProvider_dependencies_isSet]) {
          let t64 = T$.JSArrayOfProviderOrFamily().of([this[_provider$0]]);
          if (this[__AsyncValueAsFutureProvider_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__AsyncValueAsFutureProvider_dependencies] = t64;
          this[__AsyncValueAsFutureProvider_dependencies_isSet] = true;
        }
        return this[__AsyncValueAsFutureProvider_dependencies];
      }
      get originProvider() {
        return this[_provider$0];
      }
      create(ref) {
        __t$ProviderElementBaseOfFutureOfState().as(ref);
        return async_value_converters._asyncValueAsFuture(State, this[_provider$0], ref);
      }
      updateShouldNotify(previousState, newState) {
        __t$FutureOfState().as(previousState);
        __t$FutureOfState().as(newState);
        return true;
      }
      createElement() {
        return new (__t$ProviderElementOfFutureOfState()).new(this);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$AsyncValueAsFutureProviderOfState().is(other) && other[_provider$0]._equals(this[_provider$0]);
      }
      get hashCode() {
        return this[_provider$0].hashCode;
      }
    }
    (AsyncValueAsFutureProvider.new = function(_provider, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[__AsyncValueAsFutureProvider_dependencies] = null;
      this[__AsyncValueAsFutureProvider_dependencies_isSet] = false;
      this[_provider$0] = _provider;
      AsyncValueAsFutureProvider.__proto__.new.call(this, {name: common.modifierName(_provider.name, "future"), from: from, argument: argument});
      ;
    }).prototype = AsyncValueAsFutureProvider.prototype;
    dart.addTypeTests(AsyncValueAsFutureProvider);
    AsyncValueAsFutureProvider.prototype[_is_AsyncValueAsFutureProvider_default] = true;
    dart.addTypeCaches(AsyncValueAsFutureProvider);
    dart.setMethodSignature(AsyncValueAsFutureProvider, () => ({
      __proto__: dart.getMethods(AsyncValueAsFutureProvider.__proto__),
      create: dart.fnType(async.Future$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.ProviderElement$(async.Future$(State)), [])
    }));
    dart.setGetterSignature(AsyncValueAsFutureProvider, () => ({
      __proto__: dart.getGetters(AsyncValueAsFutureProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AsyncValueAsFutureProvider, I[15]);
    dart.setFieldSignature(AsyncValueAsFutureProvider, () => ({
      __proto__: dart.getFields(AsyncValueAsFutureProvider.__proto__),
      [_provider$0]: dart.finalFieldType(framework.AlwaysAliveProviderBase$(common.AsyncValue$(State))),
      [__AsyncValueAsFutureProvider_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AsyncValueAsFutureProvider_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(AsyncValueAsFutureProvider, ['_equals']);
    dart.defineExtensionAccessors(AsyncValueAsFutureProvider, ['hashCode']);
    return AsyncValueAsFutureProvider;
  });
  async_value_converters.AsyncValueAsFutureProvider = async_value_converters.AsyncValueAsFutureProvider$();
  dart.addTypeTests(async_value_converters.AsyncValueAsFutureProvider, _is_AsyncValueAsFutureProvider_default);
  var __AutoDisposeAsyncValueAsFutureProvider_dependencies = dart.privateName(async_value_converters, "_#AutoDisposeAsyncValueAsFutureProvider#dependencies");
  var __AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet = dart.privateName(async_value_converters, "_#AutoDisposeAsyncValueAsFutureProvider#dependencies#isSet");
  const _is_AutoDisposeAsyncValueAsFutureProvider_default = Symbol('_is_AutoDisposeAsyncValueAsFutureProvider_default');
  async_value_converters.AutoDisposeAsyncValueAsFutureProvider$ = dart.generic(State => {
    var __t$FutureOfState = () => (__t$FutureOfState = dart.constFn(async.Future$(State)))();
    var __t$AutoDisposeProviderElementBaseOfFutureOfState = () => (__t$AutoDisposeProviderElementBaseOfFutureOfState = dart.constFn(framework.AutoDisposeProviderElementBase$(__t$FutureOfState())))();
    var __t$AutoDisposeProviderElementOfFutureOfState = () => (__t$AutoDisposeProviderElementOfFutureOfState = dart.constFn(provider$.AutoDisposeProviderElement$(__t$FutureOfState())))();
    var __t$AutoDisposeAsyncValueAsFutureProviderOfState = () => (__t$AutoDisposeAsyncValueAsFutureProviderOfState = dart.constFn(async_value_converters.AutoDisposeAsyncValueAsFutureProvider$(State)))();
    class AutoDisposeAsyncValueAsFutureProvider extends framework.AutoDisposeProviderBase$(async.Future$(State)) {
      static ['_#new#tearOff'](State, _provider, opts) {
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (async_value_converters.AutoDisposeAsyncValueAsFutureProvider$(State)).new(_provider, {from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get dependencies() {
        if (!this[__AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet]) {
          let t65 = T$.JSArrayOfProviderOrFamily().of([this[_provider$0]]);
          if (this[__AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__AutoDisposeAsyncValueAsFutureProvider_dependencies] = t65;
          this[__AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet] = true;
        }
        return this[__AutoDisposeAsyncValueAsFutureProvider_dependencies];
      }
      get originProvider() {
        return this[_provider$0];
      }
      create(ref) {
        __t$AutoDisposeProviderElementBaseOfFutureOfState().as(ref);
        return async_value_converters._asyncValueAsFuture(State, this[_provider$0], ref);
      }
      updateShouldNotify(previousState, newState) {
        __t$FutureOfState().as(previousState);
        __t$FutureOfState().as(newState);
        return true;
      }
      createElement() {
        return new (__t$AutoDisposeProviderElementOfFutureOfState()).new(this);
      }
      _equals(other) {
        if (other == null) return false;
        return __t$AutoDisposeAsyncValueAsFutureProviderOfState().is(other) && other[_provider$0]._equals(this[_provider$0]);
      }
      get hashCode() {
        return this[_provider$0].hashCode;
      }
    }
    (AutoDisposeAsyncValueAsFutureProvider.new = function(_provider, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[__AutoDisposeAsyncValueAsFutureProvider_dependencies] = null;
      this[__AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet] = false;
      this[_provider$0] = _provider;
      AutoDisposeAsyncValueAsFutureProvider.__proto__.new.call(this, {name: common.modifierName(_provider.name, "future"), from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeAsyncValueAsFutureProvider.prototype;
    dart.addTypeTests(AutoDisposeAsyncValueAsFutureProvider);
    AutoDisposeAsyncValueAsFutureProvider.prototype[_is_AutoDisposeAsyncValueAsFutureProvider_default] = true;
    dart.addTypeCaches(AutoDisposeAsyncValueAsFutureProvider);
    dart.setMethodSignature(AutoDisposeAsyncValueAsFutureProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeAsyncValueAsFutureProvider.__proto__),
      create: dart.fnType(async.Future$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$.AutoDisposeProviderElement$(async.Future$(State)), [])
    }));
    dart.setGetterSignature(AutoDisposeAsyncValueAsFutureProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeAsyncValueAsFutureProvider.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily))
    }));
    dart.setLibraryUri(AutoDisposeAsyncValueAsFutureProvider, I[15]);
    dart.setFieldSignature(AutoDisposeAsyncValueAsFutureProvider, () => ({
      __proto__: dart.getFields(AutoDisposeAsyncValueAsFutureProvider.__proto__),
      [_provider$0]: dart.finalFieldType(framework.AutoDisposeProviderBase$(common.AsyncValue$(State))),
      [__AutoDisposeAsyncValueAsFutureProvider_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__AutoDisposeAsyncValueAsFutureProvider_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(AutoDisposeAsyncValueAsFutureProvider, ['_equals']);
    dart.defineExtensionAccessors(AutoDisposeAsyncValueAsFutureProvider, ['hashCode']);
    return AutoDisposeAsyncValueAsFutureProvider;
  });
  async_value_converters.AutoDisposeAsyncValueAsFutureProvider = async_value_converters.AutoDisposeAsyncValueAsFutureProvider$();
  dart.addTypeTests(async_value_converters.AutoDisposeAsyncValueAsFutureProvider, _is_AutoDisposeAsyncValueAsFutureProvider_default);
  async_value_converters['AlwaysAliveAsyncProviderX|get#future'] = function AlwaysAliveAsyncProviderX$124get$35future(State, $this) {
    return new (async_value_converters.AsyncValueAsFutureProvider$(State)).new($this, {from: $this.from, argument: $this.argument});
  };
  async_value_converters['AlwaysAliveAsyncProviderX|get#stream'] = function AlwaysAliveAsyncProviderX$124get$35stream(State, $this) {
    return new (async_value_converters.AsyncValueAsStreamProvider$(State)).new($this, {from: $this.from, argument: $this.argument});
  };
  async_value_converters['AutoDisposeAsyncProviderX|get#future'] = function AutoDisposeAsyncProviderX$124get$35future(State, $this) {
    return new (async_value_converters.AutoDisposeAsyncValueAsFutureProvider$(State)).new($this, {from: $this.from, argument: $this.argument, cacheTime: $this.cacheTime, disposeDelay: $this.disposeDelay});
  };
  async_value_converters['AutoDisposeAsyncProviderX|get#stream'] = function AutoDisposeAsyncProviderX$124get$35stream(State, $this) {
    return new (async_value_converters.AutoDisposeAsyncValueAsStreamProvider$(State)).new($this, {from: $this.from, argument: $this.argument, cacheTime: $this.cacheTime, disposeDelay: $this.disposeDelay});
  };
  async_value_converters._asyncValueToStream = function _asyncValueToStream(State, provider, ref) {
    let controller = null;
    function getController() {
      if (controller == null) {
        controller = async.StreamController$(State).new();
        ref.setState(dart.nullCheck(controller).stream.asBroadcastStream({onListen: dart.fn(sub => sub.resume(), dart.fnType(dart.void, [async.StreamSubscription$(State)])), onCancel: dart.fn(sub => sub.pause(), dart.fnType(dart.void, [async.StreamSubscription$(State)]))}));
      }
      return dart.nullCheck(controller);
    }
    dart.fn(getController, dart.fnType(async.StreamController$(State), []));
    ref.onDispose(dart.fn(() => {
      let t70;
      t70 = controller;
      return t70 == null ? null : t70.close();
    }, T$.VoidTovoid()));
    function listener(previous, value) {
      let t70;
      if (value.isLoading || common['AsyncValueX|get#isRefreshing'](State, value)) {
        t70 = controller;
        t70 == null ? null : t70.close();
        controller = null;
        getController();
      }
      value.map(core.Null, {loading: dart.fn(_ => {
        }, dart.fnType(core.Null, [common.AsyncLoading$(State)])), data: dart.fn(value => {
          if (!common['AsyncValueX|get#isRefreshing'](State, value)) getController().add(value.value);
        }, dart.fnType(core.Null, [common.AsyncData$(State)])), error: dart.fn(value => {
          if (!common['AsyncValueX|get#isRefreshing'](State, value)) {
            getController().addError(value.error, value.stackTrace);
          }
        }, dart.fnType(core.Null, [common.AsyncError$(State)]))});
    }
    dart.fn(listener, dart.fnType(dart.void, [dart.nullable(common.AsyncValue$(State)), common.AsyncValue$(State)]));
    ref.listen(common.AsyncValue$(State), provider, listener, {fireImmediately: true});
    return ref.requireState;
  };
  async_value_converters._asyncValueAsFuture = function _asyncValueAsFuture(State, provider, ref) {
    let loadingCompleter = null;
    ref.onDispose(dart.fn(() => {
      if (loadingCompleter != null) {
        dart.nullCheck(loadingCompleter).completeError(new core.StateError.new("The provider " + dart.str(provider) + " was disposed before a value was emitted."));
      }
    }, T$.VoidTovoid()));
    function listener(previous, value) {
      let t70;
      if (value.isLoading || common['AsyncValueX|get#isRefreshing'](State, value)) {
        if (loadingCompleter == null) {
          loadingCompleter = async.Completer$(State).new();
          ref.setState((t70 = dart.nullCheck(loadingCompleter).future, (() => {
            async['FutureExtensions|ignore'](State, t70);
            return t70;
          })()));
        }
      }
      value.map(core.Null, {loading: dart.fn(_ => {
        }, dart.fnType(core.Null, [common.AsyncLoading$(State)])), data: dart.fn(data => {
          if (common['AsyncValueX|get#isRefreshing'](State, data)) return;
          if (loadingCompleter != null) {
            dart.nullCheck(loadingCompleter).complete(data.value);
            loadingCompleter = null;
          } else {
            ref.setState(async.Future$(State).value(data.value));
          }
        }, dart.fnType(core.Null, [common.AsyncData$(State)])), error: dart.fn(error => {
          if (common['AsyncValueX|get#isRefreshing'](State, error)) return;
          if (loadingCompleter != null) {
            dart.nullCheck(loadingCompleter).completeError(error.error, error.stackTrace);
            loadingCompleter = null;
          } else {
            ref.setState(async.Future$(State).error(error.error, error.stackTrace));
          }
        }, dart.fnType(core.Null, [common.AsyncError$(State)]))});
    }
    dart.fn(listener, dart.fnType(dart.void, [dart.nullable(common.AsyncValue$(State)), common.AsyncValue$(State)]));
    ref.listen(common.AsyncValue$(State), provider, listener, {fireImmediately: true});
    return ref.requireState;
  };
  const _is_StateController_default = Symbol('_is_StateController_default');
  state_provider.StateController$ = dart.generic(T => {
    var __t$TToT = () => (__t$TToT = dart.constFn(dart.fnType(T, [T])))();
    class StateController extends state_notifier.StateNotifier$(T) {
      static ['_#new#tearOff'](T, state) {
        return new (state_provider.StateController$(T)).new(state);
      }
      get state() {
        return super.state;
      }
      set state(value) {
        T.as(value);
        return super.state = value;
      }
      update(cb) {
        __t$TToT().as(cb);
        return this.state = cb(this.state);
      }
    }
    (StateController.new = function(state) {
      StateController.__proto__.new.call(this, state);
      ;
    }).prototype = StateController.prototype;
    dart.addTypeTests(StateController);
    StateController.prototype[_is_StateController_default] = true;
    dart.addTypeCaches(StateController);
    dart.setMethodSignature(StateController, () => ({
      __proto__: dart.getMethods(StateController.__proto__),
      update: dart.fnType(T, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(StateController, I[16]);
    return StateController;
  });
  state_provider.StateController = state_provider.StateController$();
  dart.addTypeTests(state_provider.StateController, _is_StateController_default);
  var _$35StateProviderOverrideMixin$35dependencies = dart.privateName(state_provider, "StateProviderOverrideMixin._#StateProviderOverrideMixin#dependencies");
  var _$35StateProviderOverrideMixin$35dependencies$35isSet = dart.privateName(state_provider, "StateProviderOverrideMixin._#StateProviderOverrideMixin#dependencies#isSet");
  var __StateProviderOverrideMixin_dependencies = dart.privateName(state_provider, "_#StateProviderOverrideMixin#dependencies");
  var __StateProviderOverrideMixin_dependencies_isSet = dart.privateName(state_provider, "_#StateProviderOverrideMixin#dependencies#isSet");
  const _is_StateProviderOverrideMixin_default = Symbol('_is_StateProviderOverrideMixin_default');
  state_provider.StateProviderOverrideMixin$ = dart.generic(State => {
    var __t$StateControllerOfState = () => (__t$StateControllerOfState = dart.constFn(state_provider.StateController$(State)))();
    var __t$ValueProviderOfStateControllerOfState = () => (__t$ValueProviderOfStateControllerOfState = dart.constFn(value_provider.ValueProvider$(__t$StateControllerOfState())))();
    class StateProviderOverrideMixin extends framework.ProviderBase$(State) {}
    StateProviderOverrideMixin[dart.mixinOn] = ProviderBase => class StateProviderOverrideMixin extends ProviderBase {
      get [__StateProviderOverrideMixin_dependencies]() {
        return this[_$35StateProviderOverrideMixin$35dependencies];
      }
      set [__StateProviderOverrideMixin_dependencies](value) {
        this[_$35StateProviderOverrideMixin$35dependencies] = value;
      }
      get [__StateProviderOverrideMixin_dependencies_isSet]() {
        return this[_$35StateProviderOverrideMixin$35dependencies$35isSet];
      }
      set [__StateProviderOverrideMixin_dependencies_isSet](value) {
        this[_$35StateProviderOverrideMixin$35dependencies$35isSet] = value;
      }
      get dependencies() {
        if (!this[__StateProviderOverrideMixin_dependencies_isSet]) {
          let t70 = T$.JSArrayOfProviderOrFamily().of([this.notifier]);
          if (this[__StateProviderOverrideMixin_dependencies_isSet]) dart.throw(new _internal.LateError.fieldADI("dependencies"));
          this[__StateProviderOverrideMixin_dependencies] = t70;
          this[__StateProviderOverrideMixin_dependencies_isSet] = true;
        }
        return this[__StateProviderOverrideMixin_dependencies];
      }
      get originProvider() {
        return this.notifier;
      }
      overrideWithValue(value) {
        __t$StateControllerOfState().as(value);
        return new framework.ProviderOverride.new({origin: this.notifier, override: new (__t$ValueProviderOfStateControllerOfState()).new(value)});
      }
    };
    (StateProviderOverrideMixin[dart.mixinNew] = function() {
      this[_$35StateProviderOverrideMixin$35dependencies] = null;
      this[_$35StateProviderOverrideMixin$35dependencies$35isSet] = false;
    }).prototype = StateProviderOverrideMixin.prototype;
    dart.addTypeTests(StateProviderOverrideMixin);
    StateProviderOverrideMixin.prototype[_is_StateProviderOverrideMixin_default] = true;
    dart.addTypeCaches(StateProviderOverrideMixin);
    StateProviderOverrideMixin[dart.implements] = () => [framework.ProviderBase$(State)];
    dart.setMethodSignature(StateProviderOverrideMixin, () => ({
      __proto__: dart.getMethods(StateProviderOverrideMixin.__proto__),
      overrideWithValue: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(StateProviderOverrideMixin, () => ({
      __proto__: dart.getGetters(StateProviderOverrideMixin.__proto__),
      dependencies: dart.nullable(core.List$(framework.ProviderOrFamily)),
      originProvider: framework.ProviderBase$(state_provider.StateController$(State))
    }));
    dart.setLibraryUri(StateProviderOverrideMixin, I[16]);
    dart.setFieldSignature(StateProviderOverrideMixin, () => ({
      __proto__: dart.getFields(StateProviderOverrideMixin.__proto__),
      [__StateProviderOverrideMixin_dependencies]: dart.fieldType(dart.nullable(core.List$(framework.ProviderOrFamily))),
      [__StateProviderOverrideMixin_dependencies_isSet]: dart.fieldType(core.bool)
    }));
    return StateProviderOverrideMixin;
  });
  state_provider.StateProviderOverrideMixin = state_provider.StateProviderOverrideMixin$();
  dart.addTypeTests(state_provider.StateProviderOverrideMixin, _is_StateProviderOverrideMixin_default);
  const _is_AutoDisposeStateProviderRef_default = Symbol('_is_AutoDisposeStateProviderRef_default');
  state_provider.AutoDisposeStateProviderRef$ = dart.generic(State => {
    class AutoDisposeStateProviderRef extends core.Object {}
    (AutoDisposeStateProviderRef.new = function() {
      ;
    }).prototype = AutoDisposeStateProviderRef.prototype;
    dart.addTypeTests(AutoDisposeStateProviderRef);
    AutoDisposeStateProviderRef.prototype[_is_AutoDisposeStateProviderRef_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderRef);
    AutoDisposeStateProviderRef[dart.implements] = () => [framework.AutoDisposeRef$(state_provider.StateController$(State)), state_provider.StateProviderRef$(State)];
    dart.setLibraryUri(AutoDisposeStateProviderRef, I[16]);
    return AutoDisposeStateProviderRef;
  });
  state_provider.AutoDisposeStateProviderRef = state_provider.AutoDisposeStateProviderRef$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderRef, _is_AutoDisposeStateProviderRef_default);
  var notifier$0 = dart.privateName(state_provider, "AutoDisposeStateProvider.notifier");
  var __AutoDisposeStateProvider_state = dart.privateName(state_provider, "_#AutoDisposeStateProvider#state");
  const _is_AutoDisposeStateProvider_default = Symbol('_is_AutoDisposeStateProvider_default');
  state_provider.AutoDisposeStateProvider$ = dart.generic(State => {
    var __t$_AutoDisposeNotifierProviderOfState = () => (__t$_AutoDisposeNotifierProviderOfState = dart.constFn(state_provider._AutoDisposeNotifierProvider$(State)))();
    var __t$StateControllerOfState = () => (__t$StateControllerOfState = dart.constFn(state_provider.StateController$(State)))();
    var __t$_AutoDisposeNotifierStateProviderOfStateControllerOfState = () => (__t$_AutoDisposeNotifierStateProviderOfStateControllerOfState = dart.constFn(state_provider._AutoDisposeNotifierStateProvider$(__t$StateControllerOfState())))();
    var __t$ProviderElementBaseOfStateControllerOfState = () => (__t$ProviderElementBaseOfStateControllerOfState = dart.constFn(framework.ProviderElementBase$(__t$StateControllerOfState())))();
    var __t$AutoDisposeProviderRefOfStateControllerOfState = () => (__t$AutoDisposeProviderRefOfStateControllerOfState = dart.constFn(provider$.AutoDisposeProviderRef$(__t$StateControllerOfState())))();
    var __t$AutoDisposeProviderRefOfStateControllerOfStateToStateControllerOfState = () => (__t$AutoDisposeProviderRefOfStateControllerOfStateToStateControllerOfState = dart.constFn(dart.fnType(__t$StateControllerOfState(), [__t$AutoDisposeProviderRefOfStateControllerOfState()])))();
    var __t$AutoDisposeProviderElementBaseOfState = () => (__t$AutoDisposeProviderElementBaseOfState = dart.constFn(framework.AutoDisposeProviderElementBase$(State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$AutoDisposeStateProviderElementOfState = () => (__t$AutoDisposeStateProviderElementOfState = dart.constFn(state_provider.AutoDisposeStateProviderElement$(State)))();
    const AutoDisposeProviderBase_StateProviderOverrideMixin$36 = class AutoDisposeProviderBase_StateProviderOverrideMixin extends framework.AutoDisposeProviderBase$(State) {};
    (AutoDisposeProviderBase_StateProviderOverrideMixin$36.new = function(opts) {
      state_provider.StateProviderOverrideMixin$(State)[dart.mixinNew].call(this);
      AutoDisposeProviderBase_StateProviderOverrideMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_StateProviderOverrideMixin$36.prototype;
    dart.applyMixin(AutoDisposeProviderBase_StateProviderOverrideMixin$36, state_provider.StateProviderOverrideMixin$(State));
    const AutoDisposeProviderBase_OverrideWithProviderMixin$36 = class AutoDisposeProviderBase_OverrideWithProviderMixin extends AutoDisposeProviderBase_StateProviderOverrideMixin$36 {};
    (AutoDisposeProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AutoDisposeProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AutoDisposeProviderBase_OverrideWithProviderMixin$36.prototype;
    class AutoDisposeStateProvider extends AutoDisposeProviderBase_OverrideWithProviderMixin$36 {
      get notifier() {
        return this[notifier$0];
      }
      set notifier(value) {
        super.notifier = value;
      }
      static ['_#new#tearOff'](State, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_provider.AutoDisposeStateProvider$(State)).new(create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      get state() {
        let t72, t71;
        t71 = this[__AutoDisposeStateProvider_state];
        return t71 == null ? (t72 = new (__t$_AutoDisposeNotifierStateProviderOfStateControllerOfState()).new(dart.fn(ref => state_provider._listenStateProvider(State, __t$ProviderElementBaseOfStateControllerOfState().as(ref), ref.watch(__t$StateControllerOfState(), this.notifier)), __t$AutoDisposeProviderRefOfStateControllerOfStateToStateControllerOfState()), {dependencies: T$.JSArrayOfProviderOrFamily().of([this.notifier]), from: this.from, argument: this.argument}), this[__AutoDisposeStateProvider_state] == null ? this[__AutoDisposeStateProvider_state] = t72 : dart.throw(new _internal.LateError.fieldADI("state"))) : t71;
      }
      create(ref) {
        __t$AutoDisposeProviderElementBaseOfState().as(ref);
        let notifier = ref.watch(__t$StateControllerOfState(), this.notifier);
        let removeListener = notifier.addListener(__t$StateTovoid().as(dart.bind(ref, 'setState')));
        ref.onDispose(removeListener);
        return notifier.state;
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
      createElement() {
        return new (__t$AutoDisposeStateProviderElementOfState()).new(this);
      }
    }
    (AutoDisposeStateProvider.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[__AutoDisposeStateProvider_state] = null;
      this[notifier$0] = new (__t$_AutoDisposeNotifierProviderOfState()).new(create, {name: common.modifierName(name, "notifier"), dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      AutoDisposeStateProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStateProvider.prototype;
    dart.addTypeTests(AutoDisposeStateProvider);
    AutoDisposeStateProvider.prototype[_is_AutoDisposeStateProvider_default] = true;
    dart.addTypeCaches(AutoDisposeStateProvider);
    dart.setMethodSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getMethods(AutoDisposeStateProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_provider.AutoDisposeStateProviderElement$(State), [])
    }));
    dart.setGetterSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getGetters(AutoDisposeStateProvider.__proto__),
      state: framework.AutoDisposeProviderBase$(state_provider.StateController$(State))
    }));
    dart.setLibraryUri(AutoDisposeStateProvider, I[16]);
    dart.setFieldSignature(AutoDisposeStateProvider, () => ({
      __proto__: dart.getFields(AutoDisposeStateProvider.__proto__),
      notifier: dart.finalFieldType(framework.AutoDisposeProviderBase$(state_provider.StateController$(State))),
      [__AutoDisposeStateProvider_state]: dart.fieldType(dart.nullable(framework.AutoDisposeProviderBase$(state_provider.StateController$(State))))
    }));
    dart.setStaticFieldSignature(AutoDisposeStateProvider, () => ['family']);
    return AutoDisposeStateProvider;
  }, State => {
    dart.applyMixin(state_provider.AutoDisposeStateProvider$(State).__proto__, framework.OverrideWithProviderMixin$(state_provider.StateController$(State), state_provider.AutoDisposeStateProvider$(State)));
  });
  state_provider.AutoDisposeStateProvider = state_provider.AutoDisposeStateProvider$();
  dart.defineLazy(state_provider.AutoDisposeStateProvider, {
    /*state_provider.AutoDisposeStateProvider.family*/get family() {
      return C[18] || CT.C18;
    }
  }, false);
  dart.addTypeTests(state_provider.AutoDisposeStateProvider, _is_AutoDisposeStateProvider_default);
  const _is_AutoDisposeStateProviderElement_default = Symbol('_is_AutoDisposeStateProviderElement_default');
  state_provider.AutoDisposeStateProviderElement$ = dart.generic(State => {
    class AutoDisposeStateProviderElement extends framework.AutoDisposeProviderElementBase$(State) {
      static ['_#new#tearOff'](State, provider) {
        return new (state_provider.AutoDisposeStateProviderElement$(State)).new(provider);
      }
    }
    (AutoDisposeStateProviderElement.new = function(provider) {
      AutoDisposeStateProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = AutoDisposeStateProviderElement.prototype;
    dart.addTypeTests(AutoDisposeStateProviderElement);
    AutoDisposeStateProviderElement.prototype[_is_AutoDisposeStateProviderElement_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderElement);
    dart.setLibraryUri(AutoDisposeStateProviderElement, I[16]);
    return AutoDisposeStateProviderElement;
  });
  state_provider.AutoDisposeStateProviderElement = state_provider.AutoDisposeStateProviderElement$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderElement, _is_AutoDisposeStateProviderElement_default);
  var dependencies$8 = dart.privateName(state_provider, "_AutoDisposeNotifierProvider.dependencies");
  var _create$3 = dart.privateName(state_provider, "_create");
  const _is__AutoDisposeNotifierProvider_default$ = Symbol('_is__AutoDisposeNotifierProvider_default');
  state_provider._AutoDisposeNotifierProvider$ = dart.generic(State => {
    var __t$AutoDisposeStateProviderRefOfState = () => (__t$AutoDisposeStateProviderRefOfState = dart.constFn(state_provider.AutoDisposeStateProviderRef$(State)))();
    var __t$StateControllerOfState = () => (__t$StateControllerOfState = dart.constFn(state_provider.StateController$(State)))();
    var __t$_AutoDisposeNotifierStateProviderElementOfState = () => (__t$_AutoDisposeNotifierStateProviderElementOfState = dart.constFn(state_provider._AutoDisposeNotifierStateProviderElement$(State)))();
    class _AutoDisposeNotifierProvider extends framework.AutoDisposeProviderBase$(state_provider.StateController$(State)) {
      get dependencies() {
        return this[dependencies$8];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_provider._AutoDisposeNotifierProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(ref) {
        let t71;
        __t$AutoDisposeStateProviderRefOfState().as(ref);
        let initialState = (t71 = ref, this[_create$3](t71));
        let notifier = new (__t$StateControllerOfState()).new(initialState);
        ref.onDispose(dart.bind(notifier, 'dispose'));
        return notifier;
      }
      updateShouldNotify(previousState, newState) {
        __t$StateControllerOfState().as(previousState);
        __t$StateControllerOfState().as(newState);
        return true;
      }
      createElement() {
        return new (__t$_AutoDisposeNotifierStateProviderElementOfState()).new(this);
      }
    }
    (_AutoDisposeNotifierProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$3] = _create;
      this[dependencies$8] = dependencies;
      _AutoDisposeNotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = _AutoDisposeNotifierProvider.prototype;
    dart.addTypeTests(_AutoDisposeNotifierProvider);
    _AutoDisposeNotifierProvider.prototype[_is__AutoDisposeNotifierProvider_default$] = true;
    dart.addTypeCaches(_AutoDisposeNotifierProvider);
    dart.setMethodSignature(_AutoDisposeNotifierProvider, () => ({
      __proto__: dart.getMethods(_AutoDisposeNotifierProvider.__proto__),
      create: dart.fnType(state_provider.StateController$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_provider._AutoDisposeNotifierStateProviderElement$(State), [])
    }));
    dart.setLibraryUri(_AutoDisposeNotifierProvider, I[16]);
    dart.setFieldSignature(_AutoDisposeNotifierProvider, () => ({
      __proto__: dart.getFields(_AutoDisposeNotifierProvider.__proto__),
      [_create$3]: dart.finalFieldType(dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _AutoDisposeNotifierProvider;
  });
  state_provider._AutoDisposeNotifierProvider = state_provider._AutoDisposeNotifierProvider$();
  dart.addTypeTests(state_provider._AutoDisposeNotifierProvider, _is__AutoDisposeNotifierProvider_default$);
  const _is__AutoDisposeNotifierStateProviderElement_default = Symbol('_is__AutoDisposeNotifierStateProviderElement_default');
  state_provider._AutoDisposeNotifierStateProviderElement$ = dart.generic(State => {
    class _AutoDisposeNotifierStateProviderElement extends framework.AutoDisposeProviderElementBase$(state_provider.StateController$(State)) {
      static ['_#new#tearOff'](State, provider) {
        return new (state_provider._AutoDisposeNotifierStateProviderElement$(State)).new(provider);
      }
      get controller() {
        return this.requireState;
      }
    }
    (_AutoDisposeNotifierStateProviderElement.new = function(provider) {
      _AutoDisposeNotifierStateProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = _AutoDisposeNotifierStateProviderElement.prototype;
    dart.addTypeTests(_AutoDisposeNotifierStateProviderElement);
    _AutoDisposeNotifierStateProviderElement.prototype[_is__AutoDisposeNotifierStateProviderElement_default] = true;
    dart.addTypeCaches(_AutoDisposeNotifierStateProviderElement);
    _AutoDisposeNotifierStateProviderElement[dart.implements] = () => [state_provider.AutoDisposeStateProviderRef$(State)];
    dart.setGetterSignature(_AutoDisposeNotifierStateProviderElement, () => ({
      __proto__: dart.getGetters(_AutoDisposeNotifierStateProviderElement.__proto__),
      controller: state_provider.StateController$(State)
    }));
    dart.setLibraryUri(_AutoDisposeNotifierStateProviderElement, I[16]);
    return _AutoDisposeNotifierStateProviderElement;
  });
  state_provider._AutoDisposeNotifierStateProviderElement = state_provider._AutoDisposeNotifierStateProviderElement$();
  dart.addTypeTests(state_provider._AutoDisposeNotifierStateProviderElement, _is__AutoDisposeNotifierStateProviderElement_default);
  const _is__AutoDisposeNotifierStateProvider_default = Symbol('_is__AutoDisposeNotifierStateProvider_default');
  state_provider._AutoDisposeNotifierStateProvider$ = dart.generic(State => {
    class _AutoDisposeNotifierStateProvider extends provider$.AutoDisposeProvider$(State) {
      static ['_#new#tearOff'](State, create, opts) {
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_provider._AutoDisposeNotifierStateProvider$(State)).new(create, {dependencies: dependencies, from: from, argument: argument});
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
    }
    (_AutoDisposeNotifierStateProvider.new = function(create, opts) {
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      _AutoDisposeNotifierStateProvider.__proto__.new.call(this, create, {dependencies: dependencies, from: from, argument: argument});
      ;
    }).prototype = _AutoDisposeNotifierStateProvider.prototype;
    dart.addTypeTests(_AutoDisposeNotifierStateProvider);
    _AutoDisposeNotifierStateProvider.prototype[_is__AutoDisposeNotifierStateProvider_default] = true;
    dart.addTypeCaches(_AutoDisposeNotifierStateProvider);
    dart.setLibraryUri(_AutoDisposeNotifierStateProvider, I[16]);
    return _AutoDisposeNotifierStateProvider;
  });
  state_provider._AutoDisposeNotifierStateProvider = state_provider._AutoDisposeNotifierStateProvider$();
  dart.addTypeTests(state_provider._AutoDisposeNotifierStateProvider, _is__AutoDisposeNotifierStateProvider_default);
  const _is_AutoDisposeStateProviderFamily_default = Symbol('_is_AutoDisposeStateProviderFamily_default');
  state_provider.AutoDisposeStateProviderFamily$ = dart.generic((State, Arg) => {
    var __t$AutoDisposeStateProviderOfState = () => (__t$AutoDisposeStateProviderOfState = dart.constFn(state_provider.AutoDisposeStateProvider$(State)))();
    var __t$AutoDisposeStateProviderRefOfState = () => (__t$AutoDisposeStateProviderRefOfState = dart.constFn(state_provider.AutoDisposeStateProviderRef$(State)))();
    var __t$AutoDisposeStateProviderRefOfStateToState = () => (__t$AutoDisposeStateProviderRefOfStateToState = dart.constFn(dart.fnType(State, [__t$AutoDisposeStateProviderRefOfState()])))();
    var __t$ArgToAutoDisposeStateProviderOfState = () => (__t$ArgToAutoDisposeStateProviderOfState = dart.constFn(dart.fnType(__t$AutoDisposeStateProviderOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class AutoDisposeStateProviderFamily extends framework.Family$(State, Arg, state_provider.AutoDisposeStateProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
        let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
        return new (state_provider.AutoDisposeStateProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$AutoDisposeStateProviderOfState()).new(dart.fn(ref => {
          let t72, t71;
          t71 = ref;
          t72 = argument;
          return this[_create$3](t71, t72);
        }, __t$AutoDisposeStateProviderRefOfStateToState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider.notifier, override: provider.notifier});
      }
      overrideWithProvider(override) {
        __t$ArgToAutoDisposeStateProviderOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          let newProvider = override(arg);
          setup({origin: provider.notifier, override: newProvider.notifier});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (AutoDisposeStateProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let cacheTime = opts && 'cacheTime' in opts ? opts.cacheTime : null;
      let disposeDelay = opts && 'disposeDelay' in opts ? opts.disposeDelay : null;
      this[_create$3] = _create;
      AutoDisposeStateProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies, cacheTime: cacheTime, disposeDelay: disposeDelay});
      ;
    }).prototype = AutoDisposeStateProviderFamily.prototype;
    dart.addTypeTests(AutoDisposeStateProviderFamily);
    AutoDisposeStateProviderFamily.prototype[_is_AutoDisposeStateProviderFamily_default] = true;
    dart.addTypeCaches(AutoDisposeStateProviderFamily);
    dart.setMethodSignature(AutoDisposeStateProviderFamily, () => ({
      __proto__: dart.getMethods(AutoDisposeStateProviderFamily.__proto__),
      create: dart.fnType(state_provider.AutoDisposeStateProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(AutoDisposeStateProviderFamily, I[16]);
    dart.setFieldSignature(AutoDisposeStateProviderFamily, () => ({
      __proto__: dart.getFields(AutoDisposeStateProviderFamily.__proto__),
      [_create$3]: dart.finalFieldType(dart.fnType(State, [state_provider.AutoDisposeStateProviderRef$(State), Arg]))
    }));
    return AutoDisposeStateProviderFamily;
  });
  state_provider.AutoDisposeStateProviderFamily = state_provider.AutoDisposeStateProviderFamily$();
  dart.addTypeTests(state_provider.AutoDisposeStateProviderFamily, _is_AutoDisposeStateProviderFamily_default);
  const _is_StateProviderRef_default = Symbol('_is_StateProviderRef_default');
  state_provider.StateProviderRef$ = dart.generic(State => {
    class StateProviderRef extends core.Object {}
    (StateProviderRef.new = function() {
      ;
    }).prototype = StateProviderRef.prototype;
    dart.addTypeTests(StateProviderRef);
    StateProviderRef.prototype[_is_StateProviderRef_default] = true;
    dart.addTypeCaches(StateProviderRef);
    StateProviderRef[dart.implements] = () => [framework.Ref$(state_provider.StateController$(State))];
    dart.setLibraryUri(StateProviderRef, I[16]);
    return StateProviderRef;
  });
  state_provider.StateProviderRef = state_provider.StateProviderRef$();
  dart.addTypeTests(state_provider.StateProviderRef, _is_StateProviderRef_default);
  var notifier$1 = dart.privateName(state_provider, "StateProvider.notifier");
  var __StateProvider_state = dart.privateName(state_provider, "_#StateProvider#state");
  const _is_StateProvider_default = Symbol('_is_StateProvider_default');
  state_provider.StateProvider$ = dart.generic(State => {
    var __t$_NotifierProviderOfState = () => (__t$_NotifierProviderOfState = dart.constFn(state_provider._NotifierProvider$(State)))();
    var __t$StateControllerOfState = () => (__t$StateControllerOfState = dart.constFn(state_provider.StateController$(State)))();
    var __t$_NotifierStateProviderOfStateControllerOfState = () => (__t$_NotifierStateProviderOfStateControllerOfState = dart.constFn(state_provider._NotifierStateProvider$(__t$StateControllerOfState())))();
    var __t$ProviderElementBaseOfStateControllerOfState = () => (__t$ProviderElementBaseOfStateControllerOfState = dart.constFn(framework.ProviderElementBase$(__t$StateControllerOfState())))();
    var __t$ProviderRefOfStateControllerOfState = () => (__t$ProviderRefOfStateControllerOfState = dart.constFn(provider$.ProviderRef$(__t$StateControllerOfState())))();
    var __t$ProviderRefOfStateControllerOfStateToStateControllerOfState = () => (__t$ProviderRefOfStateControllerOfStateToStateControllerOfState = dart.constFn(dart.fnType(__t$StateControllerOfState(), [__t$ProviderRefOfStateControllerOfState()])))();
    var __t$ProviderElementBaseOfState = () => (__t$ProviderElementBaseOfState = dart.constFn(framework.ProviderElementBase$(State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$StateProviderElementOfState = () => (__t$StateProviderElementOfState = dart.constFn(state_provider.StateProviderElement$(State)))();
    const AlwaysAliveProviderBase_StateProviderOverrideMixin$36 = class AlwaysAliveProviderBase_StateProviderOverrideMixin extends framework.AlwaysAliveProviderBase$(State) {};
    (AlwaysAliveProviderBase_StateProviderOverrideMixin$36.new = function(opts) {
      state_provider.StateProviderOverrideMixin$(State)[dart.mixinNew].call(this);
      AlwaysAliveProviderBase_StateProviderOverrideMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_StateProviderOverrideMixin$36.prototype;
    dart.applyMixin(AlwaysAliveProviderBase_StateProviderOverrideMixin$36, state_provider.StateProviderOverrideMixin$(State));
    const AlwaysAliveProviderBase_OverrideWithProviderMixin$36 = class AlwaysAliveProviderBase_OverrideWithProviderMixin extends AlwaysAliveProviderBase_StateProviderOverrideMixin$36 {};
    (AlwaysAliveProviderBase_OverrideWithProviderMixin$36.new = function(opts) {
      AlwaysAliveProviderBase_OverrideWithProviderMixin$36.__proto__.new.call(this, opts);
    }).prototype = AlwaysAliveProviderBase_OverrideWithProviderMixin$36.prototype;
    class StateProvider extends AlwaysAliveProviderBase_OverrideWithProviderMixin$36 {
      get notifier() {
        return this[notifier$1];
      }
      set notifier(value) {
        super.notifier = value;
      }
      static ['_#new#tearOff'](State, create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_provider.StateProvider$(State)).new(create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      get originProvider() {
        return this.notifier;
      }
      get state() {
        let t72, t71;
        t71 = this[__StateProvider_state];
        return t71 == null ? (t72 = new (__t$_NotifierStateProviderOfStateControllerOfState()).new(dart.fn(ref => state_provider._listenStateProvider(State, __t$ProviderElementBaseOfStateControllerOfState().as(ref), ref.watch(__t$StateControllerOfState(), this.notifier)), __t$ProviderRefOfStateControllerOfStateToStateControllerOfState()), {dependencies: T$.JSArrayOfProviderOrFamily().of([this.notifier]), from: this.from, argument: this.argument}), this[__StateProvider_state] == null ? this[__StateProvider_state] = t72 : dart.throw(new _internal.LateError.fieldADI("state"))) : t71;
      }
      create(ref) {
        __t$ProviderElementBaseOfState().as(ref);
        let notifier = ref.watch(__t$StateControllerOfState(), this.notifier);
        let removeListener = notifier.addListener(__t$StateTovoid().as(dart.bind(ref, 'setState')));
        ref.onDispose(removeListener);
        return notifier.state;
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
      createElement() {
        return new (__t$StateProviderElementOfState()).new(this);
      }
    }
    (StateProvider.new = function(create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[__StateProvider_state] = null;
      this[notifier$1] = new (__t$_NotifierProviderOfState()).new(create, {name: common.modifierName(name, "notifier"), dependencies: dependencies, from: from, argument: argument});
      StateProvider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = StateProvider.prototype;
    dart.addTypeTests(StateProvider);
    StateProvider.prototype[_is_StateProvider_default] = true;
    dart.addTypeCaches(StateProvider);
    dart.setMethodSignature(StateProvider, () => ({
      __proto__: dart.getMethods(StateProvider.__proto__),
      create: dart.fnType(State, [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_provider.StateProviderElement$(State), [])
    }));
    dart.setGetterSignature(StateProvider, () => ({
      __proto__: dart.getGetters(StateProvider.__proto__),
      state: framework.AlwaysAliveProviderBase$(state_provider.StateController$(State))
    }));
    dart.setLibraryUri(StateProvider, I[16]);
    dart.setFieldSignature(StateProvider, () => ({
      __proto__: dart.getFields(StateProvider.__proto__),
      [__StateProvider_state]: dart.fieldType(dart.nullable(framework.AlwaysAliveProviderBase$(state_provider.StateController$(State)))),
      notifier: dart.finalFieldType(framework.AlwaysAliveProviderBase$(state_provider.StateController$(State)))
    }));
    dart.setStaticFieldSignature(StateProvider, () => ['family', 'autoDispose']);
    return StateProvider;
  }, State => {
    dart.applyMixin(state_provider.StateProvider$(State).__proto__, framework.OverrideWithProviderMixin$(state_provider.StateController$(State), state_provider.StateProvider$(State)));
  });
  state_provider.StateProvider = state_provider.StateProvider$();
  dart.defineLazy(state_provider.StateProvider, {
    /*state_provider.StateProvider.family*/get family() {
      return C[17] || CT.C17;
    },
    /*state_provider.StateProvider.autoDispose*/get autoDispose() {
      return C[16] || CT.C16;
    }
  }, false);
  dart.addTypeTests(state_provider.StateProvider, _is_StateProvider_default);
  const _is_StateProviderElement_default = Symbol('_is_StateProviderElement_default');
  state_provider.StateProviderElement$ = dart.generic(State => {
    class StateProviderElement extends framework.ProviderElementBase$(State) {
      static ['_#new#tearOff'](State, provider) {
        return new (state_provider.StateProviderElement$(State)).new(provider);
      }
    }
    (StateProviderElement.new = function(provider) {
      StateProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = StateProviderElement.prototype;
    dart.addTypeTests(StateProviderElement);
    StateProviderElement.prototype[_is_StateProviderElement_default] = true;
    dart.addTypeCaches(StateProviderElement);
    dart.setLibraryUri(StateProviderElement, I[16]);
    return StateProviderElement;
  });
  state_provider.StateProviderElement = state_provider.StateProviderElement$();
  dart.addTypeTests(state_provider.StateProviderElement, _is_StateProviderElement_default);
  const _is__NotifierStateProvider_default = Symbol('_is__NotifierStateProvider_default');
  state_provider._NotifierStateProvider$ = dart.generic(State => {
    class _NotifierStateProvider extends provider$.Provider$(State) {
      static ['_#new#tearOff'](State, create, opts) {
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_provider._NotifierStateProvider$(State)).new(create, {dependencies: dependencies, from: from, argument: argument});
      }
      updateShouldNotify(previousState, newState) {
        State.as(previousState);
        State.as(newState);
        return true;
      }
    }
    (_NotifierStateProvider.new = function(create, opts) {
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      _NotifierStateProvider.__proto__.new.call(this, create, {dependencies: dependencies, from: from, argument: argument});
      ;
    }).prototype = _NotifierStateProvider.prototype;
    dart.addTypeTests(_NotifierStateProvider);
    _NotifierStateProvider.prototype[_is__NotifierStateProvider_default] = true;
    dart.addTypeCaches(_NotifierStateProvider);
    dart.setLibraryUri(_NotifierStateProvider, I[16]);
    return _NotifierStateProvider;
  });
  state_provider._NotifierStateProvider = state_provider._NotifierStateProvider$();
  dart.addTypeTests(state_provider._NotifierStateProvider, _is__NotifierStateProvider_default);
  var dependencies$9 = dart.privateName(state_provider, "_NotifierProvider.dependencies");
  const _is__NotifierProvider_default$ = Symbol('_is__NotifierProvider_default');
  state_provider._NotifierProvider$ = dart.generic(State => {
    var __t$StateProviderRefOfState = () => (__t$StateProviderRefOfState = dart.constFn(state_provider.StateProviderRef$(State)))();
    var __t$StateControllerOfState = () => (__t$StateControllerOfState = dart.constFn(state_provider.StateController$(State)))();
    var __t$_NotifierStateProviderElementOfState = () => (__t$_NotifierStateProviderElementOfState = dart.constFn(state_provider._NotifierStateProviderElement$(State)))();
    class _NotifierProvider extends framework.AlwaysAliveProviderBase$(state_provider.StateController$(State)) {
      get dependencies() {
        return this[dependencies$9];
      }
      set dependencies(value) {
        super.dependencies = value;
      }
      static ['_#new#tearOff'](State, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        let from = opts && 'from' in opts ? opts.from : null;
        let argument = opts && 'argument' in opts ? opts.argument : null;
        return new (state_provider._NotifierProvider$(State)).new(_create, {name: name, dependencies: dependencies, from: from, argument: argument});
      }
      create(ref) {
        let t71;
        __t$StateProviderRefOfState().as(ref);
        let initialState = (t71 = ref, this[_create$3](t71));
        let notifier = new (__t$StateControllerOfState()).new(initialState);
        ref.onDispose(dart.bind(notifier, 'dispose'));
        return notifier;
      }
      updateShouldNotify(previousState, newState) {
        __t$StateControllerOfState().as(previousState);
        __t$StateControllerOfState().as(newState);
        return true;
      }
      createElement() {
        return new (__t$_NotifierStateProviderElementOfState()).new(this);
      }
    }
    (_NotifierProvider.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      let from = opts && 'from' in opts ? opts.from : null;
      let argument = opts && 'argument' in opts ? opts.argument : null;
      this[_create$3] = _create;
      this[dependencies$9] = dependencies;
      _NotifierProvider.__proto__.new.call(this, {name: name, from: from, argument: argument});
      ;
    }).prototype = _NotifierProvider.prototype;
    dart.addTypeTests(_NotifierProvider);
    _NotifierProvider.prototype[_is__NotifierProvider_default$] = true;
    dart.addTypeCaches(_NotifierProvider);
    dart.setMethodSignature(_NotifierProvider, () => ({
      __proto__: dart.getMethods(_NotifierProvider.__proto__),
      create: dart.fnType(state_provider.StateController$(State), [dart.nullable(core.Object)]),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      createElement: dart.fnType(state_provider._NotifierStateProviderElement$(State), [])
    }));
    dart.setLibraryUri(_NotifierProvider, I[16]);
    dart.setFieldSignature(_NotifierProvider, () => ({
      __proto__: dart.getFields(_NotifierProvider.__proto__),
      [_create$3]: dart.finalFieldType(dart.fnType(State, [state_provider.StateProviderRef$(State)])),
      dependencies: dart.finalFieldType(dart.nullable(core.List$(framework.ProviderOrFamily)))
    }));
    return _NotifierProvider;
  });
  state_provider._NotifierProvider = state_provider._NotifierProvider$();
  dart.addTypeTests(state_provider._NotifierProvider, _is__NotifierProvider_default$);
  const _is__NotifierStateProviderElement_default = Symbol('_is__NotifierStateProviderElement_default');
  state_provider._NotifierStateProviderElement$ = dart.generic(State => {
    class _NotifierStateProviderElement extends framework.ProviderElementBase$(state_provider.StateController$(State)) {
      static ['_#new#tearOff'](State, provider) {
        return new (state_provider._NotifierStateProviderElement$(State)).new(provider);
      }
      get controller() {
        return this.requireState;
      }
    }
    (_NotifierStateProviderElement.new = function(provider) {
      _NotifierStateProviderElement.__proto__.new.call(this, provider);
      ;
    }).prototype = _NotifierStateProviderElement.prototype;
    dart.addTypeTests(_NotifierStateProviderElement);
    _NotifierStateProviderElement.prototype[_is__NotifierStateProviderElement_default] = true;
    dart.addTypeCaches(_NotifierStateProviderElement);
    _NotifierStateProviderElement[dart.implements] = () => [state_provider.StateProviderRef$(State)];
    dart.setGetterSignature(_NotifierStateProviderElement, () => ({
      __proto__: dart.getGetters(_NotifierStateProviderElement.__proto__),
      controller: state_provider.StateController$(State)
    }));
    dart.setLibraryUri(_NotifierStateProviderElement, I[16]);
    return _NotifierStateProviderElement;
  });
  state_provider._NotifierStateProviderElement = state_provider._NotifierStateProviderElement$();
  dart.addTypeTests(state_provider._NotifierStateProviderElement, _is__NotifierStateProviderElement_default);
  const _is_StateProviderFamily_default = Symbol('_is_StateProviderFamily_default');
  state_provider.StateProviderFamily$ = dart.generic((State, Arg) => {
    var __t$StateProviderOfState = () => (__t$StateProviderOfState = dart.constFn(state_provider.StateProvider$(State)))();
    var __t$StateProviderRefOfState = () => (__t$StateProviderRefOfState = dart.constFn(state_provider.StateProviderRef$(State)))();
    var __t$StateProviderRefOfStateToState = () => (__t$StateProviderRefOfStateToState = dart.constFn(dart.fnType(State, [__t$StateProviderRefOfState()])))();
    var __t$ArgToStateProviderOfState = () => (__t$ArgToStateProviderOfState = dart.constFn(dart.fnType(__t$StateProviderOfState(), [Arg])))();
    var __t$_FamilyOverrideOfArg = () => (__t$_FamilyOverrideOfArg = dart.constFn(framework._FamilyOverride$(Arg)))();
    var __t$ArgAndFnTovoid = () => (__t$ArgAndFnTovoid = dart.constFn(dart.fnType(dart.void, [Arg, T$.__Tovoid()])))();
    class StateProviderFamily extends framework.Family$(State, Arg, state_provider.StateProvider$(State)) {
      static ['_#new#tearOff'](State, Arg, _create, opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
        return new (state_provider.StateProviderFamily$(State, Arg)).new(_create, {name: name, dependencies: dependencies});
      }
      create(argument) {
        Arg.as(argument);
        return new (__t$StateProviderOfState()).new(dart.fn(ref => {
          let t72, t71;
          t71 = ref;
          t72 = argument;
          return this[_create$3](t71, t72);
        }, __t$StateProviderRefOfStateToState()), {name: this.name, from: this, argument: argument});
      }
      setupOverride(argument, setup) {
        Arg.as(argument);
        let provider = this.call(argument);
        setup({origin: provider.notifier, override: provider.notifier});
      }
      overrideWithProvider(override) {
        __t$ArgToStateProviderOfState().as(override);
        return new (__t$_FamilyOverrideOfArg()).new(this, dart.fn((arg, setup) => {
          let provider = this.call(arg);
          let newProvider = override(arg);
          setup({origin: provider.notifier, override: newProvider.notifier});
        }, __t$ArgAndFnTovoid()));
      }
    }
    (StateProviderFamily.new = function(_create, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let dependencies = opts && 'dependencies' in opts ? opts.dependencies : null;
      this[_create$3] = _create;
      StateProviderFamily.__proto__.new.call(this, {name: name, dependencies: dependencies});
      ;
    }).prototype = StateProviderFamily.prototype;
    dart.addTypeTests(StateProviderFamily);
    StateProviderFamily.prototype[_is_StateProviderFamily_default] = true;
    dart.addTypeCaches(StateProviderFamily);
    dart.setMethodSignature(StateProviderFamily, () => ({
      __proto__: dart.getMethods(StateProviderFamily.__proto__),
      create: dart.fnType(state_provider.StateProvider$(State), [dart.nullable(core.Object)]),
      overrideWithProvider: dart.fnType(framework.Override, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(StateProviderFamily, I[16]);
    dart.setFieldSignature(StateProviderFamily, () => ({
      __proto__: dart.getFields(StateProviderFamily.__proto__),
      [_create$3]: dart.finalFieldType(dart.fnType(State, [state_provider.StateProviderRef$(State), Arg]))
    }));
    return StateProviderFamily;
  });
  state_provider.StateProviderFamily = state_provider.StateProviderFamily$();
  dart.addTypeTests(state_provider.StateProviderFamily, _is_StateProviderFamily_default);
  state_provider._listenStateProvider = function _listenStateProvider(State, ref, controller) {
    function listener(newState) {
      ref.setState(controller);
    }
    dart.fn(listener, dart.fnType(dart.void, [State]));
    ref.onDispose(controller.addListener(listener, {fireImmediately: false}));
    return controller;
  };
  dart.trackLibraries("packages/riverpod/riverpod", {
    "package:riverpod/src/framework.dart": framework,
    "package:riverpod/src/internals.dart": internals,
    "package:riverpod/src/value_provider.dart": value_provider,
    "package:riverpod/src/stream_provider.dart": stream_provider,
    "package:riverpod/src/provider.dart": provider$,
    "package:riverpod/src/state_notifier_provider.dart": state_notifier_provider,
    "package:riverpod/src/future_provider.dart": future_provider,
    "package:riverpod/src/common.dart": common,
    "package:riverpod/src/builders.dart": builders,
    "package:riverpod/src/async_value_converters.dart": async_value_converters,
    "package:riverpod/src/state_provider.dart": state_provider,
    "package:riverpod/riverpod.dart": riverpod
  }, {
    "package:riverpod/src/framework.dart": ["framework/always_alive.dart", "framework/auto_dispose.dart", "framework/async_selector.dart", "framework/provider_base.dart", "framework/container.dart", "framework/family.dart", "framework/listen.dart", "framework/foundation.dart", "framework/ref.dart", "framework/selector.dart", "framework/scheduler.dart"],
    "package:riverpod/src/stream_provider.dart": ["stream_provider/auto_dispose.dart", "stream_provider/base.dart"],
    "package:riverpod/src/provider.dart": ["devtool.dart", "provider/auto_dispose.dart", "provider/base.dart"],
    "package:riverpod/src/state_notifier_provider.dart": ["state_notifier_provider/auto_dispose.dart", "state_notifier_provider/base.dart"],
    "package:riverpod/src/future_provider.dart": ["future_provider/auto_dispose.dart", "future_provider/base.dart"],
    "package:riverpod/src/state_provider.dart": ["state_provider/auto_dispose.dart", "state_provider/base.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/framework/foundation.dart","src/framework/always_alive.dart","src/framework/provider_base.dart","src/framework/selector.dart","src/framework/ref.dart","src/framework/auto_dispose.dart","src/framework/async_selector.dart","src/framework/container.dart","src/framework/family.dart","src/framework/scheduler.dart","src/framework/listen.dart","src/value_provider.dart","src/common.dart","src/stream_provider.dart","src/stream_provider/auto_dispose.dart","src/stream_provider/base.dart","src/devtool.dart","src/provider/auto_dispose.dart","src/provider/base.dart","src/state_notifier_provider.dart","src/state_notifier_provider/auto_dispose.dart","src/state_notifier_provider/base.dart","src/future_provider.dart","src/future_provider/auto_dispose.dart","src/future_provider/base.dart","src/builders.dart","src/async_value_converters.dart","src/state_provider.dart","src/state_provider/auto_dispose.dart","src/state_provider/base.dart"],"names":[],"mappings":"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","file":"riverpod.sound.ddc.js"}');
  // Exports:
  return {
    src__framework: framework,
    src__internals: internals,
    src__value_provider: value_provider,
    src__stream_provider: stream_provider,
    src__provider: provider$,
    src__state_notifier_provider: state_notifier_provider,
    src__future_provider: future_provider,
    src__common: common,
    src__builders: builders,
    src__async_value_converters: async_value_converters,
    src__state_provider: state_provider,
    riverpod: riverpod
  };
}));

//# sourceMappingURL=riverpod.sound.ddc.js.map
