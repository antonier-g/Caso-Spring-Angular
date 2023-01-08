package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Employee;

/**
 * Interfaz que contiene los metodos para gestionar todas las operaciones de persistencia contra la tabla employees de la base de datos
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
