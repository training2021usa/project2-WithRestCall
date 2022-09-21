import { Component } from '@angular/core';
import { Auth } from './model/Auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2-WithRestCall';
  listOfAuth:Auth[]=[];
  tableData:Auth[]=[];

  //constructor injection
  public constructor(private authService : AuthService){

  }




  showAllData(){
    
   this.tableData=this.listOfAuth;

  }

  ngOnInit(): void {
    //this.listOfAuth=this.authService.findAuth();

    this.authService.findAuth().subscribe( (data )=>this.listOfAuth=data);


  }




}
