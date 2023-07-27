package edu.kits.finalproject.Model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
// Dto là viết tắt của Data Transfer Object, được sử dụng trong lập trình để chuyển dữ liệu giữa các thành phần khác nhau của một ứng dụng.
public class CategoryDto implements Serializable {
    private Long categoryId;

    @NotEmpty
    @Size(min = 5, message = "{validation.name.size.too_short}")
    @Size(max = 10, message = "{validation.name.size.too_long}")
    private String name;

    private int active;
    private Set<CourseDto> courseDtos;
}
