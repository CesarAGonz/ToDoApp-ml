import { Request, Response } from 'express'
import { db } from '../config/database'
import { Task } from '../models/task.model'

export const getTasks = async (req: Request, res: Response) => {
  try {
    const [tasks] = await db.query('SELECT * FROM tasks WHERE userId = ?', [req.userId])
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error })
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask: Task = { ...req.body, userId: req.userId }
    await db.query('INSERT INTO tasks SET ?', [newTask])
    res.status(201).json({ message: 'Task created' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error })
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id
    const updatedTask: Task = req.body
    await db.query('UPDATE tasks SET ? WHERE id = ? AND userId = ?', [updatedTask, taskId, req.userId])
    res.json({ message: 'Task updated' })
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id
    await db.query('DELETE FROM tasks WHERE id = ? AND userId = ?', [taskId, req.userId])
    res.json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error })
  }
}
