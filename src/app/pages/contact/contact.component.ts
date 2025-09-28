import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    public appConfig = AppConfig;
}



