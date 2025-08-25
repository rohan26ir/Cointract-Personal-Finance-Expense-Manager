import Accourding from "./components/Accourding";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Testimonal from "./components/Testimonal";


const page = () => {
  return (
    <div>
      <section className="w-full"><Hero></Hero></section>

      <section>
        <Accourding></Accourding>
      </section>

      <section>
        <Testimonal></Testimonal>
      </section>

      <section>
        <FAQs></FAQs>
      </section>

      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default page;