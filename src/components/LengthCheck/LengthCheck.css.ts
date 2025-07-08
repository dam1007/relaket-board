import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

// textarea length check
export const lengthCheckWrap = style({
    position: 'relative',
    height: '120px',
    border: `1px solid ${vars.color.border}`,
    padding: '15px 15px 35px 15px',
    borderRadius: '7px',
    backgroundColor: 'white',
});

export const lengthCheckTextarea = style({
    height: '100%',
    border: 'none',
    borderRadius: '0',
    padding: '0',
    ':focus': {
        outline: 'none'
    }
});

export const lengthCheck = style({
    position: 'absolute',
    right: '15px',
    bottom: '12px',
});

export const maxLength = style({
    color: vars.color.gray999,
});