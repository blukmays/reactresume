import React from 'react'
import ReactDOM from 'react-dom'
import Potato from './resume.jsx'

class IndexComponent extends React.Component {
    render() {
        return(

            <div>

                <Potato />
                <div></div>

            </div>

        )
    }
}

ReactDOM.render(<IndexComponent />, document.getElementById("root"))