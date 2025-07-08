import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./global.css";

// 버튼 wrap
export const buttonWrapLeft = style({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
});

export const buttonWrapBetween = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
});

export const buttonWrapCenter = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
});

export const buttonWrapRight = style({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '8px',
});

// 버튼
export const button = recipe({
    base: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        padding: '8px 16px',
        fontWeight: '500',
        borderRadius: '4px',
        border: `1px solid ${vars.color.border}`,
        boxSizing: 'border-box',
        cursor: 'pointer',
    },
    variants: {
        type: {
            primary: {
                background: vars.color.primary, 
                color: 'white', 
                borderColor: vars.color.primary,
                ':hover': {
                    backgroundColor: 'rgb(24 24 27 / 90%)',
                    borderColor: 'rgb(24 24 27 / 90%)',
                }
            },
            secondary: {
                background: vars.color.secondary, 
                color: vars.color.primary, 
                borderColor: vars.color.secondary,
                ':hover': {
                    background: vars.color.hoverBg, 
                }
            },
            black: {
                background: vars.color.black, 
                color: 'white',
                borderColor: vars.color.black,
                ':hover': {
                    backgroundColor: 'rgb(24 24 27 / 90%)',
                }
            },
            white: {
                background: 'white', 
                color: vars.color.primary, 
                borderColor: vars.color.border,
                ':hover': {
                    backgroundColor: vars.color.hoverBg
                }
            },
            transparent: {
                background: 'transparent', 
                color: vars.color.primary, 
                borderColor: vars.color.border,
                ':hover': {
                    backgroundColor: vars.color.hoverBg
                }
            },
            red: {
                background: vars.color.red, 
                color: 'white',
                borderColor: vars.color.red,
                ':hover': {
                    backgroundColor: 'rgb(220 38 38 / 90%)',
                }
            },
            ghost: {
                background: 'white', 
                color: vars.color.primary, 
                borderColor: 'white',
                ':hover': {
                    backgroundColor: vars.color.hoverBg
                }
            },
            link: {
                background: 'white', 
                color: vars.color.primary, 
                borderColor: 'white',
                ':hover': {
                    textDecoration: 'underline',
                }
            },
            arrowPrev: {
                flexShrink: '0',
                width: '36px',
                height: '36px',
                background: 'white', 
                color: vars.color.primary, 
                borderColor: vars.color.border,
                borderRadius: '7px',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-right'%3E%3Cpath d='m9 18 6-6-6-6'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px',
                backgroundPosition: 'center',
                boxShadow: '0 -2px 2px rgba(0,0,0,0.1)',
                ':hover': {
                    backgroundColor: vars.color.hoverBg,
                },
                transform: 'rotate(180deg)'
            },
            arrowNext: {
                flexShrink: '0',
                width: '36px',
                height: '36px',
                background: 'white', 
                color: vars.color.primary, 
                borderColor: vars.color.border,
                borderRadius: '7px',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-right'%3E%3Cpath d='m9 18 6-6-6-6'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px',
                backgroundPosition: 'center',
                boxShadow: '0 2px 2px rgba(0,0,0,0.1)',
                ':hover': {
                    backgroundColor: vars.color.hoverBg,
                }
            },
            icon: {
                gap: '5px',
                background: vars.color.primary,
                color: 'white',
                ':before': {
                    content: '',
                    display: 'inline-flex',
                    width: '16px',
                    height: '16px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mail-open'%3E%3Cpath d='M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z'%3E%3C/path%3E%3Cpath d='m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10'%3E%3C/path%3E%3C/svg%3E")`,
                },
                '> span': {
                    color: 'white',
                }
            },
            loading: {
                gap: '5px',
                background: vars.color.primary,
                color: 'white',
                cursor: 'default',
                opacity: '.8',
                ':before': {
                    content: '',
                    display: 'inline-flex',
                    width: '16px',
                    height: '16px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-loader-circle animate-spin'%3E%3Cpath d='M21 12a9 9 0 1 1-6.219-8.56'%3E%3C/path%3E%3C/svg%3E")`,
                },
                '> span': {
                    color: 'white',
                }
            },
            like: {
                gap: '5px',
                background: 'white',
                border: 'none',
                backgroundColor: 'transparent',
                ':hover': {
                    background: vars.color.hoverBg,
                }
            }
        },
        size: {
            small: {fontSize: '12px', padding: '4px 8px'},
            medium: {height: '32px', fontSize: '14px', padding: '6px 12px', borderRadius: '7px',},
            large: {height: '42px', fontSize: '16px', padding: '8px 20px', borderRadius: '8px',},
            full: {width: '100%', height: '48px', fontSize: '16px', padding: '6px 12px', borderRadius: '7px',},
        }
    },
});

