import { VarComponent } from './varComponent'

export type SelectValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export interface SelectProps {
  value?: any
  placeholder?: string
  multiple?: boolean
  chip?: boolean
  line?: boolean
  hint?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  separator?: string
  textAlign?: 'left' | 'right' | 'center'
  validateTrigger?: Array<SelectValidateTriggers>
  rules?: Array<(v: any) => any>
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
  onClick?: (e: Event) => void
  onClear?: (value: any) => void
  onClose?: (value: any) => void
  onChange?: (value: any) => void
  onInput?: (value: any) => void
}

export class Select extends VarComponent {
  $props: SelectProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SelectComponent extends Select {}
