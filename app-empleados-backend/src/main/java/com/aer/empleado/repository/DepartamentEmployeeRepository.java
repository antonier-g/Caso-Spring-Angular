package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.DepartamentEmployee;


/**
 * Interfaz que contiene los metodos para gestionar todas las operaciones de persistencia contra la tabla departaments_employees de la base de datos
 */
public interface DepartamentEmployeeRepository extends JpaRepository<DepartamentEmployee, Long> {

}
