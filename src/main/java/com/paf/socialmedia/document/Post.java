package com.paf.socialmedia.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String userId;
    private List<String> imgLink;
    private String caption;
    // for meal
    private String mtitle;
    private String nutrition;
    // for workout
    private String wtitle;
    private String sets;
    private String exercise;
    //for workout plan
    private String trainer;
    private String counts;
    private String distance;

    private List<String> likedby;
    private Date createdAt;
    private Date updatedAt;
}