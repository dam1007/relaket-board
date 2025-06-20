import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const joinBox = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '550px',
    backgroundColor: 'white',
    border: `1px solid ${vars.color.border}`,
    borderRadius: '12px',
    margin: '0 auto',
});

export const joinForm = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '30px',
    width: '100%',
    padding: '64px 80px 80px',
});

export const inputWrap = style({
    margin: '15px 0',
    ':first-of-type': {
        margin: '0 0 15px',
    },
    ':last-of-type': {
        margin: '15px 0 0',
    }
});

