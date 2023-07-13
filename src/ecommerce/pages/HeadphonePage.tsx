import { motion, cubicBezier } from 'framer-motion';
import { CategoriesShared, FooterTop, Product } from "../components/shared";
import { HeroCategory } from "../components/styles";
import { getProductsByCategory } from "../utils";

export const HeadphonePage = () => {
  const categoryValue = "headphones";
  const category = "Audífonos";

  // Arreglo con los audífonos
  const products = getProductsByCategory(categoryValue);

  return (
    <>
			<motion.div
				initial={{ opacity: 0}}
				animate={{ opacity: 1}}
				transition={{
					duration: 1.3,
					cubicBezier: [0.6, 0.01, -0.05, 0.45]
				}}
			>
        <HeroCategory className="container">
          <h2>{category}</h2>
        </HeroCategory>
      </motion.div>

      <main style={{ marginBottom: 24 }}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </main>

      <CategoriesShared />
      <FooterTop />
    </>
  );
};
