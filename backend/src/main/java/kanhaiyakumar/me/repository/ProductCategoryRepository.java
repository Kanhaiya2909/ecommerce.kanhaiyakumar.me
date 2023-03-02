package kanhaiyakumar.me.repository;

import kanhaiyakumar.me.entity.product.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product_category")
@CrossOrigin("*")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
