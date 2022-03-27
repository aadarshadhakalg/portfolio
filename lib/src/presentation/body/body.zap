<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../logic/router.dart";
    import "../pages/homepage.zap";
    import "../pages/aboutpage.zap";
    import "../pages/blogpage.zap";
    import "../pages/projectspage.zap";
    import "../pages/notfound.zap";

    var currentPage = watch(self.use(navigationProvider));
</script>

{#if currentPage.path.path == "/"}
    <homepage />
{/if}
{#if currentPage.path.path == "/about"}
    <aboutpage />
{/if}
{#if currentPage.path.path == "/blog"}
    <blogpage />
{/if}

{#if currentPage.path.path == "/project"}
    <projectspage />
{/if}

{#if currentPage.path.path == "/404"}
    <notfound />
{/if}
