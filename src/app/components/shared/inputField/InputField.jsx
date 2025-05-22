import './InputField.css';

const InputField = ({ labelText, placeholder, idProperty, typeProperty, nameProperty }) => {
  return (
    <div className="input-field-wrapper">
      <label htmlFor={idProperty}>{labelText}</label>
      <input className='body2' type={typeProperty} id={idProperty} name={nameProperty} placeholder={placeholder}></input>
    </div>
  );
};


const TextAreaFIeld = ({ labelText, idProperty, nameProperty }) => {
  return (
    <div className="text-area-field-wrapper">
      <label htmlFor={idProperty}>{labelText}</label>
      <textarea className="body2" id={idProperty} name={nameProperty}></textarea>
    </div>
  )
}

export { InputField, TextAreaFIeld };