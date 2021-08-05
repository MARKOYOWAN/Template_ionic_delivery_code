import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  login() {
    this.nav.navigateRoot(['login']);
  }

}
