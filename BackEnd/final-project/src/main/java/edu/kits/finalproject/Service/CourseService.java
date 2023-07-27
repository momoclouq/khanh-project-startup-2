package edu.kits.finalproject.Service;

import edu.kits.finalproject.entity.Course;
import edu.kits.finalproject.entity.User;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface CourseService{

    List<Course> getAllCourses();

    Optional<Course> getCourseById(Long id);


    Course store(String name, double price, String description, String thumbnail, double rating, int enroll, String listOfVideo) throws IOException;

//    User getTutor(Long id);


    Course save(Course course);

    Optional<Course> findByCategoryId(Long categoryId);

    Course update(Long id, Course course);
}
