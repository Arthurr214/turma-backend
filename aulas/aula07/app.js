var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

const tarefas = [];

// Listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    nome: req.body.nome,
    concluida: false,
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// Buscar tarefa por id
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tarefa = tarefas.find(t => t.id === id);

  if (tarefa) {
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
});

module.exports = app;
