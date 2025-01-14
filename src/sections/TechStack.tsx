import Image from "next/image";

export const TechSection = () => {
  return (
    <>
      <div className="techHead text-center mt-8">
        <h1>Tech Stack</h1>
      </div>
      <div className="tech-stack-container my-6 mx-auto border-2 border-white w-[80%] p-4 flex flex-row flex-wrap gap-4 rounded-sm max-w-[800px]">
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          className="object-contain basis-1/5"
          src="/assets/icons/linkedin.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};
