import { Img } from "components";
import * as React from "react";
import { NavLink } from "react-router-dom";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const MatchingLocalsPage: React.FC = () => {
  return (
    <>
     <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700">
      <div className="container mx-auto flex  justify-between items-center">
      <NavLink to="/">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-4 " />
      </NavLink>  

      
    <div className=" flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
      <main className="flex flex-col items-center bg-white md:px-8 text-center">
        <div className="flex flex-row items-center justify-center py-0 px-4  w-full ">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit text-4xl mt-40">
              <span>{`Welcome to `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#182a3e,_#ba3f37_29.44%,_#406ea4_74.99%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Mon - Ami
              </span>
              <span> Matching</span>
            </h1>
          </div>       
         <h2 className="mt-10 text-xl  md:text-base text-slate-800 w-full">We connect newcomers to Canada with locals who can offer support and guidance.</h2>
         <NavLink to={`/matching/locals/register`}>
         <button className="justify-center px-12 py-4 mt-16 text-base font-medium text-black whitespace-nowrap border-2 border-solid border-neutral-400 rounded-2xl " tabIndex={0}>Signup</button>
        </NavLink> 
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8cb074c65f84df090f6a913d00ad0dd46c8160d494c3d39db94322dfbf9f8a?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&" alt="A helping hand illustration" className="mt-7 max-w-full aspect-[1.04] w-[534px]" />
     </main>
    </>
  );
};

export default MatchingLocalsPage;