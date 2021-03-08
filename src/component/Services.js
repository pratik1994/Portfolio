import React, { Component } from "react";
import Title from "./Title";
import { GiBookshelf, GiTechnoHeart, GiSandsOfTime } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiBookshelf />,
        title: "Education",
        info: "BTech: 78% from Govt. E.C.B, Bikaner",
        scoreSec: "In 10th scored 80%",
        scoreSrSec: "In 12th scored 68% from CBSE",
      },
      {
        icon: <GiSandsOfTime />,
        title: "Experience",
        info:
          "Total work ex. 4 years and currenty working with Enquero as Senior Software Developer since 2019, worked with Tech Mahindra as Software Engineer (2017-2019)",
      },
      {
        icon: <GiTechnoHeart />,
        title: "Tech Stack",
        info:
          "Javascript, React, React-Native , Xamarin (forms & android), Android (native), Node, AWS",
      },
      {
        icon: <FaBirthdayCake />,
        title: "Personal Background",
        info:
          "First cry 21-08-1994 brought up in Rajasthan, currently working in bangalore. Open to relocate. Hobbies: sketching, trekking",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Personal Information" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article ket={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                <p>{item.scoreSrSec}</p>
                <p>{item.scoreSec}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
