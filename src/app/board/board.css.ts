import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const writeBox = style({
    borderRadius: '10px',
    border: `1px solid ${vars.color.border}`,
});

export const writeBoxHeader = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'nowrap',
    padding: '18px 25px',
    borderBottom: `1px solid ${vars.color.border}`,
});

export const writeBoxTitle = style({
    flexGrow: '1',
    fontSize: '20px',
    fontWeight: '700'
});

export const writeBoxDate = style({
    color: vars.color.gray666,
});

export const writeBoxBody = style({
});

export const writeBoxTextWrap = style({
    padding: '25px',
    minHeight: '800px',
    overflowY: 'auto',
});

export const writeBoxFileWrap = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '40px',
    padding: '18px 25px',
    borderTop: `1px solid ${vars.color.border}`,
});

export const writeBoxFileTitle = style({
    fontWeight: '500'
});
