import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      <span className="text-orange-400 font-bold uppercase text-xl  ">
        <span className="font-lato text-blue-500">Road</span>{" "}
        <span className="font-archivo  tracking-wide">Safe</span>
      </span>
    </div>
  );
}
