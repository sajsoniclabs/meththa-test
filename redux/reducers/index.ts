import { combineReducers } from "redux";

import pokemonReducer from "./PokemonReducer";
import userReducer from "./UserReducer";

export const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  user: userReducer,
});
