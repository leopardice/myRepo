import React from 'react'

export default function Gender () {
    return <Container style={stylingObject.main}/>
}

const stylingObject = {
    main: {
        height: "200px",
        width: "300px",
        border: "1px solid black"
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={this.props.style}>
            <GenderForm/>
        </div>
    }
}


class GenderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={value: '', gender: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestGender = this.requestGender.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    updateGenderState(gender) {
        this.setState({gender: gender});
    }

    async requestGender(callback) {
        const firstName = this.state.value;
        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName}`;

        try {
            let response = await fetch(url);
            let json = await response.json();
            this.setState({gender: json.gender}, ()=> {alert(this.state.gender)});
        }
        catch (error) {
            console.log(error);
        }

    }

    handleSubmit(event) {
       this.requestGender();
       event.preventDefault();
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                First Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            <div>Gender: {this.state.gender}</div>
        </form>
        )
    }
}


class Input extends React.Component {
    render() {
        return <input type="text" />
    }
}

class Button extends React.Component {
    render() {
        return <button type="submit">Submit</button>
    }
}


