import "./FilterStyle.scss";

const Filter = () => {
  return (
    <div className="filter-wrapper">
      <div className="filter-wrapper-logo">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="octicon:filter-16" clipPath="url(#clip0_4_4113)">
            <path
              id="Vector"
              d="M0.75 2.07001H15.25C15.4489 2.07001 15.6397 2.16878 15.7803 2.34459C15.921 2.52041 16 2.75887 16 3.00751C16 3.25615 15.921 3.4946 15.7803 3.67042C15.6397 3.84624 15.4489 3.94501 15.25 3.94501H0.75C0.551088 3.94501 0.360322 3.84624 0.21967 3.67042C0.0790176 3.4946 0 3.25615 0 3.00751C0 2.75887 0.0790176 2.52041 0.21967 2.34459C0.360322 2.16878 0.551088 2.07001 0.75 2.07001ZM3 8.00751C3 7.75887 3.07902 7.52041 3.21967 7.34459C3.36032 7.16878 3.55109 7.07001 3.75 7.07001H12.25C12.4489 7.07001 12.6397 7.16878 12.7803 7.34459C12.921 7.52041 13 7.75887 13 8.00751C13 8.25615 12.921 8.4946 12.7803 8.67042C12.6397 8.84623 12.4489 8.94501 12.25 8.94501H3.75C3.55109 8.94501 3.36032 8.84623 3.21967 8.67042C3.07902 8.4946 3 8.25615 3 8.00751ZM6 13.0075C6 12.7589 6.07902 12.5204 6.21967 12.3446C6.36032 12.1688 6.55109 12.07 6.75 12.07H9.25C9.44891 12.07 9.63968 12.1688 9.78033 12.3446C9.92098 12.5204 10 12.7589 10 13.0075C10 13.2561 9.92098 13.4946 9.78033 13.6704C9.63968 13.8462 9.44891 13.945 9.25 13.945H6.75C6.55109 13.945 6.36032 13.8462 6.21967 13.6704C6.07902 13.4946 6 13.2561 6 13.0075Z"
              fill="#212121"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_4113">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="filter-wrapper__content">Filter</p>
    </div>
  );
};

export default Filter;
