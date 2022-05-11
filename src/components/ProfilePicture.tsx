import type { ImageProps } from 'next/image'
import Image from 'next/image'
import styled from '@emotion/styled'
import imgSrc from '@app-public/profile-picture.jpg'

const RoundedImage = styled(Image)`
  border-radius: 100%;
`

export const ProfilePicture = (props: Omit<ImageProps, 'src'>) => {
  return (
    <RoundedImage
      width={150}
      height={150}
      quality={95}
      {...props}
      src="https://res.cloudinary.com/hackages/image/upload/v1639589775/davy_o72dd9.jpg"
      alt="Smiling Davy"
      // placeholder="blur"
    />
  )
}

