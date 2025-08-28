'use client';

import Accordion from "./components/Accordion";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Testimonal from "./components/Testimonal";
import UserPlans from "./components/UserPlans";


const page = () => {
  return (
    <div>
      <section className="w-full">
        <Hero></Hero>
        </section>

      
      <section>
        <Cursor></Cursor>
      </section>

      <div>
        <UserPlans></UserPlans>
      </div>

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