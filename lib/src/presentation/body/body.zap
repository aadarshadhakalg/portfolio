<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../logic/router.dart";
    import "../pages/homepage.zap";
    import "../pages/aboutpage.zap";
    import "../pages/blogpage.zap";

    var currentPage = watch(self.use(navigationProvider));
</script>

{#if currentPage == "/"}
    <homepage />
{/if}
{#if currentPage == "/about"}
    <aboutpage />
{/if}
{#if currentPage == "/blog"}
    <blogpage />
{/if}
