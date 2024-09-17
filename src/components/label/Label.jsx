function Label({ children, color }) {
  const cardStyle = {
    backgroundColor: color,
    borderRadius: "10px",
    padding: "10px",
    margin: "30px 0px",
  };

  return (
    <div style={cardStyle}>
      <p>{children}</p>
    </div>
  );
}

export default Label;
