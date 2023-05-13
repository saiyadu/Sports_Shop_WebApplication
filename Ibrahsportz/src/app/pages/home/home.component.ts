import { Component,OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService){ }
  prdData:any;

  ngOnInit(): void {
    this.prdData = this.service.prdDetails;
      
  }


}
