<script>
import "package:riverpod_zap/riverpod.dart";
  import "../../logic/router.dart";
  import 'navigation.zap';

  final routeProvider = self.read(navigationProvider.notifier);

  routeProvider.addRoute(Route.fromPath(path: '/',name:'Home'),);
  routeProvider.addRoute(Route.fromPath(path: '/about',name:'About'),);
  routeProvider.addRoute(Route.fromPath(path: '/blog',name:'Blog'),);
  routeProvider.addRoute(Route.fromPath(path: '/projects',name:'Projects'),);

</script>

<header>
    <a href="/" class="title">
        <h2>Aadarsha Dhakal</h2>
    </a>
    <navigation />
</header>
