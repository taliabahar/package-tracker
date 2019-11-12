// import React, { useState } from 'react';

// export function TodoForm(props) {
//     const [value, setValue] = useState("")
//     const handleSubmit = e => {
//         e.preventDefault();
//         if(!value) {
//             return
//         };
//         props.addTodo(value);
//         setValue("");
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" className="input" placeholder="Add New To Do" value={value} onChange={e => setValue(e.target.value)}/> 
//         </form>
//     );
// }