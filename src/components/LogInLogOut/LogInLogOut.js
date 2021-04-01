import { useState } from 'react';
import {Link} from 'wouter';

import './loginText.css';


export default function LogInLogOut(){
    const [login, setLogin] = useState(false);
    return (<>
        {
            login ?
            <Link to="/logout">
                <img className="login" alt="imagen de logout" src="https://img.icons8.com/fluent-systems-regular/48/ffffff/logout-rounded-left.png"/>
                {/* {setLogin(false)} */}
            </Link>
            :
            <Link to="/login">
                <img className="login" alt="imagen de login" src="https://img.icons8.com/fluent-systems-regular/48/ffffff/login-rounded-right.png"/>
            </Link>
        }
    </>);
    
}