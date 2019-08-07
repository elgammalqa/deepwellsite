import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import Head from 'zefir/head'
import Page from '../components/ui/page'
import SignInForm from '../components/shared/auth/signin'

const SignIn = () => (
  <Page>
    <Head>
      <title>DeepWell Solutions</title>
    </Head>

    <div className='Header'>
      <Header
        title='Good to see you again'
        subtitle='Continue solving unique customer problems, We Are Passionate About Providing Cloud, Mobile And Analytics Applications That Are Easy To Adopt, Reduce Cost, And Your Employees Will Love.'
        />
    </div>

    <div className='Section u-wrapper'>
      <SignInForm />
    </div>

    <Footer />

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Header :global(.PageHead) {
        max-width: 500px;
      }

      .Section {
        max-width: 450px;
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-bottom: 90px;
        }
      }
    `}</style>
  </Page>
)

export default SignIn
