package edu.kits.finalproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "userMail")
public class UserMail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "mail")
    private String mail;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public UserMail(String mail) {
        this.mail = mail;
    }

    public UserMail(String mail, Course course) {
        this.mail = mail;
        this.course = course;
    }
}
