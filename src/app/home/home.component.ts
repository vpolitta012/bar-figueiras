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

  teste() {
    const linkDeVisualizacao = "https://drive.google.com/file/d/1-_QIC-IbIyvTG6XTROs1ibKxS4HhEBx3/view?usp=drivesdk";
    window.open(linkDeVisualizacao, "_blank");
  }
}
