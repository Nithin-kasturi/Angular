import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit{
data:any[]=[];
  http=inject(HttpClient);
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.data=res;
    })
  }
  
  firstName:string="Kasturi";
  lastName:string="Nithin"
  greetingMessage(){
    alert(this.firstName+" "+this.lastName);
  }
}
