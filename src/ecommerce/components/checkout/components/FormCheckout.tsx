import { useForm } from "react-hook-form";
import { CheckoutStyledGrid, FormStyled } from "../../styles";
import { ErrorMessage } from "./ErrorMessage";
import { Summary } from "./Summary";
import { useState } from "react";
import { Modal } from "./Modal";

export const FormCheckout = () => {
  const [selectedOption, setSelectedOption] = useState<string>("card");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data)
    setTimeout(() => {
      reset();
    }, 1500);
  };

  const handleClickRadio = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(target.value);
  };

  return (
    <>
      <CheckoutStyledGrid className="container">
        <FormStyled>
          <h2>Detalle de compra</h2>
          <p style={{ color: "#7d7d7d", marginBottom: 28 }}>
            Por favor, completa todos los campos para procesar su compra.
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
                    <ErrorMessage message="El campo es requerido." />
                  )}
                  {errors.name?.type === "minLength" && (
                    <ErrorMessage message="Ingrese sus nombres y apellidos completos." />
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
                      <ErrorMessage message="Ingrese un correo electrónico válido." />
                    ))}
                </div>
              </div>

              <div className="container-input">
                <label htmlFor="phone">Celular</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                    maxLength: 9,
                    minLength: 9
                  })}
                  id="phone"
                  autoComplete="off"
                  placeholder="941789541"
                />
                {errors.phone?.type === "required" && (
                  <ErrorMessage message="Ingrese un número de celular." />
                )}
                  {errors.phone?.type === 'minLength' && (
                  <ErrorMessage message="Ingrese un número de celular con 9 dígitos." />
                )}
                  {errors.phone?.type === 'maxLength' && (
                  <ErrorMessage message="Máximo son 9 dígitos." />
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
                  <ErrorMessage message="Campo requerido, ingrese su dirección." />
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
                    <ErrorMessage message="Campo requerido." />
                  )}
                  {errors.department?.type === 'minLength' && (
                    <ErrorMessage message="El departamento tiene por lo menos 4 letras." />
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
                      {...register("card", {
                      })}
                      value="card"
                      checked={selectedOption === "card"}
                      onChange={handleClickRadio}
                    />
                    Tarjeta de débito o crédito
                  </div>
                </div>

                <div className="container-input">
                  <label style={{ opacity: 0 }}>Otra opción</label>
                  <div className="container-input-radio">
                    <input
                      type="radio"
                      {...register("home", {
                      })}
                      value="home"
                      checked={selectedOption === "home"}
                      onChange={handleClickRadio}
                    />
                    Pago contraentrega
                  </div>
                </div>
              </div>

              {selectedOption === "card" ? (
                <div className="container-grid-inputs">
                  <div className="container-input">
                    <label htmlFor="numberCreditCard">Número de tarjeta</label>
                    <input
                      type="text"
                      {...register("numberCreditCard", {
                        required: true,
                        minLength: 16,
                      })}
                      autoComplete="off"
                      id="numberCreditCard"
                      placeholder="8805 1478 5511 1470"
                    />
                    {errors.numberCreditCard?.type === "required" && (
                      <ErrorMessage message="Campo requerido, ingrese su número de tarjeta." />
                    )}
                    {errors.numberCreditCard?.type === "minLength" && (
                      <ErrorMessage message="Su tarjeta debe contar con 16 dígitos." />
                    )}
                  </div>

                  <div className="container-input">
                    <label htmlFor="district">Pin</label>
                    <input
                      type="text"
                      {...register("pinCard", {
                        required: true,
                        maxLength: 3,
                      })}
                      autoComplete="off"
                      id="pinCard"
                      placeholder="841"
                    />
                    {errors.pinCard?.type === "required" && (
                      <ErrorMessage message="Campo requerido." />
                    )}
                    {errors.pinCard?.type === 'maxLength' && (
                      <ErrorMessage message="Máximo 3 dígitos para el pin." />
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: 8 }}>
                  <p style={{ color: "#7d7d7d", lineHeight: 1.4 }}>
                    La opción Pago contra entrega le permite realizar el pago
                    del producto al recibirlo en su casa. Por favor, asegúrese
                    de que su dirección sea la correcta para que su pedido no
                    sea cancelado.
                  </p>
                </div>
              )}
            </div>
          </form>
        </FormStyled>

        <div className="summary-container">
          <div className="summary-content">
            <h2>Resumen</h2>

            <Summary />

            <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
              <button onClick={handleSubmit(onSubmit)}>
                Continuar y pagar
              </button>
              
              <div style={{textAlign: 'center', marginTop: 16}}>
                {
                  Object.keys(errors).length > 1 && <ErrorMessage message='Complete correctamente todos los campos del formulario para continuar.' />
                }
              </div>

            </div>
          </div>
        </div>

        {isValid && <Modal />}

      </CheckoutStyledGrid>

    </>
  );
};
