
import docteurImg from '../images/docteur.png'

function Home(){

    return(
        <>
        <header>
            <div>
                <div>
                    <p>Rejoignez-nous</p>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem iusto repellat! Esse quasi id rem? Debitis laboriosam eum est. Voluptatum, autem. Temporibus explicabo quas assumenda illo eveniet ab sed dicta dolores ut veritatis! Molestiae unde ipsa, et quisquam perferendis ut itaque.</p>

                    <button>Prendre un rendez-vous</button>
                    <button>Voire nos salles</button>
                </div>

                <div>
                    <img src={docteurImg} alt="docteur" />
                </div>
            </div>
        </header>
        </>
    );
}

export default Home;