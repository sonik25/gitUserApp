import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IgitUser } from '../model/gitUser';
import {SearchComponent} from '../../search/search.component';
import { Observable, BehaviorSubject, from } from 'rxjs';
import {map} from 'rxjs/operators';
import { IuserFollowers } from '../model/userFollwers';


@Injectable({providedIn:'root'})

export class UserServices {
    private UserEndpoint:string ="https://api.github.com/users/";
    private FollowerEndpoint:string = "/followers";
    //public user:string = 'octocat';

    public header:HttpHeaders;


    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'Content-Type':'application/json'});       
        
    }

    getUserInfo(user):Observable<IgitUser>{
        
            let finalUserEndpoint = this.UserEndpoint+user;
        return this.http.get<IgitUser>(finalUserEndpoint);
        
        

    };

    getFollower(user):Observable<IuserFollowers>{
        
            let finalFollowerEndpoint = this.UserEndpoint + user + this.FollowerEndpoint;
            return this.http.get<IuserFollowers>(finalFollowerEndpoint);
        
        
    }
}