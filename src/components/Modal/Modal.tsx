interface Props {
  children: any
  title: string
  open: boolean,
  onClose: () => void
  cancelLabel: string
  submitLabel: string
}

export default function Modal({ children, title, open, onClose, cancelLabel, submitLabel }: Props) {
  return (
    <dialog open={open} onCancel={onClose} className="max-w-[911px] max-h-[662px] rounded-[33px] px-[124px] pt-20 pb-22">
      <div> {title} </div>
      <div className="">
        {children}
      </div>
      <div>
        <button className="bg-[#F6F6F6] rounded-full w-sm h-15"> {cancelLabel} </button>
        <button className="bg-[#1AE58E] rounded-full w-sm h-15 color-white"> {submitLabel} </button>
      </div>
    </dialog>
  )
}