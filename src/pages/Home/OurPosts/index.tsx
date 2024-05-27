import React from 'react'
import styles from "./ourPosts.module.scss"
import { CoverImage } from 'components/myImage'
import TextBtn from 'components/Buttons/TextBtn'
import { ChevronsRight } from 'lucide-react'
import PryBtn from 'components/Buttons/PryBtn'
import Post from './Post'

function OurPosts() {
  const posts = [1, 2, 3, 4, 5, 6]
  return (
    <div className={styles.ourPostSection}>
      <div className={styles.sectionHead}>
        <h3>Our Posts</h3>
        <p>View our posts and progress on some of our events and distinguished members.</p>
      </div>

      <div className={styles.posts}>
        {posts.map((post, index) => (
          <Post />
        ))}
      </div>
      <div className={styles.actions}>
        <div></div>
        <PryBtn text='VIEW ALL' pry />
      </div>
    </div>
  )
}

export default OurPosts