import React from "react"
import contactListStyles from "./contactlist.module.scss"
import { graphql, useStaticQuery } from "gatsby"



const ContactList = () => {
  const data = useStaticQuery(graphql`
  query InstagramLogoQuery {
    instagram: file(relativePath: { eq: "instagram_logo.png" }) {
      publicURL
  },
  youtube:file(relativePath: {eq: "youtube_logo.png"}) {
    publicURL
  }
  }
  `)
  return (
    <div className={contactListStyles.contactListWrapper}>
      <div className={contactListStyles.contactList}>
        <a
          className={contactListStyles.contact}
          href="https://www.instagram.com/jam_and_germs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <img alt="instagram-logo" src={`${data.instagram.publicURL}`}></img>
        </a>
        <a
          className={contactListStyles.contact}
          href="https://www.youtube.com/user/Savantcm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="youtube-logo" src={`${data.youtube.publicURL}`}></img>
        </a>
      </div>
    </div>
  )
}

export default ContactList
