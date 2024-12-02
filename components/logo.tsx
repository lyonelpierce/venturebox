import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h2 className={`capitalized text-2xl font-black uppercase museomoderno`}>
        Venture Vox
      </h2>
    </Link>
  );
};

export default Logo;
