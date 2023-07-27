package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.entity.User;
import edu.kits.finalproject.entity.ResponseObject;
import edu.kits.finalproject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/admin/Users")
public class UserController {

    @Autowired
    UserService userService;

    //Get User Detail
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        Optional<User> foundUser = userService.findById(id);
        if (foundUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200, "Query user successfully", foundUser)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject(404, "Can not find course with id = " + id, "")
            );
        }
    }

    //Insert User
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200, "Insert User successfully", userService.save(user))
        );
    }

    //Update user
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateUser(@PathVariable("id") Long id, @RequestBody User newUser) {
        Optional<User> updatedUser = userService.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userService.save(user);
                });
        return updatedUser.isPresent() ?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject(200, "Update course successfully", updatedUser)
                )
                :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject(404, "Can not find course with id = " + id, "")
                );
    }

    //Get latest Tutor:
    //    @GetMapping("/latest-tutors")
    //    ResponseEntity<ResponseObject> getLatestTutor(){
    //
    //    }

}