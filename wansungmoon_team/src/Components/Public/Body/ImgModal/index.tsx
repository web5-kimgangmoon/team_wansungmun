import { useState } from "react";
import ReactModal from "react-modal";

interface IProps {
  src: string;
  className?: string;
  imgClassName?: string;
  alt?: string;
}

const Img = ({ src, alt, className, imgClassName }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className={className ? className : "sm:w-12 sm:min-w-12 w-24 min-w-24"}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          className={imgClassName ? imgClassName : "w-full"}
          alt={alt ? alt : "사진"}
        />
      </div>
      <ReactModal
        isOpen={isOpen}
        style={{ overlay: { padding: "2rem" } }}
        contentElement={() => (
          <div className="w-full h-full flex items-center">
            <img src={src} className="w-full" alt="사진" />
          </div>
        )}
        onRequestClose={() => setIsOpen(false)}
      ></ReactModal>
    </div>
  );
};

export default Img;
