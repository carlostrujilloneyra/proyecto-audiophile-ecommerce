import { footerTopInfo } from "../../../data/shared/footer-top-shared";
import {
  FooterTopSP,
  FooterTopStyled,
} from "../../styles/footer-top/FooterTopStyled";
import { motion } from "framer-motion";

const item = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0
	}
}

export const FooterTop = () => {
  const {
    image: { bg_mobile, bg_tablet, bg_desktop },
    text,
  } = footerTopInfo;

  return (
    <>
			<motion.div
				initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
        transition={{ duration: 1.8 }}
			>
        <FooterTopStyled className="container">
          <div>
            <picture>
              <source media="(min-width: 1024px)" srcSet={bg_desktop} />
              <source media="(min-width: 600px)" srcSet={bg_tablet} />
              <img src={bg_mobile} alt="first-product-image" />
            </picture>
          </div>

          <FooterTopSP>
            <h2>
              Te traemos el <span>mejor</span> equipo de audio
            </h2>
            <p>{text}</p>
          </FooterTopSP>
        </FooterTopStyled>
      </motion.div>
    </>
  );
};
