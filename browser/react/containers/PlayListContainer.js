import React from 'react';
import NewPlayList from '../components/NewPlayList';

class PlayListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      song: ''
    };
    this.submittedText = this.submittedText.bind(this);
  }

  submittedText(event) {
    event.preventDefault();
    console.log(event.target);
  }

  moreFunc(event) {

    this.setState({title: event.target.value});
  }

  render() {

    console.log(this.state.title);
    return (

      <NewPlayList submittedText={this.submittedText}/>
    );

  }
}


export default PlayListContainer;