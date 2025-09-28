import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { ProjComponent } from '../../components/proj/proj.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public appConfig = AppConfig;
  public assetPaths = AssetPaths;

  constructor(private _globalStates: GlobalStatsService) {
    this._globalStates.setCanonicalUrl(AppRoutes.PROJECTS);
  }
}
