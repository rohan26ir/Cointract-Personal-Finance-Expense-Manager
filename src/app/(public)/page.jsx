'use client';

import Accordion from "./components/Accordion";
import Cursor from "./components/Cursor";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Testimonal from "./components/Testimonal";


const page = () => {
  return (
    <div>
      <section className="w-full">
        <Hero></Hero>
        </section>

      
      <section>
        <Cursor></Cursor>
      </section>

      <section>
        <Testimonal></Testimonal>
      </section>

      <section>
        <Accordion></Accordion>
      </section>

      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default page;