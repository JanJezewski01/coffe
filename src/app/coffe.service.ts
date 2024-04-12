import { Injectable } from '@angular/core';
import { Coffelocatio } from './coffelocation';


@Injectable({
    providedIn: 'root'
  })
    export class CoffeService {

        protected coffeLocationList: Coffelocatio[] = [
           {
            id: 0,
            name: "Arbica",
            availability: true,
            intensity: "Medium",
            color: "light brown",
            coffeine: true,
           },
         
           {
            id: 1,
            name: "Bourbon",
            availability: true,
            intensity: "Strong",
            color: "brown",
            coffeine: true,
           },

           {
            id: 2,
            name: "Excelsa",
            availability: false,
            intensity: "Weak",
            color: "dark brown",
            coffeine: true,
           },

           {
            id: 3,
            name: "Espresso",
            availability: true,
            intensity: "Meadium",
            color: "dark",
            coffeine: false,
           },

           {
            id: 4,
            name: "Geisha/Gesha",
            availability: true,
            intensity: "black",
            color: "Medium",
            coffeine: true,
           },

           {
            id: 5,
            name: "Liberika",
            availability: false,
            intensity: "Strong",
            color: "brown",
            coffeine: true,
           },

           {
            id: 6,
            name: "Maragogype",
            availability: true,
            intensity: "weak",
            color: "brown",
            coffeine: true,
           },

           {
            id: 7,
            name: "Robusta",
            availability: false,
            intensity: "strong",
            color: "black",
            coffeine: true,
           }
          ];    
}
