import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Digimon } from 'src/app/models/interfaces/digimon.interface';
import { DigimonResponse } from 'src/app/models/interfaces/digimonResponse.interface';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.scss']
})
export class DigimonListComponent implements OnInit {

  public digimons: Digimon[] = []

  constructor(
    private digimonService: DigimonService
  ) { }

  ngOnInit(): void {
    this.digimonService.findDigimons().subscribe(
      {
        next: (resp) => {
          this.digimons = resp.content;
          console.log(this.digimons);
        },
        error: (error) => {
          console.log("Error en la API");
        }
      }
    );
  }

  public date = new Date();
}
