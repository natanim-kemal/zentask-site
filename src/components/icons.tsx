type IconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function ListChecks({ size = 20, stroke = 'var(--accent)', strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <path d="M3 5h10M3 12h10M3 19h10" />
      <path d="M14 6l2 2 4-4" />
      <path d="M14 13l2 2 4-4" />
    </svg>
  );
}

export function Focus({ size = 20, stroke = 'var(--accent)', strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.25" />
      <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
    </svg>
  );
}

export function Timer({ size = 20, stroke = 'var(--accent)', strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9.5V13l2 2" />
      <path d="M9.5 2.5h5" />
    </svg>
  );
}

export function ChartBars({ size = 20, stroke = 'var(--accent)', strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M7 16v-6M12 16V6M17 16v-3" />
    </svg>
  );
}

export function GithubMark({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Crown({ size = 20, stroke = 'var(--accent)', strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <path d="M4 17h16" />
      <path d="M4 17l1.6-9 4.7 5L12 4l1.7 9 4.7-5L20 17" />
    </svg>
  );
}

export function CheckLine({ size = 14, stroke = 'currentColor', strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size)} stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}
