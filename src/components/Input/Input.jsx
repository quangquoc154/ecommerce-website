import './Input.scss';

function Input({ type, placeholder, animation, onChange, required }) {
  return (
    <div className="form-field">
      <input
        type={type}
        className="form-input"
        placeholder={animation ? ' ' : placeholder}
        onChange={onChange}
        required={required}
      />
      <label htmlFor="" className="form-label">
        {animation && placeholder}
      </label>
    </div>
  );
}

export default Input;
