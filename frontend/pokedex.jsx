import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// //Testing
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';


document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
