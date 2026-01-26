type ShapeProps = {
  className?: string;
};

export default function SquiggleShape({ className = "w-20 h-10" }: ShapeProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 140 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M10 30C30 10 50 50 70 30C90 10 110 50 130 30" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
    </svg>
  );
}