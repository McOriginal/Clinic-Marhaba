import aboutImage from '../images/aboutImage.jpg';
import classes from '../css/AboutBox.module.css';

function AboutBox(){

    return(
        <>
        <section>
            <div className={classes.about__container}> 
                <div className={classes.about__containte}>
                    <p className={classes.p1}>Qui somme-nous</p>
                    <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p className={classes.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                    <button className='btn'>Prendre un rendez-vous</button>
                    <button className='btn'>Voire nos salles</button>
                </div>

                <div className={classes.box_img}>
                    <img src={aboutImage} alt="docteur" />
                    {/* <div className={classes.box__text}>
                    <h3> Avoir une santé de fer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, error.</p>
                </div> */}
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutBox;