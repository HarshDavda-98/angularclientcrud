import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css'],
})
export class ListdataComponent implements OnInit {
  getuserData!: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllUserDatas();
  }

  
  getAllUserDatas() {
    this.api.getData().subscribe(
      (res) => {
        this.getuserData = res;
        let ref = document.getElementById("updatelist");
        ref?.click();
        console.log(res);
      },
      (err) => {
        console.log('for get data', err);
      }
    );
  }
}
