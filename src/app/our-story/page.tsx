import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-components";
export default function Page() {
  

  return (
    <>
      
      <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">

       
        <main className="flex-1">

          <section id="ace" className="relative py-2 bg-blueback h-auto">
          <section className="py-24 relative bg-blueback">
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col justify-center py-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight font-roboto text-white mb-6">
                        <span className="text-accent">RelevAInce</span> <br /> <span className="text-accent">Our Story</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 pb-6">
                        Unlock the power of data-driven insights with RelevAInce.
                    </p>
                    </div>
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>

            <div className="absolute w-full inset-x-0 -bottom-4 left-0 z-0  sm:-bottom-4 md:-bottom-2 lg:-bottom-6">
              <div
                className="w-full h-36 sm:h-32 md:h-40 lg:h-48 bg-slate-200"
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
              ></div>
            </div>
            
          </section>
            
          </section>
          <section id="our-story" className="relative py-20 bg-slate-200 text-gray-800">
              <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold text-blueback font-roboto text-left mb-6">How We Began</h2>
                <h3 className="text-black text-3xl sm:text-4xl md:text-5xl drop-shadow-xl font-extralight font-roboto text-center mb-6">
                <small>Solving Legal Inefficiencies, One Insight at a Time:<br /> The Story Behind RelevAInce</small>
                </h3>
                <div className="max-w-4xl mx-auto text-lg leading-relaxed">
                  <p className="mb-6">
                    This company was started by two friends – one who has been in the legal industry for 40 years (gasp) and one who has been in big data and AI for about the same amount of time. And yes, we know what you&apos;re probably thinking – two old guys are starting a new company, which is exactly what we did!
                  </p>
                  <p className="mb-6">
                    After 40 years in the legal industry, I had seen my fair share of exorbitant legal bills . . . especially after I moved to in-house counsel for a large commercial construction company. Frustrated by the lack of cost-effective solutions, I shared my tale of woe with my long-time friend over a nice steak dinner one night and we decided to stop complaining and combine our expertise and tackle this problem head-on.
                  </p>
                  <p className="mb-6">
                    Thus, RelevAInce was born - a platform designed to streamline data analysis and drive actionable insights, not just for the legal industry, but across other industry sectors.
                  </p>
                  <p className="mb-6">
                    Our mission is to empower organizations of all sizes to make informed decisions quickly and cost-effectively. No longer will you be buried in data. No longer will you be overwhelmed with analysis paralysis. No longer will you be swamped with information overload.
                  </p>
                  <p className="mb-6">
                    The competitive advantages are endless. Whether you&apos;re navigating the complexities of the legal landscape or seeking to optimize operations in any industry, RelevAInce is your partner in unlocking the power of data-driven insights.
                  </p>
                </div>
              </div>

          </section>

         




          <section id="features" className="relative py-2 bg-slate-200 mb-0 mt-0 sm:-mt-2 md:-mt-2 lg:mt-0">
            

            {/* Bottom Clipped Background */}
            <div className="absolute w-full inset-x-0 -bottom-28 sm:-bottom-32 md:-bottom-36 lg:-bottom-40 z-10">
              <div
                className="w-full h-32 sm:h-48 md:h-48 lg:h-52 bg-slate-200"
                style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
              ></div>
            </div>
          </section>







          <section id="demo" className="relative py-32 bg-blueback text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-left text-slate-200 text-4xl md:text-5xl font-semibold mb-12">
      Who We Are
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Victor Nilson */}
      <Card className="bg-slate-200 text-gray-800">
        <CardHeader className="text-center">
          {/* <Image
            src="/victor-nilson.jpg"
            alt="Victor Nilson"
            width={100}
            height={100}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          /> */}
          <CardTitle className="text-lg font-semibold">Victor Nilson</CardTitle>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </CardHeader>
        <CardContent>
          <p>
            Victor Nilson has spent his career helping businesses utilize disruptive technology at scale, including senior leadership roles at Sabre, Cingular, and AT&T. He leads Relevaince into the revolutionary world of cognitive AI and agentics. Victor holds an MBA from Southern Methodist University.
          </p>
          <p className="mt-2">
            When not working, Victor enjoys traveling with his family and immersing himself in captivating books and informative texts.
          </p>
        </CardContent>
      </Card>

      {/* Lisa Zamaludin Henry */}
      <Card className="bg-slate-200 text-gray-800">
        <CardHeader className="text-center">
          {/* <Image
            src="/lisa-henry.jpg"
            alt="Lisa Zamaludin Henry"
            width={100}
            height={100}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          /> */}
          <CardTitle className="text-lg font-semibold">Lisa Zamaludin Henry</CardTitle>
          <p className="text-sm text-gray-600">Founder & CAO</p>
        </CardHeader>
        <CardContent>
          <p>
            Lisa Zamaludin Henry is a former attorney and partner at an AmLaw 200 firm, with expertise in trademark brand management and patent litigation. She is excited to help attorneys utilize cognitive AI tools. Lisa began her career as a federal judge's clerk and holds a Juris Doctor from Tulane Law School.
          </p>
          <p className="mt-2">
            In her spare time, Lisa enjoys exploring the outdoors with her family, indulging in her love for cooking, and traveling.
          </p>
        </CardContent>
      </Card>
      {/* Steve Henry */}
      <Card className="bg-slate-200 text-gray-800">
        <CardHeader className="text-center">
          {/* <Image
            src="/steve-henry.jpg"
            alt="Steve Henry"
            width={100}
            height={100}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          /> */}
          <CardTitle className="text-lg font-semibold">D. Steven Henry</CardTitle>
          <p className="text-sm text-gray-600">Advisory Board Member</p>
        </CardHeader>
        <CardContent>
          <p>
            D. Steven Henry has consulted on the development of the platform since its inception. His experience as a Chief Legal Officer led him to recognize the potential of cognitive AI to improve efficiencies and reduce costs. In addition to his CLO role at a large construction company, Steve is a Board Director. Previously, he was Partner and Chair of litigation at an AmLaw 200 firm.
          </p>
          <p className="mt-2">
            In his spare time, Steve enjoys writing music, playing in bands, touring on motorcycles, and traveling with his family.
          </p>
        </CardContent>
      </Card>

    </div>
  </div>
</section>



        </main>
        <footer className="bg-gray-800  py-8">
          <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-sm text-white mb-4 md:mb-0 text-center">
                 © 2024 relevAInce All rights reserved.
              </p>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
}