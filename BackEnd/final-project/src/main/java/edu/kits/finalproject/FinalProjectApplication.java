package edu.kits.finalproject;

import edu.kits.finalproject.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FinalProjectApplication {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

//    Global CORS configuration
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/admin/courses").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/courses/{id}").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/get-tutor-from-course/{id}").allowedOrigins("http://localhost:3000");
                //registry.addMapping("/admin/add-order").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/order/{orderId}").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/courses-tutor").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/user/{email}").allowedOrigins("http://localhost:3000");

            }
        };
    }

    @Autowired
    UserRepository userRepository;

    public static void main(String[] args) {

        SpringApplication.run(FinalProjectApplication.class, args);

//        Course tempCourse1 = new Course("C#", 23000, "Great", "thumnail", 4.7, 1220);
//        User tempUser1 = new User("Lisa", "female", "lisa@gmail.com", "123456", 0123);
//        tempCourse1.addUser(tempUser1);


    }
//    public void run(){
//        CourseDto tempCourseDto1 = new CourseDto("C++", 23000, "wow", "vsvs", 4.5, 122);
//        UserDto tempUserDto1 = new UserDto("Lisa", "famale", "lisa@gmail.com", "123456", 0123);
//        tempCourseDto1.addUserDto(tempUserDto1);
//    }

}
