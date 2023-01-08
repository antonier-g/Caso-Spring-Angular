package com.aer.empleado.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


/**
 * Clase que representa un objeto de persistencia de la tabla enterprises de la base de datos 
 */
@Entity
@Table(name = "enterprises")
public class Enterprise {

	@Id
	@SequenceGenerator(name = "ENTERPRISE_ID_GENERATOR", sequenceName = "ENTERPRISES_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ENTERPRISE_ID_GENERATOR")
	private Long id;
	private String create_by;
	private Date create_date;
	private String modified_by;
	private Date modified_date;
	private String status;
	private String address;
	private String name;
	private String phone;

	public Enterprise() {

	}

	public Enterprise(String create_by, Date create_date, String modified_by, Date modified_date, String status,
			String address, String name, String phone) {
		super();
		this.create_by = create_by;
		this.create_date = create_date;
		this.modified_by = modified_by;
		this.modified_date = modified_date;
		this.status = status;
		this.address = address;
		this.name = name;
		this.phone = phone;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCreate_by() {
		return create_by;
	}

	public void setCreate_by(String create_by) {
		this.create_by = create_by;
	}

	public Date getCreate_date() {
		return create_date;
	}

	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}

	public String getModified_by() {
		return modified_by;
	}

	public void setModified_by(String modified_by) {
		this.modified_by = modified_by;
	}

	public Date getModified_date() {
		return modified_date;
	}

	public void setModified_date(Date modified_date) {
		this.modified_date = modified_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
