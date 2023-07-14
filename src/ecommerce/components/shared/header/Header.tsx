import { useEffect, useState } from "react";
import { CartContainer } from "../../cart/CartContainer";
import { HeaderContainer } from "../../styles/header";
import { Logo, Nav, QuantityProducts } from "./components";
import { useLocation } from "react-router-dom";
import { cubicBezier, motion } from "framer-motion";

export const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [sticky, setSticky] = useState(false);

  const handleSetSticky = () => {
    window.scrollY > 170 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", handleSetSticky);

  const location = useLocation();
  const src = `/assets/icons/${
    openNav ? "icon-close.svg" : "icon-hamburger.svg"
  }`;

  const pathName = location.pathname;

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    setShowCart(false);
  }, [location]);

  const handleOpenNav = () => {
    setTimeout(() => {
      setOpenNav(!openNav);
    }, 100);
  };

  // Cerrar el menú responsivo al cambiar de pestaña:
  useEffect(() => {
    setOpenNav(false);
  }, [pathName]);

  return (
    <>
      <HeaderContainer className={`container ${sticky ? "sticky" : ""}`}>
        <div className="container-hamburguer">
          <img src={src} alt="icon-hamburguer" onClick={handleOpenNav} />
        </div>

        <Logo />

        {/* Barra de navegación */}
        <Nav openNav={openNav} classDifferent={true} />

        {/* Carrito de compras */}
        <div style={{ position: "relative" }}>
          <img
            src="/assets/icons/icon-cart.svg"
            alt="image-cart"
            onClick={handleShowCart}
          />

          <QuantityProducts />
        </div>

        {showCart && (
          <CartContainer showCart={showCart} setShowCart={setShowCart} />
        )}
      </HeaderContainer>
    </>
  );
};
