import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const InputFile = style({
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '40px',
    lineHeight: '34px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    padding: '4px 12px',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontWeight: '400',
    '::file-selector-button': {
        background: 'white',
        border: 'none',
        fontSize: '14px',
        fontWeight: '500',
        margin: '0',
        padding: '0 6px 0 0',
    }
});
