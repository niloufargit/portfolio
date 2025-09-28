import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
}
