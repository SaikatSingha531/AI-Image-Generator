import React,{useRef, useState} from 'react'
import img from "./Photos/default_image.svg"

function ImgGenerator() {

  const [image, setImage] = useState("/");
  let inputRfe = useRef(null);

  return (
    <>
    <div className=' flex flex-col justify-center items-center bg-[#141A28] '>
        <h1 className='text-[#D6DAE2] text-4xl font-bold m-5' >AI Image <span className='text-[#3C9881]'>Generator</span></h1>
        <div>
            <div className='' >
                <img src={image === "/" ? img : image  } className='rounded-lg h-80  md:h-96 m-5'/>
            </div>
        </div>

        <div className='flex m-5 bg-[#56585e] rounded-full h-14  md:h-14 md:w-[500px] px-4  '>
          <input type="text" placeholder='Describe What You Want' className='flex-grow bg-transparent text-white outline-none text-lg px-2'/>
          <button className='bg-[#373b8a] hover:bg-[#3f3c62] text-white rounded-full px-6 h-10 text-lg mt-2'>Generate</button>
        </div>
    </div>
      
    </>
  )
}

export default ImgGenerator
