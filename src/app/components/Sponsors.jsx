import Image from 'next/image';
import { sponsors } from "./sponsorList";

export default function Sponsors() {
  return (
    <section>
      <h2>Meet Our Sponsors!</h2>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {sponsors.map((sponsor, index) => (
            <div key={index} className='text-center flex justify-center flex-column'>
                <Image 
                width={150}
                height={150}
                src={`/sponsors/${sponsor.src}.png`}
                alt={sponsor.name + " Logo"}
                className='rounded-lg shadow-lg'
                />
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
                <p className='font-bold'>{sponsor.contact}</p>
            </div>
            
        ))}
      </div>
    </section>
  );
}
