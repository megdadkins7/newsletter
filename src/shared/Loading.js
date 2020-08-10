import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import styled from "styled-components";

const StyledLoading = styled.div`
  margin-top: 30px;
  margin-bottom: -30px;
  text-align: center;
`;

const Loading = ({ message }) => {
  return (
    <StyledLoading>
      <Spin tip={message} size="large" />
    </StyledLoading>
  );
};

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loading;
