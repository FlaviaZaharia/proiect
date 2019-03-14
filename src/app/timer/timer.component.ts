import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
function delay(ms: number){
  return new Promise(resolve=>setTimeout(resolve,ms));
}
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  accountName: string="Not ready";
  items: DebitCredit[];
  constructor(public http: HttpClient){ }

 async ngOnInit() {
   for(let i=0;i<3;i++)
   {
  try {  
  let result:any=await this.http.get<AccountInfo>("http://localhost:8080/api/balance").toPromise();
    this.accountName=result.account.name;
    this.items=result.debitsAndCredits;
    break;
  }catch(e){
    this.accountName="error";
    await delay(2000);
  }
  }
}
}
interface DebitCredit{
  from: string;
  descpription: string;
  amount: number;
  date: string;

}
interface AccountInfo{

  currency: string;
  account: { 
    name:string;
    iban: string;
    balance:number;
  };
  debitsAndCredits: Array<
  {
    from:string;
    description: string;
    amount:number;
    date:string;
  }>
    

}