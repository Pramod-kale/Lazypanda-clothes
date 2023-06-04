import './spinner.scss'
import React from 'react'

const Spinner = ({ height, width }) => {
    return (

        <div style={{ height, width }} className="spinner-container">
            <div style={{ height, width }} className="spinner">

            </div>
        </div>
    )
}

export default Spinner