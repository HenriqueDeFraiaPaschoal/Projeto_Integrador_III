export const Avatar = () => {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="perfil">
        <path
          id="Rectangle 109"
          d="M43.0247 49.378V38.1743C43.0247 33.3348 39.1015 29.4116 34.262 29.4116H24.1067C19.2672 29.4116 15.344 33.3348 15.344 38.1743V49.378"
          stroke="#8B76D6"
          stroke-width="2.33672"
          stroke-linecap="round"
        />
        <g id="Ellipse 77">
          <circle cx="29.4121" cy="24.8735" r="9.07563" fill="#8B76D6" />
          <circle
            cx="29.4121"
            cy="24.8735"
            r="8.92959"
            stroke="black"
            stroke-opacity="0.01"
            stroke-width="0.292089"
          />
        </g>
        <g id="Ellipse 76" filter="url(#filter0_d_1_23)">
          <circle
            cx="29.4118"
            cy="29.4118"
            r="24.2434"
            stroke="black"
            stroke-opacity="0.01"
            stroke-width="2.33672"
            shape-rendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1_23"
          x="0.494927"
          y="0.494927"
          width="57.8336"
          height="57.8338"
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
            radius="1.16836"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_23"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.16836" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.545098 0 0 0 0 0.462745 0 0 0 0 0.839216 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_23"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_23"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
