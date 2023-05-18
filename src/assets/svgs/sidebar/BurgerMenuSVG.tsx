interface IBurgerSVGProps {
  id?: string;
  className?: string;
}

const BurgerMenuSVG = (props: IBurgerSVGProps) => (
  <svg
    className={props.className}
    id={props.id}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
  >
    <g
      id="Group_2626"
      data-name="Group 2626"
      transform="translate(-33 -15)"
    >
      <rect
        id="Rectangle_727"
        data-name="Rectangle 727"
        width="60"
        height="60"
        rx="28.725"
        transform="translate(33 15)"
        fill="#1ae58e"
      />
      <g
        id="Group_2546"
        data-name="Group 2546"
        transform="translate(52.107 35.953)"
      >
        <rect
          id="Rectangle_665"
          data-name="Rectangle 665"
          width="19.235"
          height="2.308"
          rx="1.154"
          fill="#fff"
        />
        <rect
          id="Rectangle_681"
          data-name="Rectangle 681"
          width="19.235"
          height="2.308"
          rx="1.154"
          transform="translate(0 6.155)"
          fill="#fff"
        />
        <rect
          id="Rectangle_703"
          data-name="Rectangle 703"
          width="19.235"
          height="2.308"
          rx="1.154"
          transform="translate(0 12.311)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

export default BurgerMenuSVG;