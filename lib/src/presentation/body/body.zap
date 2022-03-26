<script>
    import "package:riverpod_zap/riverpod.dart";
    import "../../logic/navigation.dart";
    import "../pages/homepage.zap";
    import "../pages/aboutpage.zap";
    import "../pages/blogpage.zap";

    var currentPage = watch(self.use(navigationProvider));
    print(currentPage);
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
