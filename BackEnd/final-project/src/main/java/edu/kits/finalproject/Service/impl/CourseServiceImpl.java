package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.entity.Course;
import edu.kits.finalproject.entity.User;
import edu.kits.finalproject.Repository.CourseRepository;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository coursePepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Course> getAllCourses() {
        return coursePepository.findAll();
    }

    @Override
    public Optional<Course> getCourseById(Long id) {
        return coursePepository.findCourseByCourseId(id);
//        if(result.isPresent())
//            return result.get();
//        return new Course();
    }



    @Override
    public Course store(String name, double price, String description, String thumbnail, double rating, int enroll,String listOfVideo) throws IOException {
        Course course = new Course(name, price, description, thumbnail, rating, enroll,listOfVideo);
        System.out.println(name);
        return coursePepository.save(course);
    }

//    @Override
//    public User getTutor(Long id) {
//        System.out.println("=========getTutor===========");
//        Optional<Course> tempCourse = coursePepository.findById(id);
//        List<User> users = tempCourse.get().getUsers();
//        for(User user : users)
//            if(user.getRole().getRoleId() == 1)
//                return user;
//        return new User();
//    }

//    @Override
//    public Collection<Object> getAllCategory() {
//        return coursePepository.findAll();
//    }

    @Override
    public Course save(Course course) {
        return coursePepository.save(course);
    }
    @Override
    public Optional<Course> findByCategoryId(Long categoryId) {
        return coursePepository.findByCategoryId(categoryId);
    }

    @Override
    public Course update(Long id, Course course) {
        Course coursefromDB = coursePepository.findCourseByCourseId(id).get();
        System.out.println("coursefromDB: " + coursefromDB);
        System.out.println("course.getUserMails(): " + course.getUserMails());
        if (coursefromDB == null)
            return null;
        coursefromDB.setUserMails(course.getUserMails());
        return coursePepository.save(coursefromDB);
    }
}
