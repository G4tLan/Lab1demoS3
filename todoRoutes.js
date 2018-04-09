let route = express.Router();
let todoList = [];

router.get('/', function(req,res){
	res.send(path.join(__dirname, 'views', 'todo', 'index.html'));
});

router.get('/create', function(req,res){
	res.send(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req,res){
	res.send(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.get('/edit', function(req,res){
	res.send(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

module.exports = router;