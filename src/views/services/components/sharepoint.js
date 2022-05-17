import Grid from '../../../components/ui/grid'

const SharePoint = ({toggleSignUpModal}) => (
  <div className='Section'>
    <div className='Section__clouds' />
    <div className='Section__inner u-wrapper'>
      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <div className='Feature-list'>
            <div className='Feature Feature--important Feature--full'>
              <h2 className='u-title'>What Do We Offer?</h2>
              <p className='u-subtitle'>Being a Microsoft trusted partner, DeepWell Solutions provides Office 365 migration consulting services to offer your enterprise with multifaceted cloud collaboration. Hosted by Microsoft, Office 365 is the best cloud-based productivity tool which provides an inclusive pool of enterprise level services along with advisory and technical support to your business about improving ROI, increasing user adoption and eliminating hidden costs.</p>
              
            </div>
            <div className='Feature Feature--important Feature--full'>
              <h4 className='Feature__title'>Technology Stack to Build Your SharePoint On-Premise Platform</h4>
              <p>Our Office 365 consulting services include various unique services ranging from SharePoint development, Office 365 Migration Consulting Services, Office 365 Deployment Services, Office 365 Support, Office 365 Products, and Office 365 Deployment Services. At DeepWell Solutions, our certified Microsoft 365 consultants understand your needs and suggest the best Office 365 services package that is suitable for your unique business needs.</p>
            </div>
          </div>
        </div>
        <div className='Section__column Section__column--secondary'>
          <div className='Feature-list Feature-list--arrange'>
            <div className='Feature'>
              <h4 className='Feature__title'>Analysis</h4>
              <p>Our SharePoint On-Premise development begins with a careful analysis of all the materials we are provided with and research on all the technology that needs to be used.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Specification</h4>
              <p>Ultimately, the most crucial aspect of the project is to deliver excellent results to the client, and that cannot happen without a meeting to discuss all issues of the project.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Design</h4>
              <p>In the design phase, we create visuals, logos, and all the artwork of your project based on the color schematics chosen by you.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Development</h4>
              <p>Viftech’s development team creates a game plan for your project. This includes writing the code for it and optimizing it to achieve maximum levels of speed.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Testing</h4>
              <p>Though you are welcome to conduct your testing later, we first run your platform through a myriad of tests of our own.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Delivery</h4>
              <p>During the final stage, we deliver the end-results to you and give you a week-long time to get acquainted and test the platform yourself.</p>
            </div>
            
          </div>
        </div>

      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }

      .Section__inner {
        max-width: 1230px;
      }

      .Section__column--primary .u-title {
        padding-top: 90px;
        margin-top: -90px;
      }

      .Section__column--secondary {
        margin-top: 30px;
      }

      .Section__column--footer {
        width: 100%;
      }

      .Section__column--footer > :nth-child(2) {
        margin-top: 60px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .Section__column--footer > :nth-child(2) {
          margin-top: 30px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-top: 300px;
          padding-bottom: 100px;
        }

        .Section__clouds {
          background-size: 100%;
          position: relative;
          height: 1218px;
          background-image:url(/);
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
          transform: translateY(-250px);
        }

        .Section__column--primary,
        .Section__column--secondary {
          flex-basis: 50%;
        }

        .Section__column--secondary {
          margin-top: 240px;
        }

        .Section__column--footer {
          display: flex;
          width: auto;
        }

        .Section__column--footer > :nth-child(1) {
          width: 400px;
        }

        .Section__column--footer > :nth-child(2) {
          margin-top: 0;
          transform: translate(80px, 0);
          margin-bottom: -260px;
        }
      }

      @media screen and (min-width: 1270px) {
        .Section {
          padding-top: 300px;
        }

        .Section__clouds {
          transform: translateY(-250px);
        }

        .Section__column--primary {
          flex-basis: 41.5%;
        }

        .Section__column--secondary {
          flex-basis: 58.5%;
          padding-left: 50px;
          margin-left: auto;
        }

        .Section__column--footer {
          margin-top: 80px;
        }
      }

      @media screen and (max-width: 1440px) {
        .Section__clouds {
          background-size: 1440px;
        }
      }

      @media screen and (min-width: 1650px) {
        .Section__clouds {
          transform: translateY(-30%);
        }
      }

      /* = Browser
       * ==================================================================== */
      .Browser {
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px #e5e5e5;
        overflow: hidden;
      }

      .Browser__header {
        line-height: 8px;
        background-color: #f5f5f5;
        padding: 15px 13px;
      }

      .Browser__header i {
        display: inline-block;
        margin-right: 3px;
        width: 8px;
        height: 8px;
        background-color: #d5d5d5;
        border-radius: 4px;
      }

      .Browser__content {
        height: 480px;
        width: 100%;
        overflow: hidden;
      }

      @media screen and (min-width: 960px) {
        .Browser {
         width: 1333px;
        }
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #8D9299;
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
        color: #2f3339;
        margin-bottom: 7px;
      }

      .Feature--important {
        font-size: 20px;
        line-height: 30px;
      }

      .Feature--important .Feature__title {
        font-size: 24px;
        margin-bottom: 15px;
      }

      .Feature--important p + p {
        margin-top: 30px;
      }

      @media screen and (min-width: 560px) {
        .Feature-list {
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          display: inline-block;
          vertical-align: top;
          padding-left: 30px;
        }

        .Feature--full {
          width: 100%;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature__inner {
          max-width: 460px;
        }
      }

      .Feature-list--arrange .Feature:nth-child(2),
      .Feature-list--arrange .Feature:nth-child(4) {
        float: right;
      }

      .Feature-list--arrange .Feature:nth-child(3),
      .Feature-list--arrange .Feature:nth-child(5) {
        float: left;
      }

      /* = Other
       * ==================================================================== */
      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }

      .u-subtitle {
        color: #3E434A;
      }

      .fa-arrow-right {
        font-size: 12px;
        top: -2px;
        position: relative;
        transform: translateX(3px);
        transition: transform .25s;
      }

      a:hover .fa-arrow-right {
        transform: translateX(5px);
      }
    `}</style>
  </div>
)

export default SharePoint
