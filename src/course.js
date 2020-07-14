import React from 'react'

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div className="singleCourse">
                <span className="title">{this.props.title}</span><br/>
                <span className="date">{this.props.date}</span><br/>
                <span className="description">{this.props.description}</span><br/>
                <span className="duration">{this.props.duration}</span><br/>
                <span className="participants">
                    <ul>
                        {this.props.participant.map(participant => (<li>
                            participant.id
                        </li>))}
                    </ul>    
                </span><br/>
            </div>
        )
    }
}

export default Course;