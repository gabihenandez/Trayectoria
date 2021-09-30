import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //dataNames = [];
  //dataJson:any;

  constructor( private router: Router) {}

  /*ngOnInit () {
    this.initializaIntems()
  }*/

  evento(){
   // console.log('evento')
    this.router.navigate(['/abaout'])
  }
  evento2(){
    this.router.navigate(['/carousel'])
  }
  evento3(){
    this.router.navigate(['/dashboard'])
  }
  evento4(){
    this.router.navigate(['/vista4'])
  }
  evento5(){
    this.router.navigate(['/vista5'])
  }
  evento6(){
    this.router.navigate(['/vista6'])
  }

  /*initializaIntems(){

    this.dataNames = [
      { 
        name: 'Gabriela Hernandez',
        edad: '20'
      },
      {
        name: 'Alejandra Hernandez',
        edad: '25'
      },
      {
        name: 'Jenny Hernandez',
        edad: '19'
      }, 

    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }*/

}
