import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  selectedImage: string | ArrayBuffer | null = null;

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        const result = e.target?.result;
        if (result) {
          this.selectedImage = result;

          if (typeof result === 'string') {
            // Dynamically import Tesseract.js only on the client side
            const Tesseract = await import('tesseract.js');

            Tesseract.recognize(result,'eng')
            .then(({ data: { text } }) => {
              console.log(text); // Affiche le texte
            }).catch((error) => {
              console.error(error);
            });
          }
        }
      };

      reader.readAsDataURL(file);
    }
  }
}
