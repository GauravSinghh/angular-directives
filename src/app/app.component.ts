import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleStatus=false;
  numDetails=[];

  onToggleDetails(){
    this.toggleStatus=!this.toggleStatus;
    // this.numDetails.push(this.numDetails.length+1);
    this.numDetails.push(new Date());
  }
  onRemoveServer(id:number){
    this.numDetails.splice(id,1);

  }

}
