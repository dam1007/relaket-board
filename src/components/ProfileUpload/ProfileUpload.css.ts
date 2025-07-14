import { style } from "@vanilla-extract/css";

export const profileUpload = style({
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
});

export const profileUploadInput = style({
    visibility: 'hidden',
});

export const profileUploadImage = style({
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: 'pointer',
});