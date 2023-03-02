package kanhaiyakumar.me.repository;

import kanhaiyakumar.me.entity.product.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "countries", path = "countries")
@CrossOrigin("*")
public interface CountryRepository extends JpaRepository<Country, Integer> {



}
