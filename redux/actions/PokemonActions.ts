import {getAllPokemonURL} from './../../config/PokemonUrl';
import {AllPokemonItem} from './../../Interfaces/PokemonTypes';
import {
  PokemonLoading,
  PokemonFailed,
  SinglePokemonSuccess,
  AllPokemonSuccess,
  FETCH_POKEMON_LOADING,
  FETCH_POKEMON_FAILED,
  FETCH_ALL_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_SUCCESS,
} from './../actionTypes/PokemonActionTypes';
import {Dispatch} from 'redux';
import {PokemonDispatchTypes} from 'redux/actionTypes/PokemonActionTypes';

import axios from 'axios';

//Actions

//Fetch all pokemon loading
export const fetchAllPokemon = (): PokemonLoading => {
  return {
    type: FETCH_POKEMON_LOADING,
  };
};

//Fetch all pokemon success
export const fetchAllPokemonSuccess = (
  allPokemon: AllPokemonItem[],
): AllPokemonSuccess => {
  return {
    type: FETCH_ALL_POKEMON_SUCCESS,
    payload: allPokemon,
  };
};

//Fetch single pokemon success
export const fetchSinglePokemonSuccess = (
  pokemon: any,
): SinglePokemonSuccess => {
  return {
    type: FETCH_SINGLE_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

//Fetch all pokemon failed
export const fetchPokemonFailed = (err: string): PokemonFailed => {
  return {
    type: FETCH_POKEMON_FAILED,
    payload: err,
  };
};

export const getAllPokemon = () => async (
  dispatch: Dispatch<PokemonDispatchTypes>,
) => {
  try {
    dispatch(fetchAllPokemon());

    const res = await axios.get(getAllPokemonURL(100, 0));
    // console.log(res.data.results);
    dispatch(fetchAllPokemonSuccess(res.data.results));
  } catch (e) {
    dispatch(fetchPokemonFailed(e.message));
  }
};
