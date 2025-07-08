import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

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

export const seperate = style({
    position: 'relative',
    ':after': {
        content: '',
        position: 'absolute',
        right: '-10px',
        top: '3px',
        width: '1px',
        height: '13px',
        backgroundColor: vars.color.border,
    }
});

export const writeBoxInfoListCount = style({
    fontWeight: '500',
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

// s: 댓글 영역
export const commentArea = style({
    marginTop: '30px',
}); 

export const commentCountWrap = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '8px',
});

export const commentCountTitle = style({
    flexShrink: '0',
});

export const commentCountDesc = style({
    flexShrink: '0',
    fontWeight: '500',
});

export const commentWriteWrap = style({
    margin: '12px 0',
});

export const commentList = style({
    borderTop: `1px solid ${vars.color.border}`,
    borderBottom: `1px solid ${vars.color.border}`,
});

export const commentItem = style({
    padding: '15px',
    borderBottom: `1px solid ${vars.color.border}`,
    ':last-of-type': {
        borderBottom: 'none',
    }
});

export const commentHeader = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    
});


export const commentDesc = style({
    fontSize: '14px',
    color: vars.color.black,
    marginTop: '7px',
    wordBreak: 'keep-all',
});

export const commentDate = style({
    display: 'block',
    fontSize: '13px',
    color: vars.color.gray999,
    marginTop: '2px',
});

export const commentApplyItem = style({
    padding: '15px 30px 15px 45px',
    backgroundColor: vars.color.bg,
    position: 'relative',
    borderBottom: 'none',
    ':before': {
        content: '',
        position: 'absolute',
        left: '18px',
        top: '15px',
        width: '12px',
        height: '12px',
        borderLeft: `1px solid ${vars.color.border}`,
        borderBottom: `1px solid ${vars.color.border}`,
    },
    ':after': {
        content: '',
        position: 'absolute',
        left: '50%',
        bottom: '0',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 36px)',
        height: '1px',
        background: vars.color.border,
    },
    selectors: {
        ':last-of-type&:after': {
            display: 'none',
        }
    }
});
// e: 댓글 영역
