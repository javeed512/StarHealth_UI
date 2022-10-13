import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  billAmount:string = "";

  constructor(private route:ActivatedRoute) {

      route.params.subscribe( (param:any) => {this.billAmount = param['amount']; console.log(this.billAmount)});


      

   }

  ngOnInit(): void {
  }

}
