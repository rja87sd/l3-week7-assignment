// Sponsors.jsx
// Importing the Image component from Next.js for optimized image handling.
import Image from "next/image";
// Importing the list of sponsors from the sponsorList.js file.
import { sponsors } from "./sponsorList";

// Defining the Sponsors functional component.
export default function Sponsors() {
  return (
    // Wrapping the component content inside a <section> tag.
    <section>
      {/* Header for the sponsors section. */}
      <h2>Meet Our Sponsors!</h2>
      {/* Container for sponsor cards using flexbox for responsive layout. */}
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {/* Mapping through each sponsor in the sponsors array to generate a */}
        card.
        {sponsors.map((sponsor, index) => (
          // Each card is given a unique key prop for React's rendering efficiency.
          <div
            key={index}
            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg 
overflow-hidden flex flex-col justify-between items-center mx-auto font-[sans-serif]"
          >
            {/* Displaying the sponsor's logo using the Image component. */}
            <Image
              width={150}
              height={150}
              src={`/sponsors/${sponsor.src}.png`}
              alt={sponsor.name + " Logo"}
              className="rounded-lg shadow-lg"
            />
            {/* Displaying the sponsor's name. */}
            <h3>{sponsor.name}</h3>
            {/* Description of the sponsor. */}
            <p>{sponsor.description}</p>
            {/* Contact information for the sponsor, styled in bold. */}
            <p className="font-bold">{sponsor.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
