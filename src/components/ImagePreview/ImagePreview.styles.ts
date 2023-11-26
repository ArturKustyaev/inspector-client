import { styled } from '@mui/material'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'

interface StyledAvatarWrapperProps {
	$width: number
	$height: number
}

export const StyledAvatarWrapper = styled('div')<StyledAvatarWrapperProps>`
	flex-shrink: 0;
	width: ${({ $width }) => `${$width}px`};
	height: ${({ $height }) => `${$height}px`};
	border-radius: 8px;
	overflow: hidden;
	margin: auto;
`

export const StyledAvatar = styled('img')`
	width: 100%;
	height: 100%;
`

export const StyledNoAvatarWrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.grey[300]};
`

export const StyledNoAvatarIcon = styled(ImageNotSupportedIcon)`
	color: ${({ theme }) => theme.palette.grey[600]};
	font-size: 40px;
`
