import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    };
    this.changedText = this.changedText.bind(this);
  }

  changedText(event){
    this.setState({inputValue: event.target.value});
  }
  render () {
    let artists = this.state.inputValue.length
                  ? this.props.artists.filter(artist => {
                      return artist.name.toLowerCase().match(this.state.inputValue); })
                  : this.props.artists;
    return (
      <div>
        <FilterInput changedText={this.changedText} />
        <Artists artists={artists} />
      </div>
    );
  }
}

export default FilterableArtistsContainer;
