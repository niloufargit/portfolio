import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { ExpComponent } from '../../components/exp/exp.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
        ExpComponent,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EXPERIENCE);
    }
}
