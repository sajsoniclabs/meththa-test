import { PokemonDispatchTypes } from "../types/PokemonActionTypes";
import { UserDispatchTypes } from "../types/UserActionTypes";

export type AppActions = PokemonDispatchTypes | UserDispatchTypes;
