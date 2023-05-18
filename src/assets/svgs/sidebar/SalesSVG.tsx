interface ISalesSVGProps {
  id?: string;
  className?: string;
  color?: string;
}

const SalesSVG = (props: ISalesSVGProps) => (
  <svg
    id={props.id}
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
  >
    <g
      id="Group_2745"
      data-name="Group 2745"
      transform="translate(-22.251 -274.769)"
    >
      <g
        id="Group_2708"
        data-name="Group 2708"
        transform="translate(22.251 274.769)"
      >
        <path
          id="Path_323"
          data-name="Path 323"
          d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z"
          transform="translate(0 0)"
          fill={props.color}
        />
        <g
          id="Group_2629"
          data-name="Group 2629"
          transform="translate(20.113 16.473)"
        >
          <g
            id="Group_2623"
            data-name="Group 2623"
            transform="translate(0 0)"
          >

            <path
              id="Path_301"
              data-name="Path 301"
              d="M4210.375,269.854h-11.252a2.117,2.117,0,0,1-2.117-2.117l.773-14.159a2.117,2.117,0,0,1,2.118-2.117h9.632a2.117,2.117,0,0,1,2.117,2.117l.846,14.159A2.117,2.117,0,0,1,4210.375,269.854Z"
              transform="translate(-4197.007 -245.478)"
              fill="none"
              stroke="#0b0b0b"
              strokeWidth="1.5"
            />
            <path
              id="Path_302"
              data-name="Path 302"
              d="M4420.6-62.46v-5.08a3.6,3.6,0,0,1,3.6-3.6h0a3.6,3.6,0,0,1,3.595,3.6v5.229"
              transform="translate(-4416.453 71.136)"
              fill="none"
              stroke="#0b0b0b"
              strokeWidth="1.5"
            />
          </g>
          <g
            id="Group_2622"
            data-name="Group 2622"
            transform="translate(7.743 13.126)"
          >
            <g
              id="Path_300"
              data-name="Path 300"
              transform="translate(0 0)"
              fill={props.color}
            >
              <path
                d="M 8.03571605682373 15.32143592834473 C 4.018355846405029 15.32143592834473 0.7499960660934448 12.05307579040527 0.7499960660934448 8.03571605682373 C 0.7499960660934448 4.018355846405029 4.018355846405029 0.7499960660934448 8.03571605682373 0.7499960660934448 C 12.05307579040527 0.7499960660934448 15.32143592834473 4.018355846405029 15.32143592834473 8.03571605682373 C 15.32143592834473 12.05307579040527 12.05307579040527 15.32143592834473 8.03571605682373 15.32143592834473 Z"
                stroke="none"
              />
              <path
                d="M 8.03571605682373 1.499996185302734 C 4.431905746459961 1.499996185302734 1.499996185302734 4.431905746459961 1.499996185302734 8.03571605682373 C 1.499996185302734 11.6395263671875 4.431905746459961 14.57143592834473 8.03571605682373 14.57143592834473 C 11.6395263671875 14.57143592834473 14.57143592834473 11.6395263671875 14.57143592834473 8.03571605682373 C 14.57143592834473 4.431905746459961 11.6395263671875 1.499996185302734 8.03571605682373 1.499996185302734 M 8.03571605682373 -3.814697265625e-06 C 12.47371578216553 -3.814697265625e-06 16.07143592834473 3.597716331481934 16.07143592834473 8.03571605682373 C 16.07143592834473 12.47371578216553 12.47371578216553 16.07143592834473 8.03571605682373 16.07143592834473 C 3.597716331481934 16.07143592834473 -3.814697265625e-06 12.47371578216553 -3.814697265625e-06 8.03571605682373 C -3.814697265625e-06 3.597716331481934 3.597716331481934 -3.814697265625e-06 8.03571605682373 -3.814697265625e-06 Z"
                stroke="none"
                fill="#0b0b0b"
              />
            </g>
            <path
              id="Path_299"
              data-name="Path 299"
              d="M-14490.951-1947.464l2.128,2.086,3.619-3.85"
              transform="translate(14495.954 1955.347)"
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

export default SalesSVG;