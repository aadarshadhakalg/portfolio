<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../logic/navigation.dart";

    final provider = self.read(navigationProvider.notifier);
</script>

<header>
    <nav>
        <a on:click={provider.goToHome} title="Home">Home</a>
        <a on:click={provider.goToBlog} title="blogs">Blog</a>
        <a on:click={provider.goToAbout} title="About me">About</a>
        <a on:click={provider.goToHome} title="My Projects">Projects</a>
    </nav>
</header>

<style></style>