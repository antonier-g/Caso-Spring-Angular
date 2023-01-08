package com.aer.empleado.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aer.empleado.excepciones.ResourceNotFoundException;
import com.aer.empleado.model.Employee;
import com.aer.empleado.service.EmployeeService;

/**
 * Clase para exponer los servicios de employee y los puedan consumir desde el front
 */
@RestController
@RequestMapping("/employee/")
public class EmployeeREST {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping
	private ResponseEntity<List<Employee>> getAllEmployees() {
		return ResponseEntity.ok(employeeService.findAll());
	}

	@PostMapping
	private ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
		try {
			Employee employeeSave = employeeService.save(employee);
			return ResponseEntity.created(new URI("/employee/" + employeeSave.getId())).body(employeeSave);
		} catch (URISyntaxException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@GetMapping("{id}")
	private ResponseEntity<Employee> getDepartamentById(@PathVariable("id") Long idEmployee) {
		Employee employee = employeeService.findById(idEmployee)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con ID: " + idEmployee));
		return ResponseEntity.ok(employee);
	}

	@PutMapping("{id}")
	private ResponseEntity<Employee> updEmployee(@PathVariable("id") Long idEmployee,
			@RequestBody Employee detEmployee) {
		Employee employee = employeeService.findById(idEmployee)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con ID: " + idEmployee));

		employee.setName(detEmployee.getName());
		employee.setStatus(detEmployee.getStatus());
		employee.setAge(detEmployee.getAge());
		employee.setEmail(detEmployee.getEmail());
		employee.setPosition(detEmployee.getPosition());
		employee.setSurname(detEmployee.getSurname());

		Employee employeeUpd = employeeService.save(employee);

		return ResponseEntity.ok(employeeUpd);
	}

}
