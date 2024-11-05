import { MoonLoader, PulseLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="container mx-auto max-w-[1170px] flex justify-center items-center h-[50vh]">
      <MoonLoader color="#2D3A4B" size="50" />
    </div>
  );
}
