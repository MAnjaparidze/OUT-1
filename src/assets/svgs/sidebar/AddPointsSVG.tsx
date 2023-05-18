interface IAddPointsSVGProps {
  id?: string;
  className?: string;
  color?: string;
}

const AddPointsSVG = ({ id, className, color }: IAddPointsSVGProps) => (
  <svg id={id}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
  >
    <g
      id="Group_2760"
      data-name="Group 2760"
      transform="translate(-22.251 -200.122)"
    >
      <g
        id="Group_2707"
        data-name="Group 2707"
        transform="translate(22.251 200.122)"
      >
        <path
          id="Path_311"
          data-name="Path 311"
          d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z"
          transform="translate(0 0)"
          fill={color}
        />
        <g
          id="Group_2656"
          data-name="Group 2656"
          transform="translate(16.98 19.286)"
        >
          <g
            id="Group_2640"
            data-name="Group 2640"
            transform="translate(0 0)">
            <g
              id="Group_2254"
              data-name="Group 2254"
              transform="translate(0 0)"
            >
              <g
                id="Group_1474"
                data-name="Group 1474"
              >
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M876.256,2747.931c3.444,6.359,17.963,5.941,20.48-.189a4.584,4.584,0,0,1-2.208,5.029c-4.082,2.77-11.859,2.8-15.96.065A4.531,4.531,0,0,1,876.256,2747.931Z"
                  transform="translate(-876.171 -2740.277)"
                  fill="#0b0b0b"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M876.256,2791.169c3.444,6.358,17.963,5.939,20.48-.19a4.583,4.583,0,0,1-2.208,5.029c-4.082,2.769-11.859,2.8-15.96.065A4.529,4.529,0,0,1,876.256,2791.169Z"
                  transform="translate(-876.171 -2779.578)"
                  fill="#0b0b0b"
                />
                <ellipse
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="9.3"
                  cy="4.679"
                  rx="9.3"
                  ry="4.679"
                  transform="translate(1.038)"
                  fill="none"
                  stroke="#0b0b0b"
                  strokeWidth="1.5"
                />
              </g>
            </g>
            <g
              id="Path_315"
              data-name="Path 315"
              transform="translate(10.342 8.63)"
              fill={color}
            >
              <path
                d="M 8.035713195800781 15.32142353057861 C 4.018362998962402 15.32142353057861 0.7500032186508179 12.05306339263916 0.7500032186508179 8.035713195800781 C 0.7500032186508179 4.018362998962402 4.018362998962402 0.7500032186508179 8.035713195800781 0.7500032186508179 C 12.05306339263916 0.7500032186508179 15.32142353057861 4.018362998962402 15.32142353057861 8.035713195800781 C 15.32142353057861 12.05306339263916 12.05306339263916 15.32142353057861 8.035713195800781 15.32142353057861 Z"
                stroke="none"
              />
              <path
                d="M 8.035713195800781 1.500002861022949 C 4.431913375854492 1.500002861022949 1.500002861022949 4.431913375854492 1.500002861022949 8.035713195800781 C 1.500002861022949 11.63951301574707 4.431913375854492 14.57142353057861 8.035713195800781 14.57142353057861 C 11.63951301574707 14.57142353057861 14.57142353057861 11.63951301574707 14.57142353057861 8.035713195800781 C 14.57142353057861 4.431913375854492 11.63951301574707 1.500002861022949 8.035713195800781 1.500002861022949 M 8.035713195800781 3.814697265625e-06 C 12.47371292114258 3.814697265625e-06 16.0714225769043 3.597713470458984 16.0714225769043 8.035713195800781 C 16.0714225769043 12.47371292114258 12.47371292114258 16.0714225769043 8.035713195800781 16.0714225769043 C 3.597713470458984 16.0714225769043 3.814697265625e-06 12.47371292114258 3.814697265625e-06 8.035713195800781 C 3.814697265625e-06 3.597713470458984 3.597713470458984 3.814697265625e-06 8.035713195800781 3.814697265625e-06 Z"
                stroke="none"
                fill="#0b0b0b"
              />
            </g>
            <path
              id="Path_299"
              data-name="Path 299"
              d="M-14490.95-1947.464l2.128,2.086,3.618-3.85"
              transform="translate(14506.295 1963.977)"
              fill="none"
              stroke="#0b0b0b"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default AddPointsSVG;