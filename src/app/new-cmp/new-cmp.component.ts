import { Component, OnInit } from '@angular/core';
import { Myservice1Service } from './../myservice1.service';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todaydate;
  text;
  constructor(private myservice: Myservice1Service) { }

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "Ghanta";
    this.text= this.myservice.serviceproperty
  }

 

}
