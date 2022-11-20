type Testimonys = {
  image: string;
  name: string;
  rating: number;
  testimony: JSX.Element | React.ReactNode;
};
const Testimony: Testimonys[] = [
  {
    image: "/assets/testimonials/user-image.png",
    name: "Al-Amanah Click",
    rating: 4.5,
    testimony: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitousubui.
          Faucibus facilisi ac vivamus quisque nunc tincidunt donec faucibus.
          Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
          quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas
          ut in.
        </p>
        <p className="mt-2">
          Nulla pellentesque imperdiet scelerisque sed. Elementum quis id
          suspendisse felis, sollicitudin nisl. Suspendisse id fermentum varius
          cursus
        </p>
      </>
    ),
  },
  {
    image: "/assets/testimonials/user-image.png",
    name: "Al-Amanah Click",
    rating: 4.5,
    testimony: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitousubui.
          Faucibus facilisi ac vivamus quisque nunc tincidunt donec faucibus.
          Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
          quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas
          ut in.
        </p>
        <p className="mt-2">
          Nulla pellentesque imperdiet scelerisque sed. Elementum quis id
          suspendisse felis, sollicitudin nisl. Suspendisse id fermentum varius
          cursus
        </p>
      </>
    ),
  },
  {
    image: "/assets/testimonials/user-image.png",
    name: "Al-Amanah Click",
    rating: 4.5,
    testimony: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitousubui.
          Faucibus facilisi ac vivamus quisque nunc tincidunt donec faucibus.
          Tempor adipiscing amet ultrices eget nam risus donec. Id velit viverra
          quis faucibus volutpat maecenas auctor. Cursus venenatis sed egestas
          ut in.
        </p>
        <p className="mt-2">
          Nulla pellentesque imperdiet scelerisque sed. Elementum quis id
          suspendisse felis, sollicitudin nisl. Suspendisse id fermentum varius
          cursus
        </p>
      </>
    ),
  },
];
export default Testimony;
