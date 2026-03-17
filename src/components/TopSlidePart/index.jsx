import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TopSlide = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollStart = 0;

    const slideInterval = setInterval(() => {
      if (!slider) return;

      scrollStart += 1;
      slider.scrollLeft += 1;

      if (
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth
      ) {
        slider.scrollLeft = 0;
        scrollStart = 0;
      }
    }, 30);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-white my-6">
      <div
        ref={sliderRef}
        className="
          flex overflow-x-auto scrollbar-hide
          gap-7 px-8 py-4
        "
      >
        <Category to="/mobile" img="/images/mobile.jpg" title="Mobiles & Tablets" />
        <Category to="/fashion" img="/images/fasion.jpg" title="Fashion" />
        <Category to="/electronics" img="/images/electronices.jpeg" title="Electronics" />
        <Category to="/appliances" img="/images/tv&applince.jpg" title="TVs & Appliances" />
        <Category to="/furniture" img="/images/furniture.jpg" title="Furnitures" />
        <Category to="/jewellery" img="/images/beauty.jpg" title="Beauty" />
        <Category to="/toys" img="/images/toys.jpg" title="Toys & School Supplies" />
        <Category to="/grocery" img="/images/grocery.png" title="Grocery" />
        <Category to="/bags" img="/images/bag.png" title="Bags" />

        <Category to="/mobile" img="/images/mobile.jpg" title="Mobiles & Tablets" />
        <Category to="/fashion" img="/images/fasion.jpg" title="Fashion" />
        <Category to="/electronics" img="/images/electronices.jpeg" title="Electronics" />
        <Category to="/appliances" img="/images/tv&applince.jpg" title="TVs & Appliances" />
        <Category to="/furniture" img="/images/furniture.jpg" title="Furnitures" />
        <Category to="/jewellery" img="/images/beauty.jpg" title="Beauty" />
        <Category to="/toys" img="/images/toys.jpg" title="Toys & School Supplies" />
        <Category to="/grocery" img="/images/grocery.png" title="Grocery" />
      </div>
    </div>
  );
};

const Category = ({ to, img, title }) => (
  <Link to={to} className="min-w-[140px]">
    <div className="flex flex-col items-center cursor-pointer">
      <img src={img} alt={title} className="h-24 w-24 object-contain" />
      <p className="mt-2 text-center text-md lg:text-lg font-semibold
          whitespace-nowrap">{title}</p>
    </div>
  </Link>
);

export default TopSlide;
