import { globalStyle } from '@vanilla-extract/css';

globalStyle('.container', {
    paddingTop: '62px',
});

globalStyle('.inner', {
    maxWidth: '1280px',
    margin: '0 auto',
});

globalStyle('.main_title', {
    fontSize: '32px',
    fontWeight: '600',
});

globalStyle('.member_wrapper', {
    minHeight: 'calc(100vh - 64px)',
    padding: '120px 0 0',
    backgroundColor: 'rgba(250, 250, 250)'
});

globalStyle('.board_wrapper', {
    minHeight: 'calc(100vh - 64px)',
    padding: '120px 0 0',
    backgroundColor: 'white'
});

