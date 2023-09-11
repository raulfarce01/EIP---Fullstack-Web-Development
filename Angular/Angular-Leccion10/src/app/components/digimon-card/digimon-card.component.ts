import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/interfaces/digimon.interface';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.scss']
})
export class DigimonCardComponent implements OnInit {

  @Input() digimon!: Digimon;

  constructor() { }

  ngOnInit(): void {
  }

}
