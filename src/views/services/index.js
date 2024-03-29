import {Component} from 'react'
import {StickyContainer, Sticky} from 'react-sticky'
import {scrollTo} from './helpers'

import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import EnterpriseCTA from './enterpriseCta'

import Head from 'zefir/head'
import Page from '../../components/ui/page'
import Button from '../../components/ui/button'

import ContentNav from './components/content-nav'
import CommunitySection from './components/community-section'
import AutomationSDKSection from './components/automation-sdk-section'
import CloudOsSection from './components/cloud-os-section'
import SharePoint from './components/sharepoint'
import RegistriesSection from './components/registries-section'

class Features extends Component {
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount () {
    const {hash} = this.props

    if (hash) {
      setTimeout(() => scrollTo(hash.substr(1)), 10)
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    const {toggleSignUpModal, scrollToTop} = this.props

    return (
      <Page>
        <Head>
          <title>DeepWell - services</title>
          <meta name="description">DeepWell is your trusted technology partner who turns your business innovation ideas into reality. We blend your unique needs with technology and strategy to rapidly realize your business goals.</meta>
        </Head>

        <StickyContainer>
          <div className='Header'>
            <Header
              title='WHAT WE DO'
              subtitle='DeepWell is your trusted technology partner who turns your business innovation ideas into reality. We blend your unique needs with technology and strategy to rapidly realize your business goals.'
            />
          </div>
          <Sticky className='sticky-element'>
            <ContentNav />
          </Sticky>

          <div  className='AutomationSDKSection' id='AutomationSDKSection'>
            <AutomationSDKSection />
          </div>

          <div id='RegistriesSection'>
            <RegistriesSection toggleSignUpModal={toggleSignUpModal} />
          </div>

          <div id='CloudOsSection'>
            <CloudOsSection toggleSignUpModal={toggleSignUpModal} />
          </div>
          <div id='SharePoint'>
            <SharePoint toggleSignUpModal={toggleSignUpModal} />
          </div>

          <div id='CommunitySection'>
            <CommunitySection />
          </div>

          <EnterpriseCTA />
          <Footer />

          <div className='ScrollToTop'>
            <Button square secondary onClick={scrollToTop}><i className='fa fa-arrow-up' /></Button>
          </div>
        </StickyContainer>

        <style jsx>{`
          :global(.sticky-element) {
            position: relative;
            z-index: 20;
          }

          .Header :global(.PageHead__subtitle) {
            max-width: 860px;
            margin-left: auto;
            margin-right: auto;
          }

          .AutomationSDKSection {
            position: relative;
            z-index: 10;
          }

          .ScrollToTop {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9;
          }
        `}</style>
      </Page>
    )
  }

  // calculates the top offset for each of the features section
  // add section ID to the sections array if a new section is added
  getOffsetsArray() {
    const sections = ['AutomationSDKSection', 'RegistriesSection', 'CloudOsSection', 'CommunitySection']
    let offsets = []

    for (var i = 0; i < sections.length; i++) {
      offsets.push(document.getElementById(sections[i]).offsetTop)
    }

    return offsets
  }

  handleScroll = () => {
    const {scrollTop} = document.body
    const top = scrollTop + 55
    const offsets = this.getOffsetsArray()

    for (var i = 0; i < offsets.length; i++) {
      const z = i + 1

    // if between start and end of a section, set active section
      if (top >= offsets[i] && top < offsets[z])  {
        return this.props.setActiveSection(i)
      } else if (top >= offsets[i] && z === offsets.length -1) {
        const last = offsets.length - 1

        this.props.setActiveSection(last)
      }
    }
  }
}

Features.init = ({
  router: {route: {location: {hash}}},
  stores: {featuresPage},
  services: {
    featuresPage: {setActiveSection},
    ui: {toggleModal}
  }
}) => ({
  hash,
  featuresPage,
  setActiveSection,
  scrollToTop: () => window.scroll(0, 0),
  toggleSignUpModal: () => {
    window.$crisp=[];window.CRISP_WEBSITE_ID="411061c7-c490-473f-81cf-035b623702c2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();

    toggleModal('signup')
  }
})

export default Features
