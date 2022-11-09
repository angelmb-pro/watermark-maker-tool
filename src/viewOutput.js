export default class ViewOutput {

    constructor(){
        this.size = 1;
    }

    showSomeText(){
        console.log('viewOutput.show some text');
    }

    paintPicture(picture){
        this.resetCanvas();
        const image = new Image();
        image.src = picture;
        // waiting for the picture is already loaded in the image var
        image.addEventListener('load',() => {
            this.paintCanvas(image);
        });
    }

    resetCanvas(){
        const pictureWrapper = document.getElementById('pictureWrapper');
        // remove any previous element
        while(pictureWrapper.firstChild){
            pictureWrapper.removeChild(pictureWrapper.firstChild);
        }
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id','watermarkCanvas');
        pictureWrapper.appendChild(canvas);
    }

    paintCanvas(image){
        const canvas = document.getElementById('watermarkCanvas');
        const ctx = canvas.getContext("2d");

        const dimensions = this.calculateDimensions(image);
        canvas.width = dimensions.width; 
        canvas.height = dimensions.height; 

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // set a timestamp
        ctx.fillStyle = '#cccccc';
        ctx.strokeStyle = '#cccccc';
        ctx.font = '2em serif';
        ctx.textAlign = 'right';
        ctx.fillText(new Date().toISOString().substr(0,10), canvas.width, canvas.height);
    }    

    downloadPicture(element){
        const canvas = document.getElementById('watermarkCanvas');
        element.setAttribute('href', canvas.toDataURL("image/png"));
    }

    calculateDimensions(image){
        const el = document.getElementById('pictureWrapper');
        const aspectRatio = image.width / image.height;
        const width = el.clientWidth * this.size;
        return {'width': width, 'height': width / aspectRatio};
    }

    setSize(size){
        this.size = size;
    }
}
