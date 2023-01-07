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

@Entity
@Table(name = "departaments_employees")
public class DepartamentEmployee {

	@Id
	@SequenceGenerator(name = "DEPEMP_ID_GENERATOR", sequenceName = "DEPEMP_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "DEPEMP_ID_GENERATOR")
	private Long id;
	private String create_by;
	private Date create_date;
	private String modified_by;
	private Date modified_date;
	private String status;

	@ManyToOne
	@JoinColumn(name = "id_departament")
	private Departament departament;

	@ManyToOne
	@JoinColumn(name = "id_employee")
	private Employee employee;

	public DepartamentEmployee() {

	}

	public DepartamentEmployee(String create_by, Date create_date, String modified_by, Date modified_date,
			String status, Departament departament, Employee employee) {
		super();
		this.create_by = create_by;
		this.create_date = create_date;
		this.modified_by = modified_by;
		this.modified_date = modified_date;
		this.status = status;
		this.departament = departament;
		this.employee = employee;
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

	public Departament getDepartament() {
		return departament;
	}

	public void setDepartament(Departament departament) {
		this.departament = departament;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmploye(Employee employee) {
		this.employee = employee;
	}

}
