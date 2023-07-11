import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../services/store/hooks";
import { ButtonPrimary, ModalStyled } from "../../styles";
import { ProductSummary } from "./ProductSummary";
import { cubicBezier, motion } from "framer-motion";
import { removeToCart } from "../../../services/store/slices/cart";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: cubicBezier(0.6, 0.55, 0.45, 0.55),
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "linear",
      duration: 1.2,
    },
  },
};

export const Modal = () => {

  const navigate = useNavigate();

	const dispatch = useAppDispatch();

  const { products, priceTotal } = useAppSelector((state) => state.cart);
  const firstProduct = products[0];

  const handleNavigateHome = () => {
		navigate("/");
		dispatch(removeToCart());
  };

  return (
    <>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
			>
        <ModalStyled>
          <img
            className="icon-check"
            src="/assets/icons/check.svg"
            width={64}
            height={64}
            alt="icon-check"
          />

          <div className="modal-header">
            <h2>Gracias por su pedido</h2>
            <p>Recibirá una confirmación por correo electrónico en breve.</p>
          </div>

          {/* Info */}
          <div className="container-modal-info-product">
            <div className="container-fp">
              <ProductSummary product={firstProduct} />
              <hr />

              {products.length > 1 && (
                <p className="other-products">
                  Y otros {products.length - 1} productos
                </p>
              )}
            </div>

            <div className="container-sp">
              <h3>Precio Total</h3>
              <h4>s/{priceTotal.toLocaleString("en-US")}</h4>
            </div>
          </div>

          <ButtonPrimary
            style={{ width: "100%", marginTop: 24 }}
            $padding="1.5rem 3.2rem"
            onClick={handleNavigateHome}
          >
            Volver al inicio
          </ButtonPrimary>
        </ModalStyled>
      </motion.div>
    </>
  );
};
