import React from 'react'
import {render} from 'react-dom'

const App = () => {
    return(
        <h1>My App</h1>
    )
}

render(
    <App/>,
    document.getElementById('root'),
    () => console.log('rendered')
)