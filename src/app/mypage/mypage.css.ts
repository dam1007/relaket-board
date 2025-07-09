import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

// 마이페이지 타이틀
export const myPageTitle = style({
    fontSize: '22px',
    fontWeight: '600',
    paddingBottom: '10px',
    marginBottom: '20px',
    borderBottom: `1px solid ${vars.color.black}`,
});

// 마이페이지 타이틀
export const myPageSubTitle = style({
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '20px',
});

export const editable = style({
    ':hover': {
        cursor: 'pointer',
        border: `2px solid ${vars.color.black}`,
        boxSizing: 'border-box',
        borderRadius: '3px',
    }
});