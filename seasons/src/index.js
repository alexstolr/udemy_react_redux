import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner';

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

    renderContent(){
        // return <SeasonDisplay lat={this.state.lat} errorMessage={this.state.errorMessage}/>
        if(this.state.lat || this.state.errorMessage) return <SeasonDisplay lat={this.state.lat} errorMessage={this.state.errorMessage}/>
        else return <Spinner message="Awaiting for location data"/>
    }


    render(){
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);