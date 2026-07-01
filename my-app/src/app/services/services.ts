import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
@Injectable({
    providedIn:'root'
})
export class Services {
    
    constructor(private http:HttpClient){

    }

    getData(){
        return this.http.get(`${environment.API_URL}/posts`);
    }
}
