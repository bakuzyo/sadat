// import React, { useState } from "react";
// import { motion } from "framer-motion";

// interface Quote {
//   text: string;
//   author: string;
// }

// const quotes: Quote[] = [
//   { text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi" },
//   { text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
//   { text: "La meilleure façon de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" }
// ];

// const ImageWithQuote: React.FC<{ quote: Quote, imageSrc: string }> = ({ quote, imageSrc }) => {
//   const [showQuote, setShowQuote] = useState(false);

//   const handleMouseEnter = () => setShowQuote(true);
//   const handleMouseLeave = () => setShowQuote(false);

//   return (
//     <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}

//             className='h-screen relative flex overflow-hidden flex-col  md:flex-row 
//         max-w-full justify-evenly mx-auto items-center z-0'>
//     <div style={{ position: "relative", display: "inline-block"}}>
//       <img src={imageSrc} alt="Image with quote" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
//       {showQuote && (
//         <div style={{
//           color:"black",
//           position: "absolute",
//           top: "100%",
//           left: "50%",
//           transform: "translate(-50%, 0)",
//           backgroundColor: "white",
//           padding: "10px",
//           borderRadius: "5px",
//           boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
//         }}>
//           <p>{quote.text}</p>
//           <p style={{ textAlign: "right", fontStyle: "italic" }}>- {quote.author}</p>
//         </div>
//       )}
//     </div>
//     </motion.div>
//   );
// };

// const Test: React.FC = () => {
//   return (
//     <div>
//       {quotes.map((quote, i) => (
//         <ImageWithQuote key={i} quote={quote} imageSrc={`https://source.unsplash.com/400x400/?nature&${i}`} />
//       ))}
//     </div>
//   );
// };

// export default Test;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi" },
  { text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
  { text: "La meilleure façon de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" }
];

const ImageWithQuote: React.FC<{ quote: Quote, imageSrc: string }> = ({ quote, imageSrc }) => {
  const [showQuote, setShowQuote] = useState(false);

  const handleMouseEnter = () => setShowQuote(true);
  const handleMouseLeave = () => setShowQuote(false);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}

    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
max-w-full justify-evenly mx-auto items-center z-0'>
    <div className="relative inline-block red">
      <img src={imageSrc} alt="Image with quote" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
      {showQuote && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md">
          <p className="text-lg font-medium text-black">{quote.text}</p>
          <p className="text-right text-gray-500 italic mt-2">- {quote.author}</p>
        </div>
      )}
    </div>
    </motion.div>
  );
};

const Test: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-8">
        {quotes.map((quote, i) => (
          <ImageWithQuote key={i} quote={quote} imageSrc={`https://source.unsplash.com/400x400/?nature&${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Test;

// import React from "react";

// interface ImageWithCaptionProps {
//   imageSrc: string;
//   caption: string;
// }

// const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ imageSrc, caption }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img src={imageSrc} alt="Image with caption" className="w-full" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{caption}</div>
//       </div>
//     </div>
//   );
// };

// const Test: React.FC = () => {
//   const images = [
//     { src: "https://source.unsplash.com/400x400/?nature&1", caption: "Paysage de montagne" },
//     { src: "https://source.unsplash.com/400x400/?nature&2", caption: "Coucher de soleil sur la plage" },
//     { src: "https://source.unsplash.com/400x400/?nature&3", caption: "Forêt mystique" },
//     { src: "https://source.unsplash.com/400x400/?nature&4", caption: "Champ de blé doré" },
//     { src: "https://source.unsplash.com/400x400/?nature&5", caption: "Cascade enneigée" },
//     { src: "https://source.unsplash.com/400x400/?nature&6", caption: "Vue aérienne de la ville" },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center py-16">
//       <div className="grid grid-cols-3 gap-8">
//         {images.map((image, i) => (
//           <ImageWithCaption key={i} imageSrc={image.src} caption={image.caption} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Test;