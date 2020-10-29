import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const PeopleReview = (props) => {
  const dataReview = [
    {
      image_url: "/assets/people1.png",
      name: "Allison",
    },
    {
      image_url: "/assets/people2.png",
      name: "Kattie",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <div className="mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-8"
      >
        {dataReview.map((item, key) => (
          <div className="bg-white border p-10 rounded-lg">
            <p className="leading-relaxed italic">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.”
            </p>
            <div className="mt-10">
              <div className="flex items-center">
                <img
                  src={item.image_url}
                  alt=""
                  className="h-10 w-10 object-cover"
                />
                <h4 className="ml-5">{item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
