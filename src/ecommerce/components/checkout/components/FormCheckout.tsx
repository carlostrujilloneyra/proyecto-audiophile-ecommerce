import { useForm } from "react-hook-form";
import { CheckoutStyledGrid, FormStyled } from "../../styles";
import { ErrorMessage } from "./ErrorMessage";
import { Summary } from "./Summary";
import { Modal } from "./Modal";

export const FormCheckout = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm();

  const handlePayAllProducts = () => {
    // Al dar clic debería mostrar el modal
  };

  return (
    <>
      <CheckoutStyledGrid className="container">
        <FormStyled>
          <h2>Detalle de compra</h2>
          <p style={{ color: "#7d7d7d", marginBottom: 28 }}>
            Por favor, completar todos los campos para procesar su compra.
          </p>

          <form autoComplete="off">
            <div style={{ marginBottom: 24 }}>
              <h3>Detalles del pago</h3>
              <div className="container-grid-inputs">
                <div className="container-input">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                      minLength: 10,
                    })}
                    autoComplete="off"
                    id="name"
                    placeholder="Carlos"
                  />
                  {/* Para mostrar error: */}
                  {errors.name?.type === "required" && (
                    <ErrorMessage message="El campo es requerido" />
                  )}
                </div>

                <div className="container-input">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    autoComplete="off"
                    type="email"
                    id="email"
                    placeholder="augusto21_20@gmail.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    })}
                  />
                  {errors.email?.type === "pattern" ||
                    (errors.email?.type === "required" && (
                      <ErrorMessage message="Ingrese un correo electrónico válido" />
                    ))}
                </div>
              </div>

              <div className="container-input">
                <label htmlFor="phone">Celular</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                    minLength: 9,
                  })}
                  id="phone"
                  autoComplete="off"
                  placeholder="941789541"
                />
                {errors.phone?.type === "required" && (
                  <ErrorMessage message="Ingrese un número de celular" />
                )}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <h3>Datos de envío</h3>
              <div className="container-input">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  {...register("address", {
                    required: true,
                    minLength: 4,
                  })}
                  autoComplete="off"
                  id="address"
                  placeholder="Mz a lote 12 urb"
                />
                {errors.address?.type === "required" && (
                  <ErrorMessage message="Campo requerido" />
                )}
              </div>

              <div className="container-grid-inputs">
                <div className="container-input">
                  <label htmlFor="department">Departamento</label>
                  <input
                    type="text"
                    {...register("department", {
                      required: true,
                      minLength: 4,
                    })}
                    autoComplete="off"
                    id="department"
                    placeholder="Lima"
                  />
                  {errors.department?.type === "required" && (
                    <ErrorMessage message="Campo requerido" />
                  )}
                </div>

                <div className="container-input">
                  <label htmlFor="district">Distrito</label>
                  <input
                    type="text"
                    {...register("district", {
                      required: true,
                      minLength: 4,
                    })}
                    autoComplete="off"
                    id="district"
                    placeholder="San Miguel"
                  />
                  {errors.district?.type === "required" && (
                    <ErrorMessage message="Campo requerido" />
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <h3>Detalles del pago</h3>
              <div className="container-grid-inputs">
                <div className="container-input">
                  <label>Métodos de pago</label>
                  <div className="container-input-radio">
                    <input
                      type="radio"
                      {...register("payment", {
                        required: true,
                      })}
                      value="card"
                    />
                    Tarjeta de débito o crédito
                  </div>
                </div>

                <div className="container-input">
                  <label style={{ opacity: 0 }}>Otra opción</label>
                  <div className="container-input-radio">
                    <input
                      type="radio"
                      {...register("payment", {
                        required: true,
                      })}
                      value="home"
                    />
                    Pago contraentrega
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormStyled>

        <div className="summary-container">
          <div className="summary-content">
            <h2>Resumen</h2>

            <Summary />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className={`${isValid ? "" : "disabled"}`}
                onClick={handlePayAllProducts}
                disabled={true}
              >
                Continuar y pagar
              </button>
            </div>
          </div>
        </div>
      </CheckoutStyledGrid>

      {/* {isValid && <Modal />} */}

    </>
  );
};
