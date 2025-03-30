import { useEffect, useState } from "react";

const CustomAlert = ({ show, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true); // Show popup

      const fadeOutTimeout = setTimeout(() => setVisible(false), 1700); // Start fade at 1.7s
      const closeTimeout = setTimeout(onClose, 2000); // Fully remove at 2s

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(closeTimeout);
      };
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed z-10 top-10 left-1/2 transform -translate-x-1/2 w-80 h-[40px] 
                  bg-purple-500 shadow-xl rounded-lg flex justify-center items-center 
                  text-white text-sm transition-all duration-300 ease-out 
                  text-[12px]
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
    >
      Content has been copied to your clipboard.
    </div>
  );
};

export default CustomAlert;
