type ShapeProps = {
  className?: string;
};

export default function BlobShape({ className = "w-32 h-32" }: ShapeProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M45.7 146.8C-1.6 116.3 -12.5 53.6 20.8 17.4C54.1 -18.8 116.3 -1.6 146.8 45.7C177.3 93 162.7 155.7 129.4 191.9C96.1 228.1 45.7 190.8 45.7 146.8Z" 
        fill="currentColor"
      />
    </svg>
  );
}