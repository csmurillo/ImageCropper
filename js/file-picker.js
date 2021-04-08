// input file clicked
function chooseFile(){
    var filePicker=document.getElementById('file-picker');
    filePicker.click();
}
// input file is put in file input
// init cropper.js
function hasFile(input){
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload=(e)=>{
        // loads image to image container
        var image=document.getElementById('image');
        var imageTitle=document.getElementById('image-title');
        var imgPrev=document.getElementById('image-prev');
        imageTitle.innerText=input.files[0].name;
        imgPrev.src=""+e.target.result;
        image.src=""+e.target.result;
        // set up cropper
            var $ele = $("#image");
            $ele.cropper({
                aspectRatio: 16 / 9,
                crop: function (data) {
                    var x=document.getElementById("image-x");
                    var y=document.getElementById("image-y");
                    var width=document.getElementById("image-width");
                    var height=document.getElementById("image-height");
                    x.innerText=data.x;
                    y.innerText=data.y;
                    width.innerText=data.width;
                    height.innerText=data.height;
                    var xMobile=document.getElementById("image-x-mobile");
                    var yMobile=document.getElementById("image-y-mobile");
                    var widthMobile=document.getElementById("image-width-mobile");
                    var heightMobile=document.getElementById("image-height-mobile");
                    xMobile.innerText=data.x;
                    yMobile.innerText=data.y;
                    widthMobile.innerText=data.width;
                    heightMobile.innerText=data.height;
                },
                zoomable : true,
                scalable : true,
                movable : true,
                built : function(){
                    $(this).cropper('zoomTo', 1/2); // 100%
                    var buttonDownload=document.getElementById('image-download-button');
                    buttonDownload.addEventListener('click',()=>{
                        var URL=$(this).cropper('getCroppedCanvas').toDataURL("image/png");
                        var download=document.getElementById('download-image');
                        download.href=URL;
                    });
                    
                    var buttonDownloadMobile=document.getElementById('image-download-button-mobile');
                    buttonDownloadMobile.addEventListener('click',()=>{
                        var URL=$(this).cropper('getCroppedCanvas').toDataURL("image/png");
                        var download=document.getElementById('download-image-mobile');
                        download.href=URL;
                    });
                }
            });
    };
    // toggle between cropwindow and chooseDropImage
    var imageCropWindow=document.getElementById('image-crop-window');
    var chooseDropImage=document.getElementById('choose-drop-image-area');
    imageCropWindow.hidden=false;
    chooseDropImage.style.display="none";
    chooseDropImage.remove();
}
// helper function
// used in image-crop.js
function addChooseDropImageArea(){
    var main=document.getElementById('main-container');

    let chooseDropImage  = document.createElement("div");
    chooseDropImage.id="choose-drop-image-area";
    chooseDropImage.style.display="flex";
    chooseDropImage.style.justifyContent="center";
    chooseDropImage.style.alignItems="center";
    chooseDropImage.style.width="50%";
    chooseDropImage.style.height="50%";
    chooseDropImage.style.border="1px dashed black";
    chooseDropImage.innerText="Choose/Drop Image";
    chooseDropImage.addEventListener('click',()=>{
        chooseFile();
    });
    main.appendChild(chooseDropImage);
}
