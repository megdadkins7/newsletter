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
  return (
    <div>
      <StyledHeader>Subscribe to my Newsletter!</StyledHeader>
      {state.loading ? <Loading message="Working on it..." /> : <SignupForm />}
    </div>
  );
}

export default App;
