package edu.kits.finalproject.Repository;

import edu.kits.finalproject.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users u SET u.token = ? WHERE u.user_id = ?", nativeQuery = true)
    int updateTokenById(String token, Long id);

    @Query(value = "SELECT * FROM users u WHERE u.token = :token ", nativeQuery = true)
    User findByToken(String token);




}
