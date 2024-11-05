import { FadeLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="container mx-auto max-w-[1170px] flex justify-center items-center h-[50vh]">
      <FadeLoader color="#3040d3" size="25" />
    </div>
  );
}
