import React from 'react'

function Productos(props) {
return (

<li>
    <button class="btn" type="button">
        <h3>{props.name}</h3>
    </button>
</li>

)
}

export default Productos