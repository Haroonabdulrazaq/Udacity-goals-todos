const List =(props)=> {
  return(
    <ul>
      {props.items.map((item)=> (
        <li key={item.id}><span onClick={()=> props.toggleTodo && props.toggleTodo(item.id)}
          style={{textDecoration:item.completed? 'line-through' : 'none'}}>{item.name}</span>
          <button onClick={()=> props.removeItem(item)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default List;