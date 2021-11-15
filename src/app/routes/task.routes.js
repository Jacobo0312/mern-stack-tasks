const express=require('express')
const router =express.Router()

const Task=require('../models/task')

//Show all tasks
router.get('/',async(req,res)=>{

    const tasks =await Task.find()
    res.json(tasks)
    
})


//Show one task
router.get('/:id',async(req,res)=>{

    const task = await Task.findById(req.params.id)
    res.json(task)
    
})

//Create new task
router.post('/',async(req,res)=>{
    const {tittle,description}=req.body
    const task=new Task ({tittle,description})
    console.log(task)
    await task.save()
    res.json({"status":"Tarea guardada"})
       
})


//Update task
router.put('/:id',async(req,res)=>{

    const {tittle,description}=req.body
    const newTask = {tittle,description}
    await Task.findByIdAndUpdate(req.params.id,newTask)

 
    res.json({"status":"Tarea actualizada"})
       
})

//Delete task
router.delete('/:id',async(req,res)=>{

    const {tittle,description}=req.body
    const newTask = {tittle,description}
    await Task.findByIdAndDelete(req.params.id,newTask)

 
    res.json({"status":"Task delete"})
       
})


module.exports  =router;