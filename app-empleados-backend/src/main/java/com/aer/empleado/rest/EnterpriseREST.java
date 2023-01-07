package com.aer.empleado.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aer.empleado.model.Enterprise;
import com.aer.empleado.service.EnterpriseService;

@RestController
@RequestMapping("/enterprise/")
public class EnterpriseREST {

	@Autowired
	private EnterpriseService enterpriseService;

	@GetMapping
	private ResponseEntity<List<Enterprise>> getAllEnterprises() {
		return ResponseEntity.ok(enterpriseService.findAll());
	}

}
