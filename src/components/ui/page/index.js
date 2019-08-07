import React from 'react'
import {action} from 'mobx'
import FontAwesome from './styles/font-awesome'
import Normalize from './styles/normalize'
import Modal from '../modal'
import ScrollManager from '../../ui/scroll-manager'
import BookMeetingForm from '../../../views/aboutus/components/book-meeting'

const Page = ({children}) => (
  <div>
    {children}
    { /* <DevTools /> */ }
    <ScrollManager />
    <FontAwesome />
    <Normalize />

    
    <Modal
      name='book-meeting'
      title='Book a meeting'
      subtitle='Submit your contact details and give us a way to reach you.'
      >
      <BookMeetingForm />
    </Modal>

    <Modal
      name='booking-confirmed'
      title='Thank you!'
      subtitle='One of our enterprise experts will reach out to you and schedule a call.'
      >
    </Modal>

    <style jsx global>{`
      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.25;
      }

      html {
        font-family: Roboto;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-y: scroll;
      }

      .AppContainer {
        min-height: 100vh;
        overflow: hidden;
      }

      /* = WRAPPER
      * ==================================================================== */
      .u-wrapper {
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
      }

      /* = HEADINGS
      * ==================================================================== */
      .u-title {
        color: #ffff;
        font-weight: 300;
        font-size: 28px;
        line-height: 36px;
      }

      .u-title + .u-subtitle {
        margin-top: 15px;
      }

      @media screen and (min-width: 560px) {
        .u-title {
          font-size: 48px;
          line-height: 64px;
        }
      }

      .u-subtitle {
        color: #7a7f87;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
      }

      @media screen and (min-width: 560px) {
        .u-subtitle {
          font-size: 24px;
        }
      }

      /* = TEXT-ALIGN
      * ==================================================================== */
      .u-ta-c {
        text-align: center;
      }

      .u-ta-r {
        text-align: right;
      }

      a {
        color: #2c59c5;
        cursor: pointer;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

Page.init = ({
  stores: {ui: {flags}},
  children
}) => {
  flags.set('page.auth-modal', 'auth-version-1')

  const watchForAuthModalVersionClass = setInterval(action(() => {
    const authModalVersion = document.body.className
      .split(' ')
      .find(item => /auth-version/.test(item))

    if (authModalVersion) {
      flags.set('page.auth-modal', authModalVersion)
      clearInterval(watchForAuthModalVersionClass)
    }
  }), 100)

  return {children, flags}
  }

  export default Page
