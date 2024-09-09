function List({ numbers }) {
  return (
    <div>
      {numbers.length > 0 ? (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      ) : (
        <p>A lista está vazia</p>
      )}
    </div>
  );
}

export default List;
