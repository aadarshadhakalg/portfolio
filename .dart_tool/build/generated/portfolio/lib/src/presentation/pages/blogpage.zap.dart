// Generated by zap_dev, do not edit!
import 'package:zap/zap.dart' as _i0;
import 'dart:html' as _i1;
import 'dart:core' as _i2;

class Blogpage extends _i0.ZapComponent {
  final _i1.ParagraphElement _$n0 = _i1.ParagraphElement();
  final _i1.Text _$n1 = _i1.Text('Blog');
  Blogpage() {
    final self = _i0.PendingComponent();
    takeOverPending(self);
  }
  @_i2.override
  void createInternal(_i1.Element target, [_i1.Node? anchor]) {
    target.insertBefore(_$n0, anchor);
    _$n0.append(_$n1);
  }

  @_i2.override
  void remove() {
    _$n0.remove();
  }

  @_i2.override
  void update(_i2.int delta) {}
}
