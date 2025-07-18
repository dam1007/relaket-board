import { style } from "@vanilla-extract/css";

export const searchWrapper = style({
    minHeight: 'calc(100vh - 64px)',
    padding: '60px 0 0',
    backgroundColor: 'white'
});

// 검색 결과
export const searchResult = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
    fontSize: '20px',
    marginBottom: '30px',
});

