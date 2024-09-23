export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-[var(--black-color)] text-[var(--white-color)] md:py-10 text-center">
        <p className="mb-0">
          &copy; {currentYear} Tech Dictionary by{" "}
          <a
            href="https://github.com/0xOneBeing/tech-dictionary.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--secondary-color] underline"
          >
            0xOneBeing
          </a>
        </p>
      </div>
    </>
  );
}
