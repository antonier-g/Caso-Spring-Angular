package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Departament;

/**
 * Interfaz que contiene los metodos para gestionar todas las operaciones de persistencia contra la tabla departaments de la base de datos
 */
public interface DepartamentRepository extends JpaRepository<Departament, Long> {

}
