import AboutBox from "../components/AboutBox";
import TeamBox from "../components/TeamBox";
import TextWrap from "../components/TextWrap";
import WhyChooseUs from "../components/WhyChooseUs";


function Apropos(){

    return (
        <>
        <AboutBox />
        <section className="apropos">
         <TextWrap />
         <TeamBox />
         <WhyChooseUs />
        </section>
        </>
    );
}


export default Apropos;