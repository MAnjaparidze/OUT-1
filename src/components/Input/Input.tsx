interface Props {
  placeholder: string
  onChange: (e: any) => void
}
export default function Input({placeholder, onChange} : Props) {
  return (
    <div className="border-px-[#707070] py-6 pl-11">
      <input placeholder={placeholder} onChange={onChange}  />
    </div>
  )

}