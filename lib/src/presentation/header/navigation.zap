<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../logic/router.dart";

    final provider = self.read(navigationProvider.notifier);

    void goToHome(){
        provider.goToNamed(path: "/");
    }

    void goToAbout(){
        provider.goToNamed(path: "/about");
    }

    void goToProject(){
        provider.goToNamed(path: "/project");
    }

    void goToBlog(){
        provider.goToNamed(path: "/blog");
    }

</script>

<header>
    <nav>
        <a on:click={goToHome} title="Home">Home</a>
        <a on:click={goToAbout} title="blogs">Blog</a>
        <a on:click={goToProject} title="About me">About</a>
        <a on:click={goToBlog} title="My Projects">Projects</a>
    </nav>
</header>

<style></style>