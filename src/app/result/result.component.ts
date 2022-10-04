import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class Result implements OnInit {

  public ques = {
    id: [1,2,3,4,5,6,7,8,9,10],
  name: ["Leanne Graham","Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"],
  username: ["Bret", "Antonette",  "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"],
  email: ["Sincere@april.biz", "Shanna@melissa.tv", "Nathan@yesenia.net", "Julianne.OConner@kory.org", "Lucio_Hettinger@annie.ca", "Karley_Dach@jasper.info", "Telly.Hoeger@billy.biz", "Sherwood@rosamond.me", "Chaim_McDermott@dana.io", "Rey.Padberg@karina.biz"] ,

  phone: ["1-770-736-8031 x56442", "010-692-6593 x09125","1-463-123-4447", "493-170-9623 x156","(254)954-1289","1-477-935-8478 x6430","210.067.6132","586.493.6943 x140","(775)976-6794 x41206","024-648-3804"] ,
  website: ["hildegard.org", "anastasia.net","ramiro.info","kale.biz","demarco.info","ola.org","elvis.io","jacynthe.com", "conrad.com","ambrose.net",]

}
  constructor() { }

  ngOnInit() {
  }

}