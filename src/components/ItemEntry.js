import { useState } from "react";

function TodoEntry({ addItem }) {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim() !== '') {
      addItem(inputText);         // 👈 use the prop passed from parent
      setInputText('');           // Clear the input
    }
  };

  return (
    <div className="todo-entry">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="New task..."
        
      />
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default TodoEntry