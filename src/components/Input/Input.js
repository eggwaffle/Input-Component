import PropTypes from 'prop-types';

function Input(props, {
    borderColor = 'border-[#828282]',
    error = false,
    size = 'md',
    value,
    disabled = false,
    helperText,
  }){
  let hover = 'group-hover:border-[#333333]';
  let focus = 'focus:border-[#2962FF]';
  let text = 'text-[#333333]';
  let textHover = 'group-hover:text-[#333333]';
  let textFocus = 'peer-focus:text-[#2962FF]';
  let icon = 'call';
  let iconDisplay = 'hidden';
  let left = 'left-3';
  let top = 'top-10';
  let py = 'py-[1rem]';
  let width = 'w-[12.5rem]';
  let inputDisplay = '';
  let textareaDisplay = 'hidden';

  error = props.error;
  if (error) {
    borderColor = 'border-[#D32F2F]';
    hover = 'hover:border-[#333333]';
    focus = 'focus:border-[#D32F2F]';
    text = 'text-[#D32F2F]';
    textHover = 'peer-hover:text-[#333333]';
    textFocus = 'peer-focus:text-[#D32F2F]';
  };

  if (props.disabled) {
    disabled = true;
    borderColor = 'border=[#E0E0E0]'
    hover = 'peer-hover:border=[#E0E0E0]'
  };

  helperText = props.helperText;

  if (props.startIcon) {
    iconDisplay = '';
  };
  if (props.endIcon) {
    icon = 'lock';
    iconDisplay = '';
    left = 'right-3';
  };
  if (props.icon) icon = props.icon;

  value = props.value;

  size = props.size;
  if (size === 'sm') {
    py = 'py-[0.5rem]';
    top = 'top-9';
  };

  if (props.fullWidth) {
    width = 'w-full';
  };

  if (props.multiline) {
    inputDisplay = 'hidden';
    textareaDisplay = '';
  };

  const divClassName = `relative flex flex-col ${width}`;
  const labelClassName = `order-1 block mb-1 text-sm ${text} ${textHover} ${textFocus}`;
  const iconClassName = `material-icons absolute text-[#333333] ${iconDisplay} ${left} ${top}`;
  const inputClassName = `order-2 peer block border border-solid rounded-lg outline-none px-10 ${borderColor} ${hover} ${focus} ${py} ${inputDisplay}`;
  const textareaClassName = `order-3 peer block border border-solid rounded-lg outline-none px-10 ${borderColor} ${hover} ${focus} ${py} ${textareaDisplay}`;
  const helperTextClassName = `order-4 block mb-1 text-xs ${text} ${textHover} ${textFocus}`;
  return (

  <div className={divClassName}>
    <input type='text' name='inputcomp' className={inputClassName} placeholder='Placeholder' defaultValue={value} disabled={disabled} />
    <textarea className={textareaClassName} rows={props.row} placeholder='Placeholder' defaultValue={value} disabled={disabled} />
    <label htmlFor="inputcomp" className={labelClassName}>Label</label>
    <span className={iconClassName}>
      {icon}
    </span>
    <p className={helperTextClassName}>{helperText}</p>
  </div>

  )
};

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string
};
export default Input;