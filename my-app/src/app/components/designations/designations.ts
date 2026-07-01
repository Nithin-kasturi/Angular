import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../../services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designations',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './designations.html',
  styleUrl: './designations.css',
})
export class Designations implements OnInit{
 posts: any[] = [];
 isLoading:boolean=true;
service=inject(Services)
ngOnInit() {
  console.log('ngOnInit');
  this.getPosts();
}

getPosts() {
  this.service.getData().subscribe((res: any) => {
    console.log('Before:', this.posts.length);
    this.posts = res;
    this.isLoading=false;
    console.log('After:', this.posts.length);
  });
}
}
