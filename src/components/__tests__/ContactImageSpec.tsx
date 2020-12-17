import {render, screen} from "@testing-library/react";
import {Contact} from "../../../models/Contact";
import faker from "faker";
import React from "react";
import {ContactImage} from "../ContactImage";

describe('ContactImage', () => {
    it('should display icon to upload image when the contact does not have an image yet', () => {
        const anyName = faker.name.firstName();
        const anyPhone = faker.phone.phoneNumber();
        const contact = new Contact(anyPhone, anyName, false)

        render(<ContactImage contact={contact} />)

        expect(screen.getByRole('button')).toBeInTheDocument()
    });
});
