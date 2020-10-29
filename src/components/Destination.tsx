import React from "react";
import Link from "next/link";
export const Destination = () => {
  const dataImage = [
    {
      image_url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "5.0",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1579981633051-529120895bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1565619109666-b8bfe0e95ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1515315230580-4299548a2e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      rate: "4.6",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      {dataImage.map((item, key) => (
        <div className="" key={key}>
          <Link href="/">
            <a>
              <img
                src={item.image_url}
                className="object-cover rounded-md hover:opacity-75"
                alt=""
              />

              <div className="py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-500 fill-current"
                  >
                    <g data-name="Layer 2">
                      <g data-name="star">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(90 12 12)"
                          opacity="0"
                        />
                        <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                      </g>
                    </g>
                  </svg>
                  <label className="mx-2 text-sm">{item.rate}</label>
                </div>
                <div className="">
                  <h4 className="font-semibold mt-1">Lorem Ipsum</h4>
                  <label htmlFor="" className="text-gray-500">
                    17 place to visit
                  </label>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
