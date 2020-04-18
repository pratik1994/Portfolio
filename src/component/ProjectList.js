import React from 'react'
import Project from './Project'
export default function ProjectList({projects}) {

    if (projects.length === 0) {
        return (
          <div className="empty-search">
            <h3> Need to work on this combination</h3>
          </div>
        );
      }
    return (
        <section className="roomslist">
        <div className="roomslist-center">
            {projects.map(item => {
            return <Project key={item.id} project={item} />;
            })}
        </div>
    </section>
    )
}
