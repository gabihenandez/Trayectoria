import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vista6',
  templateUrl: './vista6.page.html',
  styleUrls: ['./vista6.page.scss'],
})
export class Vista6Page implements OnInit {

  regresar(){
    this.router.navigate(['/'])
  }
  dataNames = [];
  dataJson:any;

  constructor(private router: Router) { }

  ngOnInit () {
    this.initializaIntems()
  }

  initializaIntems(){

    this.dataNames = [
      { 
        name: 'Gabriela Hernandez',
        edad: '20',
        img: 'https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo.png'
      },
      {
        name: 'Alejandra Hernandez',
        edad: '25',
        img: 'https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo.png'
      },
      {
        name: 'Jenny Hernandez',
        edad: '19',
        img: 'https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo.png'
      }, 
      { 
        name: 'Gerardo Matinez',
        edad: '20',
        img: 'https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo.png'
      },  
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}