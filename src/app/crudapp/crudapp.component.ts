import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FormMOdels } from './form.Modal';
@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.css'],
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
      _id:[''],
      Name: [''],
      Email: [''],
      Mobile: 91,
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

    this.api.postData(this.formDatas).subscribe((res) => {
        console.log("From the post method",res);
        this.formvalue.reset();
        let closelist = document.getElementById('updatelist');
        closelist?.click();
        this.getAllUserDatas();
        alert('Added Successfully');
      }
    );
  }
  // post request over

  // Get req for listing data
  getAllUserDatas() {
    this.api.getData().subscribe(
      (res) => {
        console.log("From the get method",res);
        this.getuserData = res;
        let ref = document.getElementById('updatelist');
        ref?.click();
      }
    );
  }
  // delete req for deleting data
  Deletethedata(list: any) {
    confirm('Are you sure for delete');
    this.api.deleteData(list._id).subscribe((res) => {
      console.log("From the delete method",res);
    });
    setTimeout(()=>{
      this.getAllUserDatas();
    },1000);
  }
  EditingValue(list: any) {
    this.formvalue.controls['Name'].setValue(list.Name);
    this.formvalue.controls['Mobile'].setValue(list.Mobile);
    this.formDatas._id = list._id;
    this.formvalue.controls['Email'].setValue(list.Email);
    this.formvalue.controls['Discription'].setValue(list.Discription);
  }
  EdittuserData() {
    this.formDatas.Name = this.formvalue.value.Name;
    this.formDatas.Mobile = this.formvalue.value.Mobile;
    this.formDatas.Email = this.formvalue.value.Email;
    this.formDatas.Discription = this.formvalue.value.Discription;

    this.api.putData(this.formDatas, this.formDatas._id).subscribe(
      (res) => {
        console.log("From the edit method",res);
        this.formvalue.reset();
        let closelist = document.getElementById('updatelist');
        closelist?.click();
        this.getAllUserDatas();
      }
    );
  }
}
