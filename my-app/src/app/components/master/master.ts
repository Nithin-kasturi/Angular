import { Component, inject, OnInit } from '@angular/core';
import { Roles } from '../roles/roles';
import { Designations } from "../designations/designations";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/Interfaces/User';

@Component({
  selector: 'app-master',
  imports: [Roles,  Designations,CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master{
  
  currentComponent:string="";
  componentToggler(component:string){
    this.currentComponent=component;
  }
}
