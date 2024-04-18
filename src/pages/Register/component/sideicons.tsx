import React from 'react';
import { CSSTransition } from 'react-transition-group';
import  './style.css';
interface StepProps {
    currentStep: number;
}

const StepComponent: React.FC<StepProps> = ({ currentStep }) => {
    return (
     <CSSTransition
     in={true}
     appear={true}
     key={currentStep}
     classNames="fade"
     timeout={500} // Adjust the timeout as needed
 >
     <>
            {currentStep === 1 ? (
                <div className="md:hidden absolute right-0 top-0">
                    <div className="h-[550px] w-[350px] relative">
                        <svg className="w-full h-full absolute " viewBox="0 0 447 621" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="808.617" y="478.681" width="746.594" height="571" rx="285.5" transform="rotate(163.569 808.617 478.681)" fill="#FEF0E8"/>
                        </svg>
                        <div className="absolute 0 right-[20%] bottom-[35%]">
                            <div className="flex flex-row">Hey!<br/>
                                I’m excited to know you    
                                <img
                                    src="images/step1.svg"
                                    alt="istockphoto127"
                                    className="h-10 w-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : currentStep === 2 ? (
                <div className="md:hidden absolute right-0 top-32 ">
                    <div className="h-[550px] w-[350px] relative">
                        <svg className="w-full h-full absolute " viewBox="0 0 448 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="916.821" y="786.844" width="1039" height="571" rx="285.5" transform="rotate(-162.301 916.821 786.844)" fill="#FEF0E8"/>
                        </svg>
                        <div className="absolute 0 right-[20%] top-[35%] ">
                            <div className="flex flex-row gap-0 w-44"><div>A little bit  <br/> about your immigration journey</div> 
                                <img
                                    src="images/step2.svg"
                                    alt="istockphoto127"
                                    className="h-10 w-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : currentStep === 3 ? (
               <div className="md:hidden absolute right-0 top-24 ">
                   <div className="h-[550px] w-[350px] relative">
                       <svg className="w-full h-full absolute " viewBox="0 0 443 739" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="1092.3" y="450.512" width="1039" height="571" rx="285.5" transform="rotate(159.105 1092.3 450.512)" fill="#FEF0E8"/>
                       </svg>
                       <div className="absolute 0 right-[20%] top-[55%]">
                           <div className="flex flex-row">How great<br/> do you speak 
                               <img
                                   src="images/step3.svg"
                                   alt="istockphoto127"
                                   className="h-10 w-10"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           ): currentStep === 4 ? (
               <div className="md:hidden absolute right-0 top-24 ">
                   <div className="h-[550px] w-[350px] relative">
                   <svg className="w-full h-full absolute " viewBox="0 0 458 574" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1038.91" y="573.889" width="1039" height="571" rx="285.5" transform="rotate(-179.854 1038.91 573.889)" fill="#FEF0E8"/>
</svg>

                       <div className="absolute 0 right-[20%] top-[45%]">
                           <div className="flex flex-row">Just a little about <br/> your education
                               <img
                                   src="images/step4.svg"
                                   alt="istockphoto127"
                                   className="h-10 w-10"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           ):currentStep === 5 ? (
               <div className="md:hidden absolute right-0 top-24 ">
                   <div className="h-[550px] w-[350px] relative">
                   <svg className="w-full h-full absolute " viewBox="0 0 443 739" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="1092.3" y="450.512" width="1039" height="571" rx="285.5" transform="rotate(159.105 1092.3 450.512)" fill="#FEF0E8"/>
                       </svg>

                       <div className="absolute 0 right-[20%] top-[55%]">
                           <div className="flex flex-row">We hope help you <br/> Get more confortable
                               <img
                                   src="images/step5.svg"
                                   alt="istockphoto127"
                                   className="h-10 w-10"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           ):currentStep === 6 ? (
               <div className="md:hidden absolute right-0 top-32 ">
                   <div className="h-[550px] w-[350px] relative">
                   <svg className="w-full h-full absolute " viewBox="0 0 448 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="916.821" y="786.844" width="1039" height="571" rx="285.5" transform="rotate(-162.301 916.821 786.844)" fill="#FEF0E8"/>
                        </svg>

                       <div className="absolute 0 right-[20%] top-[35%]">
                           <div className="flex flex-row">Ain’t no life without<br/>a social life
                               <img
                                   src="images/step6.svg"
                                   alt="istockphoto127"
                                   className="h-10 w-10"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           ):currentStep === 7 ? (
               <div className="md:hidden absolute right-0 top-36 ">
                   <div className="h-[550px] w-[350px] relative">
                   <svg className="w-full h-full absolute " viewBox="0 0 447 621" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="808.617" y="478.681" width="746.594" height="571" rx="285.5" transform="rotate(163.569 808.617 478.681)" fill="#FEF0E8"/>
                        </svg>

                       <div className="absolute 0 right-[20%] bottom-[35%]">
                           <div className="flex flex-row">Great job!<br/>Any support needs?<br/>Tell us
                               <img
                                   src="images/step7.svg"
                                   alt="istockphoto127"
                                   className="h-10 w-10"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           ) : (
                <></>
            )}
        </>
 </CSSTransition>
       
    );
};

export default StepComponent;
