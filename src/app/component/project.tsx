import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";

const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>

    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/resume builder2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              RESUME BUILDER PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shareable Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-3">
            This is a shareable resume builder project I created to help users easily design and share professional resumes with a simple, intuitive interface.
            </p>
            <Link target="_blank" href={"https://muskanshakeel.github.io/Hackathon-Milestones-5/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
         {/* projects */}
         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/sweet delights.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              BAKERY PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Sweet Delights Bakery
            </h1>
            <p className="leading-relaxed line-clamp-3">
            This is a bakery website I created for sweet lovers to order and enjoy delicious treats with a user-friendly menu and contact form.
            </p>
            <Link target="_blank" href={"https://muskanshakeel.github.io/Sweet-Delights-Bakery/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* projects */}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/resume builder2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              RESUME BUILDER PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shareable Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-3">
            This is a shareable resume builder project I created to help users easily design and share professional resumes with a simple, intuitive interface.
            </p>
            <Link target="_blank" href={"https://muskanshakeel.github.io/Hackathon-Milestones-5/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
             View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Project