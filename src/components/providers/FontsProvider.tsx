"use client";

import React, { FC } from "react";
import { inter } from "../../packages/configs/config.styles";

/**
 * FontsProvider injects global font styles for semantic HTML elements.
 * Inter is applied to headings; Poppins to body text and form elements.
 */
const FontsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        /* Headings use Inter */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${inter.style.fontFamily}, sans-serif;
        }

        /* Body text and form elements use Inter */
        p,
        div,
        span,
        label,
        input,
        textarea,
        button {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default FontsProvider;
