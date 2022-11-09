import { Component } from '@angular/core';

import { Item } from 'src/MenuItem'; //loading the MenuItem type into app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  items:Item[] =
  [{id:1, name:"Pizza Orignal", category:"Food/Pizza", price:1.00},
  {id:2, name:"Jumbo Pizza", category:"Food/Pizza", price:2.00},
  {id:3, name:"Pizza-in-a-Cup", category:"Drink", price:3.00},
  {id:4, name:"Just-Pizza-Water", category:"Drink", price:4.00},
  {id:5, name:"Pizza Keychain", category:"Other/Merch", price:5.00},
  {id:6, name:"Pizza-shaped Cup", category:"Other/Merch", price:6.00}
];


  getByCategory()
  {
    
    let Cat:string= (<HTMLInputElement> document.getElementById("itemCat")).value;
    //save user input from the itemCat button
    
    let itemCategory:Item[] = []; //create new empty array for sorted/filtered items

      for(let i=0; i<this.items.length; i++){ //for loop to cycle through each object in the items array
        let mi:Item = this.items[i] //assign 'mi' for the index of each item in 'items'
        
          if(mi.category.includes(Cat)) //if the item's category matches the user input
          { 
            itemCategory.push(mi); //add any matching objects (selected by index) to the new filtered item list.
          }
        }
        this.items = itemCategory; //display new list?  
  }

  Reset() //
  {
    this.items = [{id:1, name:"Pizza Orignal", category:"Food/Pizza", price:1.00},
    {id:2, name:"Jumbo Pizza", category:"Food/Pizza", price:2.00},
    {id:3, name:"Pizza-in-a-Cup", category:"Drink", price:3.00},
    {id:4, name:"Just-Pizza-Water", category:"Drink", price:4.00},
    {id:5, name:"Pizza Keychain", category:"Other/Merch", price:5.00},
    {id:6, name:"Pizza-shaped Cup", category:"Other/Merch", price:6.00}]
  }
}
