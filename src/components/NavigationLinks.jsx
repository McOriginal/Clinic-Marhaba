import classes from '../css/Navigation.module.css'
import logo from '../images/logo-clinic.png';
import { NavLink } from "react-router-dom";


function NavigationLinks(){

    return(
        <>
        {/* <div className={classes.box}> */}
         <nav className={classes.nav_box}>
            <div className={classes.box_logo}>
            <img src={logo} alt="logo" />
            <h1 className={classes.nav__title}>Santé <span>Marhaba</span></h1>
            </div>
            <ul>
                <li>
                    <NavLink to='/' className={(({isActive}) => isActive ? classes.active : undefined)} end>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/apropos' className={(({isActive} )=> isActive ? classes.active : undefined)} end>A propos</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={(({isActive}) => isActive ? classes.active : undefined)} end>Contacts</NavLink>
                </li>
            </ul>
        <div className={classes.btn__box}>
        <button className='btn'>Connexion</button>
        <button className='btn'>S'inscrire</button>

        </div>
        </nav>
      {/* </div> */}
       </>
    );
}


export default NavigationLinks;