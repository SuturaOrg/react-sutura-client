import React, { Component } from "react";
import { Link } from "react-router-dom";

//Import Images
import logo from "../../../assets/images/logo-light.png";

class EmailPasswordReset extends Component {
  componentDidMount() {
    document.body.style.fontFamily = "Nunito, sans-serif";
    document.body.style.fontSize = "15px";
    document.body.style.fontWeight = "400";
    document.body.style.color = "#161c2d";
  }

  componentWillUnmount() {
    document.body.style.fontFamily = "";
    document.body.style.fontSize = "";
    document.body.style.fontWeight = "";
    document.body.style.color = "";
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "50px" }}>
          <table
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              maxWidth: "600px",
              border: "none",
              margin: "0 auto",
              borderRadius: "6px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 0 3px rgba(60, 72, 88, 0.15)",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#2f55d4",
                  padding: "3px 0",
                  lineHeight: "68px",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                <th scope="col">
                  <img src={logo} height="24" alt="Sutura" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    padding: "48px 24px 0",
                    color: "#161c2d",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Salut, userName
                      </td>
              </tr>
              <tr>
                <td
                  style={{ padding: "15px 24px 15px", color: " #8492a6" }}
                >
                  Pour réinitialiser votre mot de passe, veuillez cliquer sur le bouton ci-dessous :
                      </td>
              </tr>
              <tr>
                <td style={{ padding: "15px 24px", color: "#8492a6" }}>
                  <Link
                    to="#"
                    className="btn-primary"
                    style={{
                      padding: "8px 20px",
                      outline: "none",
                      textDecoration: "none",
                      fontSize: "16px",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s",
                      fontWeight: "600",
                      borderRadius: "6px",
                    }}
                  >
                    Réinitialiser votre mot de passe
                        </Link>
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px 24px 0", color: "#8492a6" }}>
                  Ce lien sera actif pendant 5 minutes à partir du moment où
                  cet e-mail a été envoyé. Si vous n'avez pas demandé la réinitialisation
                  votre mot de passe, veuillez ignorer cet email et votre compte
                  ne sera pas affecté.
                </td>
              </tr>

              <tr>
                <td
                  style={{ padding: "15px 24px 15px", color: "#8492a6" }}
                >
                  Sutura <br /> L'équipe informatique
                      </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "16px 8px",
                    color: "#8492a6",
                    backgroundColor: "#f8f9fc",
                    textAlign: "center",
                  }}
                >
                  © 2021 Sutura.
                      </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default EmailPasswordReset;