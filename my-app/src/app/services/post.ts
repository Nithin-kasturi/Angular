import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Post } from "../models/Interfaces/User";

@Injectable({
    providedIn:'root'
})
export class PostService {
    constructor(private http:HttpClient){

    }
    savePost(body:Post){
        return this.http.post(`${environment.API_URL}/posts`,body);
    }
}
