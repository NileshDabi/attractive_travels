import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    enableHeader = false;
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            this.setPages(event);
            // if (event.url === '/create-destination') {
            //     navbar.classList.add('navbar-color');
            // } else {
            //     navbar.classList.remove('navbar-color');
            // }
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                    navbar.classList.remove('navbar-color');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                    if (this.router.url === '/create-destination') {
                        navbar.classList.add('navbar-color');
                    } else navbar.classList.remove('navbar-color');
                }
            });
        });
    }

    setPages(event) {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        if (event.url === '/create-destination' || event.url === '/login') {
            this.enableHeader = false;
            window.document.activeElement.scrollTop = 0;
            navbar.classList.add('navbar-color');
            navbar.classList.add('navbar-transparent');
        } else {
            navbar.classList.remove('navbar-color');
            this.enableHeader = true;
        }
    }
}
