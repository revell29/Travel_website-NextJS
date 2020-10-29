import { NextSeo } from "next-seo";
import { MainLayout } from "../components/Layout/MainLayout";
import { MainHero } from "../components/MainHero";
import { Destination } from "../components/Destination";
import { PeopleReview } from "../components/Review";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

const DEFAULT_SEO = {
  title: "Travel Site (Apsyadira)",
  description: "Example travel web built with NextJS and Tailwindcss",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://apsyadira.com",
    title: "Travel Site (Apsyadira)",
    description: "Example travel web built with NextJS and Tailwindcss",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "apsyadira.com",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image",
  },
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="Travel Site (Apsyadira)"
        description="Example travel web built with NextJS and Tailwindcss"
        openGraph={DEFAULT_SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Apsyadira",
          },
          {
            name: "application-name",
            content: "Travel Web (Apsyadira)",
          },
        ]}
      />
      <MainLayout>
        <MainHero />
        <div className="px-5 md:px-20 py-10">
          <h4 className="text-3xl font-semibold">Top Destination</h4>
          <p className="mt-8 w-full md:w-2/4 leading-relaxed font-semibold text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Destination />
          <div className="flex justify-center mt-10">
            <button className="border-red-500 border py-3 px-20 w-full sm:w-auto text-red-500 font-semibold mt-10 rounded-full hover:bg-red-600 hover:text-white">
              More Destination
            </button>
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="container mx-auto text-center w-full lg:w-2/5">
            <h4 className="text-3xl font-semibold">
              What travellers say about us
            </h4>
            <p className="mt-8 leading-relaxed font-semibold text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <PeopleReview />
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 ">
              <h4 className="text-4xl font-bold">
                Protect yourself and your family’s future{" "}
              </h4>
              <p className="leading-relaxed mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates expedita, quibusdam, consequuntur doloribus est, vel
                autem accusamus aut aperiam sed illo consectetur odit impedit
                distinctio! Laborum vitae itaque quo molestias.
              </p>
              <button className="bg-red-500 rounded-full px-5 py-3 shadow-md mt-10 text-white w-2/4">
                Contact Us
              </button>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
}
