import AutomationSDKIcon from './icon-automation-sdk.svg'
import CommunityIcon from './icon-community.svg'
import SocketRegistryIcon from './icon-socket-registry.svg'
import CloudOSIcon from './icon-cloud-os.svg'
import Hexagon from '../../../../components/ui/hexagon'
import Link from '../../../../components/ui/link'
import Grid from '../../../../components/ui/grid'

const Features = () => (
  <div className='Section u-wrapper'>
    <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '-20px'}} />

    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>Improving Productivity with Innovative Solutions</h2>
      <p className='u-subtitle'> DeepWell helps organizations be their best by providing technology solutions and services that make them more productive. We specialize in Microsoft enterprise technology platforms, leveraging a combination of cloud, on-premises, and hybrid configurations to increase productivity from the data center on out to end business users. Areas of specialty include end-to-end Azure and Office 365 services, Microsoft Enterprise Infrastructure and Managed IT Services.


      </p>
    </div>

    <div className='Section__content'>
      <Grid wrap>
        <div className='Heading'>
          <p className='Heading__item Heading__item--important'>
          
          We provide the following range of customized services:


          </p>
          <p className='Heading__item'>
          Improve the management of your technology systems while cutting back on IT costs by offloading the burden of your tech support and IT strategy to Softlanding.

Softlanding helps organizations be their best by providing technology solutions and services that make them more productive. Softlanding specializes in Microsoft enterprise technology platforms, leveraging our deep-set knowledge to service organizations from 50-person local businesses to the global Fortune 500. Our team of consultants are focused, well-trained and passionate about delivering results whether in the cloud or on-premises.
          </p>
        </div>
        <div className='Feature-list'>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#RegistriesSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <SocketRegistryIcon />
                </div>
                <h4 className='Feature__title'>Managed IT Services</h4>
                <p>
                Our Managed IT Services take care of your technology for you, so you can reduce IT costs, boost efficiency and free up resources.
                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#AutomationSDKSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <AutomationSDKIcon />
                </div>
                <h4 className='Feature__title'>Cloud Migration and Upgrades</h4>
                <p>
                Our business analysts, cloud architects and delivery consultants will ensure that your migration experience is smooth and that staff experience minimal or no disruption. We offer the following types of migration services:
                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#CommunitySection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <CommunityIcon />
                </div>
                <h4 className='Feature__title'>Professional Consulting</h4>
                <p>
                Ensure your technology drives your business forward with IT Consulting Services that give you a competitive edge.

                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#CloudOsSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <CloudOSIcon />
                </div>
                <h4 className='Feature__title'>Cloud Hosting & Security</h4>
                <p>
                Boost your computing power, improve your operational efficiency, and enjoy unrivaled security with our Secure Cloud Hosting solutions.


                </p>
              </div>
            </Link>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 1080px;
        position: relative;
        z-index: 1;
      }

      Services {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .u-subtitle {
        max-width: 820px;
        margin-left: auto;
        margin-right: auto;
      }

      .Section__content {
        justify-content: space-between;
      }

      .Section__header {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-top: 90px;
          margin-bottom: 90px;
        }

        .Section__content {
          justify-content: space-between;
        }

        .Section__header {
          margin-top: 90px;
          margin-bottom: 90px;
        }
      }

      @media screen and (min-width: 1080px) {
        .Section {
          margin-top: 140px;
          margin-bottom: 140px;
        }
      }

      /* = HEADING
       * ==================================================================== */
      .Heading {
        color: #8d9299;
        font-size: 20px;
        line-height: 30px;
      }

      @media screen and (min-width: 520px) and (max-width: 1099px) {
        .Heading {
          display: flex;
          margin-left: -30px;
        }

        .Heading__item {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 1100px) {
        .Heading {
          width: 420px;
        }
      }

      .Heading__item {
        margin-bottom: 30px;
      }

      .Heading__item--important {
        font-size: 24px;
        line-height: 36px;
        color: #0b0d11;
        font-weight: 300;
      }

      /* = FEATURE
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        width: 100%;
        display: inline-block;
        vertical-align: top;
      }

      .Feature:hover {
        text-decoration: none;
      }

      .Feature__inner {
        cursor: pointer;
        padding: 30px;
        color: rgba(255,255,255, .5);
        line-height: 24px;
        transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
        position: relative;
      }

      .Feature:nth-child(1) .Feature__inner {
        background-color: #3637d1;
        box-shadow: 0 10px 20px 0 rgba(54, 54, 209, 0.25);
      }

      .Feature:nth-child(2) .Feature__inner {
        background-color: #12a5b4;
        box-shadow: 0 10px 20px 0 rgba(25, 165, 179, 0.25);
      }

      .Feature:nth-child(3) .Feature__inner {
        background-color: #703ada;
        box-shadow: 0 10px 20px 0 rgba(112, 57, 218, 0.25);
      }

      .Feature:nth-child(4) .Feature__inner {
        background-color: #187eef;
        box-shadow: 0 10px 20px 0 rgba(24, 126, 239, 0.25);
      }

      .Feature__icon {
        opacity: .5;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 10px;
      }

      .Feature__title {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 18px;
        line-height: 30px;
        font-weight: normal;
        margin-left: 20px;
        margin-bottom: 10px;
      }

      @media screen and (max-width: 519px) {
        .Feature-list {
          margin-left: -30px;
          margin-right: -30px;
        }
      }

      @media screen and (min-width: 520px) {
        .Feature-list {
          margin-left: -30px;

        }

        .Feature {
          max-width: 50%;
          padding-left: 30px;
          margin-bottom: 30px;
        }

        .Feature__inner {
          border-radius: 6px;
        }

        .Feature__icon {
          margin-bottom: 0;
          display: block;
        }

        .Feature__title {
          margin-left: 0;
          display: block;
        }
      }

      @media screen and (min-width: 1100px) {
        .Feature-list {
          width: 630px;
          margin-left: auto;
        }

        .Feature {
          max-width: 300px;
          float: none;
        }
      }

      @media screen and (min-width: 918px) {
        .Feature:nth-child(1),
        .Feature:nth-child(3) {
          float: left;
        }

        .Feature:nth-child(2),
        .Feature:nth-child(4) {
          float: right;
        }

        .Feature__inner::before {
          transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 6px;
          background: inherit;
          z-index: -1;
        }

        .Feature__inner:hover::before {
          transform: scale(1.1);
        }

        .Feature__inner:hover {
          transform: translateY(-5px);
        }

        .Feature__inner:hover::before {
          box-shadow: inherit;
          transform: scale(1.1);
        }
      }
    `}</style>
  </div>
)

export default Features
