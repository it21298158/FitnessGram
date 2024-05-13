package com.paf.socialmedia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.socialmedia.document.Post;
import com.paf.socialmedia.service.PostService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/meal")
public class MealController {
     @Autowired
     private PostService postService;
    
     // meal post save
    @PostMapping
    public ResponseEntity<?> saveMealPost(@RequestBody Post post) {
        return postService.savePost(post);
    }
}
