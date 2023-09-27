import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  convertToDate():string{
    const date = new Date();
    return date.toLocaleDateString();
  }

prenom: string = "Bob";
nom:string = "Rocher";

imageSrc:string  = "https://randomuser.me/api/portraits/lego/2.jpg"

isUnchanged:string = "22 ans";

name:string ='';

}

