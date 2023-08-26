import { NgModule } from "@angular/core";
import { ShowRespository } from "./show.respository";
import { Show } from "./show.model";
import { TheaterRespository } from "./theater.repository";
import { Theater } from "./theater.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ShowRespository,
    Show,
    Theater,
    TheaterRespository,
    RestDataSource,
  ],
})
export class ModelModule {}
