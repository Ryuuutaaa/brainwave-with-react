const Heading = ({ className, tittle }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tittle && <h2 className="h2">{tittle}</h2>}
    </div>
  );
};

export default Heading;
