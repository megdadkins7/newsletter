import React from "react";
import styled from "styled-components";

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
  return (
    <div>
      <StyledHeader>Subscribe to my Newsletter!</StyledHeader>
      <SignupForm />
    </div>
  );
}

export default App;
