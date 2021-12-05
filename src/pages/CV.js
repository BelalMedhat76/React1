import react from "react";
import me from './m/me1.jpeg';
class CV extends react.Component{
render(){
    return(
<div>

<section className="left">
        <div className="leftSection">
            <div className="img1">
                <img className="me" src={me} />
                <p className="name">belal medhat</p>
            </div>
            <div className="identifier">
                <br />
                <i id="front" className="fas fa-anchor"> </i>
                <span className="front">Front end Web Developer</span>
                    <br />
                    <br />

                    <i  id="front" className="fas fa-home"></i>
                   
                <span className="front" >Egypt</span>
                <br />
                <br /> 
                <a href="mailto:belalmedhat0102@gmail.com">
                    <i className="fas fa-envelope-square"></i> belalmedhat0102@gmail.com
                </a>

                <a href="tel:01026654990">
                    <i className="fas fa-phone"></i> 01026654990</a>
            </div>
            <hr />
            <div className="skill">
                <p>Skills</p>
                <p>Adobe Photoshop </p>
                <div className="x">
                    <div className="y">90%</div>
                </div>
                <p>Design</p>
                <div className="x">
                    <div className="z">50%</div>
                </div>
                <p>Illustrator</p>
                <div className="x">
                    <div className="a">60%</div>
                </div>
                <p>Media</p>
                <div className="x">
                    <div className="f">20%</div>
                </div>

                <div className="lang">
                    <p>languages</p>

                    <p>Arabic</p>
                    <div className="m">
                        <div className="r">100%</div>
                    </div>

                    <p>English</p>
                    <div className="x">
                        <div className="z">50%</div>
                    </div>

                    <p>French</p>
                    <div className="x">
                        <div className="f">20%</div>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <section className="right ">

        <div className="rightSection1 ">
            <i className="fas fa-briefcase "></i>
            <h1> Work Experiece </h1>
            <br />
            <p>Front End Web Developer</p>
            <p>Jun 2015</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora totam vitae expedita, doloremque, vel nesciunt accusamus mollitia minima dolores tempore sunt nostrum et adipisci vero ipsa rem in consequatur?
            </p>
            <hr />



            <p>WEb Developer / somthing.com</p>
            <p>Jun 2018- Dec 2020</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora totam vitae expedita, doloremque, vel nesciunt accusamus mollitia minima dolores tempore sunt nostrum et adipisci vero ipsa rem in consequatur?
            </p>
            <hr  />



            <p>Graphic Designer</p>
            <p>Jun 2019- Mar 2020</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>



        </div>
        <div className="rightSection2 ">
            <i  className="fas fa-user-graduate"></i>
            <h1 >Education</h1>
            <br />
            <p>Faculty Of Computer Science</p>
            <p>Oct 2018- Jul 2023</p>
            <p>Web develper </p>
            <p>Database Oracle Sql</p>
            <hr />
            <p>Faculty Of Computer Science</p>
            <p>Oct 2018- Jul 2023</p>
            <p>Web develper </p>
            <p>Database Oracle Sql</p>
            <hr />
            <p>Faculty Of Computer Science</p>
            <p>Oct 2018- Jul 2023</p>
            <p>Web develper </p>
            <p>Database Oracle Sql</p>

        </div>

    </section>
    <div className="footer ">
        <div className="fo ">Footer</div>
    </div>
</div>

    );
}

}
export default CV;