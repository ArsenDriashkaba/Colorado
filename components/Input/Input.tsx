interface Props {
  labelText: string;
  autocomplete: boolean;
  required: boolean;
}

enum InputTypes {
  Text = "text",
  Tel = "tel",
  Search = "search",
  Email = "email",
  Date = "date",
  Password = "password",
}

const Input = ({ labelText }: Props): JSX.Element => {
  return (
    <div>
      <label htmlFor=""></label>
      <input id="" type="text" />
    </div>
  );
};

export default Input;
