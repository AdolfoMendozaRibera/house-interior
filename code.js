"use strict";

const UPLOAD_IMAGES=document.getElementById("id-upload");

UPLOAD_IMAGES.addEventListener("change",()=>
{
    read_Images(UPLOAD_IMAGES.files);
})


const read_Images=(imgs)=>
{
    for(let i=0;i<imgs.length;i++)
    {
        const reader=new FileReader();
        reader.readAsDataURL(imgs[i]);
        reader.addEventListener("load",(e)=>
        {
            let new_img=`<img src='${e.currentTarget.result}' class='class-images'>`;
            document.querySelector(".image-container").innerHTML+=new_img;
        })
    }
}