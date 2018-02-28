import React from 'react'
import './resume.css'
import Blu from './blu.jpg'
import Objective from './objective.svg'
import Cap from './cap.png'
import Experience from './experience.png'
import Skills from './skills.png'
import Helio from './helio.jpg'
import Linkedin from './linkedin.png'
import Email from './email.svg'
import Phone from './phone.png'
import Sailormoon from './sailormoon.jpg'
import Cu from './cu.png'
import Helio1 from './helio.png'

export default class Resume extends React.Component {
    render(){
        return(
            <div>
                {/*<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">*/}
                <div class="header"><img src={Sailormoon} alt="sailormoon"/> <h1 id="name1">Blu Mays</h1></div>
                <div class="main-cont">


                    <div class="left">
                        <img className="image" src={Blu} alt="blu"/>




                        {/*<h3 id="name">Blu Mays</h3>*/}
                        <h3><img className="cap" src={Email} alt="email"/> blukmays@gmail.com</h3>
                        <h3><img className="cap" src={Phone} alt="phone"/> 303-668-5652</h3>
                        <h3><img className="cap" src={Linkedin} alt="linkedin"/> <a href="https://www.linkedin.com/in/blukmays/">Linked In</a></h3>
                    </div>

                   <div class="right">
                       <h2 class="topic"><img className="cap" src={Objective} alt="objective"/> Objective</h2>
                       <p>Current Helio Training student pursuing career in Full Stack Web Development</p>

                       <h2 class="topic"><img className="cap" src={Experience} alt="Experience"/> Experience</h2>
                       <h3>Chase Bank | Denver,CO| June 2017-Jan 2018</h3>
                       <h4>Lead Teller Operation Specialist</h4>
                       <ul>
                           <li>Accurately managed customers' transaction, including check cashing, account deposits and withdrawals</li>
                           <li>Provided guidance and workflow directions to tellers in the area of transactions, referrals and services.</li>
                           <li>Took on several duties outside of role such as daily sales success planner, ATM custodial duties, and training.</li>
                       </ul>

                       <h3>Enterprise Rent A Car | Denver,CO| Oct 2016-June 2017</h3>
                       <h4>Management Trainee</h4>
                       <ul>
                           <li>Assisted in managing, maintaining, and renting over 2 million dollars of vehicle assets and inventoried vehicles daily</li>
                           <li>Strategically marketed Enterprise by attracting new corporate and retail accounts, overseeing body shop and dealership accounts as well as insurance accounts</li>
                       </ul>

                       <h3>Wells Fargo Bank | Boulder,CO| Aug 2015-Aug 2016</h3>
                       <h4>Lead Teller</h4>
                       <ul>
                           <li>Provided account services to customers by receiving deposits and loan payments, cashing checks, selling cashiers checks, selling and buying foreign currency</li>
                           <li>Cross sold banking products by answering inquiries, introducing customers to new products and services and ascertaining customers' needs</li>
                       </ul>

                       <h2 class="topic"><img className="cap" src={Cap} alt="Cap"/>Education</h2>
                       <h3><img className="edu" src={Cu}  alt="Cu"/>  University of Colorado Boulder</h3>
                       <p>B.A Psychology</p>
                       <p>Aug 2011-May 2014</p>
                       <h3><img className="edu" src={Helio1} alt="helio1"/> Helio Training</h3>
                       <p>Feb 2018-May 2018</p>


                       <h2><img className="cap" src={Skills} alt="Skills"/> Skills</h2>
                       <p>Front End Development: HTML,CSS,JavaScript,CSS</p>
                       <p>Back End Development: Redux, Hapi, MySQL </p>



                   </div>



                </div>

                <div id="footnote">
                    <div id="project"><h1>Projects</h1></div>


                    <div id="box1">
                    <div id="badge"><img className="projects" src={Helio} alt="nameBadge"/></div>

                    <div className="hello"><h2>Coming Soon...</h2></div>
                    </div>

                    <div id="box2">
                        <div id="badge"><img className="projects" src={Helio} alt="helio"/></div>
                        <div className="hello"><h2 >Coming Soon...</h2></div>
                    </div>

                    <div id="box3">
                        <div id="badge"><img className="projects" src={Helio} alt="helio"/></div>
                        <div className="hello"><h2 >Coming Soon...</h2></div>
                    </div>





                </div>

            </div>
        )
    }
}