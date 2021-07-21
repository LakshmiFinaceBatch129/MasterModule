package com.fleeter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fleeter.entities.master.ElectronicsItem;
import com.fleeter.service.ElectronicsItemService;

@RestController
@CrossOrigin("*")
@RequestMapping("/electronicsItem")
public class ElectronicsItemController {

	@Autowired
	ElectronicsItemService es;
	
	@PostMapping("/")
	public String saveElectronicsItem(@RequestBody ElectronicsItem electronicsItem)
	{
		es.saveItem(electronicsItem);
		return "Item saved";
	}
	@GetMapping("/")
	public List<ElectronicsItem> getAllElectronicsItem()
	{
		return es.getAllItems();
	}
	@GetMapping("/{id}")
	public ElectronicsItem getElectronicsItem(@PathVariable("id")int id)
	{
		return es.getItem(id);
	}
	@DeleteMapping("/{id}")
	public String deleteElectronicsItem(@PathVariable("id")int id)
	{
		es.deleteItem(id);
		return "Item Deleted";
	}
	@PutMapping("/")
	public String updateElectronicsItem(@RequestBody ElectronicsItem electronicsItem)
	{
		es.updateItem(electronicsItem);
		return "Item updated";
	}
}
