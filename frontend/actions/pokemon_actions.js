export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
import {fetchAllPokemon} from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});


export const maryTakesLongBreaks = breakTime => ({
  type: "LONG"
});
// window.receiveAllPokemon = receiveAllPokemon;
