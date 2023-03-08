
const Card = ({ name, color }) => {
  return (
    <div className="colorDivContainer">
      <h2>Hello {name}!</h2>
      <p>You said that your favorite color is:</p>
      <div className="colorDiv" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

export default Card;
