import React from 'react';
import './App.css';
import List from './List'
import store from './store'

class App extends React.Component {

  // state = {
  //   somethingItems: [
  //     { title: 'First card',
  //       content: 'lorem ipsum'},
  //     { title: 'Second card',
  //       content: 'lorem ipsum'}
  //   ]
  // }

  handleDeleteCard(card) {
    console.log('handle delete card called', { card })
  }

  handleAddRandomCard(card) {
    console.log('handle add random card called', { card })
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }

}

export default App;
