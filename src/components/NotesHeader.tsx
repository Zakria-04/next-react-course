"use client";
import Images from "@/assets/img/images";
import Image from "next/image";
import React, { useState } from "react";

function NotesHeader() {
  const [search, setSearch] = useState("");
//   let inputValue = (document.getElementById("search_input") as HTMLInputElement)?.value;
//   console.log("value is ", inputValue);

  return (
    <div>
      <div className="header_container">
        <div>
          <Image src={Images.logo()} alt="logo" className="note_logo" />
        </div>
        <input
          type="search"
          id="search_input"
          onChange={() => {
            setSearch(search);
          }}
        />
      </div>
      <div>
        <p>{search}</p>
      </div>
    </div>
  );
}

export default NotesHeader;
