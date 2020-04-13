import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../shared/services/application.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationEditComponent} from './application-edit/application-edit.component';
import {AlertService} from '../components/alerts/alert.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit {

    public applications = [];

    constructor(public applicationService: ApplicationService,
                private modalService: NgbModal,
                private alertService: AlertService) { }

    ngOnInit() {
        this.getAll();
        this.alertService.info('this is a test');
    }

    getAll() {
        this.applicationService.getAll().subscribe(response => {
            this.applications = response;
        });
    }

    openModel(application?) {
        const modalRef = this.modalService.open(ApplicationEditComponent, {backdrop: 'static'});
        const modalInstance = modalRef.componentInstance;
        if (application) {
            modalInstance.application = application;
        }
    }
}
