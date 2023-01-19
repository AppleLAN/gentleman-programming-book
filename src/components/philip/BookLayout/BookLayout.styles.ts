import { Button } from 'src/components/philip/Button';
import { IconButton } from 'src/components/philip/IconButton';
import { color, deviceSize, media } from 'src/theme';
import styled, { css, keyframes } from 'styled-components';

const showDialog = keyframes({
	from: { transform: 'translateX(-110%)', opacity: 0 },
	to: { transform: 'translateX(0%)', opacity: 1 },
});

const showDialogAnimation = css(
	['', ' 0.3s ease normal;'] as any as TemplateStringsArray,
	showDialog,
) as any;

export const AsideStyled = styled.aside({
	position: 'sticky',
	top: '2rem',
	marginBlockEnd: 'auto',

	[`& > ${Button}`]: { marginBlockEnd: '1rem' },
	[media.down('lg')]: { display: 'none' },
});

export const ContentDialogWrapper = styled.div({
	background: color.background2,
	mixBlendMode: 'color-burn',
	position: 'relative',
	overflow: 'auto',
	paddingInlineStart: '1rem',

	[`& > ${IconButton}`]: { position: 'sticky', left: '90%', top: '.5rem' },

	[media.down('lg')]: {
		width: 'min(80vw,35rem)',
		maxHeight: '80vh',
		borderColor: color.buttonPrimary,
		borderWidth: '1px',
		borderRadius: '.5rem',
		padding: '1rem',
		border: `1px solid ${color.textAccent}`,
	},
	[media.up('lg')]: {
		width: 'min(80vw,35%)',
		maxWidth: '30rem',
		minHeight: '100vh',
		maxHeight: '100vh',
	},
});

export const DialogStyled = styled.dialog({
	background: 'transparent',
	padding: '0 !important',
	maxWidth: deviceSize.xl3,
	border: 'none',

	'&[open]': { animation: showDialogAnimation },

	'&::backdrop': {
		background: color.background1 + '90',
		animation: showDialogAnimation,
	},
	[media.down('lg')]: { borderRadius: '.5rem', overflow: 'hidden' },
	[media.up('lg')]: {
		marginBlock: '0',
		marginInline: 'auto !important',
		minHeight: '100vh',
		width: '100%',
		overflow: 'visible',
		'&:modal': { marginInline: '0', paddingBlock: '1.5rem' },
	},
});

export const PaginationStyled = styled.div({
	display: 'grid',

	[media.down('lg')]: {
		gridTemplateColumns: 'repeat(3,1fr)',
		backgroundColor: color.buttonPrimary,

		[`& > ${Button}, &  ${IconButton}`]: {
			minHeight: '3rem',
			borderRadius: '0',

			'& > span': { display: 'none' },
		},
	},

	[media.up('lg')]: {
		paddingBlockStart: '2rem',
		columnGap: '2rem',
		gridTemplateColumns: 'repeat(2,minmax(auto,15rem))',
		[`& ${IconButton}:nth-child(2)`]: { display: 'none' },
	},
});

export const ContentWrapperStyled = styled.div({
	paddingInline: '2rem',
	[media.up('lg')]: { paddingInline: '0' },
});

export const ReaderConfigButtonsStyled = styled.div({
	display: 'flex',
	justifyContent: 'center',
	columnGap: '1rem',
	marginBlock: '1rem',

	[`& > ${IconButton}`]: { aspectRatio: '1 / 1' },

	[media.up('lg')]: {
		flexDirection: 'column',
		marginBlock: '0 auto',
		position: 'sticky',
		top: '2rem',
	},
});

export const BookLayoutStyled = styled.div({
	position: 'relative',
	display: 'grid',
	flexDirection: 'column',
	marginInline: 'auto',
	maxWidth: deviceSize.xl2,

	[`& > ${ReaderConfigButtonsStyled}`]: { gridRow: '1' },

	[media.up('lg')]: {
		padding: '3rem',
		gridTemplateColumns: 'repeat(24, 1fr)',
		gridTemplateRows: '1fr auto',
		columnGap: '1rem',

		[`& > ${AsideStyled}`]: {
			gridRow: '1 / 3',
			gridColumn: '1 / 7',
		},
		[`& > ${ContentWrapperStyled}`]: {
			gridRow: '1 / 2',
			gridColumn: '7 / 24',
		},
		[`& > ${PaginationStyled}`]: {
			gridRow: '2 / 3',
			gridColumn: '7 / 24',
		},
		[`& > ${ReaderConfigButtonsStyled}`]: {
			gridRow: '1 / 3',
			gridColumn: '24 / 25',
		},
	},
});
