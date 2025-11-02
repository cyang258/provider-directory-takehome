import React, { useRef, useEffect, useState } from "react";

export default function ScaledImage({ src, alt, scaleSize }) {
  const imgRef = useRef();
  const [scale, setScale] = useState(scaleSize || 1);

  useEffect(() => {
    const img = imgRef.current;

    if (!img) return;

    const updateScale = () => {
      const naturalWidth = img.naturalWidth;
      const currentWidth = img.clientWidth;

      if (!naturalWidth) return;

      const ratio = currentWidth / naturalWidth;
      const clamped = Math.min(ratio, 1.5);

      setScale(clamped);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
      }}
      className="w-full h-full md:w-auto md:h-auto max-w-[495px] object-contain sm:object-cover object-top sm:h-auto sm:max-h-[45vh] max-h-[45vh] md:min-w-[289px] md:min-h-[289px]"
    />
  );
}
