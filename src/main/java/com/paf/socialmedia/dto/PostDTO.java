package com.paf.socialmedia.dto;

import com.paf.socialmedia.document.Comment;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

@Data
public class PostDTO {
    private String id;
    private String userId;
    private String username;
    private String profileImage;
    private List<String> imgLink;
    private String caption;

    // for meal
    private String mtitle;
    private String nutrition;
    // for workout
    private String wtitle;
    private String sets;
    private String exercise;
    // for workout plan
    private String trainer;
    private String counts;
    private String distance;

    private Date createdAt;
    private Date updatedAt;
    private List<String> likedby;
    private List<CommentDTO> comments;
}
