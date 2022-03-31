part of 'router.dart';

enum PathStrategy { Hash, Path }

abstract class RouteInterface {
  Uri get path;
  String? get name;
}

@immutable
abstract class Route implements RouteInterface {
  factory Route({
    required Uri uri,
    String? name,
    PathStrategy strategy = PathStrategy.Hash,
  }) {
    if (strategy == PathStrategy.Path) {
      return PathRoute(
        path: uri,
        name: name,
      );
    } else {
      return HashRoute(
        path: uri,
        name: name,
      );
    }
  }

  factory Route.fromPath({
    required String path,
    String? name,
    PathStrategy strategy = PathStrategy.Hash,
  }) {
    if (strategy == PathStrategy.Path) {
      return PathRoute(
        path: Uri(
          scheme: Uri.base.scheme,
          host: Uri.base.host,
          port: Uri.base.port,
          path: path,
        ),
        name: name,
      );
    } else {
      return HashRoute(
        path: Uri(
          scheme: Uri.base.scheme,
          host: Uri.base.host,
          port: Uri.base.port,
          path: path,
        ),
        name: name,
      );
    }
  }
}

class HashRoute implements Route {
  late final Uri path;
  final String? name;
  HashRoute({required Uri path, this.name}) {
    path = Uri();
  }

  @override
  String toString() {
    return '${name}: ${path.path}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is HashRoute && other.path.path == path.path;
  }

  @override
  int get hashCode => path.hashCode;
}

class PathRoute implements Route {
  final Uri path;
  final String? name;
  PathRoute({required this.path, this.name});

  @override
  String toString() {
    return '${name}: ${path.path}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is HashRoute && other.path.path == path.path;
  }

  @override
  int get hashCode => path.hashCode;
}
