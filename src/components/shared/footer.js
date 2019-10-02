import Nav from '../ui/nav'
import Link from '../ui/link'
import Grid from '../ui/grid'
import Hexagon from '../ui/hexagon'

const Footer = () => (
  <footer className='Footer u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={18} fill='#05a5b4' position={{bottom: '90px', left: '-40px'}} />
      <Hexagon width={48} fill='#b4f1d9' position={{bottom: '90px', right: '15%'}} />
      <Hexagon width={78} fill='#b4f1d9' position={{bottom: '-20px', left: '20%'}} opacity='.5' />
      <Hexagon width={32} fill='#b4f1d9' position={{top: '40px', right: '-5%'}} />
      <Hexagon width={32} fill='#05a5b4' position={{bottom: '-20px', right: '-8%'}} />
    </div>
    <h3 className="Customers">Vendor expert with</h3>
    <div className="Logos">
      <img src="../../static/img/enterprise/microsoftpartner.png" height="64px" width="160px" />
      <img src="../../static/img/enterprise/microsoftazure.png" height="64px" width="160px" />
      <img src="../../static/img/enterprise/microsoftintune.png" height="64px" width="160px" />
      <img src="../../static/img/enterprise/microsoftcsp.png" height="64px" width="160px" />
      <img src="../../static/img/enterprise/office365.png" height="64px" width="160px" />
    </div>

    <div className='Navigation'>
      <Grid wrap>
        <div className='Navigation__column'>
          <h5 className='Navigation__head'>Company</h5>
          
        </div>
        <div className='Navigation__column'>
          <h5 className='Navigation__head'>Solutions</h5>
          <Nav stack>
            <Link to='/services'>
              <span className='Navigation__link'>Services</span>
            </Link>
            <Link to='/aboutus'>
              <span className='Navigation__link'>About US</span>
            </Link>
          </Nav>
        </div>
        <div className='Navigation__column Navigation__resources'>
          <h5 className='Navigation__head'>Resources</h5>
          <Nav stack>
            <a className='Navigation__link' href='https://www.deepwellsolutions.com/#/'>Documentation</a>
            <a className='Navigation__link' href='https://www.deepwellsolutions.com/#/'>Blog</a>
            
          </Nav>
        </div>
        {/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>For developers</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>iOS developers</a>
            <a className='Navigation__link' href='#'>Android developers</a>
            <a className='Navigation__link' href='#'>Web developers</a>
            <a className='Navigation__link' href='#'>React developers</a>
          </Nav>
        </div> */}
        {/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>More</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>For Investors</a>
            <a className='Navigation__link' href='#'>For Enterprise</a>
            <a className='Navigation__link' href='#'>Our team</a>
            <a className='Navigation__link' href='#'>Case studies</a>
          </Nav>
        </div> */}
        <div className='Navigation__column Navigation__column--split'>
          <h5 className='Navigation__head'>Connect</h5>
          <Nav stack>
            
            <a className='Navigation__link' href='https://www.linkedin.com/company/deepwellsolutions/'>LinkedIn</a>
            <a className='Navigation__link' href='mailto:info@deepwellsolutions.com'>Contact us</a>
          </Nav>
        </div>
      </Grid>
    </div>

    <div className='Copyrights'>&copy; 2019 by deepwell solutions. All rights reserved.</div>

    <style jsx>{`
    .Customers {
      height: 28px;
      font-size: 24px;
      text-align: center;
      color: #3e434a;
      font-weight: normal;
    }
    .Logos {
      margin-bottom: 30px;
      margin-top: 20px;
    
    }
      .Footer {
        max-width: 880px;
        margin-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }

      @media screen and (min-width: 560px) {
        .Footer {
          margin-top: 60px;
          padding-bottom: 60px;
        }
      }

      @media screen and (min-width: 960px) {
        .Footer {
          margin-top: 90px;
        }
      }

      .Navigation {
        justify-content: space-between;
      }

      .Navigation__column {
        margin-bottom: 30px;
        flex: 1;
      }

      .Navigation__column--split :global(ul) {
        width: 230px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .Navigation__column--split :global(li) {
        flex-basis: 50%;
      }

      @media screen and (max-width: 460px) {
        .Navigation__resources {
          order: 2;
        }

        .Navigation__column.Navigation__column--split {
          flex: 1 1 100%;
        }

        .Navigation__column--split :global(ul) {
          width: 108%;
        }
      }

      .Navigation__head {
        color: #2f3339;
        font-weight: 500;
        line-height: 36px;
        font-size: 16px;
      }

      .Navigation__link {
        text-decoration: none;
        line-height: 28px;
        color: #7a7f87;
      }

      .Navigation__link:hover {
        text-decoration: underline;
      }

      .Copyrights {
        text-align: center;
        margin-top: 30px;
        color: rgba(141, 146, 153, .5);
      }

      @media screen and (max-width: 960px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </footer>
)

export default Footer
