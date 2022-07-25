
let url;
const canvas = new fabric.Canvas("canvas",{
    width: 500,
    height: 500,
    backgroundColor: '#fff'
});

canvas.requestRenderAll();


convertUrl = (e) => {
    console.log(e);
    const inputfile = document.getElementById("imgUp");
    const file = inputfile.files[0];

    reader.readAsDataURL(file);
    
    reader.addEventListener("load",()=>{
        fabric.Image.fromURL(reader.result, img =>{
            canvas.add(img);
            
            canvas.on('mouse:wheel', function(img) {
                var delta = img.e.deltaX;
                var zoom = canvas.getZoom();
                zoom *= 0.999 ** delta;
                if (zoom > 20) zoom = 20;
                if (zoom < 1) zoom = 1;
                canvas.zoomToPoint({ x: img.e.offsetX, y: img.e.offsetY }, zoom);
                img.e.preventDefault();
                img.e.stopPropagation();
              });
        
            canvas.requestRenderAll();
        })
    })
}

const reader = new FileReader();

const imgUp = document.getElementById("imgUp");
imgUp.addEventListener("change", convertUrl);
