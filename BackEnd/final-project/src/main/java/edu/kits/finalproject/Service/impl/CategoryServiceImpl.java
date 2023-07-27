package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.entity.Category;
import edu.kits.finalproject.Repository.CategoryRepository;
import edu.kits.finalproject.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;


    @Override
    public Object save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getLatestCategories() {
        return categoryRepository.findLatestCategories();
    }
}
