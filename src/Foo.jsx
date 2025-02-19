import React from "react"

const Foo = (props) => {
    const [count, setCount] = React.useState(0)
  return (

    <div>
        <h1> {props.message} </h1>
        <p> bienvenidos </p>
        <h2> esta es la cuenta {count}</h2>
        <button onClick={()=>{setCount(count+1)}}> aumentar </button>
        <br />
        <button onClick={()=>{setCount(count-1)}}> disminuir </button>
    </div>    
  )
}

export default Foo