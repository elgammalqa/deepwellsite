import {Match} from '../../components/ui/router'
import Head from 'zefir/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import EnterpriseCTA from './components/enterpriseCta'
import EnterpriseTestimonials from './components/enterpriseTestimonials'
import EnterpriseFeatures from './components/enterpriseFeatures'
import EnterpriseComponents from './components/enterpriseComponents'
import EnterpriseGraph from './components/enterpriseGraph'
import Hexagon from '../../components/ui/hexagon'

const Enterprise = ({
  router: {history: {push}}
}) => (
  <Page>
    <Head>
      <title>About US | DeepWell Solutions</title>
      <meta name="description">We Are Passionate About Providing Cloud, Mobile And Analytics Applications That Are Easy To Adopt, Reduce Cost, And Your Employees Will Love</meta>
    </Head>
    <div className='Header'>
      <Header
        title='About DeepWell Solutions'
        subtitle="We Are Passionate About Providing Cloud, Mobile And Analytics Applications That Are Easy To Adopt, Reduce Cost, And Your Employees Will Love."
      >

      <div className='HiddenAtSm'>
        <Hexagon width={32} fill='#60e0ae' position={{top: '40%', left: '-100px'}} />
        <Hexagon width={32} fill='#60e0ae' position={{top: '44%', right: '-27px'}} />
        <Hexagon width={24} fill='#60e0ae' position={{bottom: '-22px', left: '-17px'}} />
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={42} fill='#4597f2' position={{bottom: '-46px', right: '18%'}} />
        <Hexagon width={24} fill='#20a5b4' position={{bottom: '42px', right: '7%'}} />
        <Hexagon width={42} fill='#05a5b4' position={{bottom: '15%', left: '150px'}} />
      </div>
      </Header>
    </div>
    <h3 className="Customers">Customers Trust US</h3>
    <div className="Logos">
      <img src="../../static/img/enterprise/softchoice.svg" height="64px" />
      <img src="../../static/img/enterprise/bgrs.png" height="64px" />
      <img src="../../static/img/enterprise/ebla.png" height="64px" />
      <img src="../../static/img/enterprise/collage.jpeg" height="64px" />
      <img src="../../static/img/enterprise/wealth.jpeg" height="64px" />
    </div>
    <EnterpriseGraph />
    <EnterpriseComponents />
    <EnterpriseFeatures />
    <EnterpriseTestimonials />
    <EnterpriseCTA />
    <Footer />

    <style jsx>{`
      .Header {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
      }

      .Header :global(.PageHead) {
        max-width: 526px;
      }

      .Customers {
        height: 28px;
        font-size: 24px;
	      text-align: center;
	      color: #3e434a;
        font-weight: normal;
      }

      .Logos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 14px 0 90px;
      }

      .Logos img {
        margin: 30px;
      }

      @media screen and (max-width: 560px) {
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

Enterprise.init = ({
  
  router
}) => ({router})

export default Enterprise
