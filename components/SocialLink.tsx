import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SocialLinksProps = {
  url: string,
  src: any
}
const SocialLinks = ({ src, url }: SocialLinksProps) => {
  return (
    <>
      <Link href={url} passHref>
        <a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 cursor-pointer">
          <Image src={src} width={35} height={35} alt="social icon logo" />
        </a>
      </Link>
    </>
  );
};

export default SocialLinks;
