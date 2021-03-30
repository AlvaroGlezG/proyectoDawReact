// ██╗░░░░░░█████╗░░██████╗░██╗███╗░░██╗
// ██║░░░░░██╔══██╗██╔════╝░██║████╗░██║
// ██║░░░░░██║░░██║██║░░██╗░██║██╔██╗██║
// ██║░░░░░██║░░██║██║░░╚██╗██║██║╚████║
// ███████╗╚█████╔╝╚██████╔╝██║██║░╚███║
// ╚══════╝░╚════╝░░╚═════╝░╚═╝╚═╝░░╚══╝

import { Link } from 'wouter';

import "./style.css";

export default function LogIn() {
  import("./script");
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300, 400, 500"
        rel="stylesheet"
      />
      <section className="user">
        <Link to="/" >
          <img src="https://img.icons8.com/metro/52/ffffff/back.png" alt="<" className="backArrow"/>
        </Link>
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                ¿Aún no tienes cuenta?
              </h2>
              <p className="user_unregistered-text">
                Si te registras ahora podrás participar en las opiniones
                de las películas que salgan.
              </p>
              <button id="signup-button" className="user_unregistered-signup">
                Registrate
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">¿Ya tienes una cuenta?</h2>
              <p className="user_registered-text">
                Entra ahora en tu cuenta y podrás opinar de la película actual en curso.
              </p>
              <button className="user_registered-login" id="login-button">
                Entrar
              </button>
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Entrar</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">
                    ¿No recuerdas la contraseña?
                  </button>
                  <input
                    type="submit"
                    value="Entrar"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Registrar</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Registrar"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
