import React from "react";
import FilledButton from "../../../reuseables/bottons/FilledButton/FilledButton";
import { Link } from "react-router-dom";


const HospitalSignUp = () => {

    return (
      <div className="flex"> 
      <div className="relative">
        <div className='bg-white w-[700px] imageDiv'>
          <div className="flex px-6 py-8 loginDiv">
                
            <div className=" rounded-lg w-[500px]  md:mt-0 sm:max-w-md xl:p-0 loginForm">
    
              <div className="p-6  w-[700px]  space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight justify-center flex tracking-tight text-blue-950 md:text-3xl">
                  HOSPITAL SIGN UP
                </h1>
                    
                  <form className="space-y-4 md:space-y-6" action="#">

                  <div>
                    <label for="facility_name" className="block mb-2 text-sm font-medium text-blue-950">Facility Name</label>
                    <input type="text" id="facility_name" className="facilityName border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" placeholder="Hospital Name" required />
                  </div>

                    <div>
                      <label for="location" className="block mb-2 text-sm font-medium  text-blue-950">Facilty Location</label>
                      <input type="text" className="location" id="location" class="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" placeholder="hospital location" required=""/>
                    </div>

                    <div>
                      <label for="type" className="block mb-2 text-sm font-medium  text-blue-950">Facilty Type</label>
                      <input type="text" className="type" id="type" class="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" placeholder="Facility type" required=""/>
                    </div>

                    <div>
                      <label for="email" className="block mb-2 text-sm font-medium  text-blue-950">Certification Number</label>
                      <input type="number" className="email" id="email" class="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" placeholder="certification number" required=""/>
                    </div>
                    
                    <div>
                      <label for="email" className="block mb-2 text-sm font-medium  text-blue-950">Official Email</label>
                      <input type="email" className="email" id="email" class="border text-blue-950 sm:text-sm rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:ring-blue-950 focus:border-blue-950" placeholder="name@hospital.com" required=""/>
                    </div>
                    <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-blue-950">Password</label>
                      <input type="password" className="password" id="password" placeholder="••••••••" class="border text-blue-950 sm:text-sm rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:border-blue-950" required=""/>
                    </div>

                    <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-blue-950">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="border text-blue-950 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-blue-950 placeholder-blue-950 focus:border-blue-950" required=""/>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>

                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-blue-950 ">I accept the <a class="font-medium text-blue-400 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>

                    </div>

                    <div> 
                      <FilledButton text={"Login"} style={{width:"640px"}} />   
                    </div>
                      <p class="text-sm font-light text-blue-950">
                          Already have an account yet? <a href="/hospitallogin" class="font-medium hover:underline text-blue-400">login here</a>
                      </p>
                            
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>

    <div className="bg-blue-950 h-screen px-60 center w-[1700px]">
      
      <div className="text-7xl pt-52 text-white">
        Navigate Life's Journey with <br /> Precision - Capturing Every Moment, <br /> Every Statistic, Every Insight!
      </div>

      <div>
        <p className="text-white text-4xl pt-10">
        We are a team of passionate individuals who believe in the power of data and its <br />
        impact on society. Committed to providing the best tools and resources, we <br />
        empower you to capture and analyze your life's journey. By encapsulating every <br />
        moment, statistic, and insight, we enable informed decisions and a more fulfilling <br />
        life. We're devoted to guiding you through life's journey with precision, eagerly <br />
        anticipating our role in your story.

        </p>
      </div>

    </div>
  </div>
    )
};

export default HospitalSignUp;
