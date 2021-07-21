package com.fleeter.service.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fleeter.entities.master.ElectronicsItem;
import com.fleeter.repository.ElectronicsItemRepository;
import com.fleeter.service.ElectronicsItemService;

@Service
public class ElectronicsItemServiceImpl implements ElectronicsItemService{

	@Autowired
	ElectronicsItemRepository er;
	
	@Override
	public void saveItem(ElectronicsItem item) {
		
		er.save(item);
		
	}

	@Override
	public List<ElectronicsItem> getAllItems() {
		
		return (List<ElectronicsItem>) er.findAll();
	}

	@Override
	public ElectronicsItem getItem(int id) {
		
		return er.findById(id).get();
	}

	@Override
	public void updateItem(ElectronicsItem item) {
	er.save(item);
		
	}

	@Override
	public void deleteItem(int id) {
		er.deleteById(id);
	}

}
