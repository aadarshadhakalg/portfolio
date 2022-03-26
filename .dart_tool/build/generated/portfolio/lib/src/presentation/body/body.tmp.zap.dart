import 'dart:html';
import 'package:zap/internal/dsl.dart';
import "package:riverpod_zap/riverpod.dart";import "../../logic/navigation.dart";import '../pages/homepage.tmp.zap.api.dart';import '../pages/aboutpage.tmp.zap.api.dart';import '../pages/blogpage.tmp.zap.api.dart';
void __zap___component(ComponentOrPending self) {


    var currentPage = watch(self.use(navigationProvider));
    print(currentPage);

final __zap__0 =  currentPage == "/";
final __zap__1 =  currentPage == "/about";
final __zap__2 =  currentPage == "/blog";
__zap___scope_0() {
}
__zap___scope_1() {
}
__zap___scope_2() {
}
}
