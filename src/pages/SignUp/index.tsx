import './signUp.css'
import { Header } from "../../components/signup/signUpHeader"
import { Button } from "../../components/signup/button"
import SideSvg from '../../assets/svg/sideangle'


const SignUp = () => {
  return (
    <>
    <div className='container w-[100%]'>
      <Header />
      <div className="min-vh-50 d-flex justify-content-center align-items-center form">
        <div>
          <span>Personal Information</span>
          <form className='pt-3'>
            <div className="d-flex gap-3">
              <div className="d-flex flex-column mb-3">
                <label htmlFor="">First Name</label>
                <input placeholder="First Name" type="text" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="">last Name</label>
                <input type="text" placeholder='last Name' />
              </div>
            </div>
            <div className="d-flex flex-column w-5 mb-3">
              <label htmlFor="">Date of Birth</label>
              <input className="w-5 input" type="text" placeholder='10-06-1900' />
            </div>
            <div className="d-flex flex-column w-5 mb-3">
              <label htmlFor="">Email</label>
              <input className="w-5" type="email" placeholder='Your Email will be used to sign into your account' />
            </div>
            <div className="d-flex flex-column w-5">
              <label htmlFor="">Phone No</label>
              <input className="w-5" type="text" placeholder='xxxxxxxx' />
            </div>
            <Button />
          </form>
        </div>
      </div>
      <div className="svg">
        <SideSvg width={439} height={664} />
      </div>
      <div className='d-flex justify-content-center pt-5 privacy'>
        <input className='box' type='checkbox' />
        <p className='pt-3 px-2 policy'>
          I agree to the <span>Privacy Policy</span> and give my permission to process my<br></br>
          personal data for the purpose specified in this Privacy Policy
        </p>
      </div>
      </div>
    </>
  )
}

export default SignUp