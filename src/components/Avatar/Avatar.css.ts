import { style } from "@vanilla-extract/css";

export const avatar = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    overflow: 'hidden',
});

export const headerAvatar = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    overflow: 'hidden',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
});

export const avatarImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});