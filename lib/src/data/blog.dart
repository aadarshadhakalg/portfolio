import 'package:dio/dio.dart';
import 'package:riverpod/riverpod.dart';
import 'blog_model.dart';

final blogProvider =
    StateNotifierProvider<BlogProvider, List<Blog>>((_) => BlogProvider([]));

class BlogProvider extends StateNotifier<List<Blog>> {
  BlogProvider(List<Blog> state) : super(state);

  void fetchBlogs() async {
    Dio dio = Dio();
    try {
      Response resp = await dio.get(
          'https://api.github.com/repos/aadarshadhakalg/portfolio/git/trees/master?recursive=1');
      if (resp.statusCode == 200) {
        state = blogsFromJson(resp.data['tree'])
            .where((element) => element.path.startsWith('blogs/'))
            .toList();
      }
    } catch (e) {
      print(e);
    }
  }
}
