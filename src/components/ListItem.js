

function ListItem({todo, deleteItem}){

  const handleDelete = () => {
    deleteItem(todo.id);        // 👈 delete based on the todo's ID
  };

    return(
    <div className="list-items-cell">
        
        <input type="checkbox" onClick={handleDelete}></input>
        <p>
            {todo.task}
        </p>
    </div>

)
}

export default ListItem


// import './App.css';
// import TodoList from "./components/todoList"



// function App() {




//   return (
//     <div>
//       <TodoList />
//     </div>
  
//   );
// }

// export default App;