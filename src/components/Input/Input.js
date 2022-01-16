import PropTypes from "prop-types";
import './Input.css';

function Input(props, { placeholder, borderColor = "#828282", size = "md", isHover = false, disabled = false,}) {
  let scale = 1
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  if (props.disabled) disabled = true;
  const hover = 'hover:bg-[#D32F2F]';
  var className = `${hover}`;
  const style = {
    borderColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    borderRadius: '8px',
    borderStyle: 'solid',
  }
  return (
    <div>
      <label >Label</label>
      <input type="text" className={className} style={style} placeholder={placeholder} disabled={disabled}></input>
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isHover: PropTypes.bool,
  disabled: PropTypes.bool,
}
export default Input