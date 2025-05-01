import { BackgroundVideoProps } from "@/types";

export default function BackgroundVideo({ source }: BackgroundVideoProps) {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover h-full w-full z-10"
      >
        <source src={source} />
      </video>
    </div>
  );
}
