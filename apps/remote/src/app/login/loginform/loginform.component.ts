import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Credential } from './credential.model';
import { map } from 'rxjs';
import { Response } from './response.model';
import {Observable} from 'windowed-observable'
@Component({
  selector: 'learn-mf-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {

  @ViewChild('login')
  login!: NgForm;
  credential!: Credential;
  status:boolean | undefined;
  constructor(private router:Router,private http:HttpClient) {}

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.login.value)
    this.credential = this.login.value
    this.http.post<Response>("http://localhost:9001/user/login",this.credential)
   
    .subscribe(responseData => {
          if(responseData.status === true){
            // console.log(responseData.status)
            //   const observable = new Observable('product')
            //   observable.publish("/")
            this.router.navigateByUrl("/home")
          }
      })
  }
}


