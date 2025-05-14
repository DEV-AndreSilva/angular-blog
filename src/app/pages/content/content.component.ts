import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://br.web.img3.acsta.net/img/d8/1a/d81a66efc6c6fb12f9aca69a20eb86d1.jpg";
  contentTitle: string = "Meu titulo";
  contentDescription: string = "Descricao da noticia";
  private id: string | null = "";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id.toString() == id);

    console.log(result);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    }
  }

}
