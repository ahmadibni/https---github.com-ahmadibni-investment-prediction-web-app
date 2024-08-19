export function UserInput( { value, label, onChange, id} ) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" onChange={(event) => onChange(event.target.value, id)} value={value} required/>
    </p>
  );
}
