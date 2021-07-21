package com.fleeter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.master.ElectronicsItem;

@Repository
public interface ElectronicsItemRepository extends CrudRepository<ElectronicsItem, Integer> {

}
