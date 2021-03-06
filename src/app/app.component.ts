import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  title = 'CV';

   //one of the life cycle called after rendering the page
   ngAfterViewInit() {
    this.loadScript('assets/js/jquery-3.3.1.min.js');
    this.loadScript('assets/js/popper.min.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadScript('assets/js/owl.carousel.min.js');
    this.loadScript('assets/js/aos.js');
    this.loadScript('assets/js/jquery.sticky.js');
    this.loadScript('assets/js/stickyfill.min.js');
    this.loadScript('assets/js/jquery.easing.1.3.js');
    this.loadScript('assets/js/isotope.pkgd.min.js');
    this.loadScript('assets/js/jquery.fancybox.min.js');
    this.loadScript('assets/js/main.js');
  }

  //load javascripts beacuse it is not supported due to render delay
  public loadScript(url: string) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
