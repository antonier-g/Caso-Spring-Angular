package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.DepartamentEmployee;

public interface DepartamentEmployeeRepository extends JpaRepository<DepartamentEmployee, Long> {

}
