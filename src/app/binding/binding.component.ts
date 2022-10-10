import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    titre: string = "Apprendre le Databinding dans Angular 10" 
    status : boolean = true 
    nom : string = "Achraf Hafsia"
    changertitre(){
    this.titre = "Mon nouveau titre"
    
  }
  constructor() {  }

  ngOnInit(): void {
  }

  
}
