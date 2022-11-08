import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() path: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigate([this.path]);
  }

}
