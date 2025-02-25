import Image from "next/image";
import "./style.css";

import LoaderIcon from "@/assests/icons/loader.svg";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: number;
  color?: "white" | "black";
  className?: string;
}

function Spinner({ size = 24, color = "white", className }: SpinnerProps) {
  return (
    <span
      className={cn("wrapper", className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={LoaderIcon}
        alt="Loader"
        style={{ filter: color === "white" ? "invert(100%)" : "invert(0%)" }}
      />
    </span>
  );
}

export default Spinner;
