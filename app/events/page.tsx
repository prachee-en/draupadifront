import React from "react";
import Link from "next/link";

function speakerlist() {
  return (
    <div className="h-full w-screen flex items-center gap-10 flex-col p-2 bg-base-200">
      <h1 className="text-3xl ml-6 w-full text-black text-left font-semibold">
        Upcoming Events
      </h1>
      <p className="text-xl ml-6 w-full text-gray-600 text-left ">
        <span style={{ color: "#8B0000" }}>Register for Upcoming events.</span>
        <br></br>
        <br></br> Even in 2024, women leaders are woefully underrepresented in
        public forums. We asked decision-makers a simple question, why do we not
        see enough women on stage? Basis the insights, we went back to home to
        create
        <span style={{ color: "#8B0000" }}>
          an easy-to-access database of women experts across multiple
          industries, available for speaking opportunities.
        </span>
        <br></br> <br></br>
        <Link
          href={"/events/new"}
          className="font-bold italic link link-primary"
        >
          Organize an event!
        </Link>
      </p>
      <div className="h-full w-3xl flex-wrap flex justify-center items-center gap-10 flex-row">
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
      </div>
    </div>
  );

  function Cardss() {
    return (
      <div>
        <div className="card w-[400px] h-[200px] card-side bg-base-100 shadow-xl ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Women Conference</h2>
            <p>An event specially for women in tech.</p>
            <div className="card-actions justify-end">
              <Link href={""} className="btn btn-sm btn-primary">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default speakerlist;
