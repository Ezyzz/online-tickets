import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023`;
  }
}
