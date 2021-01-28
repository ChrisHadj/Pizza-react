import React from "react";
import styled from "styled-components";

function Menu() {
  return (
    <div>
      <h1>hello from menu</h1>
      <Text onClick={() => window.location.replace("/")}>go back</Text>
    </div>
  );
}

export default Menu;

const Text = styled.p`
    cursor: pointer;
`;
