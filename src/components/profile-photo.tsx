export function ProfilePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-24 sm:w-32 md:w-40 lg:w-48 aspect-square rounded-full overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
