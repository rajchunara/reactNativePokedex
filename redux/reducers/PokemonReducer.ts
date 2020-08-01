import {
  FETCH_POKEMON_LOADING,
  FETCH_ALL_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_SUCCESS,
  PokemonDispatchTypes,
  FETCH_POKEMON_FAILED,
} from './../actionTypes/PokemonActionTypes';
import {AllPokemonItem} from './../../Interfaces/PokemonTypes';

//Pokemon state Interface
export interface IdefaultPokemonState {
  loading: boolean;
  allPokemons?: AllPokemonItem[];
  pokemon?: any[];
  error: string;
}

//Initial state
const initialState: IdefaultPokemonState = {
  loading: false,
  allPokemons: [],
  pokemon: [],
  error: '',
};

//Pokemon reducer
const PokemonReducer = (
  state: IdefaultPokemonState = initialState,
  action: PokemonDispatchTypes,
): IdefaultPokemonState => {
  switch (action.type) {
    case FETCH_POKEMON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_POKEMON_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        allPokemons: action.payload,
      };
    }
    case FETCH_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        allPokemons: [],
        pokemon: [],
        error: action.payload,
      };
    case FETCH_SINGLE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
