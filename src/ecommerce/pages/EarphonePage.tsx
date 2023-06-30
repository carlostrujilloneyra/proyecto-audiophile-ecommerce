import { CategoriesShared, FooterTop, Product } from "../components/shared";
import { HeroCategory } from "../components/styles";
import { getProductsByCategory } from "../utils";

export const EarphonePage = () => {

  const categoryValue = "earphones";
	const category = "Auriculares";
	
	// Arreglo de auriculares
	const products = getProductsByCategory(categoryValue);

  return (
    <>
      <HeroCategory className="container">
        <h2>{category}</h2>
      </HeroCategory>

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
