// input file clicked
function chooseFile(){
    var filePicker=document.getElementById('file-picker');
    filePicker.click();
}
// input file is put in file input
function hasFile(input){
    // console.log(input.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload=(e)=>{
        var image=document.getElementById('image');
        var imageTitle=document.getElementById('image-title');
        var smlImage=document.getElementById('sml-image');
        // console.log(e.target.);
        imageTitle.innerText=input.files[0].name;
        smlImage.src=""+e.target.result;
        image.src=""+e.target.result;
    };
    var imageCropWindow=document.getElementById('image-crop-window');
    var chooseDropImage=document.getElementById('choose-drop-image-area');
    imageCropWindow.hidden=false;
    chooseDropImage.style.display="none";
    chooseDropImage.remove();
}
// helper function
// used
function addChooseDropImageArea(){
    var main=document.getElementById('main-container');
    // width:50%; height: 50%;
    // border: 1px dashed black;

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
