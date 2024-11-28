import Image from "next/image";
import "./Post.css";
import Link from "next/link";

type PostProps = {
  title: string;
  image: string;
  alt: string;
  preview: string;
  author: string;
  time: string;
  link: string;
};

export default function Post({
  title,
  image,
  alt,
  preview,
  author,
  time,
  link,
}: PostProps) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="content">
        <div className="preview">
          <Image src={image} alt={alt} width={512} height={288} />
          <p>{preview}</p>
        </div>
        <div className="call">
          <div className="meta">
            <div>
              <Image
                src="/assets/img/svg/user.svg"
                alt="User Icon"
                width={25}
                height={25}
              />
              <p>{author}</p>
            </div>
            <div>
              <Image
                src="/assets/img/svg/clock.svg"
                alt="Time Icon"
                width={25}
                height={25}
              />
              <p>{time}</p>
            </div>
          </div>
          <Link href={link}>Read post</Link>
        </div>
      </div>
    </div>
  );
}
