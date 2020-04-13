import { Injectable } from '@angular/core';

export class Alert {
    constructor(
        private type: string,
        private message: string,
        private timeout = 3000
    ) { }

    icon() {
        let icon = 'fa fa-check-circle';
        switch (this.type) {
            case 'warning':
                icon = 'fa fa-exclamation-circle';
                break;
            case 'error':
                icon = 'fa fa-times-circle';
                break;
            case 'success':
                icon = 'fa fa-check-circle';
                break;
        }
        return icon;
    }
}

@Injectable()
export class AlertService {
    alerts: Alert[] = [];
    close(alert: Alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    open(type: string, message: string, timeout = 3000) {
        const alert = new Alert(type, message, timeout);
        this.alerts.push(alert);
        if (timeout > 0) {
            setTimeout(() => {
                const index = this.alerts.indexOf(alert);
                if (index >= 0) {
                    this.close(alert);
                }
            }, timeout);
        }
    }
    info(message: string) {
        this.open('info', message);
    }

    warning(message: string) {
        this.open('warning', message);
    }

    error(message: string) {
        this.open('danger', message);
    }
}
