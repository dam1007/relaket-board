import { style, globalStyle } from '@vanilla-extract/css';

export const guideContainer = style({
  padding: '2rem',
  lineHeight: 1.7,
  color: '#333',
});

globalStyle(`${guideContainer} h1, ${guideContainer} h2, ${guideContainer} h3`, {
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid #eee',
});

globalStyle(`${guideContainer} h1`, {
  fontSize: '2.5rem',
});

globalStyle(`${guideContainer} h2`, {
  fontSize: '2rem',
  marginTop: '2.5rem',
});

globalStyle(`${guideContainer} p, ${guideContainer} ul, ${guideContainer} ol`, {
  marginBottom: '1rem',
});

globalStyle(`${guideContainer} ul, ${guideContainer} ol`, {
  paddingLeft: '1.5rem',
});

globalStyle(`${guideContainer} pre`, {
  background: '#f6f8fa',
  padding: '1rem',
  borderRadius: '6px',
  marginBottom: '1rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  fontSize: '0.9rem',
});

globalStyle(`${guideContainer} code`, {
  fontFamily: 'monospace',
  background: 'rgba(27,31,35,0.05)',
  padding: '0.2em 0.4em',
  borderRadius: '3px',
  fontSize: '85%',
});

globalStyle(`${guideContainer} pre code`, {
  padding: 0,
  fontSize: '100%',
  background: 'none',
  borderRadius: 0,
});

globalStyle(`${guideContainer} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.5rem',
  border: '1px solid #dfe2e5',
  display: 'block',
  overflowX: 'auto',
});

globalStyle(`${guideContainer} th, ${guideContainer} td`, {
  border: '1px solid #dfe2e5',
  padding: '0.75rem',
  textAlign: 'left',
});

globalStyle(`${guideContainer} th`, {
  backgroundColor: '#f6f8fa',
  fontWeight: 'bold',
});

globalStyle(`${guideContainer} tr:nth-child(2n)`, {
  backgroundColor: '#f6f8fa',
});

globalStyle(`${guideContainer} a`, {
    color: '#0366d6',
    textDecoration: 'none',
});

globalStyle(`${guideContainer} a:hover`, {
    textDecoration: 'underline',
});
