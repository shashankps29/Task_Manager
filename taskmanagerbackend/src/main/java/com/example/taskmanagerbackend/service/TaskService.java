package com.example.taskmanagerbackend.service;

import com.example.taskmanagerbackend.model.Task;
import com.example.taskmanagerbackend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAll() {
        return repo.findAll();
    }

    public Task add(Task task) {
        return repo.save(task);
    }

    public Task update(Long id, Task updated) {
        Task t = repo.findById(id).orElseThrow();
        t.setTitle(updated.getTitle());
        t.setDescription(updated.getDescription());
        t.setStatus(updated.getStatus());
        return repo.save(t);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
