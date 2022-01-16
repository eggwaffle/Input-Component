import PropTypes from "prop-types"

function Input({ placeholder, backgroundColor = "#F2F2F2", size = "md"}) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  }
  return (
    <div>
      <label for="input">Label</label>
      <input type="text" id="input" name="input" style={style} placeholder={placeholder}></input>
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
}
export default Input