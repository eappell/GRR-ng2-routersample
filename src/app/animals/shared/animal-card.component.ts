import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Animal } from './animal.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styles: ['.card-img-top { cursor:pointer }']
})
export class AnimalCardComponent implements OnInit {
  @Input() animal: Animal;
  closeResult: string;

  constructor(private router: Router,
    private modalService: NgbModal) {}

  ngOnInit() {
  }

  openLightbox(modalTemplate: string): void {
    this.modalService.open(modalTemplate, { size: 'lg' });
  }

  gotoDetail(animal: Animal): void {
    let link = ['/animal', animal.Id];
    this.router.navigate(link);
  }
}
