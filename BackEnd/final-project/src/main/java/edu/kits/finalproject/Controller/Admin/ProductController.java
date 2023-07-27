package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Model.ProductDto;
import edu.kits.finalproject.Model.ResponseDto;
import edu.kits.finalproject.Service.CourseService;
import edu.kits.finalproject.Service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("admin/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    CourseService courseService;

    @RequestMapping("add")
    public ResponseDto add() {
        return new ResponseDto();
    }

    @GetMapping("edit/{productId}")
    public ResponseDto edit(ModelMap model, @PathVariable("productId") Long productId) {
        return new ResponseDto();
    }

    @PostMapping("saveOrUpdate")
    public ResponseDto saveOrUpdate(ModelMap model, @Valid ProductDto dto, BindingResult result) {
        if (result.hasErrors()) {
            for (Object object : result.getAllErrors()) {
                if (object instanceof FieldError fieldError) {
                    return new ResponseDto();
                }
            }
        }
        return new ResponseDto();
    }

    @GetMapping("")
    @ResponseBody
    public ResponseDto list(ModelMap model) {
        return new ResponseDto(
                "", "", "", "USER_NO_EXIST"
        );
    }
}
