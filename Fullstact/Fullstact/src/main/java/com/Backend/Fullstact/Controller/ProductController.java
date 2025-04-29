package com.Backend.Fullstact.Controller;

import com.Backend.Fullstact.model.Product;
import com.Backend.Fullstact.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3001")
public class ProductController {

    @Autowired
    private ProductService productService;

    // ✅ Fetch all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // ✅ Fetch products by category name (NEW)
    @GetMapping("/category/{categoryName}")
    public List<Product> getProductsByCategory(@PathVariable String categoryName) {
        return productService.getProductsByCategoryName(categoryName);
    }

    // ✅ Add a single product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    // ✅ Add multiple products
    @PostMapping("/bulk")
    public List<Product> addBulkProducts(@RequestBody List<Product> products) {
        return productService.addBulkProducts(products);
    }

    // ✅ Get product by id
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // ✅ Update a product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    // ✅ Delete product by id
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
