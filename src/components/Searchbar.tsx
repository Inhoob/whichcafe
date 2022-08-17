import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  background: #495057;
  width: 300px;
`;
const Input = styled.input`
  background: #495057;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #abd5bd;
  }
`;
type SearchbarProps = {
  keywordChange: (e: any) => void;
  submitKeyword: (e: any) => void;
};
// function onClick=()=>{

// }
function Searchbar(
  { keywordChange }: SearchbarProps,
  { submitKeyword }: SearchbarProps
) {
  // 장소 검색 객체를 생성합니다

  return (
    <Form onSubmit={submitKeyword}>
      <Input
        type="text"
        placeholder="원하는 장소 입력"
        onChange={keywordChange}
      ></Input>

      <Button type="submit"></Button>
    </Form>
  );
}
export default Searchbar;
