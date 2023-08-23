import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
        <h1>ERROR: Page Not Found :/</h1>
        <h3>Redirect to Home: <Link to="/"> Home Page </Link> </h3>
    </div>
  )
}

export default PageNotFound;