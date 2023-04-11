import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}

  LogOut(){
    if (confirm("Do you want to logout?") == true) {
      this.route.navigateByUrl('/login');
    } else {
      return false;
    }
  return;
  }

}
