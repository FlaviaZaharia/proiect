import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newapp';
}
export class TimerComponent implements OnInit{

  constructor(){}
  ngOnInit(){
    
  }
}

class Person{
   constructor(public age:number=10){
    
   }
  increaseAge(){
    this.age++;
  }
}

class Student extends Person{
  constructor(public facultate:string,age:number){
super(age)
  }
  mergiLaScoala(){

    console.log("Merg lafacultatea"+this.facultate);
    console.log("Am varsta "+this.age);
  }
  increaseAge(){

    console.log("acum suntem mai mari");
    super.increaseAge();
  }
}

let p=new Student("UPT",20);
p.increaseAge();
p.mergiLaScoala();
