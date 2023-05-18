interface Props {
  options: any[]
}
export default function Select({options}: Props) {
  return (
    <div className="border-px-[#707070] py-6 pl-11">
      <select>
        {options.map((option) => <option> {option} </option>)}
      </select>
    </div>
  )
}