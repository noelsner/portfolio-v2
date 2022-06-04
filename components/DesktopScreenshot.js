import Image from "next/image";

const DesktopScreenshot = ({ imgUrl, alt, priority, className, small = false }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full h-auto relative`}>
        <div className="relative object-cover w-full h-auto drop-shadow-3xl">
          <Image
            src={imgUrl}
            alt={alt}
            layout="responsive"
            height={1024}
            width={1440}
            style={{ borderRadius: "20px" }}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopScreenshot;
