import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "windowed-observable"
@Component({
  selector: 'learn-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'shell';
  auth:boolean = true
  constructor(private router:Router){
    const observable = new Observable("home")
    observable.subscribe((path) => {
        this.router.navigate([path])
    })
  }

  ngOnInit():void{
   
  }

}
