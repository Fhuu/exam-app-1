import React from 'react';

class RowYourBoat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            date : "",
            description : "",
            duration : 0,
            participant : []
        }
    }

    componentDidMount() {
        fetch("/course/singleCourse", {
            method:"post",
            headers:{"content-type" : "application/json"},
            body: JSON.stringify(
                {
                    title : "Row your boat"
                }
            )
        }).then(response => {
            response.json().then(data => {
                this.setState({
                    title : data.title,
                    date : data.date,
                    description : data.description,
                    duration : data.duration,
                    participant : data.participant
                })
            })
        })
    }
    
    render () {
        return (
            <div className="singleCourse">
                <span className="title">{this.state.title}</span><br/>
                <span className="date">{this.state.date}</span><br/>
                <span className="description">{this.state.description}</span><br/>
                <span className="duration">{this.state.duration}</span><br/>
                {/* <span className="participants">
                    <ul>
                        {this.state.participant.map(participant => (<li>
                            participant.id
                        </li>))}
                    </ul>    
                </span><br/> */}
            </div>
        )
    }
}

export default RowYourBoat;