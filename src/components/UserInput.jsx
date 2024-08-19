export function UserInput( { label, onHandleChange, id} ) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" onChange={(event) => onHandleChange(event, id)}/>
    </div>
  );
}
