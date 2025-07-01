import { style } from "@vanilla-extract/css";

export const ImageUploader = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '130px',
    height: '130px',
    borderRadius: '100%',
    overflow: 'hidden',
    position: 'relative',
});

export const ImageUploaderInput = style({
    display: 'none',
});

export const PreviewImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const ImageDeleteButton = style({
    position: 'absolute',
    right: '0',
    top: '0',
    width: '30px',
    height: '30px',
    background: ``
});