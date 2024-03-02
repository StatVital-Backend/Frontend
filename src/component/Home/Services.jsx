import React from 'react';
import laptop from '../../assets/Laptop.avif'

const Services = () => {
  return (
    <div className='mainContainer'>

      <div className= ''>
        <img className='relative opacity-3 h-[60vh] w-[100%] hover:opacity-45' src={laptop} alt='background'/>
        <div className='absolute text-center justify-center service top-60 left-[800px]'>
          {/* <p className='text-blue-400 font-bold font-sans text-5xl txt'>Our Services</p> */}
          {/* <p className='text-blue-400 font-normal text-2xl tet'>We Have Investmented In The Development And Management Of Such Innovative And Productive <br /> Solutions</p>       */}
        </div>
      </div>


      {/* { <div className='head2'> */}
        {/* <P>EXPLORE OUR SERVICE</P>
                <div className='why'>
                    <h1>Valuable Services<span>Benefits</span></h1>
                    <p>the implementation of an automated birth and death data <br />
                     record system in hospitals and mortuaries would result in improved efficiency, <br />
                    data accuracy, and public health outcomes, benefiting both healthcare providers and the <br />
                     communities they serve.</p> 
                </div> */}

                <div className='possibilities'>
                    {/* <div className='possible'>
                        <div className='urlAndCustomAndqrcodesAndDataAnalytics'>

                            
                            <div className='urlAndCustom'>
                                <div className='url'>
                                    <img src={shortening} alt="" className='images'/>
                                    
                                    <h1>URLS Shortening</h1>
                                    <p>Scissor allows you to shorten URLs of your <br />
                                    business, events. Shorten your <br />
                                    URL at scale, URL redirects.</p>
                                </div>

                                    <div className='custom'>
                                        <img src={customerUrl} alt="" className='images' />
                                        <h1>Custom URLS</h1>
                                        <p>With Scissor, you can create custom URLs,<br />
                                        with the length you want! A solution for socials <br />
                                        and businesses.</p>
                                    </div>
                            </div>

                            <div className='qrcodesAndDataAnalytics'>
                                <div className='qrCodes'>
                                    <img src={qrCode} alt="" className='images'/>
                                    <h1>QR Codes</h1>
                                    <p>Generate QR codes to your business, events. <br />
                                    Bring your audience and customers to your <br />
                                    doorstep with this scan and go solution.</p>
                                </div>

                                    <div className='dataAnalytics'>
                                        <img src={dataAnalytic} alt="" className='images'/>
                                        <h1>Data Analytics</h1>
                                        <p>Receive data on the usage of either <br />
                                        your shortened URL, custom URLs or generated QR <br />
                                        codes. Embedded to monitor progress.</p>
                                    </div>
                            </div>

                        </div>
                    </div> */}

                </div>
            {/* </div> */} 
        

   

    </div>
  )
}

export default Services;