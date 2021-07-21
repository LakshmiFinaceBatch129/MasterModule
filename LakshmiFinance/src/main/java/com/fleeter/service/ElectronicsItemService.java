package com.fleeter.service;
import java.util.List;
import com.fleeter.entities.master.ElectronicsItem;

public interface ElectronicsItemService {

	void saveItem(ElectronicsItem item);

	List<ElectronicsItem> getAllItems();

	ElectronicsItem getItem(int id);

	void updateItem(ElectronicsItem item);

	void deleteItem(int id);
}
