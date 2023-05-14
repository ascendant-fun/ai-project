interface XIconProps {
  width?: number;
  height?: number;
  extraClasses?: string;
}

function ThumbDownIcon({ width = 15, height = 15, extraClasses }: XIconProps) {
  if (extraClasses === undefined || extraClasses.length === 0) {
    extraClasses = "fill-white";
  }

  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1589 6.45905L14.9751 1.63658C14.9528 1.19562 14.7621 0.780046 14.4423 0.475525C14.1226 0.171048 13.6983 0.000858297 13.2567 0L4.91016 0L4.91016 8.05199L9.4216 9.3067L13.0931 13L13.4095 12.8963C14.0319 12.6829 14.5478 12.2372 14.8497 11.6525C15.0838 11.1003 15.0679 10.4738 14.806 9.93421L14.0696 8.18299H14.4351C14.8923 8.18299 15.3308 8.00138 15.654 7.67809C15.9773 7.35481 16.1589 6.91635 16.1589 6.45912V6.45905ZM13.8023 10.3214C13.9401 10.5826 13.96 10.8902 13.8568 11.167C13.7445 11.3961 13.5659 11.5863 13.344 11.7125L9.97265 8.3465L5.99568 7.25545L5.99568 1.09098L13.2348 1.09098C13.4055 1.09098 13.5692 1.15878 13.6899 1.27953C13.8107 1.40023 13.8785 1.56401 13.8785 1.73471L15.0568 6.508C15.0418 6.66814 14.9674 6.81684 14.8483 6.92487C14.7292 7.0329 14.5739 7.0924 14.4131 7.09172H12.4219L13.8023 10.3214Z"
        fill="#FF0000"
      />
      <path
        d="M0 8.18292H4.36422L4.36422 0L0 0L0 8.18292ZM1.09106 1.09106L3.27317 1.09106L3.27317 7.09186H1.09106L1.09106 1.09106Z"
        fill="#FF0000"
      />
    </svg>
  );
}

export default ThumbDownIcon;