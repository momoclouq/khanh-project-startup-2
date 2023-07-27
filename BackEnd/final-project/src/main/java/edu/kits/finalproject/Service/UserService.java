package edu.kits.finalproject.Service;

import edu.kits.finalproject.entity.User;

import java.util.List;
import java.util.Optional;
public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);

    Optional<User> getUserByEmail(String email);

    Optional<User> findById(Long id);

    User save(User user);
}
