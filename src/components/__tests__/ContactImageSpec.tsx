import {fireEvent, logRoles, render, screen} from "@testing-library/react";
import {Contact} from "../../../models/Contact";
import faker from "faker";
import React from "react";
import {ContactImage} from "../ContactImage";
import { getBase64Image, fetchimage, setBase64Image } from "../../common/utils";

const anyName = faker.name.firstName();
const anyPhone = faker.phone.phoneNumber();
const contact = new Contact(anyPhone, anyName, false);

describe('ContactImage', () => {
    it('should display icon to upload image when the contact does not have an image yet', () => {
        render(<ContactImage contact={contact} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should open the fileUpload dialog when the user clicks the uploadImage button', () => {

    });

    it('should show the uploaded image', () => {
        let randomImageContent = Math.random().toString();


        render(<ContactImage contact={contact} />);
        const fileInputField = screen.getByTestId("uploadedImageTestId");
        const event = {
            target: {
                files: [new File([randomImageContent], 'test.png', { type: 'image/png' })]
            }
        }
        fireEvent.change(fileInputField, event);

        expect(localStorage.getItem('key')).toEqual(randomImageContent);
    });

    it('should upload an image', () => {

    });
});
