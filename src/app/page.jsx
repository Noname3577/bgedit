"use client";

import ImprovedEditComponent from "./component/EditComponent/EditComponent";
import "./bg_a.css";

export default function Home() {
  return (
    <div className="by_a">
      <div className="by_b">
        <span className="text_a">Freely change the background color</span>
        <ImprovedEditComponent />
      </div>
    </div>
  );
}
