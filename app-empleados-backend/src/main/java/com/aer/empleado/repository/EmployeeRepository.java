package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
