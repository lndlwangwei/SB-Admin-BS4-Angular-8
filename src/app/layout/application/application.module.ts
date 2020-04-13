import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApplicationRoutingModule} from './application-routing.module';
import {ApplicationComponent} from './application.component';
import {PageHeaderModule} from '../../shared';
import {ApplicationService} from '../../shared/services/application.service';
import { ApplicationEditComponent } from './application-edit/application-edit.component';
import {ModalComponent} from '../bs-component/components';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AlertService} from '../components/alerts/alert.service';

@NgModule({
    declarations: [ApplicationComponent, ApplicationEditComponent, ModalComponent],
    imports: [
    CommonModule, ApplicationRoutingModule, PageHeaderModule, NgbModule, FormsModule
    ],
    providers: [ApplicationService, AlertService],
    entryComponents: [ApplicationEditComponent]
})
export class ApplicationModule { }
