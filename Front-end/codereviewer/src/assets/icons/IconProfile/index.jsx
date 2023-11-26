export const IconProfile = ({ onClick }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M33.3894 38.74V29.9819C33.3894 26.1989 30.3227 23.1321 26.5396 23.1321H18.6011C14.818 23.1321 11.7512 26.1989 11.7512 29.9819V38.74"
        stroke="#8B76D6"
        stroke-width="1.82663"
        stroke-linecap="round"
      />
      <circle cx="22.7476" cy="19.5846" r="7.0945" fill="#8B76D6" />
      <circle
        cx="22.7476"
        cy="19.5846"
        r="6.98034"
        stroke="black"
        stroke-opacity="0.01"
        stroke-width="0.228329"
      />
      <g filter="url(#filter0_d_53_319)">
        <circle
          cx="22.7477"
          cy="23.1322"
          r="18.9513"
          stroke="black"
          stroke-opacity="0.01"
          stroke-width="1.82663"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_53_319"
          x="0.143112"
          y="0.527634"
          width="45.2091"
          height="45.2091"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.913315"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_53_319"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.913315" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.545098 0 0 0 0 0.462745 0 0 0 0 0.839216 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_319"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_319"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
