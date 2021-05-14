package com.sliit.lab.api;

import com.sliit.lab.domain.Post;
import com.sliit.lab.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class PostApi {
    private final Map<String, Post> posts;
    private final PostDataAdapter postDataAdapter;

    @Autowired
    public PostApi(PostDataAdapter postDataAdapter) {
        this.postDataAdapter = postDataAdapter;
        posts = new HashMap<>();
    }

//    public List<Post> getAllPosts(){
//        return new ArrayList<>(posts.values());
//    }

    public List<Post> getAllPosts(){
        return postDataAdapter.getAll();
    }

//    public Post addPost(Post post){
//        post.setId(UUID.randomUUID().toString());
//        posts.put(post.getId(),post);
//        return post;
//    }

    public Post addPost(Post post){
        post.setPostedDate(LocalDateTime.now());
        post = postDataAdapter.save(post);
        return post;
    }

//    public void removePost(String id){
//        posts.remove(id);
//    }

    public String removePost(String id){
        String deletedId = postDataAdapter.delete(id);
        return deletedId; //prev returned Post type

    }

//    public Post updatePost(Post post){
//        Post oldPost =  posts.get(post.getId());
//        oldPost.setName(post.getName());
//        oldPost.setDescription(post.getDescription());
//        posts.put(oldPost.getId(),oldPost);
//        return oldPost;
//    }
// Done by Deepika.

    public Post updatePost(Post post) {
        return postDataAdapter.update(post);
    }
}
