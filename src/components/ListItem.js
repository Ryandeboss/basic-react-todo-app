

function ListItem({todo, deleteItem}){

  const handleDelete = () => {
    deleteItem(todo.id);        
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

