import { useProgress } from "@react-three/drei";

export const Loading = () => {
  const { progress, active } = useProgress();

  return (
    <div 
      className={`fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 
        transition-all duration-700 ease-out
        ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >


      {/* メインローディングコンテンツ */}
      <div className="relative z-10 text-center max-w-md w-full px-8">
        {/* ローディングタイトル */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-blue-500 
            animate-pulse mb-4">
            Ren Okazaki's Portfolio
          </h1>
          
          {/* バウンシングドット */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* プログレスバー */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-blue-300">Progress</span>
            <span className="text-sm font-bold text-white">{Math.round(progress)}%</span>
          </div>
          
          {/* プログレスバーコンテナ */}
          <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden 
            border border-slate-700/30">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 
                transition-all duration-500 ease-out rounded-full relative overflow-hidden
                animate-pulse"
              style={{ width: `${progress}%` }}
            >
              {/* プログレスバーの内側の光る効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* ローディングメッセージ */}
        <p className="text-blue-300 text-sm animate-pulse">
          宇宙を構築中...
        </p>

        {/* 追加の装飾的な要素 */}
        <div className="mt-8 flex justify-center">
          <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 
            rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};