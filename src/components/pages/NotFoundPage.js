import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="App">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;