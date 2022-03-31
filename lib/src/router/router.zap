<script >
    import "package:riverpod_zap/riverpod.dart";
    import "router.dart";

    final routeProvider = self.read(navigationProvider.notifier);
    routeProvider.addRoute(Route.fromPath(path: '/',name:'Home'),);
    routeProvider.addRoute(Route.fromPath(path: '/about',name:'About'),);
    routeProvider.addRoute(Route.fromPath(path: '/project',name:'Projects'),);
    routeProvider.addRoute(Route.fromPath(path: '/blog',name:'Blog'),);
</script>


<slot></slot>