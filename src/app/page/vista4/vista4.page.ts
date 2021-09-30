import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vista4',
  templateUrl: './vista4.page.html',
  styleUrls: ['./vista4.page.scss'],
})
export class Vista4Page implements OnInit {

  constructor(private router: Router) { }

  regresar(){
    this.router.navigate(['/'])
  }
  dataNames = [];
  dataJson:any;

  
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
        name: 'Gabriela Hernandez',
        edad: '20',
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
