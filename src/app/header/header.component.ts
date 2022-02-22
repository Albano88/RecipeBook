import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //inserire le parentesi per creare un oggetto basato sull evento
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);

  }

}
