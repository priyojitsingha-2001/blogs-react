import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page Cannot be found</p>
            <Link to='/'>Back to Home Page</Link>
        </div>
    )
}
