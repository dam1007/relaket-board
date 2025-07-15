import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const memberWrapper = style({
    minHeight: 'calc(100vh - 64px)',
    padding: '120px 0 0',
    backgroundColor: 'rgba(250, 250, 250)'
});

export const memberBox = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '550px',
    backgroundColor: 'white',
    border: `1px solid ${vars.color.border}`,
    borderRadius: '12px',
    margin: '0 auto',
});

export const memberFormWrap = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
    padding: '64px 80px 70px',
});

export const loginDescWrap = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
    marginTop: '40px',
});

export const loginDesc = style({
    color: 'black'
});


// s: 가입완료
export const joinEndDescWrap = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '15px',
});

export const joinEndDescMain = style({
    fontSize: '32px',
    fontWeight: '700',
    textAlign: 'center',
});

export const joinEndDescSub = style({
    fontSize: '18px',
    textAlign: 'center',
});

export const notice = style({
    fontSize: '13px',
    color: vars.color.gray666,
    padding: '5px 10px',
});
// e: 가입완료