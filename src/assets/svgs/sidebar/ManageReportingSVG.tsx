interface IManageReportingSVGProps {
  id?: string;
  className?: string;
  color?: string;
}

const ManageReportingSVG = ({ id, className, color }: IManageReportingSVGProps) => (
  <svg id={id} className={className} xmlns="http://www.w3.org/2000/svg" width="60"
    height="60" viewBox="0 0 52 52">
    <g id="Group_2780" data-name="Group 2780" transform="translate(-26.25 -204)">
      <path id="Path_322" data-name="Path 322" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(26.25 204)" fill={color} />
      <g id="Group_2728" data-name="Group 2728" transform="translate(6.737 -62.153)">
        <path id="Path_320" data-name="Path 320" d="M3.823,1.5A2.326,2.326,0,0,0,1.5,3.823V17.205a2.326,2.326,0,0,0,2.323,2.323H17.205a2.326,2.326,0,0,0,2.323-2.323V7.312L13.717,1.5H3.823m0-1.5H14.338l6.691,6.691V17.205a3.823,3.823,0,0,1-3.823,3.823H3.823A3.823,3.823,0,0,1,0,17.205V3.823A3.823,3.823,0,0,1,3.823,0Z" transform="translate(35 281)" fill="#0b0b0b" />
        <path id="Line_26" data-name="Line 26" d="M0,6.485a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V5.735A.75.75,0,0,1,0,6.485Z" transform="translate(48.86 282.434)" fill="#0b0b0b" />
        <path id="Line_27" data-name="Line 27" d="M6.691.75H0V-.75H6.691Z" transform="translate(48.86 288.169)" fill="#0b0b0b" />
        <path id="Path_321" data-name="Path 321" d="M6.657,0A6.657,6.657,0,1,1,0,6.657,6.657,6.657,0,0,1,6.657,0Z" transform="translate(42.715 290.559)" fill={color} />
        <path id="Path_321_-_Outline" data-name="Path 321 - Outline" d="M6.657,1.5a5.157,5.157,0,1,0,5.157,5.157A5.163,5.163,0,0,0,6.657,1.5m0-1.5A6.657,6.657,0,1,1,0,6.657,6.657,6.657,0,0,1,6.657,0Z" transform="translate(42.715 290.559)" fill="#0b0b0b" />
        <path id="Line_28" data-name="Line 28" d="M1.912,3.618a.749.749,0,0,1-.625-.334L-.624.416A.75.75,0,0,1-.416-.624a.75.75,0,0,1,1.04.208L2.536,2.452a.75.75,0,0,1-.623,1.166Z" transform="translate(52.683 302.438)" fill="#0b0b0b" />
        <path id="Line_29" data-name="Line 29" d="M7.647.5H0v-1H7.647Z" transform="translate(38.345 287.213)" fill="#707070" />
        <path id="Line_30" data-name="Line 30" d="M5.735.5H0v-1H5.735Z" transform="translate(38.345 290.081)" fill="#707070" />
        <path id="Line_31" data-name="Line 31" d="M2.868.5H0v-1H2.868Z" transform="translate(38.345 292.948)" fill="#707070" />
      </g>
    </g>
  </svg>
);

export default ManageReportingSVG;