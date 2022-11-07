import ViewUserInput from './viewUserInput.js';
import ViewOutput from './viewOutput.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});

class App {
    constructor(){
        this.viewUserInput = new ViewUserInput();
        this.viewOutput = new ViewOutput();

        this.viewUserInput.setTestFunction(this.testFunction,this);
        this.viewUserInput.setUploadPictureFunction(this.uploadPicture,this);
    }

    uploadPicture(imageContent){
        console.log('upload picture!');
        this.viewOutput.paintPicture(imageContent);
    }

    testFunction(){
        console.log('this is a test function!');
    }
}
