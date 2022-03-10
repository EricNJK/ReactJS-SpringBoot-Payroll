package com.c15.payroll.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repo) {
        this.employeeRepository = repo;
    }

    public void run(String... args) {
        employeeRepository.save(new Employee("Eric", "Njoroge", "Software developer"));
    }
}
