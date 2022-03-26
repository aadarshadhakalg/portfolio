define(['dart_sdk'], (function load__packages__meta__meta_meta(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta_meta = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "classType",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "enumType",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "extension",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "field",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "function",
        [_Enum_index]: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "library",
        [_Enum_index]: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "getter",
        [_Enum_index]: 6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "method",
        [_Enum_index]: 7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "mixinType",
        [_Enum_index]: 8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "parameter",
        [_Enum_index]: 9
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "setter",
        [_Enum_index]: 10
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "topLevelVariable",
        [_Enum_index]: 11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "type",
        [_Enum_index]: 12
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_Enum__name]: "typedefType",
        [_Enum_index]: 13
      });
    },
    get C14() {
      return C[14] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13], meta_meta.TargetKind);
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = ["package:meta/meta_meta.dart"];
  var kinds$ = dart.privateName(meta_meta, "Target.kinds");
  meta_meta.Target = class Target extends core.Object {
    get kinds() {
      return this[kinds$];
    }
    set kinds(value) {
      super.kinds = value;
    }
    static ['_#new#tearOff'](kinds) {
      return new meta_meta.Target.new(kinds);
    }
  };
  (meta_meta.Target.new = function(kinds) {
    this[kinds$] = kinds;
    ;
  }).prototype = meta_meta.Target.prototype;
  dart.addTypeTests(meta_meta.Target);
  dart.addTypeCaches(meta_meta.Target);
  dart.setLibraryUri(meta_meta.Target, I[0]);
  dart.setFieldSignature(meta_meta.Target, () => ({
    __proto__: dart.getFields(meta_meta.Target.__proto__),
    kinds: dart.finalFieldType(core.Set$(meta_meta.TargetKind))
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  meta_meta.TargetKind = class TargetKind extends core._Enum {
    toString() {
      return "TargetKind." + this[_name];
    }
  };
  (meta_meta.TargetKind.new = function(index, name) {
    meta_meta.TargetKind.__proto__.new.call(this, index, name);
    ;
  }).prototype = meta_meta.TargetKind.prototype;
  dart.addTypeTests(meta_meta.TargetKind);
  dart.addTypeCaches(meta_meta.TargetKind);
  dart.setLibraryUri(meta_meta.TargetKind, I[0]);
  dart.setStaticFieldSignature(meta_meta.TargetKind, () => ['values', 'classType', 'enumType', 'extension', 'field', 'function', 'library', 'getter', 'method', 'mixinType', 'parameter', 'setter', 'topLevelVariable', 'type', 'typedefType']);
  dart.defineExtensionMethods(meta_meta.TargetKind, ['toString']);
  meta_meta.TargetKind.classType = C[0] || CT.C0;
  meta_meta.TargetKind.enumType = C[1] || CT.C1;
  meta_meta.TargetKind.extension = C[2] || CT.C2;
  meta_meta.TargetKind.field = C[3] || CT.C3;
  meta_meta.TargetKind.function = C[4] || CT.C4;
  meta_meta.TargetKind.library = C[5] || CT.C5;
  meta_meta.TargetKind.getter = C[6] || CT.C6;
  meta_meta.TargetKind.method = C[7] || CT.C7;
  meta_meta.TargetKind.mixinType = C[8] || CT.C8;
  meta_meta.TargetKind.parameter = C[9] || CT.C9;
  meta_meta.TargetKind.setter = C[10] || CT.C10;
  meta_meta.TargetKind.topLevelVariable = C[11] || CT.C11;
  meta_meta.TargetKind.type = C[12] || CT.C12;
  meta_meta.TargetKind.typedefType = C[13] || CT.C13;
  meta_meta.TargetKind.values = C[14] || CT.C14;
  meta_meta['TargetKindExtension|get#displayString'] = function TargetKindExtension$124get$35displayString($this) {
    switch ($this) {
      case C[0] || CT.C0:
      {
        return "classes";
      }
      case C[1] || CT.C1:
      {
        return "enums";
      }
      case C[2] || CT.C2:
      {
        return "extensions";
      }
      case C[3] || CT.C3:
      {
        return "fields";
      }
      case C[4] || CT.C4:
      {
        return "top-level functions";
      }
      case C[5] || CT.C5:
      {
        return "libraries";
      }
      case C[6] || CT.C6:
      {
        return "getters";
      }
      case C[7] || CT.C7:
      {
        return "methods";
      }
      case C[8] || CT.C8:
      {
        return "mixins";
      }
      case C[9] || CT.C9:
      {
        return "parameters";
      }
      case C[10] || CT.C10:
      {
        return "setters";
      }
      case C[11] || CT.C11:
      {
        return "top-level variables";
      }
      case C[12] || CT.C12:
      {
        return "types (classes, enums, mixins, or typedefs)";
      }
      case C[13] || CT.C13:
      {
        return "typedefs";
      }
    }
  };
  dart.trackLibraries("packages/meta/meta_meta", {
    "package:meta/meta_meta.dart": meta_meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta_meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBwB;;;;;;;;;;;IAEJ;;EAAM;;;;;;;;;;;;;;IA4D1B;;8CAvDK;;;EAuDL;;;;;;;;;;;;;;;;;;;;;;AAKI;;;AAEI,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;;AAEP,cAAO;;;EAEb","file":"meta_meta.sound.ddc.js"}');
  // Exports:
  return {
    meta_meta: meta_meta
  };
}));

//# sourceMappingURL=meta_meta.sound.ddc.js.map
