package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Departament;

public interface DepartamentRepository extends JpaRepository<Departament, Long> {

}
