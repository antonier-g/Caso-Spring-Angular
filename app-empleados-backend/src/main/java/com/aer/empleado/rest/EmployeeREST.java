package com.aer.empleado.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aer.empleado.model.Employee;
import com.aer.empleado.service.EmployeeService;

@RestController
@RequestMapping("/employee/")
public class EmployeeREST {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping
	private ResponseEntity<List<Employee>> getAllEmployees() {
		return ResponseEntity.ok(employeeService.findAll());
	}

}
