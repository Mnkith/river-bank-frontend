import React from "react";

export default function Home() {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-8 text-2xl">
    {/* // <div style={{ backgroundImage: "url(/home-background.jpg)" }}> */}
    {document.body.style.backgroundImage = "url(/home-background.jpg)"}
    </div>
  )
}