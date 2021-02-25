import {
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Contact } from "../../../models/Contact";
import faker from "faker";
import React from "react";
import { ContactImage } from "../ContactImage";
import { getBase64Image } from "../../common/utils";

const anyName = faker.name.firstName();
const anyPhone = faker.phone.phoneNumber();
const contact = new Contact(anyPhone, anyName, false);

describe("ContactImage", () => {
  it("should display icon to upload image when the contact does not have an image yet", () => {
    render(<ContactImage contact={contact} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should open the fileUpload dialog when the user clicks the uploadImage button", () => {});

  it("should show the uploaded image", async () => {

    const imageContent = Math.random().toString();
    const imageContentBase64 = 'data:image/png;base64,' + btoa(imageContent);

    render(<ContactImage contact={contact} />);
    const fileInputField = screen.getByTestId("uploadedImageTestId");
    const event = {
      target: {
        files: [
          new File([imageContent], "test.png", { type: "image/png" }),
        ],
      },
    };
    fireEvent.change(fileInputField, event);

    await waitFor(() =>
      expect(localStorage.getItem("key")).toEqual(imageContentBase64)
    );
  });

  

  it("should not allow to upload image files bigger than 1 MB", async () => {});


  it("should not allow to upload not image files", async () => {
    const fileContent = Math.random().toString();

    render(<ContactImage contact={contact} />);
    const fileInputField = screen.getByTestId("uploadedImageTestId");
    const event = {
      target: {
        files: [
          new File([fileContent], "test.txt", { type: "text/plain" }),
        ],
      },
    };
    fireEvent.change(fileInputField, event);

    await waitFor(() =>
      expect(localStorage.getItem("key")).toEqual(null)
    );

  });
});
