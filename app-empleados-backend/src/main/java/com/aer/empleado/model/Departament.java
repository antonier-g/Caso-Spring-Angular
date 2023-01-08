package com.aer.empleado.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

/**
 * Clase que representa un objeto de persistencia de la tabla departaments de la base de datos 
 */
@Entity
@Table(name = "departaments")
public class Departament {

	@Id
	@SequenceGenerator(name = "DEPARTAMENT_ID_GENERATOR", sequenceName = "DEPARTAMENTS_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "DEPARTAMENT_ID_GENERATOR")
	private Long id;
	private String create_by;
	private Date create_date;
	private String modified_by;
	private Date modified_date;
	private String status;
	private String description;
	private String name;
	private String phone;

	@ManyToOne
	@JoinColumn(name = "id_enterprise")
	private Enterprise enterprise;

	public Departament() {

	}

	public Departament(String create_by, Date create_date, String modified_by, Date modified_date, String status,
			String description, String name, String phone, Enterprise enterprise) {
		super();
		this.create_by = create_by;
		this.create_date = create_date;
		this.modified_by = modified_by;
		this.modified_date = modified_date;
		this.status = status;
		this.description = description;
		this.name = name;
		this.phone = phone;
		this.enterprise = enterprise;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public Enterprise getEnterprise() {
		return enterprise;
	}

	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}

}
