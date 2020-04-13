import { Component, OnInit } from '@angular/core';
import { AlertService, Alert } from './alert.service';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    constructor(public alert: AlertService) {

    }

    closeAlert(alert: Alert) {
        this.alert.close(alert);
    }

    ngOnInit() {
    }

}
