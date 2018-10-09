import React from 'react'
import {render} from 'react-dom'

const App = () => (
        <div>
            <p>React app built with parcel, code in github, CICD with CircleCI, hosted on aws.</p>
        </div>
    )

render(<App />, document.querySelector('#root'));