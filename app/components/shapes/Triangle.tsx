type ShapeProps = {
  className?: string;
};

export default function TriangleShape({ className = "w-12 h-12" }: ShapeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path ini membentuk segitiga sama sisi dengan sudut rounded.
         fill="currentColor" agar warnanya bisa diatur lewat class text-warna di Tailwind 
      */}
      <path
        d="M44.7,11.6c2.5-4.2,8.1-4.2,10.6,0l34.4,57.4c2.6,4.3-0.5,9.8-5.3,9.8H15.6c-4.8,0-7.9-5.4-5.3-9.8L44.7,11.6z"
        fill="currentColor"
      />
    </svg>
  );
}