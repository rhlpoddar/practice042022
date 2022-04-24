import { Component } from '@angular/core';
import { Myservice1Service } from './myservice1.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'practice042022';
  fruits = ["apple","mango","papaya","banana"];
  months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
  toggle=true;

  
  values = '';
  todaydate;
  componentproperty;
  httpdata;
  httpdatabyId;
  url='http://jsonplaceholder.typicode.com/users';
 
  id = new FormControl('');
 
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  onClickFunc(event:MouseEvent){
    alert("A n g e r y");

  }

  changemonthsfunc(event:Event) {
    
    console.log("Changed month from the Dropdown");
    console.log(event);
 }

 constructor(private myservice: Myservice1Service,private httpClient: HttpClient) {}
 ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    //this.myservice.serviceproperty = "component created"; // value is changed.
    this.componentproperty = this.myservice.serviceproperty;
    console.log(this.httpClient.get(this.url));

   this.showOutput();
  
   
    
 
}

updateId()
{
  this.showOutputByID();
}

getMethod()
{
  return this.httpClient.get(this.url)
}

getMethodById()
{
 
  return this.httpClient.get(this.url+'/'+this.id.value)
}

showOutput()
{
  this.getMethod().subscribe(
    (data) => this.displayData(data)

  )
}

showOutputByID()
{
  this.getMethodById().subscribe(
    (data) => this.displayDataById(data)

  )
}



displayData(data)
{
  this.httpdata = data;
}

displayDataById(data)
{
this.httpdatabyId=data
}
}