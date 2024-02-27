import React from "react";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        // style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-auto xl:w-[60%] w-[83%] xl:py-16 py-8 xl:px-0 px-5  bg-cover bg-center rounded-xl border border-gray-700 backdrop-blur"
      >
        <div className="text-center fle justify-cente">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
