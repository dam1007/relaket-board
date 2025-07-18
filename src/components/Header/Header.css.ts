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
    border: '1px solid #ddd',
    backgroundColor: 'white',
    zIndex: '100',
});

export const headerInner = style({
    maxWidth: '1280px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '15px',
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

// s: 검색창
export const searchBox = style({
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    boxSizing: 'border-box',
});

export const searchBoxInput = style({
    height: '30px',
    borderRadius: '7px',
    padding: '0 62px 0 10px',
});

export const searchBoxDelButton = style({
    position: 'absolute',
    right: '36px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '18px',
    height: '30px',
    fontSize: '0',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '20px',
    backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='200px' width='200px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z'%3E%3C/path%3E%3C/svg%3E")`,
});

export const searchBoxButton = style({
    position: 'absolute',
    right: '0px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '36px',
    height: '30px',
    fontSize: '0',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '20px',
    backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='200px' width='200px' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E")`,
});