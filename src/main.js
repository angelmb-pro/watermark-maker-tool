document.addEventListener('DOMContentLoaded', () => {
    let pictureContent = null;
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
                pictureContent = e.target.result;
                paintPicture(pictureContent);
            });
            reader.readAsDataURL(file);
        }
    });

    const removeButton = document.getElementById('removePic');
    removeButton.addEventListener('click', () => {
        paintPicture(null);
    });    

    const downloadButton = document.getElementById('downloadPic');
    downloadButton.addEventListener('click', () => {
        downloadButton.setAttribute('href', pictureContent);
    });

    const paintPicture = (picture) => {
        const pictureWrapper = document.getElementById('pictureWrapper');
        // remove any previous element
        while(pictureWrapper.firstChild){
            pictureWrapper.removeChild(pictureWrapper.firstChild);
        }
        if(picture != null){
            const el = document.createElement('img');
            el.src = picture;
            el.width = 400; // for example
            pictureWrapper.appendChild(el);
        }
    }
});
