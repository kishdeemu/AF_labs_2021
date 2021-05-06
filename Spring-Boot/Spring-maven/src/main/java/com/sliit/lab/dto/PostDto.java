package com.sliit.lab.dto;

import org.springframework.web.bind.annotation.RequestBody;

public class PostDto {

    private  String name;
    private String Description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
