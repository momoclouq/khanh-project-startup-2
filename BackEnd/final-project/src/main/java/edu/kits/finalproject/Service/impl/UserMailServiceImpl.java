package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Repository.UserMailRepository;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.UserMailService;
import edu.kits.finalproject.entity.Course;
import edu.kits.finalproject.entity.UserMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMailServiceImpl implements UserMailService {
    @Autowired
    UserMailRepository userMailRepository;

    @Override
    public UserMail store(String email) {
        UserMail userMail = new UserMail(email);
        return userMailRepository.save(userMail);
    }

    @Override
    public UserMail store(String email, Course course) {
        UserMail userMail = new UserMail(email, course);
        return userMailRepository.save(userMail);

    }
}
