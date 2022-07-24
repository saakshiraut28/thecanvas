console.log("Hello there");

let url;
const canvas = new fabric.Canvas("canvas",{
    width: 500,
    height: 500,
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
            canvas.on('mouse:wheel', function(opt) {
                var delta = opt.e.deltaY;
                var zoom = canvas.getZoom();
                zoom *= 0.999 ** delta;
                if (zoom > 50) zoom = 50;
                if (zoom < 1) zoom = 1;
                canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
                opt.e.preventDefault();
                opt.e.stopPropagation();
              });
            canvas.requestRenderAll();
        })
    })
}

const reader = new FileReader();

const imgUp = document.getElementById("imgUp");
imgUp.addEventListener("change", convertUrl);