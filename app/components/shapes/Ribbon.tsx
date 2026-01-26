type ShapeProps = {
  className?: string;
};

export default function RibbonShape({ className = "w-10 h-10" }: ShapeProps) {
  return (
    <svg
      className={className}
      width="236"
      height="228"
      viewBox="0 0 236 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M220.416 118.259C220.416 118.259 211.343 126.877 113.35 130.086M113.35 130.086C68.4286 203.365 25.519 212.487 25.519 212.487M113.35 130.086C110.859 131.26 41.2647 124.318 18.4721 83.1764C-4.32052 42.0349 92.0138 -11.3349 114.806 29.8065C137.599 70.948 113.35 130.086 113.35 130.086Z"
        stroke="currentColor" 
        strokeWidth="30"
        strokeLinecap="round"
      />
    </svg>
  );
}