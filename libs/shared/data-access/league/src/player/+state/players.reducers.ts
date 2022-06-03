import {Player} from "../player";
import {createFeature, createReducer} from "@ngrx/store";

interface PlayersState {
  players: Player[]
}

const initialPlayersState: PlayersState = {
  players: []
}

export const playersFeature = createFeature({
  name: 'players',
  reducer: createReducer(initialPlayersState)
})
