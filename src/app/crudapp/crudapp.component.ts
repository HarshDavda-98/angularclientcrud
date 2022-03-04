import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FormMOdels } from './form.Modal';
@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.css']
})
export class CrudappComponent implements OnInit {
    formvalue!: FormGroup;
    formDatas: FormMOdels = new FormMOdels();
    getuserData!: any;
  
    constructor(private formbuilder: FormBuilder, private api: ApiService) {}
  
    ngOnInit(): void {
      this.getAllUserDatas();
      this.formvalue = this.formbuilder.group({
        id: new Date().getTime(),
        Name: [''],
        Email: [''],
        Mobile:[''],
        Discription: [''],
      });
    }

    // post req for entering data
    postuserData() {
      this.formDatas.Name = this.formvalue.value.Name;
      this.formDatas.Mobile = this.formvalue.value.Mobile;
      this.formDatas.id = this.formvalue.value.id;
      this.formDatas.Email = this.formvalue.value.Email;
      this.formDatas.Discription = this.formvalue.value.Discription;
  
      this.api.postData(this.formDatas).subscribe(
        (res) => {
          console.log(res);
          this.formvalue.reset();
          let closelist = document.getElementById("updatelist")
          closelist?.click()
          this.getAllUserDatas();
          alert('Added Successfully');
        },
        (err) => {
          console.log(err);
        }
      );
    }
    // post request over

    // Get req for listing data
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
    // delete req for deleting data
    Deletethedata(list:any){
      confirm("Are you sure for delete")
       this.api.deleteData(list.id).subscribe(res=>{
        console.log(res)
      })
    }
  }