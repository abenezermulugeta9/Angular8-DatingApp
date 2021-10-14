import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  // Since MemberCard is child of MemberList
  // we need to use @Input directive to inject users.
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
