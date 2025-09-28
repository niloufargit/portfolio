import { Component, input, InputSignal } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { Experience } from '../../../interfaces/work-experience.interface';

@Component({
    selector: 'app-experience-card',
    standalone: true,
    imports: [],
    templateUrl: './exp.component.html',
    styleUrl: './exp.component.scss'
})
export class ExpComponent {
    public experience: InputSignal<Experience> = input.required<Experience>();
}
