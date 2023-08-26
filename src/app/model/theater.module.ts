import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023/theaters`;
  }
}