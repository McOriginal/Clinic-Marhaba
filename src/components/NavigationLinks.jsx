import { NavLink } from "react-router-dom";


function NavigationLinks(){

    return(
        <nav>
            <h1>Santé Marhaba</h1>
            <ul>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/service'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contacts</NavLink>
                </li>
            </ul>
            <button>Connexion</button>
            <button>S'inscrire</button>
        </nav>
    );
}


export default NavigationLinks;