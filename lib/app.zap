<script>
  import "package:riverpod_zap/riverpod.dart";
  import "src/router/router.zap";
  import "src/presentation/header/header.zap";
  import "src/presentation/body/body.zap";
  import "src/presentation/footer/footer.zap";

</script>

<riverpod-scope>
  <router>
    <header />
    <body />
    <footer />
  </router>
</riverpod-scope>
