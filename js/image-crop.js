function closeImageCropWindow(){
    console.log("CLOSE IMAGE");
    var imageCropWindow=document.getElementById('image-crop-window');
    imageCropWindow.hidden=true;
    addChooseDropImageArea();
    var chooseDropImage=document.getElementById('choose-drop-image-area');
}


// function getImageCoord(){
//     var image=document.getElementById("image");
//     image.addEventListener('mousemove',(e)=>{
//         console.log('x'+e.offsetX+'y'+e.offsetY);
//     });
// }
// window.onload=getImageCoord();