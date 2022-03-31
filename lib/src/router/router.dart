import 'dart:html';
import 'package:riverpod/riverpod.dart';
import 'package:meta/meta.dart';

part 'route.dart';

final navigationProvider = StateNotifierProvider<Router, Route>(
  (_) => Router(
    initialRoute: Route.fromPath(path: Uri.parse(window.location.href).path),
  ),
);

class Router extends StateNotifier<Route> {
  Router({Route? initialRoute})
      : super(
          initialRoute ?? Route.fromPath(name: 'Home', path: Uri.base.path),
        ) {
    window.onPopState.listen((event) {
      _onPopState(event);
    });
  }

  String _siteName = document.title;

  // Set that stores all the registered routes.
  Set<Route> _registeredRoutes = {
    Route.fromPath(path: '/404', name: 'Not Found'),
  };

  // Get the current route state
  Route get currentRoute => state;

  //Get all registered routes
  Set<Route> get registeredRoutes => _registeredRoutes;

  // Register a new route
  void addRoute(Route route) {
    _registerRoute(route);
  }

  // Check is a route is registered.
  bool isRouteRegistered(Route route) {
    if (_registeredRoutes.contains(route)) {
      return true;
    }
    return false;
  }

  // Unregister a route
  void removeRoute(Route route) {
    _unRegisterRoute(route);
  }

  // Go to a route
  void goToNamed(
      {required String path,
      Map<String, dynamic>? data,
      bool replace = false}) {
    _onPushState(path, data);
  }

  /// Private Helpers Methods
  void _registerRoute(Route route) {
    _registeredRoutes.add(route);
  }

  bool _unRegisterRoute(Route route) {
    if (isRouteRegistered(route)) {
      _registeredRoutes.remove(route);
      return true;
    } else {
      window.console.warn('Route not registered thus not removed.');
      return false;
    }
  }

  void _onPopState(PopStateEvent event) {
    var target = event.target as Window;
    state = _registeredRoutes.singleWhere(
      (element) =>
          element ==
          Route(
            uri: Uri.parse(target.location.href),
          ),
    );
    document.title = '${state.name} - $_siteName';
  }

  void _onPushState(String path, Map<String, dynamic>? data,
      [bool replace = false]) {
    Route route = Route.fromPath(path: path);
    if (_registeredRoutes.contains(route)) {
      if (state != route) {
        state = _registeredRoutes.singleWhere((element) => element == route);
        document.title = '${state.name} - $_siteName';
        if (replace) {
          window.history.replaceState(data, '${state.name}', '${state.path}');
        } else {
          window.history.pushState(data, '${state.name}', '${state.path}');
        }
      }
    } else {
      state = Route.fromPath(path: '/404');
      window.history.pushState(data, 'Not Found - $_siteName', '/404');
    }
  }
}
