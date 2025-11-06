import Image from "next/image";

export const Logo = () => {
  return (
    <Image src="/logo-full.png" alt="Logo" width={70} height={45} priority />
  );
};

export const LogoIcon = () => {
  return <Image src="/logo-icon.png" alt="Logo" width={40} height={40} />;
};
