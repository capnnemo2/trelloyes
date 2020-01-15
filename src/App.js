import React from 'react';
import List from './List';
import './App.css'
import store from './store';

class App extends React.Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };

  render() {
    // const { store } = this.props
    // console.log(store);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardsIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }
}


export default App;
