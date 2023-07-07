import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getSuggestion} = props
  const {suggestion} = suggestionDetails
  const sendSuggestion = () => {
    getSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p className="sug-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={sendSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
