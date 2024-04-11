import LineSvg from '../../assets/svg/line'
import LogoSvg from '../../assets/svg/logo'
import '../../pages/SignUp/signUp.css'

export const Header = () => {
    return (
        <>
            <div className="position-relative d-flex justify-content-between w-15 h-13 bg-white">
                <div className="w-82 h-33 my-10 pt-5 px-5">
                    <LogoSvg />
                </div>
                <div className="d-flex pt-5 py-9 ml-5 tabs">
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <LineSvg />
                    <p id='login'>Login</p>
                </div>
            </div>
            <div className="py-7 pt-5 d-flex signup">
                <h1>Sign Up</h1>
                {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>4</span>
            <span>6</span>
            <span>7</span> */}
            </div>
        </>
    )
}
