import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
     private auth:AuthenticationService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) =>{
      console.log(data.id);
      this.auth.getUserDetails(data.id).subscribe(data=>{
        console.log(data);
        
      });  
      }); 
      
    }
}
