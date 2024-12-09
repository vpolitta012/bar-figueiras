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
    const linkDeVisualizacao = "https://drive.google.com/file/d/1-Rh36mbANNIVpu0OgtvolqPc3O7AQ3OR/";
    window.open(linkDeVisualizacao, "_blank");
  }
}
