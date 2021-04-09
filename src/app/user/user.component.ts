import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm = new FormGroup({
    userName: new FormControl(''),
    userJob: new FormControl(''),
  });
  public users:any;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.auth.getAllUsers().subscribe(data =>{
      if(data){
        if(data['data'].length!=0){
          this.users=data['data'];
          console.log(data['data']);
        }
      }
    })
  }
  register():any{
    const post_data = {
      userName: this.userForm.value.userName,
      userJob: this.userForm.value.userJob
      }
    console.log(post_data)
    
    this.auth.registration(post_data).subscribe(data => {
      
      console.log(data);

      localStorage.setItem('post', JSON.stringify(data));
      console.log(localStorage.getItem('post'))
    })
  }

  }
