import './signUp.css'
import { Header } from "../../components/signup/signUpHeader"
import { Button } from "../../components/signup/button"
import SideSvg from '../../assets/svg/sideangle'
import Side2Svg from '../../assets/svg/side2svg'


const BasicDetails = () => {
    return (
        <div>
            <Header />
            <div className='container min-vh-50 d-flex bg-white justify-content-center align-items-center'>
                <div>
                    <span>Basic Immigration Details</span>
                    <form action="">
                        <div className='d-flex flex-column mb-3'>
                            <label htmlFor="">Country of Origin</label>
                            <select name="country" id="">
                                <option value="volvo">USA</option>
                                <option value="saab">South Africa</option>
                                <option value="mercedes">Nigeria</option>
                                <option value="audi">Japan</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column mb-3'>
                            <label htmlFor="">Current Immigration Status</label>
                            <select name="country" id="">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column mb-3'>
                            <label htmlFor="">Date of immigration or expected date of arrival</label>
                            <input type="text" placeholder='10-07-2026' />
                        </div>
                        <div className='d-flex flex-column mb-3'>
                            <label htmlFor="">Visa Type</label>
                            <select name="country" id="">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="">type of Status</label>
                            <select name="country" id="">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-50 pt-5 bg-dark svg" >
                <Side2Svg />
            </div>

        </div>
    )
}

export default BasicDetails