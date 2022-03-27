<script>
  import "package:riverpod_zap/riverpod.dart";

  import "src/presentation/header/header.zap";
  import "src/presentation/body/body.zap";
  import "src/logic/router.dart";
</script>

<riverpod-scope>
  <header />

  <body />
</riverpod-scope>
<footer />
