import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutInfo: About = new About();
  about: About = new About();

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutInfo = this.aboutService.aboutInfo;
    this.cargarAbout();
  }

  cargarAbout() {
    this.aboutService.getAbout()
      .subscribe((info) => {
        this.about = info;
      });
  }

}
