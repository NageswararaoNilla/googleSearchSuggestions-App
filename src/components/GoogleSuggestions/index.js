import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  //   setList = suggestionList => {
  //     this.setState({
  //       filteredSuggestions: suggestionList,
  //     })
  //   }

  //   onSearchInput = event => {
  //     const {searchInput, filteredSuggestions} = this.state
  //     this.setState({
  //       searchInput: event.target.value,
  //     })
  //     const filtered = filteredSuggestions.map(each =>
  //       each.suggestion.toLowerCase().includes(searchInput),
  //     )
  //     this.setState({
  //       filteredSuggestions: filtered,
  //     })
  //   }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    // this.setList(suggestionsList)
    const {searchInput} = this.state
    // console.log(searchInput)
    const suggestionList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(filteredSuggestions)
    return (
      <div className="app-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onSearchInput}
                value={searchInput}
              />
            </div>

            <ul>
              {suggestionList.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  getSuggestion={this.getSuggestion}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
