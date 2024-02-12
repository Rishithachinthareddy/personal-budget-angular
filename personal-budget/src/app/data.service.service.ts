import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService{

  public dataSource: any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#83FF33',
          '#F633FF',
          '#FF3333',
        ],
      }
    ],

    labels: []
  };

  public name = "mohan";

  public dataSource1:any = [];

  constructor(private http: HttpClient) { 
    // console.log('abc');
  }

  public data: any[] = [];

  fetchDataFromBackend(): Observable<any[]> {
    // Check if data is already loaded
    if (this.data.length > 0) {
      return new Observable(); // Return an empty observable if data is already loaded
    }

    return this.http.get<any[]>('http://localhost:3000/budget').pipe(map((res)) => {})
  }

  getDataForCharts(): any[] {
    return this.data;
  }
}
