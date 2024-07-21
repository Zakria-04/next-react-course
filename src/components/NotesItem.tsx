"use client";
import { useState } from "react";
import NotesHeader from "./NotesHeader";

function NotesItem() {
  return (
    <div>
      <NotesHeader />
      <div className="notes_input">
        <textarea id="notes_textarea" cols={50} placeholder="ملاحظات"></textarea>
      </div>
    </div>
  );
}

export default NotesItem;
