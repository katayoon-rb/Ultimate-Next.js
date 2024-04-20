/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface ProfileLinkProps {
  imgUrl: string;
  href?: string;
  title: string;
}

const ProfileLink = ({ imgUrl, href, title }: ProfileLinkProps) => {
  return (
    <div className='flex-center gap-1'>
      <img src={imgUrl} alt='icon' width={20} height={20} />

      {href ? (
        <Link
          href={href}
          target='_blank'
          className='paragraph-medium text-accent-blue'
        >
          {title}
        </Link>
      ) : (
        <p className='paragraph-medium text-dark400_light700'>{title}</p>
      )}
    </div>
  );
};
export default ProfileLink;
