import Label from '../atoms/Label'
import Input from '../atoms/Input'

type Props = {
  id: string
  label: string
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LabeledInput = ({ id, label, value, placeholder, onChange }: Props) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default LabeledInput
