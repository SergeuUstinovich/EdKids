interface OnboardingArrowSvgProps {
  className?: string
}

export const OnboardingArrowSvg = ({className}: OnboardingArrowSvgProps) => {
  return (
    <svg
    className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.07998 8.19998C4.26998 8.19998 4.45998 8.26998 4.60998 8.41998L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.41998C19.68 8.12998 20.16 8.12998 20.45 8.41998C20.74 8.70998 20.74 9.18998 20.45 9.47998L13.93 16C12.87 17.06 11.14 17.06 10.07 16L3.54998 9.47998C3.25998 9.18998 3.25998 8.70998 3.54998 8.41998C3.69998 8.27998 3.88998 8.19998 4.07998 8.19998Z"
        fill="#292D32"
      />
    </svg>
  );
};
