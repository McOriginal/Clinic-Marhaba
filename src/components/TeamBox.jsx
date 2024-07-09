import classes from '../css/TeamBox.module.css'
import TeamCards from './TeamCards';

import docteur1 from '../images/docteur1.jpg'
import docteur2 from '../images/docteur2.jpg'
import docteur3 from '../images/docteur3.jpg'
import docteur4 from '../images/docteur4.jpg'

function TeamBox(){

    return(
        <>
        <section>
            <div className={classes.team__container}> 
                <div className={classes.team__containte}>
                    <p className={classes.p1}>Rejoignez-nous</p>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                    <p className={classes.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam eum est. Voluptatum, autem. Temporibus explicabo quas assumenda illo eveniet ab sed dicta dolores ut veritatis! Molestiae unde ipsa, et quisquam perferendis ut itaque.</p>

                </div>
                </div>

                <div className={classes.team_card_box}>
                <TeamCards
                image={docteur1}
                title="Dr.Cissé Youssouf"
                description="Infrimier Chef"
                />
                <TeamCards
                image={docteur2}
                title="Zeinab achraf"
                description="Sage Femme"
               
                />
                <TeamCards
                image={docteur3}
                title="Micheal douclas"
                description="Laboratain"
               
                />
                <TeamCards
                image={docteur4}
                title="Helena Bernadette"
                description="Infirmière Echographie"
                
                />

            </div>
        </section>
        </>
    );
}

export default TeamBox;