import 'dart:html';

import 'package:meta/meta.dart';
import 'package:riverpod/riverpod.dart';

final navigationProvider =
    StateNotifierProvider<Router, Route>((_) => Router());

class Router extends StateNotifier<Route> {
  Router({Route? initialRoute})
      : super(initialRoute ?? Route(name: 'Home', path: Uri.base)) {
    goToNamed(path: Uri.parse(window.location.href).path);
    window.onPopState.listen((event) {
      print(event.state);
      // goToNamed(route: event.state);
    });
  }

  Set registeredRoute = {};

  void addRoute(Route route) {
    registeredRoute.add(route);
  }

  void goToNamed({required String path, Map? data}) {
    Route route = Route.fromPath(path: path);
    if (registeredRoute.contains(route)) {
      window.history
          .pushState(data, '${route.name} - Aadarsha Dhakal', '$route');
      state = route;
    }
  }
}

@immutable
class Route {
  final Uri path;
  final String? name;
  const Route({this.name, required this.path});

  factory Route.fromPath({required String path, String? name}) {
    return Route(
      path: Uri(host: window.location.host, path: path),
    );
  }

  @override
  String toString() {
    return path.path;
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is Route && other.path == path;
  }

  @override
  int get hashCode => path.hashCode;
}
