export default function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-6xl text-center font-bold">
          Welcome to <span className="text-dark-primary">Slash Blog</span>
        </h1>
        <p className="text-lg md:text-base sm:text-sm text-center">
          A platform to share experiences and knowledge
        </p>
      </div>
    </div>
  );
}
