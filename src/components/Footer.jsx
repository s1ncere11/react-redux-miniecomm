import { ButtonContactMe } from "./ButtonContactMe";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-16 px-16 py-8 border-t bg-gradient-to-r from-sky-700 via-sky-400 to-sky-700">
      <p className="text-xl font-bold text-white">s1ncere Copyright 2025.</p>
      <ButtonContactMe>Contact Me</ButtonContactMe>
    </footer>
  );
};
