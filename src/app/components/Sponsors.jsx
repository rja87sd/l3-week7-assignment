// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Importing the Image component from Next.js for optimized image handling.
import Image from "next/image";
// Importing the list of sponsors from the sponsorList.js file.
import { sponsors } from "./sponsorList";

// Defining the Sponsors functional component.
export default function Sponsors() {
  return (
    // Wrapping the component content inside a <section> tag with dark theme styling.
    <section className="bg-gray-800 text-white p-5">
      {/* Header for the sponsors section. */}
      <h2 className="text-center text-3xl font-bold mb-5">
        Meet Our Sponsors!
      </h2>
      {/* Container for sponsor cards using flexbox for responsive layout. */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Mapping through each sponsor in the sponsors array to generate a card with dark theme styling. */}

        {sponsors.map((sponsor, index) => (
          // Each card is given a unique key prop for React's rendering efficiency.
          <div
            key={index}
            className="bg-gray-700 shadow-lg w-full max-w-sm rounded-lg 
overflow-hidden flex flex-col justify-between items-center mx-auto font-sans p-4 text-center"
          >
            {/* Displaying the sponsor's logo using the Image component. */}
            <Image
              width={150}
              height={150}
              src={`/sponsors/${sponsor.src}.png`}
              alt={sponsor.name + " Logo"}
              className="rounded-lg"
            />
            {/* Displaying the sponsor's name. */}
            <h3 className="text-xl font-semibold mt-2">{sponsor.name}</h3>
            {/* Description of the sponsor. */}
            <p className="text-gray-300 my-1">{sponsor.description}</p>
            {/* Contact information for the sponsor, styled in bold. */}
            <p className="font-bold text-gray-400">{sponsor.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
