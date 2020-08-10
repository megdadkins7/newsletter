import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./shared/Loading";
import axios from "axios";
import { apiUrl, notify } from "./helpers";

//components
import { SignupForm } from "./components/SignupForm";

const StyledHeader = styled.h1`
  text-align: center;
  margin-bottom: -20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #783be3;
`;

function App() {
  const [state, setState] = useState({
    email: "",
    loading: false,
  });

  const handleLoadingState = (loading) => {
    setState({ loading: loading });
  };

  const handleOnChangeEmail = (email) => {
    setState({ email: email });
  };

  const handleSendEmail = (email) => {
    handleLoadingState(true);
    axios
      .post(`${apiUrl}/subscribe`, {
        email: email,
      })
      .then((res) => {
        if (res.data.success) {
          notify("success", "Subscribed!", res.data.success);
          setState({ email: "" });
          handleLoadingState(false);
        } else {
          notify("error", "Unable to subscribe!", res.data.error);
          handleLoadingState(false);
        }
      })
      .catch((error) => {
        notify("error", "Error. Please try again later.", error.message);
        handleLoadingState(false);
      });
  };
  return (
    <div>
      <StyledHeader>Subscribe to my Newsletter!</StyledHeader>
      {state.loading ? (
        <Loading message="Working on it..." />
      ) : (
        <SignupForm
          handleSendEmail={handleSendEmail}
          handleOnChangeEmail={handleOnChangeEmail}
          email={state.email}
        />
      )}
    </div>
  );
}

export default App;
