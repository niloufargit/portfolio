import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesData } from '../../../enums/routes-data.enum';
import { AppConfig } from '../../../enums/app-data';
import { HttpClient } from '@angular/common/http';
import { AssetPaths } from '../../../enums/asset-paths.enum';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
    ],

    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public navbarOpen = false;
    public linksData = RoutesData;
    public appData = AppConfig;
    public assetPaths = AssetPaths;

    constructor(
        private readonly _router: Router,
        private readonly _httpClient: HttpClient,
    ) {
        _router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.navbarOpen && this.toggleNavbar();
            }
        });
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        if (window.innerWidth > 1024) {
            this.navbarOpen = false;
        }
    }



    public contactMail(): void {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.appData.emailId}&subject=Contact%20-%20Portfolio&body=Bonjour%20Niloufar%2C`, '_blank');
    }

    private constructAbsolutePath(relativePath: string): string {
        return `${window.location.origin}/${relativePath}`;
    }

    private getFileNameFromPath(path: string): string {
        return path.split('/').pop() || 'downloaded_file';
    }

}
