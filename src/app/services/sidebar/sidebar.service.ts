import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface IElements {
    sidebar: HTMLElement | null;
    overlay: HTMLElement | null;
    togglebtn: HTMLElement | null;
    body: HTMLElement;
}

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    private elementsSubject: BehaviorSubject<IElements> = new BehaviorSubject<IElements>({
        sidebar: null,
        overlay: null,
        togglebtn: null,
        body: document.body,
    });

    elements$: Observable<IElements> = this.elementsSubject.asObservable();

    constructor() {
        this.setElements();
    }

    setElements() {
        const elements: IElements = {
            sidebar: document.getElementById('sidebar'),
            overlay: document.getElementById('overlay'),
            togglebtn: document.getElementById('togglebtn'),
            body: document.body,
        };

        if (elements.togglebtn != null && elements.overlay != null) {
            elements.togglebtn.addEventListener('click', this.toggleSidebar.bind(this));
            elements.overlay.addEventListener('click', this.toggleSidebar.bind(this));
        }

        this.elementsSubject.next(elements);
    }

    toggleSidebar() {
        const { sidebar, overlay, body } = this.elementsSubject.value;
        if (sidebar && overlay) {
            if (sidebar.classList.contains('notactive')) {
                sidebar.classList.remove('notactive');
                overlay.classList.add('active');
                body.classList.add('disable-scroll');
            } else {
                sidebar.classList.add('notactive');
                overlay.classList.remove('active');
                body.classList.remove('disable-scroll');
            }
        }
    }
}