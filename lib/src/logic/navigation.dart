import 'dart:html';

import 'package:riverpod/riverpod.dart';

final navigationProvider = StateNotifierProvider<Route, String>((_) => Route());

class Route extends StateNotifier<String> {
  Route() : super('/');

  void goToHome() => setUrl(path: '/', name: 'Home');
  void goToAbout() => setUrl(path: '/about', name: 'About');
  void goToBlog() => setUrl(path: '/blog', name: 'Blog');

  void setUrl({required String path, required String name, Map? data}) {
    window.history.pushState(data, '$name - Aadarsha Dhakal',
        'http://${window.location.host}${path}');
    state = path;
  }
}
