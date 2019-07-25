import Hexagon from '../../../components/ui/hexagon'
import Link from '../../../components/ui/link'
import Testimonials from '../../../components/shared/testimonials'

const FAQ = () => (
  <div className='Section'>
    <Testimonials />

    <div className='HiddenAtSm'>
      <Hexagon width={100} fill='#b4f1d9' position={{top: '60%', right: '-70px'}} />
      <Hexagon width={24} fill='#05a5b4' position={{bottom: '30px', left: '30px'}} />
    </div>

    <div className='Section__content u-wrapper'>
      <div className='FAQ-list'>
        <div className='FAQ'>
          <h4 className='FAQ__title'>How is Office 365?</h4>
          <p>Office 365 is an integrated experience of apps and services, designed to help you pursue your passion and grow your business. Get apps like Word, Excel, PowerPoint, and more, updated monthly with the latest features and security updates.

Use cloud-powered email to reach customers and coworkers wherever work takes you.

Collaborate in Microsoft Teams, the new hub for teamwork where you can chat, organize meetings, and share files.

Save files to OneDrive with one terabyte of online storage, allowing access across devices and on the go.

Run your business with the Business Apps, empowering you to manage customer scheduling, invoicing, referrals, and more, all from one place.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What is Azure?</h4>
          <p>Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What is Microsoft Intune?</h4>
          <p>Microsoft Intune is a cloud-based service in the enterprise mobility management (EMM) space that helps enable your workforce to be productive while keeping your corporate data protected. Similar to other Azure services, Microsoft Intune is available in the Azure portal.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What is managed IT services?</h4>
          <p>In a managed service arrangement, the managed service provider retains responsibility for the functionality of the IT service and equipment, and the customer typically pays a monthly fee for receipt of the service. There are many different types of managed IT service offerings, but the idea behind all of them is to transfer the burden of maintaining IT from the customer to a service provider. In an effective managed services relationship, a customer benefits from predictable pricing and the ability to focus on core business concerns rather than IT management chores.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>Where is Office 365 Plan Options?</h4>
          <p>Microsoft Office 365 is available in a variety of plans to best meet the needs of your organization.Office 365 Business Essentials , Office 365 Enterprise E1,E3,E5 etc.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>How can I get support?</h4>
          <p>You can talk to us simply <a href='mailto:info@deepwellsolutions.com'>send us an email</a>. You can also browse through Book a meeting fourm.</p>
        </div>
      </div>

      
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
        margin-bottom: 30px;
        position: relative;
      }

      .Section__content {
        justify-content: space-between;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-bottom: 60px;
        }
      }

      @media screen and (min-width: 960px) {
        .Section {
          margin-bottom: 100px;
        }
      }

      .Section__content {
        max-width: 1230px;
      }

      @media screen and (min-width: 560px) {
        .Section__content {
          margin-top: 90px;
        }
      }

      /* = FAQ
       * ==================================================================== */
      .FAQ {
        color: #7a7f87;
        margin-bottom: 30px;
        line-height: 24px;
      }

      .FAQ__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #2f3339;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 560px) {
        .FAQ-list {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -30px;
          margin-left: -30px;
        }

        .FAQ {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 960px) {
        .FAQ {
          width: 33.33333%;
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

      .CTA :global(a) {
        color: #2c59c5;
        text-decoration: none;
        font-weight: 500;
        line-height: 28px;
      }

      .CTA :global(a:hover) {
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
)

export default FAQ
