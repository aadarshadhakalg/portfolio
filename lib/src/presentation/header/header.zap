<script>
    import "../../logic/router.dart";
    import 'navigation.zap';

  final provider = self.read(navigationProvider.notifier);

  provider.addRoute(Route.fromPath(path: '/',name:'Home'),);
  provider.addRoute(Route.fromPath(path: '/about',name:'About'),);
  provider.addRoute(Route.fromPath(path: '/blog',name:'Blog'),);
  provider.addRoute(Route.fromPath(path: '/projects',name:'Projects'),);

</script>

<header>
    <a href="/" class="title">
        <h2>Aadarsha Dhakal</h2>
    </a>
    <navigation />
</header>
