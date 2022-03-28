import 'dart:convert';

Iterable<Blog> blogsFromJson(Iterable str) =>
    List<Blog>.from(str.map((x) => Blog.fromMap(x)));

String blogToJson(List<Blog> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class Blog {
  final String path;
  final String mode;
  final String type;
  final String sha;
  final int size;
  final String url;
  Blog({
    required this.path,
    required this.mode,
    required this.type,
    required this.sha,
    required this.size,
    required this.url,
  });

  Blog copyWith({
    String? path,
    String? mode,
    String? type,
    String? sha,
    int? size,
    String? url,
  }) {
    return Blog(
      path: path ?? this.path,
      mode: mode ?? this.mode,
      type: type ?? this.type,
      sha: sha ?? this.sha,
      size: size ?? this.size,
      url: url ?? this.url,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'path': path,
      'mode': mode,
      'type': type,
      'sha': sha,
      'size': size,
      'url': url,
    };
  }

  factory Blog.fromMap(Map<String, dynamic> map) {
    return Blog(
      path: map['path'] ?? '',
      mode: map['mode'] ?? '',
      type: map['type'] ?? '',
      sha: map['sha'] ?? '',
      size: map['size']?.toInt() ?? 0,
      url: map['url'] ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory Blog.fromJson(String source) => Blog.fromMap(json.decode(source));

  @override
  String toString() {
    return 'Files(path: $path, mode: $mode, type: $type, sha: $sha, size: $size, url: $url)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is Blog &&
        other.path == path &&
        other.mode == mode &&
        other.type == type &&
        other.sha == sha &&
        other.size == size &&
        other.url == url;
  }

  @override
  int get hashCode {
    return path.hashCode ^
        mode.hashCode ^
        type.hashCode ^
        sha.hashCode ^
        size.hashCode ^
        url.hashCode;
  }
}
