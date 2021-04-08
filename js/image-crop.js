// toggle window close/open
// cleans up resources
function closeImageCropWindow(){
    var imageCropWindow=document.getElementById('image-crop-window');
    imageCropWindow.hidden=true;
    document.getElementById("file-picker").value = null;
    clearImg();
    $("#image").cropper('destroy');
    addChooseDropImageArea();
}
function clearImg(){
    var image=document.getElementById('image');
    var imgPrev=document.getElementById('image-prev');
    imgPrev.src="";
    image.src="";
}


