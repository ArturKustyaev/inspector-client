import { FC, ReactElement } from 'react'
import { StyledAvatar, StyledAvatarWrapper, StyledNoAvatarIcon, StyledNoAvatarWrapper } from './ImagePreview.styles'

interface ImagePreviewProps {
	className?: string
	width?: number
	height?: number
	url: string | undefined
	alt?: string
}

export const ImagePreview: FC<ImagePreviewProps> = ({
	className,
	width = 100,
	height = 100,
	url,
	alt
}): ReactElement | null => {
	return (
		<StyledAvatarWrapper className={className} $width={width} $height={height}>
			{url ? (
				<StyledAvatar src={url} alt={alt} />
			) : (
				<StyledNoAvatarWrapper>
					<StyledNoAvatarIcon />
				</StyledNoAvatarWrapper>
			)}
		</StyledAvatarWrapper>
	)
}
