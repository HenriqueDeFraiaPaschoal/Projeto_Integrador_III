export const Medalha01 = () => {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_98)">
        <circle
          cx="32.2738"
          cy="32.3331"
          r="26.9552"
          stroke="#00EB8E"
          stroke-width="2"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_98"
          x="0.318604"
          y="0.37793"
          width="63.9104"
          height="63.9104"
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
            radius="1.4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_98"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_98"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_98"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
