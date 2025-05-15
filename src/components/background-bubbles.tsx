
const BackgroundBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-[10px] opacity-50">
        {/* Purple Blob */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        {/* Pink Blob */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        {/* Blue Blob */}
        
      </div>
    </div>
  );
};

export default BackgroundBubbles;