import { Link } from 'react-router-dom';

import './not-found-styles.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Page Not Found!</h1>
            <Link className="not-found__link" to="/">Go to the Homepage</Link>
        </div>
    )
}

export default NotFound 