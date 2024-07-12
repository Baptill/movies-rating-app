import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadImageComponent } from '../app/upload-image/upload-image.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies-rating-app';
}
