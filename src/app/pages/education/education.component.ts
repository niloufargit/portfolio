import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { EducComponent } from '../../components/educ/educ.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducComponent, CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public assetPaths = AssetPaths;
  public appConfig = AppConfig;

  constructor(private _globalStates: GlobalStatsService) {
    this._globalStates.setCanonicalUrl(AppRoutes.EDUCATION);
  }
}
