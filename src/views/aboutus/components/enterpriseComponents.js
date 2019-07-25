import Logo from '../../../components/ui/logo'
import Hexagon from '../../../components/ui/hexagon'

const EnterpriseComponents = () => (
  <div className='Section u-wrapper'>
    <div className="EntComponents">
      <div className="EntComponent">
        <div className="EntComponent__logo">
          <Logo />
        </div>
        <div className="EntComponent__title">3 things we value</div>
        <div className="EntComponent__list">
          <ul>
            <li>Quality</li>
            <p>The services we provide to our customers will be first class, and of the highest professional quality.</p>
            <li>Consistency</li>
            <p>We will always deliver exactly what has been promised, and more, in the most reliable and consistent manner.</p>
            <li>Results</li>
            <p>We will be responsible. We will look after our clients systems and business processes as if they were our own, and we will strive to achieve the best possible outcome.</p>
          
          </ul>
        </div>
      </div>
      <div className="EntComponent">
        <div className="EntComponent__logo">
          <Logo />
        </div>
        <div className="EntComponent__title">we believe in</div>
        <div className="EntComponent__list">
          <ul>
            <li>
            We change things for the better.
            </li>
            <li>We innovate with passion and purpose.</li>
            <li>We deliver with excellence.</li>
            <li>We believe everyone counts.</li>
            
            <li>We act with integrity and respect.</li>
          </ul>
        </div>
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={70} fill='#45cdf2' position={{bottom: '54%', right: '-35px'}} />
        <Hexagon width={18} fill='#6345f2' position={{bottom: '0%', left: '80px'}} />
      </div>
      <div className="HiddenAtLg">
        <Hexagon width={52} fill='#85b6ec' position={{top: '-19%', left: '96px'}} />
      </div>
    </div>
    <style jsx>{`
      .Section {
        position: relative;
      }

      .EntComponents {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 90px 0 70px;
      }

      .EntComponent {
        margin: 30px 74px;
        flex: 0 1 0;
        min-width: 26%
      }

      @media screen and (max-width: 759px) {
        .EntComponent {
          min-width: 52%;
        }
      }

      .EntComponent__logo {
        width: 181px;
        margin-bottom: 12px;
      }

      .EntComponent__title {
        font-size: 24px;
        height: 28px;
        color: #0b0f15;
        margin-bottom: 34px;
      }

      .EntComponent__list ul {
        list-style: none
      }

      .EntComponent__list li {
        color: #8d9299;
        font-size: 20px;
        line-height: 1.5;
        max-width: 368px;
        text-indent: -3em;
        margin-bottom: 14px;
      }

      .EntComponent__list li:before {
          content: '';
          display: inline-block;
          height: 28px;
          width: 28px;
          -webkit-mask-image: url(/../../../static/img/enterprise/check-circle.svg);
          mask-image: url(/../../../static/img/enterprise/check-circle.svg);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          margin-right: 1.6em;
          background-color: #3cdc9e;
          vertical-align: middle;
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

export default EnterpriseComponents
