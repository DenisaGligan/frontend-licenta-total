import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

interface Font {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EcommerceComponent]
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  selectedFont;
  selectedFont2;
  selectedFont3;
  selectedFont4;
  selectedFont5;

  /*selectedValue: string;

  foods: Font[] = [
    {value: 'georgia', viewValue: 'Georgia'},
    {value: 'algerian', viewValue: 'Algerian'}
  ];*/
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
    ///this.changeFont();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  changeFont(event: any){
    //var nodes = document.querySelectorAll("*");
    //var f = document.getElementById("sel");
    //var selectedVal = document.getElementById("sel");
    //var selectedVal = document.getElementById("sel")[0].value;
    //console.log(selectTag);
    //console.log(f);
    //console.log(f[1].value);
    this.selectedFont = event.target.value;
    console.log(this.selectedFont);
    if (this.selectedFont == "algerian"){
      document.getElementById("app").style.fontFamily = "Algerian";
    }
    else if(this.selectedFont == "Arial Black"){
      document.getElementById("app").style.fontFamily = "Arial Black";
    }
    else if(this.selectedFont == "Times New Roman"){
      document.getElementById("app").style.fontFamily = "Times New Roman";
    }
    else if(this.selectedFont == "Georgia"){
      document.getElementById("app").style.fontFamily = "Georgia";
    }
    else if(this.selectedFont == "Arial"){
      document.getElementById("app").style.fontFamily = "Arial";
    }
    else if(this.selectedFont == "Verdana"){
      document.getElementById("app").style.fontFamily = "Verdana";
    }
    else if(this.selectedFont == "Lucida Console"){
      document.getElementById("app").style.fontFamily = "Lucida Console";
    }
    
  }

  changeDim(event: any){
    this.selectedFont2 = event.target.value;
    console.log(this.selectedFont);
    document.getElementById("app").style.fontSize = this.selectedFont2;
  }
  changeStyle(event: any){
    this.selectedFont3 = event.target.value;
    console.log(this.selectedFont);
    document.getElementById("app").style.fontStyle = this.selectedFont3;
  }
  changeWeight(event: any){
    this.selectedFont4 = event.target.value;
    console.log(this.selectedFont);
    document.getElementById("app").style.fontWeight= this.selectedFont4;
  }
  changeColor(event: any){
    this.selectedFont5 = event.target.value;
    console.log(this.selectedFont);
    document.getElementById("app").style.color= this.selectedFont5;
  }
}
