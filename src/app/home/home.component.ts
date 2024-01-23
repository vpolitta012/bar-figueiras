import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  img = "../../assets/img/CAPA-SITE-BAR-FIGUEIRAS.png"

  redirectToPdf() {
    const linkDeVisualizacao = "https://drive.google.com/file/d/1IU80PBJtevT4UWQ3iJE80E1zlDmo9HTy/view?usp=sharing";
    window.open(linkDeVisualizacao, "_blank");
  }
}
