import { globalStyle, createGlobalTheme } from '@vanilla-extract/css';

globalStyle('html, body', {
    overflowX: 'hidden',
});

globalStyle('*', {
    margin: 0,
    padding: 0,
    border: 0,
});

globalStyle(
    `html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video`, 
    {
        fontFamily: 'var(--font-noto-sans-kr), var(--font-roboto)',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '-0.4px',
        lineHeight: '1.4',
        color: '#000',
        verticalAlign: 'baseline',
        boxSizing: 'border-box',
    }
);
export const vars = createGlobalTheme(':root', {
    color: {
        primary: '#18181B',
        secondary: '#f4f4f5',
        black: '#09090B',
        gray: '#71717A',
        gray666: '#666',
        red: '#DC2626',
        border: '#e4e4e7',
        hoverBg: '#f4f4f5',
        blue: '#0072f5',
    }
});

globalStyle('ol, ul', {
    listStyle: 'none',
});

globalStyle('blockquote, q', {
    quotes: 'none',
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
    content: 'none',
});

globalStyle('form', {
    width: '100%',
});

globalStyle('input, button, textarea', {
    borderRadius: 0,
    border: 'none',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-noto-sans-kr), var(--font-roboto)',
});

globalStyle('button', {
    cursor: 'pointer',
});

globalStyle('textarea', {
    width: '100%',
    resize: 'none',
    padding: '12px',
});

globalStyle('img, fieldset', {
    border: 'none',
});

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none',
});

globalStyle('table', {
    tableLayout: 'auto',
    borderSpacing: 'unset',
});

globalStyle('caption', {
    fontSize: '0',
    visibility: 'hidden',
});

globalStyle('.blind', {
    position: 'absolute',
    clip: 'rect(0 0 0 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
});
