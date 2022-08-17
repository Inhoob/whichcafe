import React, { useState, useRef } from "react";

import Map from "../components/Map";
import Searchbar from "../components/Searchbar";

export interface propsType {
  searchKeyword: string;
}

const LandingPage = (): JSX.Element => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [value, setValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchedList, setSearchedList] = useState([
    {
      id: 1,
      place: "나주곰탕",
    },
    {
      id: 2,
      place: "고깃집",
    },
  ]);
  const nextId = useRef(3);
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const submitKeyword = (e: { preventDefault: () => void }) => {
    console.log(keyword);
    const searched = {
      id: nextId.current,
      place: keyword,
    };
    setSearchedList([...searchedList, searched]);
    console.log(searchedList);
    e.preventDefault();
  };

  return (
    <div>
      <Searchbar keywordChange={keywordChange} submitKeyword={submitKeyword} />
      {/* 제출한 검색어 넘기기 */}
      <Map searchKeyword={value} />
    </div>
  );
};

export default LandingPage;
