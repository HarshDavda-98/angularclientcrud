import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css'],
})
export class ListdataComponent implements OnInit {
  getuserData!: any;
  constructor(private api: ApiService ,private route:Router) {}

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
  Deletethedata(list: any) {
    confirm('Are you sure for delete');
    this.api.deleteData(list._id).subscribe((res) => {
      console.log("From the delete method",res);
    });
    setTimeout(()=>{
      this.getAllUserDatas();
    },1000);
  }

  EditData(list: any) {
    this.route.navigate(['form']);
    // this.formvalue.controls['Name'].setValue(list.Name);
    // this.formvalue.controls['Mobile'].setValue(list.Mobile);
    // this.formDatas._id = list._id;
    // this.formvalue.controls['Email'].setValue(list.Email);
    // this.formvalue.controls['Discription'].setValue(list.Discription);
  }
  EdittuserData() {
    // this.formDatas.Name = this.formvalue.value.Name;
    // this.formDatas.Mobile = this.formvalue.value.Mobile;
    // this.formDatas.Email = this.formvalue.value.Email;
    // this.formDatas.Discription = this.formvalue.value.Discription;

    // this.api.putData(this.formDatas, this.formDatas._id).subscribe(
    //   (res) => {
    //     console.log("From the edit method",res);
    //     this.formvalue.reset();
    //     let closelist = document.getElementById('updatelist');
    //     closelist?.click();
    //     this.getAllUserDatas();
    //   }
    // );
  }
}
