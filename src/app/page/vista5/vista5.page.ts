import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vista5',
  templateUrl: './vista5.page.html',
  styleUrls: ['./vista5.page.scss'],
})
export class Vista5Page implements OnInit {

  dataNames = [];
  dataJson:any;


  ngOnInit () {
    this.initializaIntems()
  }

  constructor(private router: Router) { }


  regresar(){
    this.router.navigate(['/'])
  }


  initializaIntems(){

    this.dataNames = [
      { 
        name: 'Gabriela Hernandez',
        edad: '20',
        img: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
      },
      {
        name: 'Alejandra Hernandez',
        edad: '25',
        img: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
      },
      {
        name: 'Jenny Hernandez',
        edad: '19',
        img: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
      }, 
      { 
        name: 'Gabriela Hernandez',
        edad: '20',
        img: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
      }, 
      { 
        name: 'Gerardo Matinez',
        edad: '20',
        img: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
      },  
    ];

    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}