import { useField, ErrorMessage } from "formik";
import "../App.scss";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="inputComp">
      <input
        placeholder={label}
        className={`textinput ${meta.error && "inputError"}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="errormessage"
      />
    </div>
  );
};

export default TextInput;
