import 'dart:html';import 'package:zap/internal/dsl.dart';import 'package:riverpod/riverpod.dart';import 'context.dart';
@$ComponentMarker('riverpod-scope')
abstract class RiverpodScope {
List<Override> get overrides;
set overrides(List<Override> value);
@Slot(null)
void get slots;
}
