define(['dart_sdk', 'packages/zap/src/core/fragment'], (function load__packages__zap__src__blocks__async(dart_sdk, packages__zap__src__core__fragment) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const js_util = dart_sdk.js_util;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fragment = packages__zap__src__core__fragment.src__core__fragment;
  var html$ = Object.create(dart.library);
  var slot = Object.create(dart.library);
  var component$ = Object.create(dart.library);
  var internal = Object.create(dart.library);
  var context = Object.create(dart.library);
  var subcomponent = Object.create(dart.library);
  var value$ = Object.create(dart.library);
  var snapshot = Object.create(dart.library);
  var mutation_observer = Object.create(dart.library);
  var async$ = Object.create(dart.library);
  var watchable = Object.create(dart.library);
  var dom = Object.create(dart.library);
  var $if = Object.create(dart.library);
  var $for = Object.create(dart.library);
  var key = Object.create(dart.library);
  var $setInnerHtml = dartx.setInnerHtml;
  var $childNodes = dartx.childNodes;
  var $toList = dartx.toList;
  var $insertBefore = dartx.insertBefore;
  var $remove = dartx.remove;
  var $addAll = dartx.addAll;
  var $type = dartx.type;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $_set = dartx._set;
  var $update = dartx.update;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $followedBy = dartx.followedBy;
  var $_equals = dartx._equals;
  var $cast = dartx.cast;
  var $isEmpty = dartx.isEmpty;
  var $observe = dartx.observe;
  var $attributes = dartx.attributes;
  var $target = dartx.target;
  var $wholeText = dartx.wholeText;
  var $toString = dartx.toString;
  var $classes = dartx.classes;
  var $parent = dartx.parent;
  var $length = dartx.length;
  var $removeRange = dartx.removeRange;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidToObjectN: () => (T$.VoidToObjectN = dart.constFn(dart.fnType(T$.ObjectN(), [])))(),
    JSArrayOfVoidToObjectN: () => (T$.JSArrayOfVoidToObjectN = dart.constFn(_interceptors.JSArray$(T$.VoidToObjectN())))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfVoidTovoid: () => (T$.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T$.VoidTovoid())))(),
    LinkedMapOfFragment$int: () => (T$.LinkedMapOfFragment$int = dart.constFn(_js_helper.LinkedMap$(fragment.Fragment, core.int)))(),
    StreamControllerOfEvent: () => (T$.StreamControllerOfEvent = dart.constFn(async.StreamController$(html.Event)))(),
    EventTobool: () => (T$.EventTobool = dart.constFn(dart.fnType(core.bool, [html.Event])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    FragmentAndintTovoid: () => (T$.FragmentAndintTovoid = dart.constFn(dart.fnType(dart.void, [fragment.Fragment, core.int])))(),
    voidTovoid: () => (T$.voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))(),
    CompleterOfvoid: () => (T$.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    VoidToint: () => (T$.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    StringAndObjectNTovoid: () => (T$.StringAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [core.String], [T$.ObjectN()])))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    MultiStreamControllerOfMutationRecord: () => (T$.MultiStreamControllerOfMutationRecord = dart.constFn(async.MultiStreamController$(html.MutationRecord)))(),
    JSArrayOfMultiStreamControllerOfMutationRecord: () => (T$.JSArrayOfMultiStreamControllerOfMutationRecord = dart.constFn(_interceptors.JSArray$(T$.MultiStreamControllerOfMutationRecord())))(),
    MutationRecordTovoid: () => (T$.MutationRecordTovoid = dart.constFn(dart.fnType(dart.void, [html.MutationRecord])))(),
    ListAndMutationObserverTovoid: () => (T$.ListAndMutationObserverTovoid = dart.constFn(dart.fnType(dart.void, [core.List, html.MutationObserver])))(),
    MultiStreamControllerOfMutationRecordTovoid: () => (T$.MultiStreamControllerOfMutationRecordTovoid = dart.constFn(dart.fnType(dart.void, [T$.MultiStreamControllerOfMutationRecord()])))(),
    StreamOfMutationRecord: () => (T$.StreamOfMutationRecord = dart.constFn(async.Stream$(html.MutationRecord)))(),
    ListOfString: () => (T$.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListNOfString: () => (T$.ListNOfString = dart.constFn(dart.nullable(T$.ListOfString())))(),
    boolN: () => (T$.boolN = dart.constFn(dart.nullable(core.bool)))(),
    __ToStreamOfMutationRecord: () => (T$.__ToStreamOfMutationRecord = dart.constFn(dart.fnType(T$.StreamOfMutationRecord(), [], {attributeFilter: T$.ListNOfString(), attributeOldValue: T$.boolN(), attributes: T$.boolN(), characterData: T$.boolN(), characterDataOldValue: T$.boolN(), childList: T$.boolN(), subtree: T$.boolN()}, {})))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    StreamOfStringN: () => (T$.StreamOfStringN = dart.constFn(async.Stream$(T$.StringN())))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    MutationRecordToStringN: () => (T$.MutationRecordToStringN = dart.constFn(dart.fnType(T$.StringN(), [html.MutationRecord])))(),
    MultiStreamControllerOfStringN: () => (T$.MultiStreamControllerOfStringN = dart.constFn(async.MultiStreamController$(T$.StringN())))(),
    MultiStreamControllerOfStringNTovoid: () => (T$.MultiStreamControllerOfStringNTovoid = dart.constFn(dart.fnType(dart.void, [T$.MultiStreamControllerOfStringN()])))(),
    StringToStreamOfStringN: () => (T$.StringToStreamOfStringN = dart.constFn(dart.fnType(T$.StreamOfStringN(), [core.String])))(),
    ZapSnapshotOfNever: () => (T$.ZapSnapshotOfNever = dart.constFn(snapshot.ZapSnapshot$(dart.Never)))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    EventSinkOfZapSnapshotOfTTo_ToSnapshotTransformerOfT: () => (T$.EventSinkOfZapSnapshotOfTTo_ToSnapshotTransformerOfT = dart.constFn(dart.gFnType(T => [watchable._ToSnapshotTransformer$(T), [async.EventSink$(snapshot.ZapSnapshot$(T))]], T => [T$.ObjectN()])))(),
    StringAndboolTovoid: () => (T$.StringAndboolTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.bool])))(),
    StringAndObjectNTovoid$1: () => (T$.StringAndObjectNTovoid$1 = dart.constFn(dart.fnType(dart.void, [core.String, T$.ObjectN()])))(),
    StringTovoid: () => (T$.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    StringAndStringTovoid: () => (T$.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    _ModifierSinkOfEvent: () => (T$._ModifierSinkOfEvent = dart.constFn(dom._ModifierSink$(html.Event)))(),
    ElementN: () => (T$.ElementN = dart.constFn(dart.nullable(html.Element)))(),
    JSArrayOfFragment: () => (T$.JSArrayOfFragment = dart.constFn(_interceptors.JSArray$(fragment.Fragment)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: snapshot._SnapshotState.prototype,
        [_Enum__name]: "unresolved",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: snapshot._SnapshotState.prototype,
        [_Enum__name]: "data",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: snapshot._SnapshotState.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], snapshot._SnapshotState);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: T$.ZapSnapshotOfNever().prototype,
        [_trace$]: null,
        [_error$]: null,
        [_data$]: null,
        [isDone$]: false,
        [_state$]: C[0] || CT.C0
      });
    },
    get C5() {
      return C[5] = dart.fn(watchable._ToSnapshotTransformer['_#new#tearOff'], T$.EventSinkOfZapSnapshotOfTTo_ToSnapshotTransformerOfT());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:zap/src/blocks/html.dart",
    "package:zap/src/blocks/slot.dart",
    "package:zap/src/core/component.dart",
    "package:zap/src/core/context.dart",
    "package:zap/src/blocks/subcomponent.dart",
    "package:zap/src/core/value.dart",
    "package:zap/src/core/snapshot.dart",
    "package:zap/src/blocks/async.dart",
    "package:zap/src/core/watchable.dart",
    "package:zap/src/dom/dom.dart",
    "package:zap/src/blocks/if.dart",
    "package:zap/src/blocks/for.dart",
    "package:zap/src/blocks/key.dart"
  ];
  var _rawHtml = dart.privateName(html$, "_rawHtml");
  var _artificialParent = dart.privateName(html$, "_artificialParent");
  var _mountTarget = dart.privateName(html$, "_mountTarget");
  var _mountAnchor = dart.privateName(html$, "_mountAnchor");
  var _children = dart.privateName(html$, "_children");
  html$.HtmlTag = class HtmlTag extends fragment.Fragment {
    static ['_#new#tearOff']() {
      return new html$.HtmlTag.new();
    }
    set rawHtml(html) {
      this[_rawHtml] = html;
      if (this[_mountTarget] != null) {
        this.destroy();
        this.create(dart.nullCheck(this[_mountTarget]), this[_mountAnchor]);
      }
    }
    create(target, anchor = null) {
      this[_mountTarget] = target;
      this[_mountAnchor] = anchor;
      this[_artificialParent][$setInnerHtml](this[_rawHtml], {treeSanitizer: html.NodeTreeSanitizer.trusted});
      this[_children] = this[_artificialParent][$childNodes][$toList]();
      let children = this[_children];
      if (children != null) {
        for (let child of children) {
          target[$insertBefore](child, anchor);
        }
      }
    }
    update(delta) {
    }
    destroy() {
      let children = this[_children];
      if (children != null) {
        for (let child of children) {
          child[$remove]();
        }
      }
      this[_children] = null;
    }
  };
  (html$.HtmlTag.new = function() {
    this[_rawHtml] = null;
    this[_artificialParent] = html.Element.div();
    this[_mountTarget] = null;
    this[_mountAnchor] = null;
    this[_children] = null;
    ;
  }).prototype = html$.HtmlTag.prototype;
  dart.addTypeTests(html$.HtmlTag);
  dart.addTypeCaches(html$.HtmlTag);
  dart.setMethodSignature(html$.HtmlTag, () => ({
    __proto__: dart.getMethods(html$.HtmlTag.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(html$.HtmlTag, () => ({
    __proto__: dart.getSetters(html$.HtmlTag.__proto__),
    rawHtml: core.String
  }));
  dart.setLibraryUri(html$.HtmlTag, I[0]);
  dart.setFieldSignature(html$.HtmlTag, () => ({
    __proto__: dart.getFields(html$.HtmlTag.__proto__),
    [_rawHtml]: dart.fieldType(dart.nullable(core.String)),
    [_artificialParent]: dart.finalFieldType(html.Element),
    [_mountTarget]: dart.fieldType(dart.nullable(html.Element)),
    [_mountAnchor]: dart.fieldType(dart.nullable(html.Node)),
    [_children]: dart.fieldType(dart.nullable(core.List$(html.Node)))
  }));
  var __Slot__fragment = dart.privateName(slot, "_#Slot#_fragment");
  var _create$ = dart.privateName(slot, "_create");
  var _parent$ = dart.privateName(slot, "_parent");
  var _fragment = dart.privateName(slot, "_fragment");
  slot.Slot = class Slot extends fragment.Fragment {
    get [_fragment]() {
      let t0;
      t0 = this[__Slot__fragment];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_fragment")) : t0;
    }
    set [_fragment](t0) {
      if (this[__Slot__fragment] == null)
        this[__Slot__fragment] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_fragment"));
    }
    static ['_#new#tearOff'](_create, _parent) {
      return new slot.Slot.new(_create, _parent);
    }
    create(target, anchor = null) {
      let t1;
      let oldParent = component$.parentComponent;
      component$.parentComponent = this[_parent$];
      this[_fragment] = (t1 = this[_create$](), (() => {
        t1.create(target, anchor);
        return t1;
      })());
      component$.parentComponent = oldParent;
    }
    update(delta) {
      this[_fragment].update(delta);
    }
    destroy() {
      this[_fragment].destroy();
    }
  };
  (slot.Slot.new = function(_create, _parent) {
    this[__Slot__fragment] = null;
    this[_create$] = _create;
    this[_parent$] = _parent;
    ;
  }).prototype = slot.Slot.prototype;
  dart.addTypeTests(slot.Slot);
  dart.addTypeCaches(slot.Slot);
  dart.setMethodSignature(slot.Slot, () => ({
    __proto__: dart.getMethods(slot.Slot.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(slot.Slot, () => ({
    __proto__: dart.getGetters(slot.Slot.__proto__),
    [_fragment]: fragment.Fragment
  }));
  dart.setSetterSignature(slot.Slot, () => ({
    __proto__: dart.getSetters(slot.Slot.__proto__),
    [_fragment]: fragment.Fragment
  }));
  dart.setLibraryUri(slot.Slot, I[1]);
  dart.setFieldSignature(slot.Slot, () => ({
    __proto__: dart.getFields(slot.Slot.__proto__),
    [_create$]: dart.finalFieldType(dart.fnType(fragment.Fragment, [])),
    [_parent$]: dart.finalFieldType(component$.ZapComponent),
    [__Slot__fragment]: dart.fieldType(dart.nullable(fragment.Fragment))
  }));
  component$.ComponentOrPending = class ComponentOrPending extends core.Object {};
  (component$.ComponentOrPending.new = function() {
    ;
  }).prototype = component$.ComponentOrPending.prototype;
  dart.addTypeTests(component$.ComponentOrPending);
  dart.addTypeCaches(component$.ComponentOrPending);
  dart.setLibraryUri(component$.ComponentOrPending, I[2]);
  var _onMountListeners = dart.privateName(component$, "_onMountListeners");
  var _beforeUpdateListeners = dart.privateName(component$, "_beforeUpdateListeners");
  var _afterUpdateListeners = dart.privateName(component$, "_afterUpdateListeners");
  var _unmountListeners = dart.privateName(component$, "_unmountListeners");
  var _isAlive = dart.privateName(component$, "_isAlive");
  var _isRunningUpdate = dart.privateName(component$, "_isRunningUpdate");
  var _updateBitmask = dart.privateName(component$, "_updateBitmask");
  var _fragmentUpdates = dart.privateName(component$, "_fragmentUpdates");
  var _scheduledUpdate = dart.privateName(component$, "_scheduledUpdate");
  var __ZapComponent__scope = dart.privateName(component$, "_#ZapComponent#_scope");
  var _eventEmitter = dart.privateName(component$, "_eventEmitter");
  var _scope = dart.privateName(component$, "_scope");
  var _wasCreated = dart.privateName(component$, "_wasCreated");
  var _context = dart.privateName(component$, "_context");
  var _onMount = dart.privateName(component$, "_onMount");
  var _onAfterUpdate = dart.privateName(component$, "_onAfterUpdate");
  var _onBeforeUpdate = dart.privateName(component$, "_onBeforeUpdate");
  var _onDestroy = dart.privateName(component$, "_onDestroy");
  var _runUpdate = dart.privateName(component$, "_runUpdate");
  var _invalidate = dart.privateName(component$, "_invalidate");
  component$.ZapComponent = class ZapComponent extends core.Object {
    get [_scope]() {
      let t1;
      t1 = this[__ZapComponent__scope];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_scope")) : t1;
    }
    set [_scope](t1) {
      if (this[__ZapComponent__scope] == null)
        this[__ZapComponent__scope] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_scope"));
    }
    get context() {
      return this[_scope];
    }
    takeOverPending(pendingSelf) {
      pendingSelf[_wasCreated] = true;
      this[_scope] = pendingSelf[_context];
      this[_onMountListeners][$addAll](pendingSelf[_onMount]);
      this[_afterUpdateListeners][$addAll](pendingSelf[_onAfterUpdate]);
      this[_beforeUpdateListeners][$addAll](pendingSelf[_onBeforeUpdate]);
      this[_unmountListeners][$addAll](pendingSelf[_onDestroy]);
    }
    lifecycle(T) {
      return new (component$._LifecycleTransformer$(T)).new(this);
    }
    get self() {
      return this;
    }
    componentEvents(T, type) {
      return this[_eventEmitter].stream.where(dart.fn(e => T.is(e) && e[$type] === type, T$.EventTobool())).cast(T);
    }
    onMount(callback) {
      if (this[_isAlive]) {
        dart.throw(new core.StateError.new("onMount() may only be called before a component is " + "initialized!"));
      }
      this[_onMountListeners][$add](callback);
    }
    onDestroy(callback) {
      return this[_unmountListeners][$add](callback);
    }
    beforeUpdate(callback) {
      this[_beforeUpdateListeners][$add](callback);
    }
    afterUpdate(callback) {
      this[_afterUpdateListeners][$add](callback);
    }
    get tick() {
      let scheduled = this[_scheduledUpdate];
      if (scheduled != null) {
        return scheduled.future;
      } else {
        return T$.FutureOfvoid().microtask(dart.fn(() => null, T$.VoidToNull()));
      }
    }
    emitEvent(event) {
      this[_eventEmitter].add(event);
    }
    forwardEvents(stream) {
      this.lifecycle(html.Event).bind(stream).listen(dart.bind(this, 'emitEvent'));
    }
    create(target, anchor = null) {
      this[_isAlive] = true;
      for (let listener of this[_onMountListeners]) {
        let result = listener();
        if (T$.VoidToObjectN().is(result)) {
          this.onDestroy(result);
        }
      }
      this.createInternal(target, anchor);
      this[_runUpdate](4294967295.0);
    }
    [_runUpdate](delta) {
      for (let before of this[_beforeUpdateListeners]) {
        before();
      }
      this.update(delta);
      this[_fragmentUpdates][$forEach](dart.fn((fragment, flag) => fragment.update(flag), T$.FragmentAndintTovoid()));
      for (let after of this[_afterUpdateListeners]) {
        after();
      }
    }
    destroy() {
      this[_isAlive] = false;
      for (let callback of this[_unmountListeners]) {
        callback();
      }
      this[_eventEmitter].close();
      this.remove();
    }
    [_invalidate](opts) {
      let set = opts && 'set' in opts ? opts.set : null;
      let add = opts && 'add' in opts ? opts.add : null;
      if (!this[_isAlive]) return;
      if (this[_isRunningUpdate]) {
        this.tick.then(dart.void, dart.fn(_ => this[_invalidate]({set: set, add: add}), T$.voidTovoid()));
        return;
      }
      let scheduled = this[_scheduledUpdate];
      if (scheduled == null) {
        set();
        let completer = this[_scheduledUpdate] = T$.CompleterOfvoid().sync();
        async.scheduleMicrotask(dart.fn(() => {
          this[_scheduledUpdate] = null;
          try {
            this[_isRunningUpdate] = true;
            this[_runUpdate](this[_updateBitmask]);
          } finally {
            this[_isRunningUpdate] = false;
            this[_updateBitmask] = 0;
            this[_fragmentUpdates][$clear]();
            completer.complete();
          }
        }, T$.VoidTovoid()));
      } else {
        add();
      }
    }
    $invalidate(flags) {
      this[_invalidate]({set: dart.fn(() => this[_updateBitmask] = flags, T$.VoidTovoid()), add: dart.fn(() => this[_updateBitmask] = (this[_updateBitmask] | flags) >>> 0, T$.VoidTovoid())});
    }
    $invalidateSubcomponent(fragment, delta) {
      this[_invalidate]({set: dart.fn(() => {
          let t4, t3, t2;
          t2 = this[_fragmentUpdates];
          t3 = fragment;
          t4 = delta;
          t2[$_set](t3, t4);
          return t4;
        }, T$.VoidTovoid()), add: dart.fn(() => this[_fragmentUpdates][$update](fragment, dart.fn(value => (value | delta) >>> 0, T$.intToint()), {ifAbsent: dart.fn(() => delta, T$.VoidToint())}), T$.VoidTovoid())});
    }
    $invalidateAssign(T, flags, value) {
      this.$invalidate(flags);
      return value;
    }
    $invalidateAssignSubcomponent(T, f, flags, value) {
      this.$invalidateSubcomponent(f, flags);
      return value;
    }
    $createChildComponent(T, create) {
      component$.parentComponent = this;
      let component = create();
      component$.parentComponent = null;
      return component;
    }
  };
  (component$.ZapComponent.new = function() {
    this[_onMountListeners] = T$.JSArrayOfVoidToObjectN().of([]);
    this[_beforeUpdateListeners] = T$.JSArrayOfVoidTovoid().of([]);
    this[_afterUpdateListeners] = T$.JSArrayOfVoidTovoid().of([]);
    this[_unmountListeners] = T$.JSArrayOfVoidTovoid().of([]);
    this[_isAlive] = false;
    this[_isRunningUpdate] = false;
    this[_updateBitmask] = 0;
    this[_fragmentUpdates] = new (T$.LinkedMapOfFragment$int()).new();
    this[_scheduledUpdate] = null;
    this[__ZapComponent__scope] = null;
    this[_eventEmitter] = T$.StreamControllerOfEvent().broadcast();
    ;
  }).prototype = component$.ZapComponent.prototype;
  dart.addTypeTests(component$.ZapComponent);
  dart.addTypeCaches(component$.ZapComponent);
  component$.ZapComponent[dart.implements] = () => [component$.ComponentOrPending, fragment.Fragment];
  dart.setMethodSignature(component$.ZapComponent, () => ({
    __proto__: dart.getMethods(component$.ZapComponent.__proto__),
    takeOverPending: dart.fnType(dart.void, [component$.PendingComponent]),
    lifecycle: dart.gFnType(T => [async.StreamTransformer$(T, T), []], T => [dart.nullable(core.Object)]),
    componentEvents: dart.gFnType(T => [async.Stream$(T), [core.String]], T => [html.Event]),
    onMount: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    beforeUpdate: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    afterUpdate: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    emitEvent: dart.fnType(dart.void, [html.Event]),
    forwardEvents: dart.fnType(dart.void, [async.Stream$(html.Event)]),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    [_runUpdate]: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, []),
    [_invalidate]: dart.fnType(dart.void, [], {}, {add: dart.fnType(dart.void, []), set: dart.fnType(dart.void, [])}),
    $invalidate: dart.fnType(dart.void, [core.int]),
    $invalidateSubcomponent: dart.fnType(dart.void, [fragment.Fragment, core.int]),
    $invalidateAssign: dart.gFnType(T => [T, [core.int, T]], T => [dart.nullable(core.Object)]),
    $invalidateAssignSubcomponent: dart.gFnType(T => [T, [fragment.Fragment, core.int, T]], T => [dart.nullable(core.Object)]),
    $createChildComponent: dart.gFnType(T => [T, [dart.fnType(T, [])]], T => [fragment.Fragment])
  }));
  dart.setGetterSignature(component$.ZapComponent, () => ({
    __proto__: dart.getGetters(component$.ZapComponent.__proto__),
    [_scope]: context.ContextScope,
    context: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)),
    self: component$.ComponentOrPending,
    tick: async.Future$(dart.void)
  }));
  dart.setSetterSignature(component$.ZapComponent, () => ({
    __proto__: dart.getSetters(component$.ZapComponent.__proto__),
    [_scope]: context.ContextScope
  }));
  dart.setLibraryUri(component$.ZapComponent, I[2]);
  dart.setFieldSignature(component$.ZapComponent, () => ({
    __proto__: dart.getFields(component$.ZapComponent.__proto__),
    [_onMountListeners]: dart.finalFieldType(core.List$(dart.fnType(dart.nullable(core.Object), []))),
    [_beforeUpdateListeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_afterUpdateListeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_unmountListeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_isAlive]: dart.fieldType(core.bool),
    [_isRunningUpdate]: dart.fieldType(core.bool),
    [_updateBitmask]: dart.fieldType(core.int),
    [_fragmentUpdates]: dart.finalFieldType(core.Map$(fragment.Fragment, core.int)),
    [_scheduledUpdate]: dart.fieldType(dart.nullable(async.Completer$(dart.void))),
    [__ZapComponent__scope]: dart.fieldType(dart.nullable(context.ContextScope)),
    [_eventEmitter]: dart.finalFieldType(async.StreamController$(html.Event))
  }));
  var _checkNotCreated = dart.privateName(component$, "_checkNotCreated");
  component$.PendingComponent = class PendingComponent extends component$.ComponentOrPending {
    get context() {
      return this[_context];
    }
    afterUpdate(callback) {
      this[_checkNotCreated]();
      this[_onAfterUpdate][$add](callback);
    }
    beforeUpdate(callback) {
      this[_checkNotCreated]();
      this[_onBeforeUpdate][$add](callback);
    }
    onDestroy(callback) {
      this[_checkNotCreated]();
      this[_onDestroy][$add](callback);
    }
    onMount(callback) {
      this[_checkNotCreated]();
      this[_onMount][$add](callback);
    }
    emitEvent(event) {
      dart.throw(new core.UnsupportedError.new("Can't emit events before the component is initialized"));
    }
    get tick() {
      return T$.FutureOfvoid().microtask(dart.fn(() => null, T$.VoidToNull()));
    }
    [_checkNotCreated]() {
      if (this[_wasCreated]) {
        dart.throw(new core.StateError.new("Called a runtime component method on an invalid " + "pending component instance. Are you storing `self` in a variable?"));
      }
    }
    static ['_#new#tearOff']() {
      return new component$.PendingComponent.new();
    }
  };
  (component$.PendingComponent.new = function() {
    let t2;
    this[_onMount] = T$.JSArrayOfVoidTovoid().of([]);
    this[_onAfterUpdate] = T$.JSArrayOfVoidTovoid().of([]);
    this[_onBeforeUpdate] = T$.JSArrayOfVoidTovoid().of([]);
    this[_onDestroy] = T$.JSArrayOfVoidTovoid().of([]);
    this[_wasCreated] = false;
    this[_context] = new context.ContextScope.new((t2 = component$.parentComponent, t2 == null ? null : t2[_scope]));
    ;
  }).prototype = component$.PendingComponent.prototype;
  dart.addTypeTests(component$.PendingComponent);
  dart.addTypeCaches(component$.PendingComponent);
  dart.setMethodSignature(component$.PendingComponent, () => ({
    __proto__: dart.getMethods(component$.PendingComponent.__proto__),
    afterUpdate: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    beforeUpdate: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    onMount: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    emitEvent: dart.fnType(dart.void, [html.Event]),
    [_checkNotCreated]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(component$.PendingComponent, () => ({
    __proto__: dart.getGetters(component$.PendingComponent.__proto__),
    context: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)),
    tick: async.Future$(dart.void)
  }));
  dart.setLibraryUri(component$.PendingComponent, I[2]);
  dart.setFieldSignature(component$.PendingComponent, () => ({
    __proto__: dart.getFields(component$.PendingComponent.__proto__),
    [_onMount]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_onAfterUpdate]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_onBeforeUpdate]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_onDestroy]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_wasCreated]: dart.fieldType(core.bool),
    [_context]: dart.finalFieldType(context.ContextScope)
  }));
  const _is__LifecycleTransformer_default = Symbol('_is__LifecycleTransformer_default');
  component$._LifecycleTransformer$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$MultiStreamControllerOfT = () => (__t$MultiStreamControllerOfT = dart.constFn(async.MultiStreamController$(T)))();
    var __t$MultiStreamControllerOfTTovoid = () => (__t$MultiStreamControllerOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$MultiStreamControllerOfT()])))();
    class _LifecycleTransformer extends async.StreamTransformerBase$(T, T) {
      static ['_#new#tearOff'](T, component) {
        return new (component$._LifecycleTransformer$(T)).new(component);
      }
      bind(stream) {
        __t$StreamOfT().as(stream);
        return __t$StreamOfT().multi(dart.fn(listener => {
          let subscription = null;
          function unmountListener() {
            let t2;
            t2 = subscription;
            t2 == null ? null : t2.cancel();
          }
          dart.fn(unmountListener, T$.VoidTovoid());
          const listenNow = () => {
            subscription = stream.listen(__t$TTovoid().as(dart.bind(listener, 'addSync')), {onError: dart.bind(listener, 'addErrorSync'), onDone: dart.fn(() => {
                this.component[_unmountListeners][$remove](unmountListener);
                subscription = null;
                listener.closeSync();
              }, T$.VoidTovoid())});
            this.component[_unmountListeners][$add](unmountListener);
          };
          dart.fn(listenNow, T$.VoidTovoid());
          if (this.component[_isAlive]) {
            listenNow();
          } else {
            this.component.onMount(listenNow);
          }
        }, __t$MultiStreamControllerOfTTovoid()), {isBroadcast: stream.isBroadcast});
      }
    }
    (_LifecycleTransformer.new = function(component) {
      this.component = component;
      _LifecycleTransformer.__proto__.new.call(this);
      ;
    }).prototype = _LifecycleTransformer.prototype;
    dart.addTypeTests(_LifecycleTransformer);
    _LifecycleTransformer.prototype[_is__LifecycleTransformer_default] = true;
    dart.addTypeCaches(_LifecycleTransformer);
    dart.setMethodSignature(_LifecycleTransformer, () => ({
      __proto__: dart.getMethods(_LifecycleTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_LifecycleTransformer, I[2]);
    dart.setFieldSignature(_LifecycleTransformer, () => ({
      __proto__: dart.getFields(_LifecycleTransformer.__proto__),
      component: dart.finalFieldType(component$.ZapComponent)
    }));
    return _LifecycleTransformer;
  });
  component$._LifecycleTransformer = component$._LifecycleTransformer$();
  dart.addTypeTests(component$._LifecycleTransformer, _is__LifecycleTransformer_default);
  component$['EmitCustomEvent|emitCustom'] = function EmitCustomEvent$124emitCustom($this, type, detail = null) {
    $this.emitEvent(html.CustomEvent.new(type, {detail: detail}));
  };
  component$['EmitCustomEvent|get#emitCustom'] = function EmitCustomEvent$124get$35emitCustom($this) {
    return dart.fn((type, detail = null) => component$['EmitCustomEvent|emitCustom']($this, type, detail), T$.StringAndObjectNTovoid());
  };
  dart.defineLazy(component$, {
    /*component$.parentComponent*/get parentComponent() {
      return null;
    },
    set parentComponent(_) {}
  }, false);
  dart.defineLazy(internal, {
    /*internal.updateAll*/get updateAll() {
      return 4294967295.0;
    }
  }, false);
  var definedData = dart.privateName(context, "ContextScope.definedData");
  var parent$ = dart.privateName(context, "ContextScope.parent");
  context.ContextScope = class ContextScope extends collection.MapBase$(dart.nullable(core.Object), dart.nullable(core.Object)) {
    get definedData() {
      return this[definedData];
    }
    set definedData(value) {
      super.definedData = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    static ['_#new#tearOff'](parent = null) {
      return new context.ContextScope.new(parent);
    }
    _get(key) {
      let t4;
      if (this.definedData[$containsKey](key)) {
        return this.definedData[$_get](key);
      } else {
        t4 = this.parent;
        return t4 == null ? null : t4._get(key);
      }
    }
    _set(key, value$) {
      let value = value$;
      this.definedData[$_set](key, value);
      return value$;
    }
    clear() {
      this.definedData[$clear]();
    }
    get keys() {
      let parent = this.parent;
      if (parent != null) {
        return parent.keys[$followedBy](this.definedData[$keys]);
      } else {
        return this.definedData[$keys];
      }
    }
    remove(key) {
      this.definedData[$remove](key);
    }
  };
  (context.ContextScope.new = function(parent = null) {
    this[definedData] = new (T$.LinkedMapOfObjectN$ObjectN()).new();
    this[parent$] = parent;
    ;
  }).prototype = context.ContextScope.prototype;
  dart.addTypeTests(context.ContextScope);
  dart.addTypeCaches(context.ContextScope);
  dart.setMethodSignature(context.ContextScope, () => ({
    __proto__: dart.getMethods(context.ContextScope.__proto__),
    _get: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)]),
    [$_get]: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)]),
    _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [$_set]: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
    clear: dart.fnType(dart.void, []),
    [$clear]: dart.fnType(dart.void, []),
    remove: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)]),
    [$remove]: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(context.ContextScope, () => ({
    __proto__: dart.getGetters(context.ContextScope.__proto__),
    keys: core.Iterable$(dart.nullable(core.Object)),
    [$keys]: core.Iterable$(dart.nullable(core.Object))
  }));
  dart.setLibraryUri(context.ContextScope, I[3]);
  dart.setFieldSignature(context.ContextScope, () => ({
    __proto__: dart.getFields(context.ContextScope.__proto__),
    definedData: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))),
    parent: dart.finalFieldType(dart.nullable(context.ContextScope))
  }));
  dart.defineExtensionMethods(context.ContextScope, ['_get', '_set', 'clear', 'remove']);
  dart.defineExtensionAccessors(context.ContextScope, ['keys']);
  var _anchor = dart.privateName(subcomponent, "_anchor");
  var _parent = dart.privateName(subcomponent, "_parent");
  var _component$ = dart.privateName(subcomponent, "_component");
  subcomponent.DynamicComponent = class DynamicComponent extends core.Object {
    static ['_#new#tearOff'](_component) {
      return new subcomponent.DynamicComponent.new(_component);
    }
    set component(component) {
      let parent = this[_parent];
      if (parent != null && !this[_component$][$_equals](component)) {
        this[_component$].destroy();
        this[_component$] = component;
        this[_component$].create(parent, this[_anchor]);
      } else {
        this[_component$] = component;
      }
    }
    create(target, anchor = null) {
      target[$insertBefore](this[_anchor], anchor);
      this[_component$].create(target, this[_anchor]);
      this[_parent] = target;
    }
    destroy() {
      this[_component$].destroy();
    }
    update(delta) {
      this[_component$].update(delta);
    }
  };
  (subcomponent.DynamicComponent.new = function(_component) {
    this[_anchor] = html.Comment.new();
    this[_parent] = null;
    this[_component$] = _component;
    ;
  }).prototype = subcomponent.DynamicComponent.prototype;
  dart.addTypeTests(subcomponent.DynamicComponent);
  dart.addTypeCaches(subcomponent.DynamicComponent);
  subcomponent.DynamicComponent[dart.implements] = () => [fragment.Fragment];
  dart.setMethodSignature(subcomponent.DynamicComponent, () => ({
    __proto__: dart.getMethods(subcomponent.DynamicComponent.__proto__),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    destroy: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setSetterSignature(subcomponent.DynamicComponent, () => ({
    __proto__: dart.getSetters(subcomponent.DynamicComponent.__proto__),
    component: component$.ZapComponent
  }));
  dart.setLibraryUri(subcomponent.DynamicComponent, I[4]);
  dart.setFieldSignature(subcomponent.DynamicComponent, () => ({
    __proto__: dart.getFields(subcomponent.DynamicComponent.__proto__),
    [_anchor]: dart.finalFieldType(html.Node),
    [_parent]: dart.fieldType(dart.nullable(html.Element)),
    [_component$]: dart.fieldType(component$.ZapComponent)
  }));
  var value$0 = dart.privateName(value$, "ZapValue.value");
  const _is_ZapValue_default = Symbol('_is_ZapValue_default');
  value$.ZapValue$ = dart.generic(T => {
    class ZapValue extends core.Object {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      static ['_#new#tearOff'](T, value) {
        return new (value$.ZapValue$(T)).new(value);
      }
    }
    (ZapValue.new = function(value) {
      this[value$0] = value;
      ;
    }).prototype = ZapValue.prototype;
    dart.addTypeTests(ZapValue);
    ZapValue.prototype[_is_ZapValue_default] = true;
    dart.addTypeCaches(ZapValue);
    dart.setLibraryUri(ZapValue, I[5]);
    dart.setFieldSignature(ZapValue, () => ({
      __proto__: dart.getFields(ZapValue.__proto__),
      value: dart.finalFieldType(T)
    }));
    return ZapValue;
  });
  value$.ZapValue = value$.ZapValue$();
  dart.addTypeTests(value$.ZapValue, _is_ZapValue_default);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  snapshot._SnapshotState = class _SnapshotState extends core._Enum {
    toString() {
      return "_SnapshotState." + this[_name];
    }
  };
  (snapshot._SnapshotState.new = function(index, name) {
    snapshot._SnapshotState.__proto__.new.call(this, index, name);
    ;
  }).prototype = snapshot._SnapshotState.prototype;
  dart.addTypeTests(snapshot._SnapshotState);
  dart.addTypeCaches(snapshot._SnapshotState);
  dart.setLibraryUri(snapshot._SnapshotState, I[6]);
  dart.setStaticFieldSignature(snapshot._SnapshotState, () => ['values', 'unresolved', 'data', 'error']);
  dart.defineExtensionMethods(snapshot._SnapshotState, ['toString']);
  snapshot._SnapshotState.unresolved = C[0] || CT.C0;
  snapshot._SnapshotState.data = C[1] || CT.C1;
  snapshot._SnapshotState.error = C[2] || CT.C2;
  snapshot._SnapshotState.values = C[3] || CT.C3;
  var _state$ = dart.privateName(snapshot, "ZapSnapshot._state");
  var isDone$ = dart.privateName(snapshot, "ZapSnapshot.isDone");
  var _data$ = dart.privateName(snapshot, "ZapSnapshot._data");
  var _error$ = dart.privateName(snapshot, "ZapSnapshot._error");
  var _trace$ = dart.privateName(snapshot, "ZapSnapshot._trace");
  var _state = dart.privateName(snapshot, "_state");
  var _data = dart.privateName(snapshot, "_data");
  var _error = dart.privateName(snapshot, "_error");
  var _trace = dart.privateName(snapshot, "_trace");
  const _is_ZapSnapshot_default = Symbol('_is_ZapSnapshot_default');
  snapshot.ZapSnapshot$ = dart.generic(T => {
    var __t$ZapSnapshotOfT = () => (__t$ZapSnapshotOfT = dart.constFn(snapshot.ZapSnapshot$(T)))();
    class ZapSnapshot extends core.Object {
      get [_state]() {
        return this[_state$];
      }
      set [_state](value) {
        super[_state] = value;
      }
      get isDone() {
        return this[isDone$];
      }
      set isDone(value) {
        super.isDone = value;
      }
      get [_data]() {
        return this[_data$];
      }
      set [_data](value) {
        super[_data] = value;
      }
      get [_error]() {
        return this[_error$];
      }
      set [_error](value) {
        super[_error] = value;
      }
      get [_trace]() {
        return this[_trace$];
      }
      set [_trace](value) {
        super[_trace] = value;
      }
      static ['_#_internal#tearOff'](T, _state, isDone, _data, _error, _trace) {
        return new (snapshot.ZapSnapshot$(T))._internal(_state, isDone, _data, _error, _trace);
      }
      static ['_#unresolved#tearOff'](T) {
        return new (snapshot.ZapSnapshot$(T)).unresolved();
      }
      static ['_#withData#tearOff'](T, _data) {
        return new (snapshot.ZapSnapshot$(T)).withData(_data);
      }
      static ['_#withError#tearOff'](T, _error, _trace) {
        return new (snapshot.ZapSnapshot$(T)).withError(_error, _trace);
      }
      get hasData() {
        return this[_state] === snapshot._SnapshotState.data;
      }
      get hasError() {
        return this[_state] === snapshot._SnapshotState.error;
      }
      get data() {
        if (!this.hasData) {
          dart.throw(new core.StateError.new("This snapshot does not have data"));
        }
        return T.as(this[_data]);
      }
      get error() {
        if (!this.hasError) {
          dart.throw(new core.StateError.new("This snapshot does not have an error"));
        }
        return dart.nullCheck(this[_error]);
      }
      get trace() {
        if (!this.hasError) {
          dart.throw(new core.StateError.new("This snapshot does not have an error"));
        }
        return this[_trace];
      }
      get finished() {
        return new (__t$ZapSnapshotOfT())._internal(this[_state], true, this[_data], this[_error], this[_trace]);
      }
      toString() {
        switch (this[_state]) {
          case C[0] || CT.C0:
          {
            return "ZapSnapshot (unresolved)";
          }
          case C[1] || CT.C1:
          {
            return "ZapSnapshot (data = " + dart.str(this.data) + ")";
          }
          case C[2] || CT.C2:
          {
            return "ZapSnapshot (error = " + dart.str(this.error) + ")";
          }
        }
      }
    }
    (ZapSnapshot._internal = function(_state, isDone, _data, _error, _trace) {
      this[_state$] = _state;
      this[isDone$] = isDone;
      this[_data$] = _data;
      this[_error$] = _error;
      this[_trace$] = _trace;
      ;
    }).prototype = ZapSnapshot.prototype;
    (ZapSnapshot.unresolved = function() {
      this[_state$] = snapshot._SnapshotState.unresolved;
      this[isDone$] = false;
      this[_data$] = null;
      this[_error$] = null;
      this[_trace$] = null;
      ;
    }).prototype = ZapSnapshot.prototype;
    (ZapSnapshot.withData = function(_data) {
      this[_data$] = _data;
      this[_state$] = snapshot._SnapshotState.data;
      this[_error$] = null;
      this[_trace$] = null;
      this[isDone$] = false;
      ;
    }).prototype = ZapSnapshot.prototype;
    (ZapSnapshot.withError = function(_error, _trace) {
      this[_error$] = _error;
      this[_trace$] = _trace;
      this[_state$] = snapshot._SnapshotState.error;
      this[_data$] = null;
      this[isDone$] = false;
      ;
    }).prototype = ZapSnapshot.prototype;
    dart.addTypeTests(ZapSnapshot);
    ZapSnapshot.prototype[_is_ZapSnapshot_default] = true;
    dart.addTypeCaches(ZapSnapshot);
    dart.setGetterSignature(ZapSnapshot, () => ({
      __proto__: dart.getGetters(ZapSnapshot.__proto__),
      hasData: core.bool,
      hasError: core.bool,
      data: T,
      error: core.Object,
      trace: dart.nullable(core.StackTrace),
      finished: snapshot.ZapSnapshot$(T)
    }));
    dart.setLibraryUri(ZapSnapshot, I[6]);
    dart.setFieldSignature(ZapSnapshot, () => ({
      __proto__: dart.getFields(ZapSnapshot.__proto__),
      [_state]: dart.finalFieldType(snapshot._SnapshotState),
      isDone: dart.finalFieldType(core.bool),
      [_data]: dart.finalFieldType(dart.nullable(T)),
      [_error]: dart.finalFieldType(dart.nullable(core.Object)),
      [_trace]: dart.finalFieldType(dart.nullable(core.StackTrace))
    }));
    dart.defineExtensionMethods(ZapSnapshot, ['toString']);
    return ZapSnapshot;
  });
  snapshot.ZapSnapshot = snapshot.ZapSnapshot$();
  dart.addTypeTests(snapshot.ZapSnapshot, _is_ZapSnapshot_default);
  mutation_observer['ObserveMutations|observeMutations'] = function ObserveMutations$124observeMutations($this, opts) {
    let childList = opts && 'childList' in opts ? opts.childList : null;
    let attributes = opts && 'attributes' in opts ? opts.attributes : null;
    let characterData = opts && 'characterData' in opts ? opts.characterData : null;
    let subtree = opts && 'subtree' in opts ? opts.subtree : null;
    let attributeOldValue = opts && 'attributeOldValue' in opts ? opts.attributeOldValue : null;
    let characterDataOldValue = opts && 'characterDataOldValue' in opts ? opts.characterDataOldValue : null;
    let attributeFilter = opts && 'attributeFilter' in opts ? opts.attributeFilter : null;
    let listeners = T$.JSArrayOfMultiStreamControllerOfMutationRecord().of([]);
    let observer = html.MutationObserver.new(dart.fn((mutations, observer) => {
      let typedMutations = mutations[$cast](html.MutationRecord);
      for (let listener of listeners) {
        typedMutations[$forEach](T$.MutationRecordTovoid().as(dart.bind(listener, 'add')));
      }
    }, T$.ListAndMutationObserverTovoid()));
    function addListener(listener) {
      if (listeners[$isEmpty]) {
        observer[$observe]($this, {childList: childList, attributes: attributes, characterData: characterData, subtree: subtree, attributeOldValue: attributeOldValue, characterDataOldValue: characterDataOldValue, attributeFilter: attributeFilter});
      }
      listeners[$add](listener);
    }
    dart.fn(addListener, T$.MultiStreamControllerOfMutationRecordTovoid());
    function removeListener(listener) {
      listeners[$remove](listener);
      if (listeners[$isEmpty]) {
        observer.disconnect();
      }
    }
    dart.fn(removeListener, T$.MultiStreamControllerOfMutationRecordTovoid());
    return T$.StreamOfMutationRecord().multi(dart.fn(newListener => {
      let t5;
      addListener(newListener);
      t5 = newListener;
      (() => {
        t5.onResume = dart.fn(() => addListener(newListener), T$.VoidTovoid());
        t5.onPause = dart.fn(() => removeListener(newListener), T$.VoidTovoid());
        t5.onCancel = dart.fn(() => removeListener(newListener), T$.VoidTovoid());
        return t5;
      })();
    }, T$.MultiStreamControllerOfMutationRecordTovoid()), {isBroadcast: true});
  };
  mutation_observer['ObserveMutations|get#observeMutations'] = function ObserveMutations$124get$35observeMutations($this) {
    return dart.fn(opts => {
      let childList = opts && 'childList' in opts ? opts.childList : null;
      let attributes = opts && 'attributes' in opts ? opts.attributes : null;
      let characterData = opts && 'characterData' in opts ? opts.characterData : null;
      let subtree = opts && 'subtree' in opts ? opts.subtree : null;
      let attributeOldValue = opts && 'attributeOldValue' in opts ? opts.attributeOldValue : null;
      let characterDataOldValue = opts && 'characterDataOldValue' in opts ? opts.characterDataOldValue : null;
      let attributeFilter = opts && 'attributeFilter' in opts ? opts.attributeFilter : null;
      return mutation_observer['ObserveMutations|observeMutations']($this, {childList: childList, attributes: attributes, characterData: characterData, subtree: subtree, attributeOldValue: attributeOldValue, characterDataOldValue: characterDataOldValue, attributeFilter: attributeFilter});
    }, T$.__ToStreamOfMutationRecord());
  };
  mutation_observer['ObserveElementMutations|watchAttribute'] = function ObserveElementMutations$124watchAttribute($this, key) {
    return T$.StreamOfStringN().multi(dart.fn(listener => {
      listener.add($this[$attributes][$_get](key));
      let changedValues = mutation_observer['ObserveMutations|observeMutations']($this, {attributes: true, attributeFilter: T$.JSArrayOfString().of([key])}).map(T$.StringN(), dart.fn(_ => $this[$attributes][$_get](key), T$.MutationRecordToStringN()));
      listener.addStream(changedValues);
    }, T$.MultiStreamControllerOfStringNTovoid()), {isBroadcast: true});
  };
  mutation_observer['ObserveElementMutations|get#watchAttribute'] = function ObserveElementMutations$124get$35watchAttribute($this) {
    return dart.fn(key => mutation_observer['ObserveElementMutations|watchAttribute']($this, key), T$.StringToStreamOfStringN());
  };
  var _fragment$ = dart.privateName(async$, "_fragment");
  var _update$ = dart.privateName(async$, "_update");
  var _connect = dart.privateName(async$, "_connect");
  var _cleanUp = dart.privateName(async$, "_cleanUp");
  const _is__AsyncBlockBase_default = Symbol('_is__AsyncBlockBase_default');
  async$._AsyncBlockBase$ = dart.generic(T => {
    class _AsyncBlockBase extends fragment.Fragment {
      create(target, anchor = null) {
        let t9, t8;
        t8 = this[_fragment$];
        t9 = C[4] || CT.C4;
        this[_update$](t8, t9);
        this[_connect]();
        this[_fragment$].create(target, anchor);
      }
      update(delta) {
        this[_fragment$].update(delta);
      }
      destroy() {
        this[_fragment$].destroy();
        this[_cleanUp]();
      }
    }
    (_AsyncBlockBase.new = function(_fragment, _update) {
      this[_fragment$] = _fragment;
      this[_update$] = _update;
      ;
    }).prototype = _AsyncBlockBase.prototype;
    dart.addTypeTests(_AsyncBlockBase);
    _AsyncBlockBase.prototype[_is__AsyncBlockBase_default] = true;
    dart.addTypeCaches(_AsyncBlockBase);
    dart.setMethodSignature(_AsyncBlockBase, () => ({
      __proto__: dart.getMethods(_AsyncBlockBase.__proto__),
      create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
      update: dart.fnType(dart.void, [core.int]),
      destroy: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_AsyncBlockBase, I[7]);
    dart.setFieldSignature(_AsyncBlockBase, () => ({
      __proto__: dart.getFields(_AsyncBlockBase.__proto__),
      [_fragment$]: dart.finalFieldType(fragment.Fragment),
      [_update$]: dart.finalFieldType(dart.fnType(dart.void, [fragment.Fragment, snapshot.ZapSnapshot$(T)]))
    }));
    return _AsyncBlockBase;
  });
  async$._AsyncBlockBase = async$._AsyncBlockBase$();
  dart.addTypeTests(async$._AsyncBlockBase, _is__AsyncBlockBase_default);
  var _future = dart.privateName(async$, "_future");
  var _thenCallback = dart.privateName(async$, "_thenCallback");
  var _onErrorCallback = dart.privateName(async$, "_onErrorCallback");
  const _is_FutureBlock_default = Symbol('_is_FutureBlock_default');
  async$.FutureBlock$ = dart.generic(T => {
    var __t$FutureOrOfT = () => (__t$FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$ZapSnapshotOfT = () => (__t$ZapSnapshotOfT = dart.constFn(snapshot.ZapSnapshot$(T)))();
    class FutureBlock extends async$._AsyncBlockBase$(T) {
      static ['_#new#tearOff'](T, fragment, update) {
        return new (async$.FutureBlock$(T)).new(fragment, update);
      }
      set future(future) {
        let t9, t8, t9$, t8$;
        __t$FutureOrOfT().as(future);
        if (__t$FutureOfT().is(future)) {
          t8 = this[_fragment$];
          t9 = C[4] || CT.C4;
          this[_update$](t8, t9);
          future.then(dart.void, dart.fn(value => this[_thenCallback](future, value), __t$TTovoid()), {onError: dart.fn((error, trace) => this[_onErrorCallback](future, error, trace), T$.ObjectAndStackTraceTovoid())});
          this[_future] = future;
        } else {
          t8$ = this[_fragment$];
          t9$ = new (__t$ZapSnapshotOfT()).withData(future);
          this[_update$](t8$, t9$);
        }
      }
      [_thenCallback](future, result) {
        let t9, t8;
        if (future === this[_future]) {
          t8 = this[_fragment$];
          t9 = new (__t$ZapSnapshotOfT()).withData(result).finished;
          this[_update$](t8, t9);
        }
      }
      [_onErrorCallback](future, error, trace) {
        let t9, t8;
        if (future === this[_future]) {
          t8 = this[_fragment$];
          t9 = new (__t$ZapSnapshotOfT()).withError(error, trace).finished;
          this[_update$](t8, t9);
        }
      }
      [_cleanUp]() {
        this[_future] = null;
      }
      [_connect]() {
      }
    }
    (FutureBlock.new = function(fragment, update) {
      this[_future] = null;
      FutureBlock.__proto__.new.call(this, fragment, update);
      ;
    }).prototype = FutureBlock.prototype;
    dart.addTypeTests(FutureBlock);
    FutureBlock.prototype[_is_FutureBlock_default] = true;
    dart.addTypeCaches(FutureBlock);
    dart.setMethodSignature(FutureBlock, () => ({
      __proto__: dart.getMethods(FutureBlock.__proto__),
      [_thenCallback]: dart.fnType(dart.void, [async.Future$(T), T]),
      [_onErrorCallback]: dart.fnType(dart.void, [async.Future$(T), core.Object, core.StackTrace]),
      [_cleanUp]: dart.fnType(dart.void, []),
      [_connect]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(FutureBlock, () => ({
      __proto__: dart.getSetters(FutureBlock.__proto__),
      future: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(FutureBlock, I[7]);
    dart.setFieldSignature(FutureBlock, () => ({
      __proto__: dart.getFields(FutureBlock.__proto__),
      [_future]: dart.fieldType(dart.nullable(async.Future$(T)))
    }));
    return FutureBlock;
  });
  async$.FutureBlock = async$.FutureBlock$();
  dart.addTypeTests(async$.FutureBlock, _is_FutureBlock_default);
  var _isReady = dart.privateName(async$, "_isReady");
  var _subscription = dart.privateName(async$, "_subscription");
  var _snapshot = dart.privateName(async$, "_snapshot");
  var _report = dart.privateName(async$, "_report");
  const _is_StreamBlock_default = Symbol('_is_StreamBlock_default');
  async$.StreamBlock$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$ZapSnapshotOfT = () => (__t$ZapSnapshotOfT = dart.constFn(snapshot.ZapSnapshot$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class StreamBlock extends async$._AsyncBlockBase$(T) {
      static ['_#new#tearOff'](T, fragment, update) {
        return new (async$.StreamBlock$(T)).new(fragment, update);
      }
      set stream(stream) {
        let t8;
        __t$StreamOfT().as(stream);
        t8 = this[_subscription];
        t8 == null ? null : t8.cancel();
        let sub = this[_subscription] = stream.listen(dart.fn(event => this[_report](new (__t$ZapSnapshotOfT()).withData(event)), __t$TTovoid()), {onError: dart.fn((e, s) => this[_report](new (__t$ZapSnapshotOfT()).withError(e, s)), T$.ObjectAndStackTraceTovoid()), onDone: dart.fn(() => {
            let t9, t8;
            t8 = this[_fragment$];
            t9 = this[_snapshot].finished;
            return this[_update$](t8, t9);
          }, T$.VoidTovoid())});
        if (!this[_isReady]) {
          sub.pause();
        }
      }
      [_report](snapshot) {
        let t9, t8;
        this[_snapshot] = snapshot;
        t8 = this[_fragment$];
        t9 = snapshot;
        this[_update$](t8, t9);
      }
      [_connect]() {
        let t8;
        this[_isReady] = true;
        t8 = this[_subscription];
        t8 == null ? null : t8.resume();
      }
      [_cleanUp]() {
        let t8;
        this[_isReady] = false;
        t8 = this[_subscription];
        t8 == null ? null : t8.cancel();
      }
    }
    (StreamBlock.new = function(fragment, update) {
      this[_isReady] = false;
      this[_subscription] = null;
      this[_snapshot] = C[4] || CT.C4;
      StreamBlock.__proto__.new.call(this, fragment, update);
      ;
    }).prototype = StreamBlock.prototype;
    dart.addTypeTests(StreamBlock);
    StreamBlock.prototype[_is_StreamBlock_default] = true;
    dart.addTypeCaches(StreamBlock);
    dart.setMethodSignature(StreamBlock, () => ({
      __proto__: dart.getMethods(StreamBlock.__proto__),
      [_report]: dart.fnType(dart.void, [snapshot.ZapSnapshot$(T)]),
      [_connect]: dart.fnType(dart.void, []),
      [_cleanUp]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(StreamBlock, () => ({
      __proto__: dart.getSetters(StreamBlock.__proto__),
      stream: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(StreamBlock, I[7]);
    dart.setFieldSignature(StreamBlock, () => ({
      __proto__: dart.getFields(StreamBlock.__proto__),
      [_isReady]: dart.fieldType(core.bool),
      [_subscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(T))),
      [_snapshot]: dart.fieldType(snapshot.ZapSnapshot$(T))
    }));
    return StreamBlock;
  });
  async$.StreamBlock = async$.StreamBlock$();
  dart.addTypeTests(async$.StreamBlock, _is_StreamBlock_default);
  async$.$safeFuture = function $36safeFuture(T, create) {
    return async.Future$(T).sync(create);
  };
  async$.$safeStream = function $36safeStream(T, create) {
    try {
      return create();
    } catch (e$) {
      let e = dart.getThrown(e$);
      let s = dart.stackTrace(e$);
      if (core.Object.is(e)) {
        return async.Stream$(T).error(e, s);
      } else
        throw e$;
    }
  };
  const _is_Watchable_default = Symbol('_is_Watchable_default');
  watchable.Watchable$ = dart.generic(T => {
    class Watchable extends core.Object {
      static stream(stream, initialValue) {
        return new (watchable._StreamWatchable$(T)).new(new (watchable._ValueWrappingStream$(T)).new(stream), initialValue);
      }
      static ['_#stream#tearOff'](T, stream, initialValue) {
        return watchable.Watchable$(T).stream(stream, initialValue);
      }
      static snapshots(T, stream) {
        let snapshots = async.Stream$(snapshot.ZapSnapshot$(T)).eventTransformed(stream, dart.gbind(C[5] || CT.C5, T));
        return new (watchable._StreamWatchable$(snapshot.ZapSnapshot$(T))).new(new (watchable._ValueWrappingStream$(snapshot.ZapSnapshot$(T))).new(snapshots), C[4] || CT.C4);
      }
    }
    (Watchable[dart.mixinNew] = function() {
    }).prototype = Watchable.prototype;
    Watchable.prototype[dart.isStream] = true;
    dart.addTypeTests(Watchable);
    Watchable.prototype[_is_Watchable_default] = true;
    dart.addTypeCaches(Watchable);
    Watchable[dart.implements] = () => [async.Stream$(T)];
    dart.setStaticMethodSignature(Watchable, () => ['stream', 'snapshots']);
    dart.setLibraryUri(Watchable, I[8]);
    return Watchable;
  });
  watchable.Watchable = watchable.Watchable$();
  dart.addTypeTests(watchable.Watchable, _is_Watchable_default);
  var _controllers = dart.privateName(watchable, "_controllers");
  var __WritableWatchable__stream = dart.privateName(watchable, "_#WritableWatchable#_stream");
  var _lastValue$ = dart.privateName(watchable, "_lastValue");
  var _stream = dart.privateName(watchable, "_stream");
  const _is_WritableWatchable_default = Symbol('_is_WritableWatchable_default');
  watchable.WritableWatchable$ = dart.generic(T => {
    var __t$MultiStreamControllerOfT = () => (__t$MultiStreamControllerOfT = dart.constFn(async.MultiStreamController$(T)))();
    var __t$JSArrayOfMultiStreamControllerOfT = () => (__t$JSArrayOfMultiStreamControllerOfT = dart.constFn(_interceptors.JSArray$(__t$MultiStreamControllerOfT())))();
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$MultiStreamControllerOfTTovoid = () => (__t$MultiStreamControllerOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$MultiStreamControllerOfT()])))();
    class WritableWatchable extends async.Stream$(T) {
      get [_stream]() {
        let t9;
        t9 = this[__WritableWatchable__stream];
        return t9 == null ? dart.throw(new _internal.LateError.fieldNI("_stream")) : t9;
      }
      set [_stream](t9) {
        if (this[__WritableWatchable__stream] == null)
          this[__WritableWatchable__stream] = t9;
        else
          dart.throw(new _internal.LateError.fieldAI("_stream"));
      }
      static ['_#new#tearOff'](T, _lastValue) {
        return new (watchable.WritableWatchable$(T)).new(_lastValue);
      }
      get value() {
        return this[_lastValue$];
      }
      set value(value) {
        T.as(value);
        this[_lastValue$] = value;
        for (let listener of this[_controllers]) {
          listener.add(value);
        }
      }
      get isBroadcast() {
        return true;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onDone: onDone});
      }
    }
    (WritableWatchable.new = function(_lastValue) {
      this[_controllers] = __t$JSArrayOfMultiStreamControllerOfT().of([]);
      this[__WritableWatchable__stream] = null;
      this[_lastValue$] = _lastValue;
      WritableWatchable.__proto__.new.call(this);
      this[_stream] = __t$StreamOfT().multi(dart.fn(controller => {
        let t9;
        controller.add(this[_lastValue$]);
        const pauseOrStop = () => {
          this[_controllers][$remove](controller);
        };
        dart.fn(pauseOrStop, T$.VoidTovoid());
        const resume = () => {
          this[_controllers][$add](controller);
        };
        dart.fn(resume, T$.VoidTovoid());
        resume();
        t9 = controller;
        (() => {
          t9.onPause = pauseOrStop;
          t9.onCancel = pauseOrStop;
          t9.onResume = resume;
          return t9;
        })();
      }, __t$MultiStreamControllerOfTTovoid()));
    }).prototype = WritableWatchable.prototype;
    dart.addTypeTests(WritableWatchable);
    WritableWatchable.prototype[_is_WritableWatchable_default] = true;
    dart.addTypeCaches(WritableWatchable);
    WritableWatchable[dart.implements] = () => [watchable.Watchable$(T)];
    dart.setMethodSignature(WritableWatchable, () => ({
      __proto__: dart.getMethods(WritableWatchable.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.nullable(dart.fnType(dart.void, [T]))], {cancelOnError: dart.nullable(core.bool), onDone: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(core.Function)}, {})
    }));
    dart.setGetterSignature(WritableWatchable, () => ({
      __proto__: dart.getGetters(WritableWatchable.__proto__),
      [_stream]: async.Stream$(T),
      value: T
    }));
    dart.setSetterSignature(WritableWatchable, () => ({
      __proto__: dart.getSetters(WritableWatchable.__proto__),
      [_stream]: async.Stream$(T),
      value: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(WritableWatchable, I[8]);
    dart.setFieldSignature(WritableWatchable, () => ({
      __proto__: dart.getFields(WritableWatchable.__proto__),
      [_controllers]: dart.finalFieldType(core.List$(async.MultiStreamController$(T))),
      [__WritableWatchable__stream]: dart.fieldType(dart.nullable(async.Stream$(T))),
      [_lastValue$]: dart.fieldType(T)
    }));
    return WritableWatchable;
  });
  watchable.WritableWatchable = watchable.WritableWatchable$();
  dart.addTypeTests(watchable.WritableWatchable, _is_WritableWatchable_default);
  var _source$ = dart.privateName(watchable, "_source");
  var _initialValue$ = dart.privateName(watchable, "_initialValue");
  var _hasValue = dart.privateName(watchable, "_hasValue");
  const _is__StreamWatchable_default = Symbol('_is__StreamWatchable_default');
  watchable._StreamWatchable$ = dart.generic(T => {
    class _StreamWatchable extends async.Stream$(T) {
      static ['_#new#tearOff'](T, _source, _initialValue) {
        return new (watchable._StreamWatchable$(T)).new(_source, _initialValue);
      }
      get isBroadcast() {
        return true;
      }
      get value() {
        return T.as(this[_source$][_hasValue] ? this[_source$][_lastValue$] : this[_initialValue$]);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_source$].listen(onData, {cancelOnError: cancelOnError, onDone: onDone});
      }
    }
    (_StreamWatchable.new = function(_source, _initialValue) {
      this[_source$] = _source;
      this[_initialValue$] = _initialValue;
      _StreamWatchable.__proto__.new.call(this);
      ;
    }).prototype = _StreamWatchable.prototype;
    dart.addTypeTests(_StreamWatchable);
    _StreamWatchable.prototype[_is__StreamWatchable_default] = true;
    dart.addTypeCaches(_StreamWatchable);
    _StreamWatchable[dart.implements] = () => [watchable.Watchable$(T)];
    dart.setMethodSignature(_StreamWatchable, () => ({
      __proto__: dart.getMethods(_StreamWatchable.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.nullable(dart.fnType(dart.void, [T]))], {cancelOnError: dart.nullable(core.bool), onDone: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(core.Function)}, {})
    }));
    dart.setGetterSignature(_StreamWatchable, () => ({
      __proto__: dart.getGetters(_StreamWatchable.__proto__),
      value: T
    }));
    dart.setLibraryUri(_StreamWatchable, I[8]);
    dart.setFieldSignature(_StreamWatchable, () => ({
      __proto__: dart.getFields(_StreamWatchable.__proto__),
      [_source$]: dart.finalFieldType(watchable._ValueWrappingStream$(T)),
      [_initialValue$]: dart.finalFieldType(dart.nullable(T))
    }));
    return _StreamWatchable;
  });
  watchable._StreamWatchable = watchable._StreamWatchable$();
  dart.addTypeTests(watchable._StreamWatchable, _is__StreamWatchable_default);
  var _last = dart.privateName(watchable, "_last");
  var _out$ = dart.privateName(watchable, "_out");
  const _is__ToSnapshotTransformer_default = Symbol('_is__ToSnapshotTransformer_default');
  watchable._ToSnapshotTransformer$ = dart.generic(T => {
    var __t$ZapSnapshotOfT = () => (__t$ZapSnapshotOfT = dart.constFn(snapshot.ZapSnapshot$(T)))();
    class _ToSnapshotTransformer extends core.Object {
      static ['_#new#tearOff'](T, _out) {
        return new (watchable._ToSnapshotTransformer$(T)).new(_out);
      }
      add(event) {
        T.as(event);
        return this[_out$].add(this[_last] = new (__t$ZapSnapshotOfT()).withData(event));
      }
      addError(error, stackTrace = null) {
        this[_out$].add(this[_last] = new (__t$ZapSnapshotOfT()).withError(error, stackTrace));
      }
      close() {
        let last = this[_last];
        if (last != null) {
          this[_out$].add(last.finished);
        }
        this[_out$].close();
      }
    }
    (_ToSnapshotTransformer.new = function(_out) {
      this[_last] = null;
      this[_out$] = _out;
      ;
    }).prototype = _ToSnapshotTransformer.prototype;
    dart.addTypeTests(_ToSnapshotTransformer);
    _ToSnapshotTransformer.prototype[_is__ToSnapshotTransformer_default] = true;
    dart.addTypeCaches(_ToSnapshotTransformer);
    _ToSnapshotTransformer[dart.implements] = () => [async.EventSink$(T)];
    dart.setMethodSignature(_ToSnapshotTransformer, () => ({
      __proto__: dart.getMethods(_ToSnapshotTransformer.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ToSnapshotTransformer, I[8]);
    dart.setFieldSignature(_ToSnapshotTransformer, () => ({
      __proto__: dart.getFields(_ToSnapshotTransformer.__proto__),
      [_out$]: dart.finalFieldType(async.EventSink$(snapshot.ZapSnapshot$(T))),
      [_last]: dart.fieldType(dart.nullable(snapshot.ZapSnapshot$(T)))
    }));
    return _ToSnapshotTransformer;
  });
  watchable._ToSnapshotTransformer = watchable._ToSnapshotTransformer$();
  dart.addTypeTests(watchable._ToSnapshotTransformer, _is__ToSnapshotTransformer_default);
  var _controller = dart.privateName(watchable, "_controller");
  var _listeners = dart.privateName(watchable, "_listeners");
  var ___ValueWrappingStream__refCounting = dart.privateName(watchable, "_#_ValueWrappingStream#_refCounting");
  var _subscription$ = dart.privateName(watchable, "_subscription");
  var _refCounting = dart.privateName(watchable, "_refCounting");
  const _is__ValueWrappingStream_default = Symbol('_is__ValueWrappingStream_default');
  watchable._ValueWrappingStream$ = dart.generic(T => {
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$MultiStreamControllerOfT = () => (__t$MultiStreamControllerOfT = dart.constFn(async.MultiStreamController$(T)))();
    var __t$MultiStreamControllerOfTTovoid = () => (__t$MultiStreamControllerOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$MultiStreamControllerOfT()])))();
    class _ValueWrappingStream extends async.Stream$(T) {
      get [_refCounting]() {
        let t10;
        t10 = this[___ValueWrappingStream__refCounting];
        return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_refCounting")) : t10;
      }
      set [_refCounting](t10) {
        if (this[___ValueWrappingStream__refCounting] == null)
          this[___ValueWrappingStream__refCounting] = t10;
        else
          dart.throw(new _internal.LateError.fieldAI("_refCounting"));
      }
      static ['_#new#tearOff'](T, _source) {
        return new (watchable._ValueWrappingStream$(T)).new(_source);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_refCounting].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (_ValueWrappingStream.new = function(_source) {
      this[_controller] = __t$StreamControllerOfT().broadcast();
      this[_listeners] = 0;
      this[___ValueWrappingStream__refCounting] = null;
      this[_subscription$] = null;
      this[_lastValue$] = null;
      this[_hasValue] = false;
      this[_source$] = _source;
      _ValueWrappingStream.__proto__.new.call(this);
      this[_refCounting] = __t$StreamOfT().multi(dart.fn(listener => {
        let t10;
        const resumeOrStart = () => {
          this[_listeners] = this[_listeners] + 1;
          this[_subscription$] == null ? this[_subscription$] = this[_source$].listen(dart.fn(event => {
            this[_hasValue] = true;
            this[_lastValue$] = event;
            this[_controller].add(event);
          }, __t$TTovoid()), {onError: dart.bind(this[_controller], 'addError'), onDone: dart.bind(this[_controller], 'close')}) : null;
        };
        dart.fn(resumeOrStart, T$.VoidTovoid());
        const pauseOrStop = () => {
          let t10;
          this[_listeners] = this[_listeners] - 1;
          if (this[_listeners] === 0) {
            t10 = this[_subscription$];
            t10 == null ? null : t10.cancel();
            this[_subscription$] = null;
          }
        };
        dart.fn(pauseOrStop, T$.VoidTovoid());
        if (this[_hasValue]) {
          listener.add(T.as(this[_lastValue$]));
        }
        listener.addStream(this[_controller].stream);
        t10 = listener;
        (() => {
          t10.onCancel = pauseOrStop;
          t10.onPause = pauseOrStop;
          t10.onResume = resumeOrStart;
          return t10;
        })();
        resumeOrStart();
      }, __t$MultiStreamControllerOfTTovoid()));
    }).prototype = _ValueWrappingStream.prototype;
    dart.addTypeTests(_ValueWrappingStream);
    _ValueWrappingStream.prototype[_is__ValueWrappingStream_default] = true;
    dart.addTypeCaches(_ValueWrappingStream);
    dart.setMethodSignature(_ValueWrappingStream, () => ({
      __proto__: dart.getMethods(_ValueWrappingStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.nullable(dart.fnType(dart.void, [T]))], {cancelOnError: dart.nullable(core.bool), onDone: dart.nullable(dart.fnType(dart.void, [])), onError: dart.nullable(core.Function)}, {})
    }));
    dart.setGetterSignature(_ValueWrappingStream, () => ({
      __proto__: dart.getGetters(_ValueWrappingStream.__proto__),
      [_refCounting]: async.Stream$(T)
    }));
    dart.setSetterSignature(_ValueWrappingStream, () => ({
      __proto__: dart.getSetters(_ValueWrappingStream.__proto__),
      [_refCounting]: async.Stream$(T)
    }));
    dart.setLibraryUri(_ValueWrappingStream, I[8]);
    dart.setFieldSignature(_ValueWrappingStream, () => ({
      __proto__: dart.getFields(_ValueWrappingStream.__proto__),
      [_controller]: dart.finalFieldType(async.StreamController$(T)),
      [_listeners]: dart.fieldType(core.int),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [___ValueWrappingStream__refCounting]: dart.fieldType(dart.nullable(async.Stream$(T))),
      [_subscription$]: dart.fieldType(dart.nullable(async.StreamSubscription$(T))),
      [_lastValue$]: dart.fieldType(dart.nullable(T)),
      [_hasValue]: dart.fieldType(core.bool)
    }));
    return _ValueWrappingStream;
  });
  watchable._ValueWrappingStream = watchable._ValueWrappingStream$();
  dart.addTypeTests(watchable._ValueWrappingStream, _is__ValueWrappingStream_default);
  var _downstream$ = dart.privateName(dom, "_downstream");
  const _is__ModifierSink_default = Symbol('_is__ModifierSink_default');
  dom._ModifierSink$ = dart.generic(T => {
    class _ModifierSink extends async.EventSink$(T) {
      static ['_#new#tearOff'](T, _downstream, preventDefault, stopPropagation, passive, once, onlySelf, onlyTrusted) {
        return new (dom._ModifierSink$(T)).new(_downstream, preventDefault, stopPropagation, passive, once, onlySelf, onlyTrusted);
      }
      add(event) {
        T.as(event);
        if (this.onlyTrusted && event.isTrusted !== true) return;
        if (this.onlySelf != null && !dart.equals(event[$target], this.onlySelf)) return;
        if (this.preventDefault) {
          event.preventDefault();
        }
        if (this.stopPropagation) {
          event.stopPropagation();
        }
        this[_downstream$].add(event);
        if (this.once) this.close();
      }
      addError(error, stackTrace = null) {
        this[_downstream$].addError(error, stackTrace);
      }
      close() {
        this[_downstream$].close();
      }
    }
    (_ModifierSink.new = function(_downstream, preventDefault, stopPropagation, passive, once, onlySelf, onlyTrusted) {
      this[_downstream$] = _downstream;
      this.preventDefault = preventDefault;
      this.stopPropagation = stopPropagation;
      this.passive = passive;
      this.once = once;
      this.onlySelf = onlySelf;
      this.onlyTrusted = onlyTrusted;
      ;
    }).prototype = _ModifierSink.prototype;
    dart.addTypeTests(_ModifierSink);
    _ModifierSink.prototype[_is__ModifierSink_default] = true;
    dart.addTypeCaches(_ModifierSink);
    dart.setMethodSignature(_ModifierSink, () => ({
      __proto__: dart.getMethods(_ModifierSink.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ModifierSink, I[9]);
    dart.setFieldSignature(_ModifierSink, () => ({
      __proto__: dart.getFields(_ModifierSink.__proto__),
      [_downstream$]: dart.finalFieldType(async.EventSink$(T)),
      preventDefault: dart.finalFieldType(core.bool),
      stopPropagation: dart.finalFieldType(core.bool),
      passive: dart.finalFieldType(core.bool),
      once: dart.finalFieldType(core.bool),
      onlySelf: dart.finalFieldType(dart.nullable(html.Element)),
      onlyTrusted: dart.finalFieldType(core.bool)
    }));
    return _ModifierSink;
  });
  dom._ModifierSink = dom._ModifierSink$();
  dart.addTypeTests(dom._ModifierSink, _is__ModifierSink_default);
  dom['ZapText|set#zapText'] = function ZapText$124set$35zapText($this, value) {
    if ($this[$wholeText] !== value) $this.data = value;
  };
  dom['ZapElement|applyBooleanAttribute'] = function ZapElement$124applyBooleanAttribute($this, key, value) {
    if (js_util.hasProperty($this, key)) {
      js_util._setPropertyUnchecked(core.bool, $this, key, value);
    } else {
      if (value) {
        $this[$attributes][$_set](key, "true");
      } else {
        $this[$attributes][$remove](key);
      }
    }
  };
  dom['ZapElement|get#applyBooleanAttribute'] = function ZapElement$124get$35applyBooleanAttribute($this) {
    return dart.fn((key, value) => dom['ZapElement|applyBooleanAttribute']($this, key, value), T$.StringAndboolTovoid());
  };
  dom['ZapElement|applyAttributeIfNotNull'] = function ZapElement$124applyAttributeIfNotNull($this, key, value) {
    if (value == null) {
      $this[$attributes][$remove](key);
    } else {
      $this[$attributes][$_set](key, dart.toString(value));
    }
  };
  dom['ZapElement|get#applyAttributeIfNotNull'] = function ZapElement$124get$35applyAttributeIfNotNull($this) {
    return dart.fn((key, value) => dom['ZapElement|applyAttributeIfNotNull']($this, key, value), T$.StringAndObjectNTovoid$1());
  };
  dom['ZapElement|addComponentClass'] = function ZapElement$124addComponentClass($this, className) {
    $this[$classes].add(className);
  };
  dom['ZapElement|get#addComponentClass'] = function ZapElement$124get$35addComponentClass($this) {
    return dart.fn(className => dom['ZapElement|addComponentClass']($this, className), T$.StringTovoid());
  };
  dom['ZapElement|setClassAttribute'] = function ZapElement$124setClassAttribute($this, scopedCssClass, otherClasses) {
    $this[$attributes][$_set]("class", scopedCssClass + " " + otherClasses);
  };
  dom['ZapElement|get#setClassAttribute'] = function ZapElement$124get$35setClassAttribute($this) {
    return dart.fn((scopedCssClass, otherClasses) => dom['ZapElement|setClassAttribute']($this, scopedCssClass, otherClasses), T$.StringAndStringTovoid());
  };
  dom['ZapDomEvents|withModifiers'] = function ZapDomEvents$124withModifiers(T, $this, opts) {
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : false;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : false;
    let passive = opts && 'passive' in opts ? opts.passive : false;
    let once = opts && 'once' in opts ? opts.once : false;
    let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
    let onlyTrusted = opts && 'onlyTrusted' in opts ? opts.onlyTrusted : false;
    return async.Stream$(T).eventTransformed($this, dart.fn(sink => new (T$._ModifierSinkOfEvent()).new(sink, preventDefault, stopPropagation, passive, once, onlySelf, onlyTrusted), dart.fnType(T$._ModifierSinkOfEvent(), [async.EventSink$(T)])));
  };
  dom['ZapDomEvents|get#withModifiers'] = function ZapDomEvents$124get$35withModifiers(T, $this) {
    return dart.fn(opts => {
      let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : false;
      let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : false;
      let passive = opts && 'passive' in opts ? opts.passive : false;
      let once = opts && 'once' in opts ? opts.once : false;
      let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
      let onlyTrusted = opts && 'onlyTrusted' in opts ? opts.onlyTrusted : false;
      return dom['ZapDomEvents|withModifiers'](T, $this, {preventDefault: preventDefault, stopPropagation: stopPropagation, passive: passive, once: once, onlySelf: onlySelf, onlyTrusted: onlyTrusted});
    }, dart.fnType(async.Stream$(T), [], {once: core.bool, onlySelf: T$.ElementN(), onlyTrusted: core.bool, passive: core.bool, preventDefault: core.bool, stopPropagation: core.bool}, {}));
  };
  dom.newElement = function newElement(T, tagName) {
    return T.as(html.Element.tag(tagName));
  };
  var _anchor$ = dart.privateName($if, "_anchor");
  var _current = dart.privateName($if, "_current");
  var _currentCaseNumber = dart.privateName($if, "_currentCaseNumber");
  var _isMounted = dart.privateName($if, "_isMounted");
  var _create$0 = dart.privateName($if, "_create");
  $if.IfBlock = class IfBlock extends fragment.Fragment {
    static ['_#new#tearOff'](_create) {
      return new $if.IfBlock.new(_create);
    }
    reEvaluate(caseNumber) {
      let t22, t22$;
      if (this[_currentCaseNumber] !== caseNumber) {
        t22 = this[_current];
        t22 == null ? null : t22.destroy();
        this[_current] = null;
        this[_currentCaseNumber] = caseNumber;
        let newBlock = this[_current] = (t22$ = caseNumber, this[_create$0](t22$));
        if (newBlock != null) {
          if (this[_isMounted]) {
            newBlock.create(dart.nullCheck(this[_anchor$][$parent]), this[_anchor$]);
          }
        }
      }
    }
    create(target, anchor = null) {
      let t22;
      target[$insertBefore](this[_anchor$], anchor);
      t22 = this[_current];
      t22 == null ? null : t22.create(target, this[_anchor$]);
      this[_isMounted] = true;
    }
    update(delta) {
      let t22;
      t22 = this[_current];
      t22 == null ? null : t22.update(delta);
    }
    destroy() {
      let t22;
      t22 = this[_current];
      t22 == null ? null : t22.destroy();
      this[_anchor$][$remove]();
    }
  };
  ($if.IfBlock.new = function(_create) {
    this[_anchor$] = html.Text.new("");
    this[_current] = null;
    this[_currentCaseNumber] = -1;
    this[_isMounted] = false;
    this[_create$0] = _create;
    ;
  }).prototype = $if.IfBlock.prototype;
  dart.addTypeTests($if.IfBlock);
  dart.addTypeCaches($if.IfBlock);
  dart.setMethodSignature($if.IfBlock, () => ({
    __proto__: dart.getMethods($if.IfBlock.__proto__),
    reEvaluate: dart.fnType(dart.void, [core.int]),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri($if.IfBlock, I[10]);
  dart.setFieldSignature($if.IfBlock, () => ({
    __proto__: dart.getFields($if.IfBlock.__proto__),
    [_create$0]: dart.finalFieldType(dart.fnType(dart.nullable(fragment.Fragment), [core.int])),
    [_anchor$]: dart.finalFieldType(html.Node),
    [_current]: dart.fieldType(dart.nullable(fragment.Fragment)),
    [_currentCaseNumber]: dart.fieldType(core.int),
    [_isMounted]: dart.fieldType(core.bool)
  }));
  var _pendingUpdate = dart.privateName($for, "_pendingUpdate");
  var _data$0 = dart.privateName($for, "_data");
  var _managedFragments = dart.privateName($for, "_managedFragments");
  var _startAnchor = dart.privateName($for, "_startAnchor");
  var _mountParent = dart.privateName($for, "_mountParent");
  var _end = dart.privateName($for, "_end");
  var _create$1 = dart.privateName($for, "_create");
  var _update$0 = dart.privateName($for, "_update");
  var _applyPendingUpdateIfMounted = dart.privateName($for, "_applyPendingUpdateIfMounted");
  const _is_ForBlock_default = Symbol('_is_ForBlock_default');
  $for.ForBlock$ = dart.generic(T => {
    var __t$JSArrayOfT = () => (__t$JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var __t$IterableOfT = () => (__t$IterableOfT = dart.constFn(core.Iterable$(T)))();
    class ForBlock extends fragment.Fragment {
      static ['_#new#tearOff'](T, _create, _update) {
        return new ($for.ForBlock$(T)).new(_create, _update);
      }
      [_applyPendingUpdateIfMounted]() {
        let t24, t23, t22, t23$, t22$;
        let parent = this[_mountParent];
        let pending = this[_pendingUpdate];
        if (parent != null && pending != null) {
          for (let i = 0; i < math.min(core.num, pending[$length], this[_data$0][$length]); i = i + 1) {
            t22 = this[_managedFragments][$_get](i);
            t23 = pending[$_get](i);
            t24 = i;
            this[_update$0](t22, t23, t24);
          }
          if (pending[$length] < this[_data$0][$length]) {
            for (let i = pending[$length]; i < this[_data$0][$length]; i = i + 1) {
              this[_managedFragments][$_get](i).destroy();
            }
            this[_managedFragments][$removeRange](pending[$length], this[_data$0][$length]);
          } else if (pending[$length] > this[_data$0][$length]) {
            let additionalItems = pending[$length] - this[_data$0][$length];
            for (let i = 0; i < additionalItems; i = i + 1) {
              let indexInData = i + this[_data$0][$length];
              let fragment = (t22$ = pending[$_get](indexInData), t23$ = indexInData, this[_create$1](t22$, t23$));
              this[_managedFragments][$add](fragment);
              fragment.create(parent, this[_end]);
              fragment.update(4294967295.0);
            }
          }
          this[_pendingUpdate] = null;
          this[_data$0] = pending;
        }
      }
      set data(data) {
        __t$IterableOfT().as(data);
        this[_pendingUpdate] = data[$toList]();
        this[_applyPendingUpdateIfMounted]();
      }
      create(target, anchor = null) {
        this[_mountParent] = target;
        this[_end] = anchor;
        target[$insertBefore](this[_startAnchor], anchor);
        this[_applyPendingUpdateIfMounted]();
      }
      update(delta) {
        for (let fragment of this[_managedFragments]) {
          fragment.update(delta);
        }
      }
      destroy() {
        this[_mountParent] = null;
        this[_startAnchor][$remove]();
        for (let fragment of this[_managedFragments]) {
          fragment.destroy();
        }
      }
    }
    (ForBlock.new = function(_create, _update) {
      this[_pendingUpdate] = null;
      this[_data$0] = __t$JSArrayOfT().of([]);
      this[_managedFragments] = T$.JSArrayOfFragment().of([]);
      this[_startAnchor] = html.Comment.new();
      this[_mountParent] = null;
      this[_end] = null;
      this[_create$1] = _create;
      this[_update$0] = _update;
      ;
    }).prototype = ForBlock.prototype;
    dart.addTypeTests(ForBlock);
    ForBlock.prototype[_is_ForBlock_default] = true;
    dart.addTypeCaches(ForBlock);
    dart.setMethodSignature(ForBlock, () => ({
      __proto__: dart.getMethods(ForBlock.__proto__),
      [_applyPendingUpdateIfMounted]: dart.fnType(dart.void, []),
      create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
      update: dart.fnType(dart.void, [core.int]),
      destroy: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(ForBlock, () => ({
      __proto__: dart.getSetters(ForBlock.__proto__),
      data: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ForBlock, I[11]);
    dart.setFieldSignature(ForBlock, () => ({
      __proto__: dart.getFields(ForBlock.__proto__),
      [_create$1]: dart.finalFieldType(dart.fnType(fragment.Fragment, [T, core.int])),
      [_update$0]: dart.finalFieldType(dart.fnType(dart.void, [fragment.Fragment, T, core.int])),
      [_pendingUpdate]: dart.fieldType(dart.nullable(core.List$(T))),
      [_data$0]: dart.fieldType(core.List$(T)),
      [_managedFragments]: dart.finalFieldType(core.List$(fragment.Fragment)),
      [_startAnchor]: dart.finalFieldType(html.Comment),
      [_mountParent]: dart.fieldType(dart.nullable(html.Element)),
      [_end]: dart.fieldType(dart.nullable(html.Node))
    }));
    return ForBlock;
  });
  $for.ForBlock = $for.ForBlock$();
  dart.addTypeTests($for.ForBlock, _is_ForBlock_default);
  var createInner$ = dart.privateName(key, "KeyBlock.createInner");
  var _value = dart.privateName(key, "_value");
  var _currentFragment = dart.privateName(key, "_currentFragment");
  var _target = dart.privateName(key, "_target");
  var _anchor$0 = dart.privateName(key, "_anchor");
  var _recreateFragment = dart.privateName(key, "_recreateFragment");
  key.KeyBlock = class KeyBlock extends fragment.Fragment {
    get createInner() {
      return this[createInner$];
    }
    set createInner(value) {
      super.createInner = value;
    }
    static ['_#new#tearOff'](createInner) {
      return new key.KeyBlock.new(createInner);
    }
    set value(val) {
      if (!dart.equals(this[_value], val)) {
        this[_value] = val;
        this[_recreateFragment]();
      }
    }
    [_recreateFragment]() {
      let t22;
      t22 = this[_currentFragment];
      t22 == null ? null : t22.destroy();
      let newFragment = this[_currentFragment] = this.createInner();
      if (this[_target] != null) {
        newFragment.create(dart.nullCheck(this[_target]), this[_anchor$0]);
      }
    }
    create(target, anchor = null) {
      let t22;
      this[_target] = target;
      this[_anchor$0] = anchor;
      if (this[_currentFragment] == null) {
        this[_recreateFragment]();
      } else {
        t22 = this[_currentFragment];
        t22 == null ? null : t22.create(target, anchor);
      }
    }
    update(delta) {
      let t22;
      t22 = this[_currentFragment];
      t22 == null ? null : t22.update(delta);
    }
    destroy() {
      let t22;
      t22 = this[_currentFragment];
      t22 == null ? null : t22.destroy();
    }
  };
  (key.KeyBlock.new = function(createInner) {
    this[_value] = null;
    this[_currentFragment] = null;
    this[_target] = null;
    this[_anchor$0] = null;
    this[createInner$] = createInner;
    ;
  }).prototype = key.KeyBlock.prototype;
  dart.addTypeTests(key.KeyBlock);
  dart.addTypeCaches(key.KeyBlock);
  dart.setMethodSignature(key.KeyBlock, () => ({
    __proto__: dart.getMethods(key.KeyBlock.__proto__),
    [_recreateFragment]: dart.fnType(dart.void, []),
    create: dart.fnType(dart.void, [html.Element], [dart.nullable(html.Node)]),
    update: dart.fnType(dart.void, [core.int]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(key.KeyBlock, () => ({
    __proto__: dart.getSetters(key.KeyBlock.__proto__),
    value: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(key.KeyBlock, I[12]);
  dart.setFieldSignature(key.KeyBlock, () => ({
    __proto__: dart.getFields(key.KeyBlock.__proto__),
    createInner: dart.finalFieldType(dart.fnType(fragment.Fragment, [])),
    [_value]: dart.fieldType(dart.nullable(core.Object)),
    [_currentFragment]: dart.fieldType(dart.nullable(fragment.Fragment)),
    [_target]: dart.fieldType(dart.nullable(html.Element)),
    [_anchor$0]: dart.fieldType(dart.nullable(html.Node))
  }));
  dart.trackLibraries("packages/zap/src/blocks/async", {
    "package:zap/src/blocks/html.dart": html$,
    "package:zap/src/blocks/slot.dart": slot,
    "package:zap/src/core/component.dart": component$,
    "package:zap/src/core/internal.dart": internal,
    "package:zap/src/core/context.dart": context,
    "package:zap/src/blocks/subcomponent.dart": subcomponent,
    "package:zap/src/core/value.dart": value$,
    "package:zap/src/core/snapshot.dart": snapshot,
    "package:zap/src/dom/mutation_observer.dart": mutation_observer,
    "package:zap/src/blocks/async.dart": async$,
    "package:zap/src/core/watchable.dart": watchable,
    "package:zap/src/dom/dom.dart": dom,
    "package:zap/src/blocks/if.dart": $if,
    "package:zap/src/blocks/for.dart": $for,
    "package:zap/src/blocks/key.dart": key
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["html.dart","slot.dart","../core/component.dart","../core/internal.dart","../core/context.dart","subcomponent.dart","../core/value.dart","../core/snapshot.dart","../dom/mutation_observer.dart","async.dart","../core/watchable.dart","../dom/dom.dart","if.dart","for.dart","key.dart"],"names":[],"mappings":"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","file":"async.sound.ddc.js"}');
  // Exports:
  return {
    src__blocks__html: html$,
    src__blocks__slot: slot,
    src__core__component: component$,
    src__core__internal: internal,
    src__core__context: context,
    src__blocks__subcomponent: subcomponent,
    src__core__value: value$,
    src__core__snapshot: snapshot,
    src__dom__mutation_observer: mutation_observer,
    src__blocks__async: async$,
    src__core__watchable: watchable,
    src__dom__dom: dom,
    src__blocks__if: $if,
    src__blocks__for: $for,
    src__blocks__key: key
  };
}));

//# sourceMappingURL=async.sound.ddc.js.map
