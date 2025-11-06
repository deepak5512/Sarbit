import Image from "next/image";

export const Logo = () => {
  return <Image src="/logo.png" alt="Logo" width={100} height={45} priority />;
};

export const LogoIcon = () => {
  return <Image src="/logo-icon.png" alt="Logo" width={40} height={40} />;
};
