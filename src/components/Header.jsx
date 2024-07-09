
import classes from '../css/Header.module.css';
import docteurImg from '../images/docteur.png'
import { useRef } from 'react';
import ShowDialogue from './ShowDialogue';


function Header(){

    const dialog = useRef();

    function ShowDialogHandle(){
        dialog.current.open();
    }


    return(
        <>
        <ShowDialogue title="Nos salles de soins" ref={dialog} />
        <header >
            <div className={classes.header__container}> 
                <div className={classes.header__containte}>
                    <p className={classes.p1}>Rejoignez-nous</p>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                    <p className={classes.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam eum est. Voluptatum, autem. Temporibus explicabo quas assumenda illo eveniet ab sed dicta dolores ut veritatis! Molestiae unde ipsa, et quisquam perferendis ut itaque.</p>

                    <button className='btn'>Prendre un rendez-vous</button>
                    <button onClick={ShowDialogHandle} className='btn'>Voire nos salles</button>
                </div>

                <div className={classes.box_img}>
                    <img src={docteurImg} alt="docteur" />
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;