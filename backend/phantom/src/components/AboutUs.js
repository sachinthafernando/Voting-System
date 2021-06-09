import React, { useEffect } from "react";
// IMPORTING SINGLE CONTAINER CHILDREN COMPONENT
import AboutDetailBox from "./AboutDetailBox";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORTING REACT-ICONS
import { GiCheckMark } from "react-icons/gi";

const AboutUs = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div id="about" className="AboutPageContainer">
      
			<div className="row">
				<div
					data-aos="fade-left"
					data-aos-duration="1200"
					data-aos-offset="350"
					className="col-lg-6 col-md-12"
				>
					<h1
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="AboutTitle"
					>
						We Are The Leading Support of Electronic Voting of Future
					</h1>
					
					<div
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="row"
					>
						<div className="col-6">
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Cryptography
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Private Cloud
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Accuracy
								</li>
							</ul>
						</div>
						<div
							data-aos="fade-left"
							data-aos-duration="500"
							data-aos-offset="350"
							className="col-6"
						>
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Control
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Visual Reviews
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Result Generation
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					data-aos="fade-right"
					data-aos-duration="500"
					data-aos-offset="350"
					className="AboutUS-RSideContainer col-lg-6 col-md-12"
				>
					<div className="row">
						<AboutDetailBox
							Quantity="4 Students"
							Detail="Web Development"
						/>
						<AboutDetailBox Quantity="React.js" Detail="Library for FrontEnd" />
						<AboutDetailBox Quantity="ASP.Net Core" Detail="BackEnd Development" />
						<AboutDetailBox
							Quantity="MySQL"
							Detail="Database Support"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;