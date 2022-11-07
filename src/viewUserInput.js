import ViewOutput from './viewOutput.js';

export default class ViewUserInput {

    constructor(){
        let pictureContent = null;
        this.viewOutput = new ViewOutput();

        //this.uploadPicture();
        this.removePicture();
        this.downloadPicture();

        this.reduceSize();
        this.resetSize();
        //this.enlargeSize();
    }

    // let's take the enlarge button click event for this test
    setTestFunction(fn, context){
        const button = document.getElementById('enlarge');
        button.addEventListener('click', () => {
            console.log('test function in viewUserInput.');
            fn.call(context);
            //this.viewOutput.setSize(1.5);
            //this.viewOutput.paintPicture(this.pictureContent);
        });
    }

    setUploadPictureFunction(fn, context){
        const fileEl = document.getElementById('uploadPic');
        fileEl.addEventListener('change', () => {
            if(fileEl.files.length > 0){
                const file = fileEl.files[0];
                const reader = new FileReader();
                reader.addEventListener('load',(e) => {
                    this.pictureContent = e.target.result;
                    //this.viewOutput.paintPicture(this.pictureContent);
                    fn.call(context, e.target.result);
                });
                reader.readAsDataURL(file);
            }
        });
    }
    uploadPicture(){
        const fileEl = document.getElementById('uploadPic');
        fileEl.addEventListener('change', () => {
            // when the user select a file
            if(fileEl.files.length > 0){
                const file = fileEl.files[0];
                const reader = new FileReader();
                reader.addEventListener('load',(e) => {
                    // triggered when the file is loaded
                    // the file content will be stored in:
                    //  e.target.result
                    // as soon as the image is loaded, we will paint
                    this.pictureContent = e.target.result;
                    this.viewOutput.paintPicture(this.pictureContent);
                });
                reader.readAsDataURL(file);
            }
        });
    }

    removePicture(){
        const removeButton = document.getElementById('removePic');
        removeButton.addEventListener('click', () => {
            this.viewOutput.paintPicture(null);
        });    
    }

    downloadPicture(){
        const downloadButton = document.getElementById('downloadPic');
        downloadButton.addEventListener('click', () => {
            this.viewOutput.downloadPicture(downloadButton);
        });
    }

    reduceSize(){
        const button = document.getElementById('reduce');
        button.addEventListener('click', () => {
            this.viewOutput.setSize(0.5);
            this.viewOutput.paintPicture(this.pictureContent);
        });
    }

    resetSize(){
        const button = document.getElementById('reset');
        button.addEventListener('click', () => {
            this.viewOutput.setSize(1);
            this.viewOutput.paintPicture(this.pictureContent);
        });
    }

    enlargeSize(){
        const button = document.getElementById('enlarge');
        button.addEventListener('click', () => {
            this.viewOutput.setSize(1.5);
            this.viewOutput.paintPicture(this.pictureContent);
        });
    }
}
