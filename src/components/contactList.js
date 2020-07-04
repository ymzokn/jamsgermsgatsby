import React from "react"
import { IoLogoYoutube } from "react-icons/io"
import contactListStyles from "./contactlist.module.scss"
import { IoLogoInstagram } from "react-icons/io"

const ContactList = () => {
  return (
    <div className={contactListStyles.contactListWrapper}>
      <div className={contactListStyles.contactList}>
        <a
          className={contactListStyles.contact}
          href="https://www.instagram.com/jam_and_germs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram className={contactListStyles.contactInstagram} />
          <p>Follow me on Instagram!</p>
        </a>
        <a
          className={contactListStyles.contact}
          href="https://www.youtube.com/user/Savantcm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoYoutube className={contactListStyles.contactYoutube} />
          <p>Check out my Youtube!</p>
        </a>
      </div>
    </div>
  )
}

export default ContactList
