import './App.css';

import {useState, useEffect} from 'react';
//* Bibliotecas de ícones
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs';

//* Url da api do json server
const API = "https://5000-jezielalmei-dotnetexemp-strnan0wuj3.ws-us69.gitpod.io";
// const API = "http://localhost:5000"

function App() {

  //* States do título do todo e do tempo do todo
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  //* State da lista (array) de todos
  const [todos, setTodos] = useState([]);
  //* State de loading (antes de mostrar o conteúdo)
  const [loading, setLoading] = useState(false);


  //? Carrega os to-dos na página
  useEffect(() => {
    const loadData = async() => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);
    };

    loadData();
  }, []);

  //? Função que envia os to-dos para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    //* Envio para a API
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //* Adiciona o to-do na lista sem precisar recarregar a página
    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  }

  //? Função que exlcui uma to-do
  const handleDelete = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE"
    });

    //* Apaga da lista de to-dos o to-do que acabamos de excluir
    //* Deixa na lista somente os to-dos com id diferente do excluído
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  } 

  //? Função que marca um to-do como concluído
  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)));
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        
        <h2>Insira a sua próxima tarefa:</h2>
        {/* Formulário para a entrada dos dados */}
        <form onSubmit={handleSubmit}>
          
          <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input 
              type="text" 
              name="title" 
              placeholder='Título da tarefa' 
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='time'>Duração:</label>
            <input 
              type="text" 
              name="time" 
              placeholder='Tempo estimado (em horas)' 
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>

          <input type="submit" value="Criar tarefa" />
        </form>

      </div>
      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        {loading === true && <p className='informacao'>Carregando...</p>}
        {todos.length === 0 && loading === false && <p className='informacao'>Não há tarefas!</p>}
        {/* Iterando na lista de to-dos recebidas */}
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time} {todo.time > 1 ? 'horas' : 'hora'}</p> 
            <div className='actions'>
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
