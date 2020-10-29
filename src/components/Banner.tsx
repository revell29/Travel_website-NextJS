import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Banner = () => {
  const dataReview = [
    {
      image_url:
        "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "Allison",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "Kattie",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
        showDots={false}
        infinite={true}
      >
        {dataReview.map((item, key) => (
          <div className="mx-2">
            <img src={item.image_url} alt="" className="rounded-xl" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
