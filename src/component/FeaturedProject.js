import React, { Component } from 'react'
import {ProjectContext} from '../context';
import Loading from '../component/Loading';
import Project from './Project';
import Title from './Title';
export default class FeaturedProject extends Component {
    static contextType = ProjectContext;
    render() {
        let {loading, featuredProjects: projects}= this.context;
        projects = projects.map(project => {
            return <Project key={project.id} project={project}/>
        })
        return (
            <section className='featured-rooms'>
                <Title title='Featured Project'/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : projects}
                </div>
            </section>
           
        )
    }
}
