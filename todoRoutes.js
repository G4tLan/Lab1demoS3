let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = [];

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});

router.get('/create', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.get('/edit', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

//RESTful api
router.get('/api/list',function(req,res){
	res.json(todoList); //Respond with json
});

router.get('/api/get/:id',function(req,res){
	res.json(todoList[req.params.id]);
});

router.post('/api/create',function(req,res){
	console.log("creating a todo entry", req.body.todo); 
	todoList.push(req.body.todo);
	res.redirect(req.baseUrl+'/api/list');
});

router.post('/api/delete',function(req,res){
	console.log("deleting a todo entry"); 
	delete todoList[req.body.todo];
	res.redirect(req.baseUrl+'/api/list');
});

router.post('/api/edit',function(req,res){
	console.log("edit a todo entry"); 
});
module.exports = router;