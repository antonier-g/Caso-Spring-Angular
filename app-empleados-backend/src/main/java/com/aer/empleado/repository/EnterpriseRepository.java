package com.aer.empleado.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aer.empleado.model.Enterprise;

public interface EnterpriseRepository extends JpaRepository<Enterprise, Long> {

}
