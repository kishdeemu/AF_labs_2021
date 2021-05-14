package com.sliit.lab.domain;

import java.util.List;

public interface PostDataAdapter {
    Post save(Post post);

    List<Post> getAll();

    Post update(Post post);

    String delete(String id);
}
