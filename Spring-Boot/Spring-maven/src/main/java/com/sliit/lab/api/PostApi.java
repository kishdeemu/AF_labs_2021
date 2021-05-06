package com.sliit.lab.api;

import com.sliit.lab.domain.Post;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {
    private final Map<String, Post> posts;

    public PostApi() {
        posts = new HashMap<>();
    }

    public List<Post> getAllPosts(){
        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post){
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(),post);
        return post;
    }

    public void removePost(String id){
        posts.remove(id);
    }

    //Wrong Not Working
    public Post updatePost(Post post) {
        posts.replace(post.getName(),post);
        posts.replace(post.getDescription(),post);
        return post;
    }
}
