import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component {
    state = { lat: null, errorMessage: null};

    // constructor(props){
    //     super(props);
    // };

    componentDidMount(){
        //console.log('component did mount');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('component did update');
    }


    componentWillUnmount(){
        console.log('component will unmount');
    }


    render(){

        // return <div>{this.state.errorMessage || `Latitude: ${this.state.lat}`}</div>
        // return <SeasonDisplay lat={this.state.errorMessage || this.state.lat}/>
        return <SeasonDisplay lat={this.state.lat} errorMessage={this.state.errorMessage}/>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);