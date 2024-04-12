import { Injectable } from "@angular/core";
import { ExpresList } from "./expreslist";

@Injectable({
    providedIn: 'root'
  })
  export class ExpresService {
    protected expresList: ExpresList [] = [
        {
            id: 0,
            name: "Przelewowy",
            price: 1500,
            availability: true,
        },
        {
          id: 1,
          name: "Ciśnieniowy",
          price: 1500,
          availability: true, 
      },
      
      {
        id: 2,
        name: "Kapsułkowy",
        price: 1500,
        availability: true,  
    },
    
    {
      id: 3,
      name: "Ekspres przelewowy na kapsułki",
      price: 1500,
      availability: true,
  },
  
  {
    id: 4,
    name: "Ekspres kolbowy",
    price: 1500,
    availability: true,  
},

{
  id: 5,
  name: "Ekspres na kawę sypką (Pour Over Coffee Maker)",
  price: 1500,
  availability: true,  
},

{
  id: 6,
  name: "Ekspres do kawy z młynkiem",
  price: 1500,
  availability: true,  
},


      ];
}