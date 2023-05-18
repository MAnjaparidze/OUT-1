interface IPlusSVGProps {
  className?: string;
}

const PlusSVG = (props: IPlusSVGProps) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 44">
    <g id="Group_2960" data-name="Group 2960" transform="translate(-705 -122)">
      <circle id="Ellipse_257" data-name="Ellipse 257" cx="22" cy="22" r="22" transform="translate(705 122)" fill="#f7f7f7" />
      <path id="Union_12" data-name="Union 12" d="M7638.129,2640.756v-3.629H7634.5a1.5,1.5,0,1,1,0-3h3.629V2630.5a1.5,1.5,0,0,1,3,0v3.629h3.627a1.5,1.5,0,1,1,0,3h-3.627v3.629a1.5,1.5,0,0,1-3,0Z" transform="translate(-6912.629 -2491.628)" fill="#707070" />
    </g>
  </svg>
);

export default PlusSVG;