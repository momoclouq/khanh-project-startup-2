package edu.kits.finalproject.Repository;

import edu.kits.finalproject.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    Optional<Course> findCourseByCourseId(Long id);
    List<Course> findByNameContaining(String name);
    Page<Course> findByNameContaining(String name, Pageable pageable);

    //Haven't join tables yet
    @Query(value = "select * from Course c where c.category_id = ?1", nativeQuery = true)

    Optional<Course> findByCategoryId(Long categoryId);

//    Optional<Course>




}
