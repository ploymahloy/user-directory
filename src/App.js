import React, { Component } from 'react';

export default class App extends Component {
  // sets state of items and isLoaded
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  // Method is called on mount
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(json => {
        // console.log(state);
        this.setState({
            isLoaded: true,
            items: json.results,
        })
      });
  }

  sortNames() {
    function compare( a, b ) {
      if ( a.last_nom < b.last_nom ){
        return -1;
      }
      if ( a.last_nom > b.last_nom ){
        return 1;
      }
      return 0;
    }

    // objs.sort( compare );
  }

  // Renders from Virtual DOM
  render() {
    var { isLoaded, items } = this.state;

    return (
      <div className="App">
        <ul>
          {this.state.items.map((item) => {
            return(
            <li key={item.id.value}>
              {item.name.first} | Email: {item.email}
            </li>
            )
          })}
        </ul>
        <button className="ascending-btn">
          Sort in Ascending Order
        </button>
      </div>
    )
  }
}
