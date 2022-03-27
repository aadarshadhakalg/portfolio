<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../router/router.dart";

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
        <a href="javascript:void(0);" on:click={goToHome} title="Home">Home</a>
        <a  href="javascript:void(0);"  on:click|preventDefault={goToBlog} title="blogs">Blog</a>
        <a  href="javascript:void(0);" on:click={goToAbout} title="About me">About</a>
        <a href="javascript:void(0);"  on:click={goToProject} title="My Projects">Projects</a>
    </nav>
</header>

<style></style>