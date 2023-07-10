import { useAppSelector } from "../../../services/store/hooks";
import { SummaryStyled } from "../../styles";
import { ProductSummary } from "./ProductSummary";

export const Summary = () => {
  const { products, priceTotal } = useAppSelector((state) => state.cart);

  return (
    <>
      <SummaryStyled>
        {products.map((product) => {
          return <ProductSummary key={product.id} product={product} />;
        })}

        <div className="footer-cart-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 8
            }}
          >
            <p>Sub Total</p>
            <h3>s/{priceTotal}</h3>
					</div>

					<div
            style={{
              display: "flex",
              justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 24
            }}
          >
            <p>Envío</p>
            <h3>s/25</h3>
					</div>
					
					<div
            style={{
              display: "flex",
              justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 8
            }}
          >
            <p>Precio total</p>
						<h3 style={{color: '#D87D4A'}}>s/{priceTotal + 25}</h3>
          </div>

        </div>
				
      </SummaryStyled>
    </>
  );
};
