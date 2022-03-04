import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FormMOdel } from './form.Modal';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formvalue!: FormGroup;
  formDatas: FormMOdel = new FormMOdel();

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      id: new Date().getTime(),
      Name: [''],
      Email: [''],
      Mobile:[''],
      Discription: [''],
    });
  }
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
        
        alert('Added Successfully');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}