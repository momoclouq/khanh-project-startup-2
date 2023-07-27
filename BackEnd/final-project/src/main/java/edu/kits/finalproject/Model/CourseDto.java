package edu.kits.finalproject.Model;

import edu.kits.finalproject.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto implements Serializable {
    private Long courseId;
    private String name;
    private double price;
    private String desciption;
    private String thumbnail;
    private double rating;
    private int enroll;
    private int active;
    private Date created_at;
    private CategoryDto categoryDto;
    private List<UserDto> userDtos;
    private String listOfVideo;
    private List<String> userMail;
    private List<User> users ;
    private String tutor;


    public void addUserDto(UserDto userDto){
        if(userDtos == null){
            userDtos = new ArrayList<>();
        }
        userDtos.add(userDto);
    }

    public CourseDto(String name, double price, String desciption, String thumbnail, double rating, int enroll) {
        this.name = name;
        this.price = price;
        this.desciption = desciption;
        this.thumbnail = thumbnail;
        this.rating = rating;
        this.enroll = enroll;
    }
}
