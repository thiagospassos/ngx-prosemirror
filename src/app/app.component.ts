import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public content: string;
  constructor() {

  }
  ngOnInit(): void {
    this.content = `
# This is just a test
## This is a subtitle
This is normal content
* this is a bullet point
* another bullet point
`;
  }
}
