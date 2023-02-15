const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list">
        {Array(10)
          .fill()
          .map((element,index) => (
            <div  key= {index} className="shimmer-card"  >
                <img />
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
