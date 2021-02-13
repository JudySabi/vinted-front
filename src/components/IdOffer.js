const IdOffer = ({ elem }) => {
  // je récupère la marque du tableau product details pour pouvoir l'afficher plus bas
  const marque = Object.values(elem.product_details[0]);
  return (
    <div key={elem._id} className="offerCard">
      <div className="user">
        {elem.owner.account.avatar && (
          <img src={elem.owner.account.avatar.secure_url} alt="" />
        )}
        <p>{elem.owner.account.username}</p>
      </div>

      <img src={elem.product_image.secure_url} alt="" />
      <p>{elem.product_price} €</p>
      <p>{marque}</p>
    </div>
  );
};

export default IdOffer;
