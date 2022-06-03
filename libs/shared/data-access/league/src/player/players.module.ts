import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {playersFeature} from "./+state/players.reducers";


@NgModule({
  imports: [StoreModule.forFeature(playersFeature)]
})
export class PlayersModule {}
