package edu.kits.finalproject.Repository;

import edu.kits.finalproject.entity.UserMail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMailRepository extends JpaRepository<UserMail, Long> {

}
