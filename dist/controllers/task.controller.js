"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const database_1 = require("../config/database");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header('Access-Control-Allow-Origin', '*');
    try {
        const [tasks] = yield database_1.db.query('SELECT * FROM tasks WHERE userId = ?', [req.userId]);
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header('Access-Control-Allow-Origin', '*');
    try {
        const newTask = Object.assign(Object.assign({}, req.body), { userId: req.userId });
        yield database_1.db.query('INSERT INTO tasks SET ?', [newTask]);
        res.status(201).json({ message: 'Task created' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header('Access-Control-Allow-Origin', '*');
    try {
        const taskId = req.params.id;
        const updatedTask = req.body;
        yield database_1.db.query('UPDATE tasks SET ? WHERE id = ? AND userId = ?', [updatedTask, taskId, req.userId]);
        res.json({ message: 'Task updated' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header('Access-Control-Allow-Origin', '*');
    try {
        const taskId = req.params.id;
        yield database_1.db.query('DELETE FROM tasks WHERE id = ? AND userId = ?', [taskId, req.userId]);
        res.json({ message: 'Task deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});
exports.deleteTask = deleteTask;
