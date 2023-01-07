package com.aer.empleado.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aer.empleado.model.Departament;
import com.aer.empleado.service.DepartamentService;

@RestController
@RequestMapping("/departament/")
public class DepartamentREST {

	@Autowired
	private DepartamentService departamentService;

	@GetMapping
	private ResponseEntity<List<Departament>> getAllDepartaments() {
		return ResponseEntity.ok(departamentService.findAll());
	}

	@PostMapping
	private ResponseEntity<Departament> saveDepartament(@RequestBody Departament departament) {
		try {
			Departament departamentSave = departamentService.save(departament);
			return ResponseEntity.created(new URI("/departament/" + departamentSave.getId())).body(departamentSave);
		} catch (URISyntaxException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
}
