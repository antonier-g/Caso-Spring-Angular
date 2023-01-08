package com.aer.empleado.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aer.empleado.model.DepartamentEmployee;
import com.aer.empleado.service.DepartamentEmployeeService;


/**
 * Clase para exponer los servicios de departaments_employees y los puedan consumir desde el front
 */
@RestController
@RequestMapping("/depemp/")
public class DepartamentEmployeeREST {

	@Autowired
	private DepartamentEmployeeService departamentEmployeeService;

	@GetMapping
	private ResponseEntity<List<DepartamentEmployee>> getAllDepEmps() {
		return ResponseEntity.ok(departamentEmployeeService.findAll());
	}

	@GetMapping("{id}")
	private ResponseEntity<List<DepartamentEmployee>> getAllDepartamentsByEmployee(
			@PathVariable("id") Long idEmployee) {
		return ResponseEntity.ok(departamentEmployeeService.findDepartamentsByEmployee(idEmployee));
	}
}
