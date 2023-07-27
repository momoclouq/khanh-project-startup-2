package edu.kits.finalproject.entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Embeddable
public class CourseDetailKey implements Serializable {

    @Column(name = "user_id")
    Long userId;
    @Column(name = "course_id")
    Long courseId;
}
