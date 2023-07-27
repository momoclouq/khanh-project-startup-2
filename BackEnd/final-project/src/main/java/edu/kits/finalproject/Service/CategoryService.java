package edu.kits.finalproject.Service;

import edu.kits.finalproject.entity.Category;

import java.util.List;

public interface CategoryService {

    Object save(Category category);

    List<Category> getLatestCategories();
}

