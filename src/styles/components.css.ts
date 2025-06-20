// import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./global.css";

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
            arrow: {
                flexShrink: '0',
                width: '36px',
                height: '36px',
                background: 'white', 
                color: vars.color.primary, 
                borderColor: vars.color.border,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-right'%3E%3Cpath d='m9 18 6-6-6-6'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px',
                backgroundPosition: 'center',
                boxShadow: '0 4px 4px rgba(0,0,0,0.1)',
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
            }
        },
        size: {
            small: {fontSize: '12px', padding: '4px 8px'},
            medium: {height: '32px', fontSize: '14px', padding: '6px 12px', borderRadius: '7px',},
            large: {fontSize: '18px', padding: '12px 24px', borderRadius: '8px',},
            full: {width: '100%', height: '42px', fontSize: '16px', padding: '6px 12px', borderRadius: '7px',},
        }
    },
    defaultVariants: {
        type: 'primary',
        size: 'medium',
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
        }
    }
});

