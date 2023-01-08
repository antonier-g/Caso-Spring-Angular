package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Enterprise;

/**
 * Interfaz que contiene los metodos para gestionar todas las operaciones de persistencia contra la tabla enterprises de la base de datos
 */
public interface EnterpriseRepository extends JpaRepository<Enterprise, Long> {

}
