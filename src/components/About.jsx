import AboutSlide from "./AboutSlide";
import Heading from "./Heading";

function About() {
  return (
    <section className="relative w-full overflow-hidden ">
      <Heading title="About" />
      <div className="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto">
        {/* Slide 1 */}
        <AboutSlide
          heading={"History"}
          abouttext={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum praesentium enim! Illo exercitationem voluptate laborum iste ex! Delectus, temporibus accusamus in harum quas at a velit iure? Necessitatibus adipisci voluptates totam autem esse molestias est obcaecati tempora ipsam quidem?."
          }
        />

        {/* Slide 2 */}
        <AboutSlide
          heading={"Our Vision"}
          abouttext={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum praesentium enim! Illo exercitationem voluptate laborum iste ex! Delectus, temporibus accusamus in harum quas at a velit iure? Necessitatibus adipisci voluptates totam autem esse molestias est obcaecati tempora ipsam quidem?."
          }
        />

        {/* Slide 3 */}

        <AboutSlide
          heading={"The Way We Work"}
          abouttext={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum praesentium enim! Illo exercitationem voluptate laborum iste ex! Delectus, temporibus accusamus in harum quas at a velit iure? Necessitatibus adipisci voluptates totam autem esse molestias est obcaecati tempora ipsam quidem?."
          }
        />
      </div>
    </section>
  );
}

export default About;
