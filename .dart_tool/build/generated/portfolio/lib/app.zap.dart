// Generated by zap_dev, do not edit!
import 'package:zap/zap.dart' as _i0;
import 'dart:html' as _i1;
import 'package:riverpod_zap/src/riverpod-scope.zap.dart' as _i2;
import 'dart:core' as _i3;
import 'package:portfolio/src/presentation/header/header.zap.dart' as _i4;
import 'package:portfolio/src/presentation/body/body.zap.dart' as _i5;

class App extends _i0.ZapComponent {
  late final _i2.RiverpodScope _$n0;
  final _i1.Text _$n1 = _i1.Text('\n');
  final _i1.Element _$n2 = _i1.Element.tag('footer');
  App() {
    final self = _i0.PendingComponent();
    takeOverPending(self);
  }
  @_i3.override
  void createInternal(_i1.Element target, [_i1.Node? anchor]) {
    _$n0 =
        this.$createChildComponent<_i2.RiverpodScope>(() => _i2.RiverpodScope(
              null,
              () => __$t0(this),
            ));
    _$n0.create(target, anchor);
    target.insertBefore(_$n1, anchor);
    target.insertBefore(_$n2, anchor);
  }

  @_i3.override
  void remove() {
    _$n0.destroy();
    _$n1.remove();
    _$n2.remove();
  }

  @_i3.override
  void update(_i3.int delta) {}
}

class __$t0 extends _i0.Fragment {
  final App _$parent;
  __$t0(this._$parent);
  late final _i4.Header _$n3;
  final _i1.Text _$n4 = _i1.Text('\n\n  ');
  late final _i5.Body _$n5;
  @_i3.override
  void create(_i1.Element target, [_i1.Node? anchor]) {
    _$n3 = _i4.Header();
    _$n5 = _i5.Body();
    _$n3.create(target, anchor);
    target.insertBefore(_$n4, anchor);
    _$n5.create(target, anchor);
  }

  @_i3.override
  void update(_i3.int delta) {}
  @_i3.override
  void destroy() {
    _$n3.destroy();
    _$n4.remove();
    _$n5.destroy();
  }
}