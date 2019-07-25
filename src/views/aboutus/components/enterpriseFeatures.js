import Header from '../../../components/shared/header'
import IconServer from '../../../static/img/enterprise/server-check.svg'
import IconIntegrations from '../../../static/img/enterprise/code-1.svg'
import IconDevelopment from '../../../static/img/enterprise/window-code.svg'
import IconTraining from '../../../static/img/enterprise/graduation-cap.svg'
import Hexagon from '../../../components/ui/hexagon'

const EnterpriseFeatures = () => (
  <div className='Section u-wrapper'>
    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>We help you to get the right solution for your cloud environment,Our honed services allow you to:</h2>
    </div>
    <div className="Feature-list">
      <div className="Feature">
        <div className="Feature__icon Feature__icon-server">
          <IconServer />
        </div>
        <div className="Feature__header">
          <span>Get onto Office 365, Azure and AWS safely and securely</span>
        </div>
        <div className="Feature__text">
        We’ve helped many businesses move their IT infrastructure into the cloud, or build new systems within it, to facilitate company growth and increase reliability and security.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconIntegrations />
        </div>
        <div className="Feature__header">
          <span>Reduce running costs and complexity</span>
        </div>
        <div className="Feature__text">
        Cost effectively integrate your existing business systems along with new technologies, use less power and space, and make your environment more saleable and robust.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconDevelopment />
        </div>
        <div className="Feature__header">
          <span>Optimise migrations and infrastructure</span>
        </div>
        <div className="Feature__text">
        Successful user and business applications migrations are essential to keep your business running smoothly. Getting the correct IT resources with the necessary skills for the transition task is key.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconTraining />
        </div>
        <div className="Feature__header">
          <span>Get the right tools for the job
</span>
        </div>
        <div className="Feature__text">
        Performing business applications and user migrations successfully is  essential to help keep your business running smoothly. Planning and empowering your IT department with the necessary tools for the transition task is key. </div>
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={38} fill='#4597f2' position={{top: '22%', right: '24%'}} />
        <Hexagon width={28} fill='#3cdd9e' position={{top: '29%', left: '18%'}} />
      </div>
      <div className="HiddenAtLg">
        <Hexagon width={26} fill='#45c5f2' position={{top: '-1%', right: '260px'}} />
      </div>
    </div>
    <style jsx>{`
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
        position: relative;
      }

      .Section__header {
        padding-top: 111px;
        margin-bottom: 100px;
      }

      .Section__header .u-title {
        max-width: 526px;
        margin: 0 auto;
      }

      .Feature-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 500px;
      }

      @media screen and (min-width: 760px) and (max-width: 1280px) {
        .Feature {
          flex-basis: 40%;
        }
      }

      @media screen and (max-width: 759px) {
        .Feature {
          flex-basis: 70%;
        }
      }

      .Feature {
        max-width: 273px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 13px;
      }

      .Feature__header {
        font-weight: normal;
        font-size: 24px;
        color: #0b0f15;
        margin: 13px 0;
      }

      .Feature__icon {
        fill: #8d9299;
        font-size: 72px;
        opacity: 0.5;
      }

      .Feature__icon-server {
        font-size: 46px;
      }

      .Feature__text {
        font-size: 20px;
        line-height: 30px;
        color: #8d9299;
        text-align: center;

      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }

      @media screen and (max-width: 1280px) {
        .HiddenAtLg {
          display: none;
        }
      }
    `}
    </style>
  </div>
)

export default EnterpriseFeatures
