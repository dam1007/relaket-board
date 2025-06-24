import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const header = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 30,
    border: '1px solid #ddd'
});

export const headerInner = style({
    maxWidth: '1280px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '15px 0',
    margin: '0 auto',
});

export const logo = style({
    flexShrink: 0,
    display: 'inline-flex',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none'
});

export const gnbNav = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10
});

export const gnbNavLink = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    padding: '0 12px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '6px',
    ':hover': {
        backgroundColor: vars.color.hoverBg,
    }
});

export const joinNav = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10
});

export const joinNavItem = style({
    flexShrink: 0,
    fontSize: 16,
    color: '#222',
    selectors: {
        '&:hover': {
            fontWeight: '600',
            textDecoration: 'underline'
        }
    }
});

export const myMenu = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
});

export const myMenuList = style({
    position: 'absolute',
    right: 0,
    top: 'calc(100% + 8px)',
    padding: '8px 0',
    width: '256px',
    boxSizing: 'border-box',
    borderRadius: '12px',
    border: `1px solid ${vars.color.border}`,
    backgroundColor: 'white',
});

export const myMenuItem = style({
    padding: '0 8px',
});

export const myMenuLink = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '40px',
    padding: '0 8px',
    backgroundColor: 'white',
    borderRadius: '8px',
    color: vars.color.gray666,
    ':hover': {
        backgroundColor: vars.color.hoverBg,
        color: vars.color.black,
    }
});

export const userName = style({
    padding: '12px 16px 8px',
    fontWeight: '500',
});

export const userMail = style({
    display: 'block',
    fontWeight: '400',
    color: vars.color.gray666,
    paddingTop: '4px',
});

export const seperate = style({
    position: 'relative',
    marginTop: '8px',
    paddingTop: '8px',
    ':before': {
        content: '',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '1px',
        backgroundColor: vars.color.border,
    }
});