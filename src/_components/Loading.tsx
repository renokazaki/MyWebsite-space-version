import { useProgress } from "@react-three/drei";

export const Loading = () => {
  const { progress, active } = useProgress();

  return (
    <div 
      className={`fixed top-0 left-0 p-16 w-screen h-screen z-10 grid place-items-center text-center
        bg-gradient-to-t from-[#b8c6db] to-[#f5f7fa] transition-opacity duration-1000
        ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div>
        <h1 className="text-6xl font-black text-text m-0">
        Loading...
        </h1>
        <div className="w-full h-4 bg-gray-500 relative overflow-hidden rounded mt-4">
          <div
            className="h-full bg-blue-500 transition-all duration-250 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};