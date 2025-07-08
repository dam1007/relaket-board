import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const profile = style({
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '6px',
});

export const profileFrame = style({
    flexShrink: '0',
    width: '28px',
    height: '28px',
    borderRadius: '100%',
    overflow: 'hidden',
    border: `1px solid ${vars.color.border}`,
    backgroundColor: vars.color.hoverBg,
});

export const profileImage = style({
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const profileId = style({
    flexShrink: '0',
    fontSize: '14px',
    fontWeight: '700',
});