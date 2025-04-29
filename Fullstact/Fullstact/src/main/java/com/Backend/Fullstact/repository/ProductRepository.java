package com.Backend.Fullstact.repository;

import com.Backend.Fullstact.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // ✅ Fetch products by exact category name ('mens', 'womens', etc)
    @Query(value = "SELECT p.* FROM products p JOIN categories c ON p.category_id = c.id WHERE c.name = :categoryName", nativeQuery = true)
    List<Product> findByCategoryName(@Param("categoryName") String categoryName);

}
