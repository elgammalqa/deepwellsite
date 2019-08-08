import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import EnterpriseCTA from './sections/enterpriseCta'
import Head from 'zefir/head'
import Page from '../../components/ui/page'
import Features from './sections/features'
import Innovation from './sections/innovation'
import Sockets from './sections/sockets'
import FAQ from './sections/faq'
import Intune from './sections/features/intune.svg'


const Landing = ({
  toggleSignUpModal
}) => (

  <Page>
    <Head>
      <title>DeepWell - Cloud consultant</title>
      <meta name="Description" content="As a leading Microsoft partner, we offer professional and individual coaching in the technological development of your business infrastructures."></meta>
    </Head>
    <Header theme='dark'>
      <div className='CTA'>
<h1 className='Title'>Delivering enterprise grade solutions in the cloud.</h1>
        <h2 className='Subtitle'>Delivering enterprise grade solutions in the cloud.</h2>
<div>
        <EnterpriseCTA /> </div>
        
<h1>Microsoft Intune Consulting</h1>

    
    <Intune />
      </div>
    </Header>

    <Innovation />
    <Features />
    <Sockets toggleSignUpModal={toggleSignUpModal} />
    <FAQ />
    <EnterpriseCTA />
    <Footer />

    <style jsx>{`
      /* = CTA
       * ==================================================================== */
   .Intune {
     width: 400px;
   }
       .CTA {
        text-align: center;
        margin-top: 30px;
      }

      .CTA a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
      }

      .CTA a:hover {
        text-decoration: underline;
      }

      .CTA p {
        color: rgba(255,255,255, .5);
        line-height: 22px;
      }

      .Title {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto;
      }

      .Subtitle {
        max-width: 360px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        font-weight: 300;
        margin-top: 15px;
        margin-bottom: 30px;
        color: rgba(255,255,255, .5);
      }

      @media screen and (min-width: 980px) {
        .CTA {
          margin-top: 90px;
        }

        .Title {
          font-size: 48px;
          line-height: 56px;
        }
      }

      /* = SEPARATOR
       * ==================================================================== */
      .Separator {
        width: 2px;
        height: 24px;
        opacity: 0.25;
        border: dashed 1px #ffffff;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-bottom: 30px;
        margin-top: 20px;
      }

      .Separator::after {
        content: attr(data-after);
        color: rgba(255,255,255,.75);
        font-weight: 300;
        position: absolute;
        top: 100%;
        margin-top: 5px;
        transform: translateX(-50%);
      }

      /* = CLI
       * ==================================================================== */
      .CLI {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        padding-bottom: 30px;
      }

      .CLI__inner {
        position: relative;
        width: 100%;
        min-height: 398px;
        max-width: 640px;
      }

      @media screen and (min-width: 560px) {
        .CLI :global(>) :global(*) {
          margin-bottom: -80px;
        }
      }
      @media screen and (min-width: 560px) {
        .Intune {
          width: 100%;
          max-width: 400px;
          height: auto;
        }
      }

      @media screen and (max-width: 560px) {
        .CLI__inner {
          min-height: 360px;
        }

        .HiddenAtSm {
          display: none;
        }
      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }
    `}</style>
  </Page>
)

Landing.init = ({
  services: {ui: {toggleModal}}
}) => ({
  toggleSignUpModal: e => {

  }
})

export default Landing
