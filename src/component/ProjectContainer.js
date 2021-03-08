import React from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import { withProjectConsumer } from "../context";
import Loading from "./Loading";
function ProjectContainer({ context }) {
  const { loading, projects, selectedProjects } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProjectFilter projects={projects}></ProjectFilter>
      <ProjectList projects={selectedProjects}></ProjectList>
    </>
  );
}
export default withProjectConsumer(ProjectContainer);
