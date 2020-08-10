import React from "react";
import styled from "styled-components";
import validator from "validator";

const StyledSignupForm = styled.div`
  form {
    max-width: 420px;
    margin: 50px auto;
  }
  .MessageInput {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #915ee8;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }
  .MessageInput:focus {
    border: 2px solid #6c29e0;
  }
  [type="submit"] {
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    background: #915ee8;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }
  [type="submit"]:hover {
    background: #783be3;
  }
`;

export const SignupForm = () => {
  return (
    <StyledSignupForm>
      <form>
        <input
          className="MessageInput"
          placeholder="email address"
          type="email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </StyledSignupForm>
  );
};
