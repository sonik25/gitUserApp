import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Injectable } from "@angular/core";
import { UserServices } from '../shared/services/userServices';
@Injectable({providedIn:'root'})


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public userData:any;
  public followerData:any;
  //@Output() public searchKey = new EventEmitter();

  constructor(private search:UserServices) { }

  ngOnInit() {
  }

  SearchUser(key){
    this.search.getUserInfo(key).subscribe(data =>{
      this.userData = data;
      this.search.getFollower(key).subscribe(item =>{
        this.followerData= item;
      })
    })
    //this.searchKey.emit(key);
  }

}