// 좋아요 버튼
export const likeButton = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '5px',
    height: '42px',
    padding: '6px 12px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    fontSize: '16px',
    ':hover': {
        backgroundColor: vars.color.hoverBg,
    }
});

// 정렬
export const flex = recipe({
    base: {
        display: 'flex',
        flexDirection: 'row',
    },
    variants: {
        type: {
            start_start: {
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            },
            start_center: {
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
            },
            between_center: {
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            center_start: {
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
            center_center: {
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            },
            end_start: {
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
            },
            end_center: {
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
        }
    }
});

// input wrap
export const inputWrap = style({
    margin: '20px 0',
    ':first-of-type': {
        margin: '0 0 20px',
    },
    ':last-of-type': {
        margin: '20px 0 0',
    }
});

// textarea
export const textarea = style({
    width: '100%',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
});

// select
export const select = style({
    width: '110px',
    height: '32px',
    padding: '0 12px',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    fontSize: '14px',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    // OAppearance: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 12px) 50%',
    backgroundSize: '16px',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-down size-4 opacity-50' aria-hidden='true'%3E%3Cpath d='m6 9 6 6 6-6'%3E%3C/path%3E%3C/svg%3E")`,
});

// 검색박스
export const searchBox = style({
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '3px',
});

export const searchBoxInput = style({
    display: 'inline-flex',
    justifyContent: 'flex-start',
    width: '100%',
    height: '32px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    padding: '4px 12px',
    boxSizing: 'border-box',
});

export const searchBoxButton = style({
    flexShrink: '0',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    width: 'fit-content',
    height: '32px',
    padding: '4px 12px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: `1px solid ${vars.color.border}`,
    boxSizing: 'border-box',
    fontWeight: '500',
    ':hover': {
        background: vars.color.hoverBg, 
    }
});

// 테이블 > 열
export const tableColWrap = style({
});

export const tableCol = style({
    tableLayout: 'fixed',
    width: '100%',
});

export const tableColTh = style({
    background: 'white',
    borderBottom: `1px solid ${vars.color.border}`,
    padding: '10px',
    fontWeight: '500',
    textAlign: 'left',
    backgroundColor: vars.color.bg,
});

export const tableColTd = style({
    background: 'white',
    borderBottom: `1px solid ${vars.color.border}`,
    padding: '10px',
    fontWeight: '400',
});

export const tableEmptyList = style({
    padding: '16px 0',
    textAlign: 'center',
    color: vars.color.gray666,
    borderBottom: 'none',
});

// 테이블 > 행
export const tableRowWrap = style({
});

export const tableRow = style({
    width: '100%',
    borderTop: `1px solid ${vars.color.border}`,
});

export const tableRowTh = style({
    background: 'white',
    borderBottom: `1px solid ${vars.color.border}`,
    padding: '10px',
    fontWeight: '500',
    textAlign: 'left',
    verticalAlign: 'middle',
    backgroundColor: vars.color.bg,
});

export const tableRowThLast = style({
    borderBottom: 'none',
});

export const tableRowTd = style({
    background: 'white',
    borderBottom: `1px solid ${vars.color.border}`,
    padding: '10px',
    fontWeight: '400',
});

export const tableRowTdLast = style({
    borderBottom: 'none',
});

// 페이지네이션
export const pagination = style({
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '6px',
    marginTop: '30px',
});

export const paginationNum = style({
    flexShrink: '0',
    display: 'inline-flex',
    justifyContent: 'center', 
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '36px',
    height: '36px',
    selectors: {
        '&.active': {
            fontWeight: '600',
        },
        '&:hover': {
            textDecoration: 'underline',
        }
    }
});

// 페이지 타이틀
export const pageTitle = style({
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '30px',
});

// 텍스트 관련
export const blue = style({
    color: vars.color.blue,
});

export const underline = style({
    textDecoration: 'underline',
});

export const hoverUnderline = style({
    ':hover': {
        textDecoration: 'underline',
    }
});

export const textRequired = style({
    color: 'red',
});

// 말줄임표(1줄)
export const ellipsisOneLine = style({
    display: 'block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
});
