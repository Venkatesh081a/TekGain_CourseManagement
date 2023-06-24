package com.cms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.exception.AssociateInvalidException;
import com.cms.model.Associate;
import com.cms.repository.AssociateRepository;

@Service
public class AssociateServiceImpl implements IAssociateService{
	
	@Autowired
	private AssociateRepository associateRepository;
	
	
	public Associate addAssociate(Associate cObj) throws AssociateInvalidException {
		Optional<Associate> associate = associateRepository.findByAssociateId(cObj.getAssociateId());
		if(associate.isPresent()) {
			throw new AssociateInvalidException("AssociateId already exists");
		}
		Associate asso = associateRepository.save(cObj);
		return asso;
	}

	public Associate viewByAssociateId(String associateId) throws AssociateInvalidException {
		Optional<Associate> associate = associateRepository.findByAssociateId(associateId);
		if(associate.isPresent()) {
			Associate viewByAssociateId = associate.get();
			return viewByAssociateId;
		}
		throw new AssociateInvalidException("Associate Id does not exist");
	}

	public Associate updateAssociate(String associateId, String associateEmailId)throws AssociateInvalidException {
		Optional<Associate> associate = associateRepository.findByAssociateId(associateId);
		if(associate.isPresent()) {
			Associate updateAssociate = associate.get();
			updateAssociate.setAssociateEmailId(associateEmailId);
			associateRepository.save(updateAssociate);
			return updateAssociate;
		}
		throw new AssociateInvalidException("AssociateId does not exists");
	}

	
	public List<Associate> viewAll() {
		List<Associate> associate = associateRepository.findAll();
			return associate;
	}

}

