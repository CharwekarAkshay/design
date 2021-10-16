import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  @Input()
  languages!: Array<string>

  constructor() { }


  ngOnInit(): void {
  }

}
