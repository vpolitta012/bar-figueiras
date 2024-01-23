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
    const linkDeVisualizacao = "https://drive.google.com/file/d/1IU8OPBJtevT4UWQ3iJE8OE1zlDmo9HTy/view?usp=drive_link";
    window.open(linkDeVisualizacao, "_blank");
  }
}
