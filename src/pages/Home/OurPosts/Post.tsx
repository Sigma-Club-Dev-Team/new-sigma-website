import React from 'react'
import styles from "./ourPosts.module.scss"
import { CoverImage } from 'components/myImage'
import TextBtn from 'components/Buttons/TextBtn'
import { ChevronsRight } from 'lucide-react'
import { Text } from '@chakra-ui/react'

function Post() {
  return (
    <div className={styles.post}>
        <div className={styles.image}>
        <CoverImage src='./assets/images/jpgs/health.jpg' alt='Post Image' position='center' />
        </div>
        <div className={styles.details}>
        <Text noOfLines={2}>UCJ- Sigma Club quiz competition enters final stages by Akanni Oluwasegun.</Text>
        <div className={styles.action}>
            <TextBtn fontSize='1rem' fontWeight='400' text='View' frontArrow frontIcon={<ChevronsRight size={'1rem'} />} />
        </div>
        </div>
    </div>
  )
}

export default Post