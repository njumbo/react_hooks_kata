import React, {useCallback, useRef} from "react";
import {Contact} from "../../models/Contact";


type ContactImageProps = {
    contact: Contact
}

export const ContactImage = ({contact}: ContactImageProps) => {
    const inputRef = useRef(null);


    const saveOnLocalStorage = useCallback ((event: any) => {

        const reader  = new FileReader();
        // @ts-ignore
        const file = inputRef.current?.files[0];
        console.log('a ver quejesto', file);


        
        
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
    },[inputRef])
    const imageInStorage = localStorage.getItem('key')
    const imageContentForContact = imageInStorage ? "defaultImage" : imageInStorage!!;

    return <form>
        <input type='file'
        //  accept='image/*'
          ref={inputRef} data-testid="uploadedImageTestId" onChange={saveOnLocalStorage} />
        <button>
            <img src={imageContentForContact} />
        </button>
    </form>
}
