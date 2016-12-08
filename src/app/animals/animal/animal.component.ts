import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Animal, IAnimal } from '../shared/animal.model';
import { AnimalService } from '../shared/animals.service';
import { AuthenticationService } from '../../_auth/authentication.service';
import { AnimalUpdateComponent } from '../update/animal-update.component';
import { KSSwiperContainer } from 'angular2-swiper';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.html',
  styleUrls: ['./animal.css'],
  providers: [ Animal, AnimalService ]
})
export class AnimalComponent implements OnInit {
  public title: string = 'Animal Details';
  public errorMessage: string;
  closeResult: string;
  @Input() animal: IAnimal;

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
  swiper1SwipeOptions: any;

  constructor(
    private _animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private modalService: NgbModal,
    private authService: AuthenticationService
  ) {
    this.swiper1SwipeOptions = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: 6000,
      autoplayDisableOnInteraction: false,
      effect: 'fade'
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  onBack(): void {
    this.router.navigate(['/animals']);
  }

  openUpdateAnimal() {
    const addAdnimalModalRef = this.modalService.open(AnimalUpdateComponent, { size: 'lg' });
    addAdnimalModalRef.componentInstance.animal = this.animal;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        animal => this.animal = animal,
        error => this.errorMessage = <any>error
      );
    });
  }
}
