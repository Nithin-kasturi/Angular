import { Component, inject } from '@angular/core';
import { Post } from '../../models/Interfaces/User';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  standalone:true,
  styleUrl: './client.css',
})
export class Client {
  // userId:number=1;
  // id:number=1;
  // title:string='';
  // body:string='';
  postService=inject(PostService)
  postObj:Post=new Post();

  handleSubmit(){
    this.postService.savePost(this.postObj).subscribe((res)=>{
      console.log(res);
    })
  }
}
