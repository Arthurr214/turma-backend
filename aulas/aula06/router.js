const router = express.Router();

router.get('/', (req, res) => {
   res.send("listar as tarefas")
});

router.post('/', (req, res) => {
   res.status(201).send("Tarefa criada com sucesso");
   console.log(req.body); 
});

router.put('/:id', (req, res) => {
   const { id } = req.params;
   if (id == 1) return res.send("Tarefa atualizada");
   res.status(404).send("Tarefa nao encontrada");
});

router.delete('/', (req, res) => {
   const { id } = req.params;
   if (id == 1) return res.status(204).end();
   throw Error ("Tarefa nao encontrada");

});

module.exports = router;