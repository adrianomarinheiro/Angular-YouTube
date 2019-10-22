import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {


  constructor(
    private sanitizer: DomSanitizer,

  ) {

  }


  transform(value: string, url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + value);;
  }

}
