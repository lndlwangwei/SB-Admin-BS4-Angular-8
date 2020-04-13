import {Component, Inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationService} from '../../../shared/services/application.service';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html'
})
export class ApplicationEditComponent implements OnInit {

    @Input()
    public application = {};

    constructor(private actionModal: NgbActiveModal,
                private applicationService: ApplicationService) { }

    ngOnInit() {
    }

    public add() {
        this.applicationService.add(this.application).subscribe(response => {

        });
    }
}
