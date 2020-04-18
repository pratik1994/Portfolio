import React, { Component } from "react";
import defaultBcg from "../images/defaultImage.jpeg";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context";
import StyledHero from "../component/StyledHero";

export default class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
    static contextType = ProjectContext;
    render() {
        const {getProject}= this.context;
        const project=getProject(this.state.slug)
        console.log(project)
        if (!project) {
            return (
              <div className="error">
                <h3> no such Project could be found...</h3>
                <Link to="/projects" className="btn-primary">
                  back to Projects
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            techonology,
            size,
            client,
            domain,
            images
          } = project;
        return (
        <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} Project`}>
            <Link to="/projects" className="btn-primary">
              back to Projects
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Client : {client}</h6>
              <h6>Teamsize : {size}</h6>
              <h6>Techonology : {techonology}</h6>
              <h6>Domain : {domain}</h6>
            </article>
          </div>
        </section>
      </>
        )
    }
}
