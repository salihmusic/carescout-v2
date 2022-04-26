import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ICareScouter } from 'src/app/models/interfaces/carescouter.interface';

@Component({
  selector: 'app-care-scouter-profile',
  templateUrl: './care-scouter-profile.component.html',
  styleUrls: ['./care-scouter-profile.component.css'],
})
export class CareScouterProfileComponent implements OnInit {
  carescouters: any[]= [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res: Data) => {
      this.carescouters = res['details'];
    });
  }
}
