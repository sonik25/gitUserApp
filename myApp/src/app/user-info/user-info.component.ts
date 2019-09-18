import { Component, OnInit , ElementRef} from '@angular/core';
import { UserServices } from '../shared/services/userServices';
import { IgitUser } from '../shared/model/gitUser';
import { fromEvent } from 'rxjs';
import { IuserFollowers } from '../shared/model/userFollwers';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public userData:IgitUser;
  public followerData:IuserFollowers;

  constructor(private userService:UserServices) { }

  ngOnInit() {
  //   this.userService.getUserInfo()
  //   .subscribe(item =>{
  //     this.userData=item;
  //     console.log(item);
  //   });

  //   this.userService.getFollower()
  //   .subscribe(data => {
  //     this.followerData = data;
  //     console.log(data);
  //   })
  }

}
