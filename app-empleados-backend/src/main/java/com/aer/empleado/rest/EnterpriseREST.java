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
import com.aer.empleado.model.Enterprise;
import com.aer.empleado.service.EnterpriseService;

/**
 * Clase para exponer los servicios de enterprise y los puedan consumir desde el front
 */
@RestController
@RequestMapping("/enterprise/")
public class EnterpriseREST {

	@Autowired
	private EnterpriseService enterpriseService;

	@GetMapping
	private ResponseEntity<List<Enterprise>> getAllEnterprises() {
		return ResponseEntity.ok(enterpriseService.findAll());
	}

	@PostMapping
	private ResponseEntity<Enterprise> saveDepartament(@RequestBody Enterprise enterprise) {
		try {
			Enterprise enterpriseSave = enterpriseService.save(enterprise);
			return ResponseEntity.created(new URI("/enterprise/" + enterpriseSave.getId())).body(enterpriseSave);
		} catch (URISyntaxException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@GetMapping("{id}")
	private ResponseEntity<Enterprise> getenterpriseById(@PathVariable("id") Long idEnterprise) {
		Enterprise enterprise = enterpriseService.findById(idEnterprise)
				.orElseThrow(() -> new ResourceNotFoundException("No existe la empresa con ID: " + idEnterprise));
		return ResponseEntity.ok(enterprise);
	}

	@PutMapping("{id}")
	private ResponseEntity<Enterprise> updEnterprise(@PathVariable("id") Long idEnterprise,
			@RequestBody Enterprise detEnterprise) {
		Enterprise enterprise = enterpriseService.findById(idEnterprise)
				.orElseThrow(() -> new ResourceNotFoundException("No existe la empresa con ID: " + idEnterprise));

		enterprise.setName(detEnterprise.getName());
		enterprise.setAddress(detEnterprise.getAddress());
		enterprise.setPhone(detEnterprise.getPhone());
		enterprise.setStatus(detEnterprise.getStatus());

		Enterprise enterpriseUpd = enterpriseService.save(enterprise);

		return ResponseEntity.ok(enterpriseUpd);
	}

}
