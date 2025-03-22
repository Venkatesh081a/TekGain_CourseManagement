package com.cms.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cms.model.Associate;


@Repository  
public interface AssociateRepository  extends MongoRepository<Associate, String>{

	

	Optional<Associate> findByAssociateId(String associateId);

}
