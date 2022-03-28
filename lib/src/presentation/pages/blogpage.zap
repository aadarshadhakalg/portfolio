<script>
  import "package:riverpod_zap/riverpod.dart";
  import "../../data/blog.dart";
  import "../../data/blog_model.dart";
  

  final provider = self.read(blogProvider.notifier);
  provider.fetchBlogs();
  Iterable<Blog> blogs = watch(self.use(blogProvider));
</script>

<h2>Blogs</h2>
<ol class="blog-posts">
  {#for blog in blogs}
  <li>
    <div>
      <a href="{blog.url}">{blog.path.substring(6)}</a>
    </div>  
  </li>
  {/for}
</ol>