import 'dart:html';

import 'package:meta/meta.dart';
import 'package:riverpod/riverpod.dart';

final navigationProvider =
    StateNotifierProvider<Router, Route>((_) => Router());

class Router extends StateNotifier<Route> {
  Router({Route? initialRoute})
      : super(initialRoute ?? Route(name: 'Home', path: Uri.base)) {
    window.onPopState.listen((event) {
      var target = event.target as Window;
      state = Route(path: Uri.parse(target.location.href));
    });
  }

  Set<Route> registeredRoute = {
    Route.fromPath(path: '/404', name: 'Not Found'),
  };

  void addRoute(Route route) {
    registeredRoute.add(route);
  }

  void goToNamed({required String path, Map? data}) {
    Route route = Route.fromPath(path: path);
    if (registeredRoute.contains(route)) {
      if (state != route) {
        state = route;
        window.history
            .pushState(data, '${route.name} - Aadarsha Dhakal', '$path');
      }
    } else {
      state = Route.fromPath(path: '/404');
      window.history.pushState(data, 'Not Found - Aadarsha Dhakal', '/404');
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
      path: Uri(
        scheme: Uri.base.scheme,
        host: Uri.base.host,
        port: Uri.base.port,
        path: path,
      ),
    );
  }

  @override
  String toString() {
    return path.path;
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is Route && other.path.path == path.path;
  }

  @override
  int get hashCode => path.hashCode;
}
