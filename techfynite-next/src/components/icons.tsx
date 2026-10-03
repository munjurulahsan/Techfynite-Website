import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} strokeWidth={1.5} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} strokeWidth={2.5} {...props}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function Copy(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function Send(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...props}>
      <path d="M21.4 2.6a1 1 0 0 0-1.05-.23l-17 6.5a1 1 0 0 0 .02 1.88l7.1 2.47 2.47 7.1a1 1 0 0 0 1.88.02l6.5-17a1 1 0 0 0-.23-1.05l-.69.68Zm-9.06 9.06L7.7 10.04l9.8-3.75-5.16 5.37Zm1.7 4.64-1.62-4.64 5.37-5.16-3.75 9.8Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Five-point star used for ratings. */
export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...props}>
      <path d="m12 2.5 2.9 6.06 6.6.82-4.86 4.57 1.24 6.55L12 17.3l-5.88 3.2 1.24-6.55L2.5 9.38l6.6-.82L12 2.5Z" />
    </svg>
  );
}

/** Four-point sparkle used before small eyebrow labels. */
export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...props}>
      <path d="M12 1c.6 5.6 4.4 9.4 11 11-6.6 1.6-10.4 5.4-11 11-.6-5.6-4.4-9.4-11-11C7.6 10.4 11.4 6.6 12 1Z" />
    </svg>
  );
}

/** Eight-point burst from the original "Our Services" heading. */
export function Burst(props: IconProps) {
  return (
    <svg viewBox="0 0 56 57" aria-hidden fill="currentColor" {...props}>
      <path d="M27.2124 5.19589C27.3693 4.31654 28.6307 4.31654 28.7876 5.19589L31.45 20.1218C31.5458 20.6588 32.1392 20.9446 32.6188 20.6846L45.9484 13.4601C46.7337 13.0345 47.5201 14.0207 46.9304 14.6916L36.9209 26.0793C36.5608 26.489 36.7074 27.1311 37.2096 27.344L51.1688 33.2611C51.9912 33.6097 51.7105 34.8395 50.8183 34.7967L35.6742 34.0711C35.1293 34.045 34.7187 34.5599 34.8654 35.0853L38.9427 49.6883C39.1829 50.5486 38.0464 51.0959 37.5235 50.3717L28.6486 38.0792C28.3293 37.6369 27.6707 37.6369 27.3514 38.0792L18.4765 50.3717C17.9536 51.0959 16.8171 50.5486 17.0573 49.6883L21.1346 35.0853C21.2813 34.5599 20.8707 34.045 20.3258 34.0711L5.1817 34.7967C4.28949 34.8395 4.0088 33.6097 4.8312 33.2611L18.7904 27.344C19.2927 27.1311 19.4392 26.489 19.0791 26.0793L9.06956 14.6916C8.47986 14.0207 9.26634 13.0345 10.0516 13.4601L23.3812 20.6846C23.8608 20.9446 24.4542 20.6588 24.55 20.1218L27.2124 5.19589Z" />
    </svg>
  );
}

/** Thin star used inside the scrolling tickers. */
export function TickerStar(props: IconProps) {
  return (
    <svg viewBox="0 0 27 27" aria-hidden fill="currentColor" {...props}>
      <path d="M14.3139 2.40941C14.369 2.199 14.6758 2.22584 14.6935 2.44262L15.3106 10.0031C15.3214 10.1357 15.4599 10.2179 15.5815 10.164L22.5164 7.09018C22.7153 7.00204 22.8856 7.25865 22.7271 7.40764L17.2009 12.604C17.104 12.6951 17.126 12.8547 17.244 12.9162L23.971 16.4216C24.1639 16.5221 24.0695 16.8152 23.8542 16.7842L16.346 15.7035C16.2143 15.6846 16.1033 15.8013 16.1288 15.9318L17.5824 23.3769C17.6241 23.5903 17.336 23.6993 17.226 23.5116L13.3896 16.9677C13.3224 16.8529 13.1619 16.8388 13.0757 16.9402L8.16128 22.7186C8.02038 22.8842 7.7556 22.7269 7.83371 22.524L10.5581 15.4445C10.6058 15.3203 10.5168 15.1861 10.3838 15.1819L2.80199 14.9424C2.5846 14.9355 2.5425 14.6304 2.7499 14.565L9.98347 12.2809C10.1103 12.2409 10.1597 12.0876 10.0801 11.981L5.54017 5.90398C5.41 5.72974 5.62228 5.5066 5.80279 5.62792L12.0986 9.8593C12.209 9.93352 12.3596 9.87655 12.3933 9.74784L14.3139 2.40941Z" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function Crosshair(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <rect x="4" y="5" width="5" height="15" rx="1" />
      <path d="M13 5h6v15h-6zM13 10h3M13 14h3M4 9l2.5-5L9 9" />
    </svg>
  );
}

export function CheckSquare(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...props}>
      <rect x="4" y="8" width="12" height="12" rx="1" />
      <path d="M8 4h12v12M7.5 14l2 2 4-4.5" />
    </svg>
  );
}
