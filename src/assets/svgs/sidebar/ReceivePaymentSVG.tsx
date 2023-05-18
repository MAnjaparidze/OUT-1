interface IPaymentSVGProps {
  id?: string;
  className?: string;
  color?: string;
}

const ReceivePaymentSVG = (props: IPaymentSVGProps) => (
  <svg
    className={props.className}
    id={props.id}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
  >
    <g
      id="Group_2742"
      data-name="Group
    2742"
      transform="translate(-22.251 -125.973)"
    >
      <g
        id="Group_2740"
        data-name="Group 2740"
      >
        <path
          id="Path_308"
          data-name="Path 308"
          d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z"
          transform="translate(22.251 125.973)"
          fill={props.color}
        />
        <g
          id="Group_2619"
          data-name="Group 2619"
          transform="translate(39.828 147.394)"
        >
          <g id="Group_2620" data-name="Group 2620">
            <g
              id="Rectangle_733"
              data-name="Rectangle 733"
              fill="none"
              stroke="#0b0b0b"
              strokeWidth="1.5"
            >
              <rect
                width="21.865"
                height="15.902"
                rx="3"
                stroke="none"
              />
              <rect
                x="0.75"
                y="0.75"
                width="20.365"
                height="14.402"
                rx="2.25"
                fill="none"
              />
            </g>
            <line
              id="Line_14"
              data-name="Line 14"
              x2="10.483"
              transform="translate(3.818 3.968)"
              fill="none"
              stroke="#0b0b0b"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <line
              id="Line_15"
              data-name="Line 15"
              x2="1.906"
              transform="translate(4.097 11.768)"
              fill="none"
              stroke="#0b0b0b"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
          <g
            id="Group_2618"
            data-name="Group 2618"
            transform="translate(9.938 5.963)"
          >
            <g
              id="Path_312"
              data-name="Path 312"
              transform="translate(0 0)"
              fill={props.color}
            >
              <path
                d="M 7.453968048095703 14.15793800354004 C 3.757388114929199 14.15793800354004 0.7499980330467224 11.15054798126221 0.7499980330467224 7.453968048095703 C 0.7499980330467224 3.757388114929199 3.757388114929199 0.7499980330467224 7.453968048095703 0.7499980330467224 C 11.15054798126221 0.7499980330467224 14.15793800354004 3.757388114929199 14.15793800354004 7.453968048095703 C 14.15793800354004 11.15054798126221 11.15054798126221 14.15793800354004 7.453968048095703 14.15793800354004 Z"
                stroke="none"
              />
              <path
                d="M 7.453968048095703 1.499998092651367 C 4.170938491821289 1.499998092651367 1.499998092651367 4.170938491821289 1.499998092651367 7.453968048095703 C 1.499998092651367 10.73699760437012 4.170938491821289 13.40793800354004 7.453968048095703 13.40793800354004 C 10.73699760437012 13.40793800354004 13.40793800354004 10.73699760437012 13.40793800354004 7.453968048095703 C 13.40793800354004 4.170938491821289 10.73699760437012 1.499998092651367 7.453968048095703 1.499998092651367 M 7.453968048095703 -1.9073486328125e-06 C 11.57067775726318 -1.9073486328125e-06 14.90793800354004 3.337258338928223 14.90793800354004 7.453968048095703 C 14.90793800354004 11.57067775726318 11.57067775726318 14.90793800354004 7.453968048095703 14.90793800354004 C 3.337258338928223 14.90793800354004 -1.9073486328125e-06 11.57067775726318 -1.9073486328125e-06 7.453968048095703 C -1.9073486328125e-06 3.337258338928223 3.337258338928223 -1.9073486328125e-06 7.453968048095703 -1.9073486328125e-06 Z"
                stroke="none"
                fill="#0b0b0b"
              />
            </g>
            <path
              id="Path_299"
              data-name="Path 299"
              d="M-14490.948-1947.592l1.973,1.935,3.357-3.571"
              transform="translate(14495.59 1954.904)"
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

export default ReceivePaymentSVG;