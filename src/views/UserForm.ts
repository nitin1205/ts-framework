import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps>{
    eventsMap(): { [key: string]: () => void } {
        return {
            // 'click:button': this.onButtonClick,
            // 'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveUserClick
        };
    };

    onSaveUserClick = (): void => {
        console.log('sdshfkl')
        this.model.save();
    };

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        
        if (input) {
            const newName = input.value;
            this.model.set({ name: newName });
        };
    }; 

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    template(): string {
        return `
            <div>
                <input placeholder='${this.model.get('name')}'/>
                <button class='set-name'>Change Name</button>
                <button class='set-age'>Set Random Age</button>
                <button class='save-model'>Save User</button>
            </div>
        `;
    };
};