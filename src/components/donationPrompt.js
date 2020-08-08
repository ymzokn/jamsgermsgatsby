import React from 'react'
import donationPromptStyles from "./donation.module.scss"
import Button from './button'

const DonationPrompt = () => {
    return (
        <div className={donationPromptStyles.donationPromptWrapper}>
            {/* <div className={donationPromptStyles.donationPromptHeader}>
                <h2>Donate to Educate</h2>
            </div> */}
            <div className={donationPromptStyles.donationPromptBody}>
                <h1>While you're here...</h1>
                <p>
                    If you find any joy and solace in this labor of love, 
                    please consider becoming a Sustaining Patron with a recurring 
                    monthly donation of your choosing, between a cup of tea and a 
                    good lunch. Your support really matters.
                </p>
                <div className={donationPromptStyles.monthlyDonation}>
                    <h4>MONTHLY DONATION</h4>
                    <div className={donationPromptStyles.separator}></div>
                    <ul className={donationPromptStyles.donationAmounts}>
                        <li>$5 / month</li>
                        <li>$10 / month</li>
                        <li>$25 / month</li>
                    </ul>
                    <a tabIndex="-1" href="https://www.patreon.com/jam_and_germs" target="_blank">
                        <Button text="Start Now" variant="primary"></Button>
                    </a>
                </div>
                <div className={donationPromptStyles.oneTimeDonation}>
                    <h4>ONE-TIME DONATION</h4>
                    <div className={donationPromptStyles.separator}></div>
                    <p className={donationPromptStyles.donationText}>
                    You can also become a Spontaneous Supporter with 
                    a one-time donation in any amount:
                    </p>
                    <a tabIndex="-1" href="https://www.patreon.com/jam_and_germs" target="_blank">
                        <Button text="Give Now" variant="primary"></Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DonationPrompt  
