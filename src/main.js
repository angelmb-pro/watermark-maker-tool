import ViewUserInput from './viewUserInput.js';
import ViewOutput from './viewOutput.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});

class App{

    constructor(){
        console.log('create the app class');
        this.viewOutput = new ViewOutput();
        this.viewUserInput = new ViewUserInput();
        this.viewUserInput.setTestFunction(this.customFunction,this);
    }

    customFunction(){
        console.log('custom function.');
        this.viewOutput.showSomeText();
    }
}
