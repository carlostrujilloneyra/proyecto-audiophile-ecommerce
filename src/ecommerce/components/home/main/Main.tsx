import { MainHomeStyled } from "../../styles";
import { FirstProduct, SecondProduct, ThirdProduct } from "./components";

export const Main = () => {

  return (
    <>
      <MainHomeStyled className="container">
        <FirstProduct />
        <SecondProduct />
        <ThirdProduct />
      </MainHomeStyled>
    </>
  );
};
