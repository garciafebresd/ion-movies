import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imagePath;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: unknown, size: string = 'w500'): string {

    if (!img) {
      return './assets/images/no-image-banner.jpg';
    }

    const imgUrl = `${ URL }/${size}${img}`;

    return imgUrl;
  }

}
