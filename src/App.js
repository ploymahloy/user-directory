import React, { Component } from 'react'

export default class App extends Component {
  // sets state of items and isLoaded
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }
  
  // Method is called on mount
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json.results,
      })
    })
  }
  
  getFullName = (item) => {
    return `${item.name.last}, ${item.name.first}`
  }

  compareNames = (a, b) => {
    const aFullName = this.getFullName(a)
    const bFullName = this.getFullName(b)
    
    if (aFullName < bFullName) {
      return -1
    }
    if (aFullName > bFullName) {
      return 1
    }
    return 0
  }
  
  sortNames = () => {
    this.setState({
      items: [...this.state.items].sort(this.compareNames),
    })
  }
  
  // Renders from Virtual DOM
  render() {
    const { items } = this.state
    
    return (
      <div className="App">
        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={this.getFullName(item)}>
                {this.getFullName(item)} | Email: {item.email}
              </li>
            )
          })}
        </ul>
        <button
          className="ascending-btn"
          onClick={this.sortNames}
        >
          Sort in Ascending Order
        </button>
      </div>
    );
  }
}
