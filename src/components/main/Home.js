import "/Users/mantis/Desktop/testapp/src/styles/main.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPython,
    faTwitter,
    faFacebook,
    faAndroid,
    faApple,
    faBitcoin,
    faDiscord,
    faHtml5,
    faJsSquare,
    faLinux,
    faGithub } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used
import {faSquareCaretDown,faCode,faBrain,faDesktop,faGlasses,faBell,faBrush,faCamera,faGamepad,faNetworkWired,faMobile} from '@fortawesome/free-solid-svg-icons' 




function _home() {
    return ( 
    <div className="_main_ctrs_">
        <FontAwesomeIcon icon={faSquareCaretDown}  size="3x" className="toggle"/>
        <header className="mn_header">
            <ul className="main_header_list">
                <li id="hd_subtitle"><h3>Hello,</h3> </li>
                <li id="hd_title"><h1>My name is<br></br><span class='myname'>&#60;Mohamed/&#62;</span> Hassan</h1></li>
            </ul>
        </header>

        <section id="aboutme" className="aboutme">
            <div className="am_container">
                <Heading text="INTRODUCTION"/>
                <p>
                    industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
                
            </div>
        </section>

        <section id="skills" className="skills">
            <div className="s_container">
                <div className="skilllist">
                </div>
                <Heading text="SKILLS"/>
            </div>
        </section>

        <Projects/>
        
        
    </div> );
}

export default _home;



// const Contact =()=>{
//     return (
//     <section id="contact" className="contact">
//         <div className="c_container">
//             <div className="contact-me">
//                 <h2>
//                     CONTACT_ME
//                 </h2>
//                 <ContactForm/>
//             </div>
//             <div>

//             </div>
//         </div>
//     </section>);
// }






const Projects =()=>{
    return (
    <section id="projects" className="projects">
        <div className="p_container">
                <Heading text="PROJECTS"/>
                <div className="projectlist">

                </div>
        </div>
    </section>);
}



function Heading(props) {
    return (
    <div className="headings">
        <h2 >
            &#60;{props.text}/&#62;
        </h2>
        <IconsBG heading={props.text}/>
    </div>);
}






// background of the headings
function IconsBG(props) {
    let showlist = [];
    let icons = [faTwitter,
            faFacebook,
            faAndroid,
            faApple,
            faBitcoin,
            faDiscord,
            faHtml5,
            faJsSquare,
            faLinux,
            faGithub,
            faPython]

    let Hellos = ["Bonjour","Hola","寧浩","Salve","こんにちわ","Guten Tag","Olá","Здравствуйте","أهلا","नमस्ते","Kamusta","Χαίρετε","ഹലോ","Përshëndetje","Salve"]
    let Projects = [faCode,faBrain,faDesktop,faGlasses,faBell,faBrush,faCamera,faGamepad,faNetworkWired,faMobile]

            if(props.heading === "SKILLS")
            {
                for (let i = 0; i < icons.length; i++) {
                    showlist.push(<FontAwesomeIcon icon={icons[i]}  size="lg" className="ic_bg"/>);
                }
            }
            if(props.heading === "INTRODUCTION")
            {
                for (let i = 0; i < Hellos.length; i++) {
                    showlist.push(<span className="textbg">{Hellos[i]}</span>);
                }
            }
            if(props.heading === "PROJECTS")
            {
                for (let i = 0; i < Projects.length; i++) {
                    showlist.push(<FontAwesomeIcon icon={Projects[i]}  size="lg" className="ic_bg"/>);
                }
            }
            let n = 500;
            
    return (
        <div className="iconsbg">
            {[...Array(n)].map((e, i) =>showlist[Math.floor(Math.random()*icons.length)])}
        </div>
        )
}






// // Where is the circle
// let x, y;

// function setup() {
//   createCanvas(720, 400);
//   // Starts in the middle
//   x = width / 2;
//   y = height;
  
// }

// function draw() {
//   background(200);
//   let _text = [
//     "X","O","△","▢"
//   ]
//   var fadeAmount = 1
//   fade = 0
  
//   stroke(50);
//   fill(100);
//   frameRate(0.5);
//   stroke(random(0,255),random(0,255),random(0,255),fade)
//   textSize(random(20, 60));
//   text(random(_text), random(0, width), random(0, height));
//   if (fade<0) fadeAmount=1; 
 
//   if (fade>255) fadeAmount=-10; 
 
//   fade += fadeAmount; 


  
//   // Moving up at a constant speed
//   // y = y - 1;
  
//   // Reset to the bottom
// }