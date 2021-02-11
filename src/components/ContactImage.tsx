import React from "react";
import {Contact} from "../../models/Contact";


type ContactImageProps = {
    contact: Contact
}

export const ContactImage = ({contact}: ContactImageProps) => {
    const saveOnLocalStorage = (event: any) => {
        console.log(event)
        const reader  = new FileReader();
        // @ts-ignore
        const file = document.getElementById('uploadedImage')?.files[0];

        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                localStorage.setItem('key', reader.result ? reader.result.toString() : "");
            }
        }

        // const reader = new FileReader();
        //
        // reader.onload = function (e) {
        //     document.getElementById('bannerImg').src =  e.target.result;
        // }
        //
        // reader.readAsDataURL(input.files[0]);
    }
    const imageInStorage = localStorage.getItem('key')
    const imageContentForContact = imageInStorage ? "defaultImage" : imageInStorage!!;

    return <form>
        <input type="file" id="uploadedImage" data-testid="uploadedImageTestId" onChange={(e) => saveOnLocalStorage(e)} />
        <button>
            <img src={imageContentForContact} />
        </button>
    </form>
}
