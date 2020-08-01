import {AllPokemonItem} from './../../Interfaces/PokemonTypes';
export const FETCH_ALL_POKEMON_SUCCESS = 'FETCH_ALL_POKEMON_SUCCESS';
export const FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
export const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
export const FETCH_POKEMON_FAILED = 'FETCH_POKEMON_FAILED';

//Declaring type of dispatch actions
export interface PokemonLoading {
  type: typeof FETCH_POKEMON_LOADING;
}

export interface PokemonFailed {
  type: typeof FETCH_POKEMON_FAILED;
  payload: string;
}

export interface AllPokemonSuccess {
  type: typeof FETCH_ALL_POKEMON_SUCCESS;
  payload: AllPokemonItem[];
}

export interface SinglePokemonSuccess {
  type: typeof FETCH_SINGLE_POKEMON_SUCCESS;
  payload: any;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFailed
  | AllPokemonSuccess
  | SinglePokemonSuccess;
