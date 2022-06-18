import React from 'react';
import {Link} from "react-router-dom";

const HelpPage = () => {
    return (
        <div className="help-page"
             style={{
                 fontSize: "2rem",
                 paddingBottom: "1rem",
             }}
        >
            <nav>
                <Link to='/'>Main</Link>
            </nav>
            If you want to get information on current weather and forecast in a given city, type the name into the search form.
        </div>
    );
};

export default HelpPage;
