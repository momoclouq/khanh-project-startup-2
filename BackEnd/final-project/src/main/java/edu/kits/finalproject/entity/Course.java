package edu.kits.finalproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Courses")
public class Course implements Serializable {

    //Course: id, name, desc, rating,listOfVideo,thumbnail, reviews, enrollCount, user_id, content_id,
    // 1 course has 1 tutor, 1 tutor can have many course, 1 student can join many course,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column
    private double price;

    @Column(columnDefinition = "nvarchar(500)")
    private String desciption;

    @Column(columnDefinition = "nvarchar(500)")
    private String thumbnail;

    @Column(columnDefinition = "nvarchar(500)")
    private String listOfVideo;

    @Column(columnDefinition = "nvarchar(500)")
    private String tutor;


    @ElementCollection
    @CollectionTable(name = "course_userMail", joinColumns = @JoinColumn(name = "course_id"))
    @Column(name = "userMail")
    private List<String> userMail;


    @ManyToMany(mappedBy = "courses")
    @JsonIgnore
    private List<User> users ;


    @Column
    private double rating;

    @Column
    private int enroll;

    @Column
    @ColumnDefault(value = "1")
    private int active;

    @Temporal(TemporalType.DATE)
    private Date created_at;


    @OneToMany(mappedBy = "course")
    Set<CourseDetail> courseDetails;

    @OneToMany(mappedBy = "course")
    Set<UserMail> userMails;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;






    public Course(String name, double price, String desciption, String thumbnail, double rating, int enroll, String listOfVideo) {
        this.name = name;
        this.price = price;
        this.desciption = desciption;
        this.thumbnail = thumbnail;
        this.rating = rating;
        this.enroll = enroll;
        this.listOfVideo = listOfVideo;
    }

    public List<User> getUsers() {
        return users;
    }

    public void addUserMail(UserMail tempUserMail){
        if(userMails == null){
            userMails = new HashSet<>();
        }
        userMails.add(tempUserMail);
    }

    public Set<UserMail> getUserMails() {
        return userMails;
    }

    public void setUserMails(Set<UserMail> userMails) {
        this.userMails = new HashSet<>(userMails);
        System.out.println("setUserMails: " + userMails);
    }
}
