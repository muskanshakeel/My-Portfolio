import Image from "next/image";
import React from "react";
import Picture from "../../../public/picture.jpg";

const About = () => {
    return(
        <div id="about">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
        alt="hero"
        src={Picture}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
      {`Hello! I’m an undergraduate pharmacist with a strong foundation in healthcare and a growing interest in technology. I completed my matriculation at Eaton Public School and my intermediate studies at County Girls College. My professional journey includes interning at both Civil Hospital and NICVD Hospital as an internee pharmacist, where I gained practical experience in patient care and pharmacy operations. Additionally, I contributed as a WHO surveyor for the polio eradication initiative, supporting global health efforts.`}
      <br/>
      <br/>
      {`Currently, I am expanding my skills by pursuing studies in Generative AI, aiming to merge my knowledge of pharmacy with cutting-edge technologies to make a positive impact in both healthcare and tech fields.`}
      </p>
      <div className="flex justify-center">
        <a href={"/cv resume.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )  
}

export default About