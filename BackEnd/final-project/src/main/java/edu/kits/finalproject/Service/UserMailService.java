package edu.kits.finalproject.Service;

import edu.kits.finalproject.entity.Course;
import edu.kits.finalproject.entity.UserMail;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserMailService {
    UserMail store(String email);
    UserMail store(String email, Course course);

}
