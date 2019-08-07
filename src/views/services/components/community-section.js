import Link from '../../../components/ui/link'
import GitHubButton from '../../../components/ui/github-button'
import PricingEstimate from './pricing-estimate'

const startIntercom = (msg) => {
  window.Intercom('showNewMessage', msg)
}

const CommunitySection = () => (
  <div class="wrapper">
  <div id="app"></div>
  <div className='Section'>
    <div className='Section__header u-wrapper u-ta-c'>
      <h2 className='u-title'>Managed IT Services</h2>
      <p>Manage IT provides clients with 24/7/365 IT management service, which includes monitoring, support/troubleshooting, maintenance, reporting and asset management of their IT infrastructure (servers, storage, networking, applications, desktop/laptops). It can be delivered remotely, with onsite augmentation when required, and can be used for clients’ infrastructure that reside on-premise or within various cloud systems. </p>
      <div className='Section__definition'>deepwelsolutions = Cloud + Crowd!</div>
    </div>

    <div className='Section__content u-wrapper'>
      <div className='Feature-list'>
        <div className='Feature Feature--important'>
          <div className='Feature__inner'>
            <h4 className='Feature__title'>Improve Your Operations And Boost Your Bottom Line With Innovative Managed IT Services</h4>
            <p>A healthy business grows and develops, and to do so, it needs effective technology that is responsive and secure. Without the right managed IT support, your company can suffer costly downtime and dangerous data breaches.</p>
          <div className='PricingEstimate'>
          <PricingEstimate />

          <a className='PricingEstimate__contact' href='mailto:info@deepwelsolutions.com'>Contact us for enterprise pricing</a>
        </div>
          </div>
        </div>
   
        <div className='Feature'>
          <h4 className='Feature__title'>ESSENTIALS PLAN</h4>
          <p>8×5 Remote Support </p>
          <p>Office 365 </p>
          <p>24×7 Monitoring Agent (Workstation) </p>
          <p>Server Management </p>
          <p>Server Backup </p>
          <p> 24×7 Monitoring Agent (Server)</p>
        
        <div className='Feature'>
          <h4 className='Feature__title'>ADVANCED</h4>
            <p>8×5 Remote Support </p>
          <p>Office 365 </p>
          <p>24×7 Monitoring Agent (Workstation) </p>
          <p>Server Management </p>
          <p>Server Backup </p>
          <p> 24×7 Monitoring Agent (Server)</p>
          <p>Security Awareness Training</p>
          <p>Onsite Support</p>
          <p>After Hours Support</p>
          <p>Dedicated Remote Workplace</p>
          </div>
        </div>
        
        
      </div>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
        margin-bottom: 30px;
        padding-top: 30px;
        position: relative;
      }

      .Section__header {
        max-width: 735px;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
        color: #8d9299;
      }

      .Section__header .u-title {
        margin-bottom: 30px;
      }

      .Section__definition {
        font-size: 24px;
        color: #3e434a;
        margin-top: 40px;
      }

      .Section__content {
        justify-content: space-between;
        max-width: 1230px;
        margin-top: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          margin-bottom: 60px;
        }

        .Section__content {
          margin-top: 90px;
        }
      }

      @media screen and (min-width: 960px) {
        .Section {
          padding-top: 100px;
          margin-bottom: 100px;
        }
      }

      /* = Feature
       * ==================================================================== */
      .Feature {
        color: #7a7f87;
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

      .Feature--important p + p {
        margin-top: 20px
      }

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: #2f3339;
        margin-bottom: 10px;
      }

      .Feature--important {
        font-size: 20px;
        line-height: 30px;
        flex: 100%;
      }

      .Feature--important .Feature__title {
        font-size: 24px;
      }

      @media screen and (min-width: 560px) {
        .Feature-list {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -30px;
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature {
          flex-basis: 25%;
        }

        .Feature:nth-child(4),
        .Feature:nth-child(5),
        .Feature:nth-child(7) {
          margin-top: -30px;
        }

        .Feature__inner {
          max-width: 460px;
        }

        .Feature--important {
          flex-basis: 50%;
        }
      }

      /* = CTA
       * ==================================================================== */
      .CTA {
        color: #7a7f87;
        font-size: 18px;
        text-align: center;
        margin-top: 30px;
      }

      .CTA a {
        color: #2c59c5;
        text-decoration: none;
        font-weight: 500;
        line-height: 28px;
      }

      .CTA a:hover {
        text-decoration: underline;
      }

      @media screen and (min-width: 960px) {
        .CTA {
          margin-top: 70px;
        }
      }


      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </div>
  </div>
)

export default CommunitySection
