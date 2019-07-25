import Professional from './registries-section/cloud-services.svg'
import Grid from '../../../components/ui/grid'

const AutomationSDKSection = () => (
  <div className='Section'>
    <div className='Section__inner u-wrapper'>
      <Grid wrap>
        <div className='Section__cli'>
         <Professional /> 
        </div>

        <div className='Section__cli-about'>
          <h3>Our Consultants are an Extension of your Team</h3>
          <p>Our team have been working on digital workplace projects for over 10 years, delivering the complete package from assessing business requirements and developing solutions to on-going management and consulting to drive adoption. With a diverse team of Designers, Architects, Customer Success Managers, Business Analysts, SharePoint Consultants and Managed Services teams, we can assemble an expert team to tackle any business challenge.</p>
          
        </div>

        <div className='Section__sdk'>
          <h2 className='u-title'>IT Consulting & Professional Services</h2>
          <p className='u-subtitle'>DeepWell IT Consulting Team strategically evaluates business requirements to define and design IT strategies that drive business growth and innovation..</p>
          <p>
            
          </p>
        </div>

        <div className='Section__sdk-about'>
          <div className='Feature-list'>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>IT Strategy Plan</h4>
              <p>identifies improvements and opportunities for IT investments based on business goals, future initiatives, market drivers, and technology requirements. </p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Project Management
</h4>
              <p>our dedicated Project Management Team ensures projects are completed on time and on budget.  

</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Business Process Intelligence
</h4>
              <p>With a fresh perspective on process problems, iV4 develops new ways to deliver a better customer experience, increase efficiency, and improve consistency. DeepWell is one of very few Microsoft partners in Upstate New York with certified SharePoint experts on staff. </p>
            </div>
          </div>
        </div>
      </Grid>
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

      .Section__inner {
        max-width: 1230px;
      }

      .Section__sdk {
        color: #8D9299;
        font-size: 20px;
        line-height: 30px;
        order: -2;
        margin-bottom: 30px;
      }

      .Section__sdk .u-subtitle {
        color: #3E434A;
      }

      .Section__sdk p + p {
        margin-top: 30px;
      }

      .Section__sdk-about {
        order: -1;
      }

      .Section__cli-about {
        flex: 1;
        font-size: 20px;
        line-height: 30px;
        flex: 100%;
        color: #8d9299;
        margin-top: 30px;
      }

      .Section__cli-about p + p {
        margin-top: 20px
      }

      .Section__cli-about h3 {
        font-size: 24px;
        font-weight: 400;
        color: #2f3339;
        margin-bottom: 15px;
      }

      .Section__cli {
        display: none;
        min-height: 330px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          margin-bottom: 60px;
        }

        .Section__cli {
          display: block;
          width: 100%;
          margin-top: 30px;
        }
      }

      @media screen and (max-width: 969px) {
        .Section__cli {
          max-width: 570px;
          margin-left: auto;
          margin-right: auto;
          min-height: 320px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-top: 100px;
          margin-bottom: 100px;
        }

        .Section__sdk,
        .Section__sdk-about {
          order: 1;
          margin-top: 60px;
          margin-bottom: 0;
        }

        .Section__cli,
        .Section__sdk,
        .Section__cli-about,
        .Section__sdk-about {
          flex-basis: 50%;
        }

        .Section__sdk-about {
          padding-top: 30px;
        }
      }

      @media screen and (min-width: 1270px) {
        .Section__cli,
        .Section__sdk {
          flex-basis: 48%;
        }

        .Section__cli-about,
        .Section__sdk-about {
          flex-basis: 52%;
          margin-left: auto;
        }

        .Section__cli-about,
        .Section__sdk-about {
          padding-left: 80px;
        }
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

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

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #2f3339;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 560px) {
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

export default AutomationSDKSection
