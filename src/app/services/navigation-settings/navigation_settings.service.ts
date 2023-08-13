import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface INavigation {
    titles: NodeListOf<HTMLElement> | null;
    itemLists: NodeListOf<HTMLElement> | null;
    editButtons: NodeListOf<HTMLElement> | null;
    redButtons: NodeListOf<HTMLElement> | null;
}

@Injectable({
    providedIn: 'root',
})
export class NavigationSettingsService {
    private elementsSubject: BehaviorSubject<INavigation> = new BehaviorSubject<INavigation>({
        titles: null,
        itemLists: null,
        editButtons: null,
        redButtons: null,
    });
    constructor() {
        this.setNavigation();
    }

    setNavigation() {
        const navigation: INavigation = {
            titles: document.querySelectorAll('.cabinet-info-title'),
            itemLists: document.querySelectorAll('.cabinet-info-item-list'),
            editButtons: document.querySelectorAll('.button.white'),
            redButtons: document.querySelectorAll('.button.red')
        }
        if (navigation.editButtons != null)
            navigation.editButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const blockElement: HTMLElement | null = button.closest('.cabinet-info-item-list');
                    if (blockElement != null) {
                        const inputElement: NodeListOf<HTMLElement> | null = blockElement.querySelectorAll('.cabinet-info-input');

                        inputElement.forEach((inputElementRef) => {
                            const element = (inputElementRef as HTMLInputElement);
                            if (element.classList.contains('active')) {
                                element.classList.remove('active');
                                blockElement.classList.remove('edit');
                            }
                            else {
                                element.classList.add('active');
                                blockElement.classList.add('edit');
                            }
                            element.readOnly = !element.readOnly;
                        });
                    }
                });
            })
        if (navigation.titles != null) {
            navigation.titles.forEach((element, index) => {
                element.addEventListener('click', () => {
                    if (navigation.itemLists != null) {
                        if (element.classList.contains('active')) {
                            navigation.itemLists[index].classList.remove('active');
                            element.classList.remove('active');
                        } else {
                            navigation.itemLists[index].classList.add('active');
                            element.classList.add('active');
                        }
                    }
                });

            });
        }
        if (navigation.redButtons != null) {
            navigation.redButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const blockElement = button.closest('.cabinet-info-item-list');
                    if (blockElement != null) {
                        const inputElement = blockElement.querySelectorAll('.cabinet-info-input');

                        inputElement.forEach((inputElementRef) => {
                            const element = (inputElementRef as HTMLInputElement);
                            if (element.classList.contains('active')) {
                                element.classList.remove('active');
                                blockElement.classList.remove('edit');
                            }
                            else {
                                element.classList.add('active');
                                blockElement.classList.add('edit');
                            }
                            element.readOnly = !element.readOnly;
                        });
                    }
                });
            });
        }
    }
}