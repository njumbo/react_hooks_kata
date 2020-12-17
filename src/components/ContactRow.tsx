import {Contact} from "../../models/Contact";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import * as contactActions from "../store/actions";
import {IconButton} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

type ContactRowProps = {
    contact: Contact
}

export const ContactRow = ({contact}: ContactRowProps) => {
    const dispatch = useDispatch()

    const setAsFav = useCallback(
        (favContact: Contact) => {
            favContact.isFavorite = !favContact.isFavorite;
            dispatch(contactActions.update(favContact));
        },
        []
    );

    return <tr className={`contact ${contact.isFavorite ? 'favorite' : ''}`} key={contact.phone}>
        <td role="name">{contact.name}</td>
        <td role="phone">{contact.phone}</td>
        <td>
            <IconButton
                aria-label="Fav"
                onClick={() => setAsFav(contact)}
                color={contact.isFavorite ? 'primary' : 'default'}
            >
                <StarIcon/>
            </IconButton>
        </td>
    </tr>
}
