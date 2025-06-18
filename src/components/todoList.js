import ListItem from "./ListItem"
import TodoEntry from "./ItemEntry";

import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';


function TodoList(){

    const [data, setData] = useState([]);
    const [componentChanged, setComponentChanged] = useState(false);
    
    // collect db data to fill out the pre-existing list-items
    useEffect(() => {

    async function fetchData() {
        const { data, error } = await supabase.from('todos').select('*');
        if (error) console.error('Supabase fetch error:', error);
        else setData(data);
        setComponentChanged(false)
    }
    fetchData();
    }, [componentChanged]);


    // function to add (add event-listener)
    const addItem = async (item) => {
        const {error} = await supabase.from('todos').insert([{task: item}]);
        if (error) console.error('Add error:', error);
        else setComponentChanged(true);
        
    };
        

    // function to delete (add event-listener)
    const deleteItem = async (id) => {
        const {error} = await supabase.from('todos').delete().eq('id',id)
        if (error) console.error('Delete error:', error);
        else setComponentChanged(true)
            
    }

    return(
        <div className="box">
            <h1>
                To Do List
            </h1>
        <div className="spacer"></div>

        <div className="items-wrapper">
        {/* will have a forEach or map statment based on the results for the db, which will be passed as props to these listItems */
        data.map(todo =>(
            <ListItem
            key = {todo.id}
            todo = {todo}
            deleteItem = {deleteItem}
            />
        ))}



        </div>

        <TodoEntry
        addItem = {addItem} />

        <div className="spacer"></div>

                
        </div>
    )
}

export default TodoList