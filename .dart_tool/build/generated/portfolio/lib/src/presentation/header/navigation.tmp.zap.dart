import 'dart:html';
import 'package:zap/internal/dsl.dart';
import "package:riverpod_zap/riverpod.dart";import "../../logic/navigation.dart";
void __zap___component(ComponentOrPending self) {


    final provider = self.read(navigationProvider.notifier);

final __zap__0 = provider.goToHome;
final __zap__1 = 'Home';
final __zap__2 = provider.goToBlog;
final __zap__3 = 'blogs';
final __zap__4 = provider.goToAbout;
final __zap__5 = 'About me';
final __zap__6 = provider.goToHome;
final __zap__7 = 'My Projects';
}
