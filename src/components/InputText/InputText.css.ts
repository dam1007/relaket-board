import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

// input text, password, number
export const input = style({
    display: 'inline-flex',
    width: '100%',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    padding: '4px 12px',
    boxSizing: 'border-box',
    // boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
});

export const inputLabel = style({
    display: 'inline-flex',
    fontSize: '14px',
    fontWeight: '500',
    color: vars.color.black,
    marginBottom: '8px',
});