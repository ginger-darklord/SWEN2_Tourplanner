import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

//so it can be injected into other angular components and services
@Injectable({
  providedIn: "root"
})

export class BackendService {
  private tourUrl = 'http://localhost:8080/tour'
  private tourLogUrl = 'http://localhost:8080/tourlog'

  constructor(private http: HttpClient) {
  }

  getTourListByTourId( tourId : number) : Observable<any> {
    return this.http.get<any>(`${this.tourLogUrl}/${tourId}/tourlogs`);
  }


}
