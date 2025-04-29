package com.Backend.Fullstact.service;


import com.Backend.Fullstact.model.Product;
import com.Backend.Fullstact.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Fetch all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Add a new product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Method to add bulk products
    public List<Product> addBulkProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }

    // Fetch products by category name
    public List<Product> getProductsByCategoryName(String categoryName) {
        return productRepository.findByCategoryName(categoryName);
    }


    // Fetch a product by its ID
    public Product getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    // Update an existing product
    public Product updateProduct(Long id, Product productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setProductName(productDetails.getProductName());
            existingProduct.setPrice(productDetails.getPrice());
            existingProduct.setProductImage(productDetails.getProductImage());
            existingProduct.setCategoryId(productDetails.getCategoryId());
            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }

    // Delete a product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
