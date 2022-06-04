import Image from "next/image";

const MobileScreenshot = ({ imgUrl, alt, priority, className, small = false }) => {
  return (
    <div className={`w-full ${small ? "max-w-[250px]" : "max-w-[367px]"} ${className}`}>
      <div className={`w-full h-auto relative`}>
        <div className="relative object-cover w-full h-auto">
          <Image
            src={imgUrl}
            alt={alt}
            layout="responsive"
            height={1229}
            width={620}
            style={{ borderRadius: small ? "30px" : "60px" }}
            priority={priority}
          />
        </div>
        <div
          className={`absolute inset-0 w-full h-full border-primary drop-shadow-3xl ${
            small ? "rounded-[30px] border-[10px]" : "rounded-[60px] border-[0.75rem]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MobileScreenshot;
