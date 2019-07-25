import Grid from '../../../../components/ui/grid'
import Button from '../../../../components/ui/button'
import Hexagon from '../../../../components/ui/hexagon'
import {MatchAsGuest} from '../../../../components/ui/router'
import Hexagons from './hexagons.svg'
import Skype from './Skype.svg'
import Exchange from './Exchange.svg'
import OneDrive from './OneDrive.svg'
import SharePoint from './SharePoint.svg'
import Teams from './Teams.svg'

const RegistriesSection = ({toggleSignUpModal}) => (
  <div className='Section'>
    <div className='Section__inner u-wrapper'>
      <div className='Section__column Section__column--header'>
        <h2 className='u-title'>Office 365</h2>
        <p className='u-subtitle'>Office 365 is an integrated experience of apps and services, designed to help you pursue your passion and grow your business. Get apps like Word, Excel, PowerPoint, and more, updated monthly with the latest features and security updates.

Use cloud-powered email to reach customers and coworkers wherever work takes you.

Collaborate in Microsoft Teams, the new hub for teamwork where you can chat, organize meetings, and share files.

Save files to OneDrive with one terabyte of online storage, allowing access across devices and on the go.

Run your business with the Business Apps, empowering you to manage customer scheduling, invoicing, referrals, and more, all from one place.</p>
      </div>

      <div className='Hexagons'>
        <div className='Hexagons__bg'>
          <Hexagons />

          <a className='Socket' title='Teams'>
            <div className='Socket__icon'><Teams /></div>
            <Hexagon width={130} style={{fill: '#05b470', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Exchange'>
            <div className='Socket__icon'><Exchange /></div>
            <Hexagon width={130} style={{fill: '#3B5998', stroke: 'none'}} />
          </a>
          <a className='Socket' title='SharePoint'>
            <div className='Socket__icon'><SharePoint /></div>
            <Hexagon width={130} style={{fill: '#6c5bca', stroke: 'none'}} />
          </a>
          <a className='Socket' title='OneDrive'>
            <div className='Socket__icon'><OneDrive /></div>
            <Hexagon width={130} style={{fill: '#1da1f2', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Skype'>
            <div className='Socket__icon'><Skype /></div>
            <Hexagon width={130} style={{fill: '#00afe1', stroke: 'none'}} />
          </a>
        </div>
      </div>

      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <h2 className='u-title'>Building DeepWell Sockets</h2>
          <p className='u-subtitle'>One of DeepWell’s serverless platform’s core concepts is the standardized backend building blocks which we call <i>DeepWell Sockets</i>.</p>
          <p>A DeepWell Socket has one single and clear purpose —whether it’s to send an email, translate a text file, or analyze a web page. A DeepWell Socket can be connected to any other DeepWell Sockets, similar to how LEGOs work. Combining DeepWell Sockets removes the hurdle of building pre-existing code on your own, enabling you to assemble ready made backends at lightning speed.</p>
        </div>

        <div className='Section__column Section__column--secondary'>
          <div className='Feature-list'>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Find reusable code in the Public Registry</h4>
              <p>Publicly available DeepWell Sockets can be found in the Public DeepWell Socket Registry, and are licensed under the MIT License.</p>
            </div>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Build your own reusable code in your Private Registry</h4>
              <p>Can’t find what you’re looking for in the Public Registry? Simply create your <a href='https://docs.DeepWell.io/#/building-sockets/basics'>own DeepWell Sockets</a> in your very own Private Registry.</p>
              <p>Once you build your own custom made DeepWell Sockets, they are automatically placed into your own Private Socket Registry that only you and your team have access to. Want to share your Sockets with the community? Simply use the Automation SDK and remove the private flag, and they’re now in the Public Socket Registry.</p>
              <p>Don’t have the bandwidth to build your own but need something immediately? Find developers to build DeepWell Sockets for you in the <a href='/#/features#CommunitySection'>DeepWell Socket Marketplace.</a></p>
            </div>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Using the registries</h4>
              {/* <p>Browse the existing public DeepWell Sockets by the Public Socket Registry web interface.</p> */}
              <p>After signing up, you’ll automatically have access to both your Private Socket Registry and the Public Socket Registry. By leveraging the Automation SDK, you can easily list, search, submit and deploy DeepWell Sockets to your dedicated backend.</p>
              <p>
                <MatchAsGuest component={() => (
                  <Button secondary onClick={toggleSignUpModal}>Sign up</Button>
                )} />
              </p>
            </div>
            {/* <div className='Feature'>
              <h4 className='Feature__title'>Public registry</h4>
              <p>The publicly available DeepWell Sockets are listed in the <a href='#'>Public DeepWell Socket Registry</a>, and licensed under the <a href='#'>Berkeley Standard Distribution license</a>.</p>
              <p>
                <Button secondary>
                  <a href='#'>Browse DeepWell Sockets</a>
                </Button>
              </p>
              <p>There are more than 150 sockets available</p>
            </div> */}
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background: #0e0e2b;
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
        z-index: 1;
      }

      .u-title {
        color: #ffffff;
      }

      p > a {
        color: #8B9CB6;
        text-decoration: underline;
      }

      p > a:hover {
        text-decoration: none;
      }

      /* ==================================================================== */

      .Section__column--header {
        position: relative;
        z-index: 1;
      }

      .Section__column--header .u-subtitle {
        color: #6382aa;
        font-weight: 400;
        line-height: 30px;
      }

      /* ==================================================================== */

      .Section__column--primary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      .Section__column--primary .u-subtitle {
        color: #b0bed0;
        margin-bottom: 20px;
      }

      .Section__column--primary p + p {
        margin-top: 20px;
      }

      /* ==================================================================== */

      .Section__column--secondary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      .Section__inner {
        max-width: 1230px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-bottom: 60px;
          padding-top: 60px;
        }

        .Section__column--header {
          text-align: center;
        }

        .u-subtitle {
          font-size: 20px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-bottom: 0;
          padding-top: 100px;
          background:
            radial-gradient(1146.54px at 49.58% 17.9%, rgba(54, 55, 209, 0.25) 0%, rgba(54, 55, 209, 5e-05) 100%),
            linear-gradient(to bottom, #0B0F15 90%, rgba(11, 15, 21, 0.0001))
        }

        .Section__column--header {
          max-width: 530px;
          margin-left: auto;
          margin-right: auto;
        }

        .Section__column--primary,
        .Section__column--secondary {
          width: 50%;
        }
      }

      @media screen and (min-width: 1100px) {
        .Section__column--primary {
          flex-basis: 42%;
        }

        .Section__column--secondary {
          padding-left: 80px;
          margin-left: auto;
          flex-basis: 58%;
        }
      }

      /* = Sockets
       * ==================================================================== */
      .Hexagons {
        position: relative;
        display: none;
        transform-origin: top center;
      }

      @media screen and (min-width: 760px) {
        .Hexagons {
          display: block;
          transform: scale(.6);
          height: 230px;
        }
      }

      @media screen and (min-width: 970px) {
        .Hexagons {
          transform: scale(.8);
          height: 330px;
        }
      }

      @media screen and (min-width: 1100px) {
        .Hexagons {
          transform: scale(1);
          height: 400px;
        }
      }

      .Hexagons__bg {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translate(-770px, -190px);
        width: 1440px;
      }

      .Socket {
        font-size: 16px;
        display: inline-block;
        margin-bottom: 10px;
        position: absolute;
        cursor: default;
      }

      .Socket:nth-child(2) { top: 63.7%; left: 12.2%; }
      .Socket:nth-child(3) { top: 71.9%; left: 27.4%; }
      .Socket:nth-child(4) { top: 59.7%; left: 45.3%; }
      .Socket:nth-child(5) { top: 68.9%; left: 59.75%; }
      .Socket:nth-child(6) { top: 60.7%; left: 79.3%; }

      .Socket__text {
        text-anchor: middle;
      }

      .Socket__icon {
        font-size: 32px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #586983;
        margin-bottom: 30px;
        line-height: 24px;
        font-size: 14px;
      }

      .Feature a {
        margin-top: 10px;
      }

      .Feature p + p {
        margin-top: 10px;
      }

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #ffffff;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 630px) {
        .Feature-list {
          display: flex;
          flex-wrap: wrap;
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          padding-left: 30px;
        }

        .Feature--full {
          flex: 100%;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature {
          flex-basis: 50%;
        }

        .Feature--full {
          flex: 100%;
        }

        .Feature:nth-child(4),
        .Feature:nth-child(5),
        .Feature:nth-child(7) {
          margin-top: -30px;
        }

        .Feature__inner {
          max-width: 460px;
        }
      }

      /* = Other
       * ==================================================================== */
      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default RegistriesSection
