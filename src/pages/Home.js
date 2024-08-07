import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeaturedProject from "../component/FeaturedProject";
export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Pratik Mittal" subtitle="Software engineer @ JP Morgan Chase & co.">
          <Link to="/projects" className="btn-primary">
            My Projects
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedProject />
    </>
  );
}
