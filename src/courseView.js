import React from 'react';
import Course from './course'

class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Courses : []
        }
    }

    componentDidMount() {
        fetch("/course/courses", {
            method : "Get"
        }).then(Response => {
            Response.json()
            .then(data => {
                this.setState({Courses : data.courses}, () => {
                    console.log(this.state.Courses)
                })
            })
        })
    }

    render() {
        return(
            <div id="courseView">
                <h1> welcome to the course</h1>
                <div id="allCourses">
                    {this.state.Courses.map(element => (
                    <div key={element.title}>
                        <Course  title={element.title} date={element.date} description={element.description} duration={element.duration} participant={element.participant}/>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CourseView;