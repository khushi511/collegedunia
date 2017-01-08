import React from 'react'
import {Splash, Card} from './splash.jsx'
import {WorkExperience} from './work-exp.jsx'
import {Contact} from './contact.jsx'
import {Footer} from './footer.jsx'
import "../scss/about.scss"

export class About extends React.Component{
	render(){
		return(
				<section className="about">
					<Splash bgImage=""/>
					<Card/>
					<WorkExperience/>
					<h2 className="heading">Contact us</h2>
					<Contact/>
					<Footer/>
				</section>
			)
	}
}
