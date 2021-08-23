const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.get('/todos', async (req, res, next) => {
  try {
    const todos = await Todo.find({}, 'action')
    res.json(todos)
  } catch (err) {
    next(err)
  }
})

router.post('/todos', async (req, res, next) => {
  if (!req.body.action) {
    res.json({
      error: "The input field is empty"
    })
    return;
  }
  try {
    const todo = await Todo.create(req.body)
    res.json(todo)
  } catch (err) {
    next(err)
  }
})

router.delete('/todos/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id })
    if (todo) {
      res.json(todo)
    } else {
      res.json({
        error: "The todo is not exists"
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router