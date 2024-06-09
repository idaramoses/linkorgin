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

const MatchingNewComersPage: React.FC = () => {
  return (
    <>
      <header className="flex flex-col items-start self-stretch px-16 pt-16 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0d7493709c32be4181b8f4c4a91c5d15f513f4b119ecf79e46907805084995?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&" alt="Mon - Ami Matching logo" className="max-w-full aspect-[4.55] w-[124px] max-md:ml-0.5" />
      </header>
      <main className="flex flex-col items-center bg-white">
      <h1 className="mt-20 text-6xl font-semibold bg-clip-text text-slate-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">Welcome to Mon - Ami Matching</h1>
        <h2 className="mt-10 text-2xl text-slate-800 max-md:max-w-full">We connect newcomers to Canada with locals who can offer support and guidance.</h2>
        <NavLink to={`/matching/category`}>
        <button className="justify-center px-12 py-8 mt-16 text-lg font-medium text-black whitespace-nowrap border-2 border-solid border-neutral-400 rounded-[38.5px] max-md:px-5 max-md:mt-10" tabIndex={0}>Signup</button>
        </NavLink> 
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8cb074c65f84df090f6a913d00ad0dd46c8160d494c3d39db94322dfbf9f8a?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&" alt="A helping hand illustration" className="mt-7 max-w-full aspect-[1.04] w-[534px]" />
      </main>
    </>
  );
};

export default MatchingNewComersPage;