import { useEffect, useState } from "react";
import { heroData } from "../../../data/home/hero";
import { ButtonPrimary, HeroStyled, NewProduct } from "../../styles";
import { Link } from "react-router-dom";
import { cubicBezier, motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.75),
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.4,
    },
  },
};

export const Hero = () => {
  const {
    id,
    subtitle,
    title,
    description,
    image: { bg_mobile, bg_tablet, bg_desktop },
  } = heroData;

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const bgImage =
    windowWidth >= 1024
      ? bg_desktop
      : windowWidth >= 600
      ? bg_tablet
      : bg_mobile;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <HeroStyled
          style={{ backgroundImage: `url(${bgImage})` }}
          className="container"
        >
					<motion.div
						initial={{ x: -400 }}
						animate={{ x: 0 }}
						exit={{ x: 0 }}
						transition={{ ease: 'easeInOut', duration: 1.8 }}
					>
            <NewProduct $color="#8c8c8c">{subtitle}</NewProduct>
            <h1>{title}</h1>
            <p>{description}</p>
            <ButtonPrimary $padding="0">
              <Link
                to={`/product/${id}`}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Ver producto
              </Link>
            </ButtonPrimary>
          </motion.div>
        </HeroStyled>
      </motion.div>
    </>
  );
};
