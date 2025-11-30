package com.example.taskmanagerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.taskmanagerbackend.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
