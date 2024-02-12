import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  public dataSource = {
      datasets: [
          {
              data: [],
              backgroundColor: [
              '#CC0000',
                      '#45818e',
                      '#c90076',
                      '#783f04',                        
                      '#ffcd56',
                      '#ff6384',
                      '#36a2eb',
                      '#fd6b19',
                      '#f6b26b'
              ],
          }
      ],
      labels: [
                  'Eat Out',
                  'Rent',
                  'Groceries',
                  'Investment',
                  'Savings',
                  'Travel',
                  'Stocks',
                  'Health'
              ],
          myBudget : [],
          };
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.data.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        this.dataSource.labels[i] = res.data.myBudget[i].title;
        this.createChart();
    }
    });
  }

  createChart()
    {
        //var ctx = document.getElementById("mychart").getContext("2d")
    
        var myPieChart = new Chart (ctx, {
            type : 'pie',
            data : this.dataSource
        });
    } 

  
}

function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

