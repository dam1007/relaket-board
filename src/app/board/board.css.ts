import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

// s: 게시판 입력 영역
export const writeBox = style({
    borderTop: `1px solid ${vars.color.border}`,
    borderBottom: `1px solid ${vars.color.border}`,
});

export const writeBoxHeader = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    padding: '15px',
    borderBottom: `1px solid ${vars.color.border}`,
});

export const writeBoxTitle = style({
    flexGrow: '1',
    fontSize: '20px',
    fontWeight: '700'
});

export const writeBoxInfoWrap = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'nowrap',
    width: '100%',
    marginTop: '15px',
});

export const writeBoxInfoList = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'nowrap',
});

export const writeBoxInfoListItem = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '4px',
    color: vars.color.gray666,
});

export const writeBoxUserIP = style({
    fontSize: '12px',
    color: vars.color.gray666,
    verticalAlign: 'middle',
});

export const writeBoxRegistDate = style({
    color: vars.color.gray666,
});

export const writeBoxBody = style({
});

export const writeBoxTextWrap = style({
    padding: '20px 15px',
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
// e: 게시판 입력 영역

// s: 게시판 댓글 영역

// e: 게시판 댓글 영역
