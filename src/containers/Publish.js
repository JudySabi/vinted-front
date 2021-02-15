import axios from "axios";
import { useState } from "react";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      //   Je stocke toutes les valeurs des states dans une class nommée FormData puis je l'appelle en deuxième argument après ma requête axios
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("condition", condition);
      formData.append("color", color);
      formData.append("city", city);
      formData.append("price", price);

      const token = userToken;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish">
      <h1>Vends ton article</h1>

      <form onSubmit={handleSubmit}>
        <div className="white-bloc file-upload">
          <div>
            <label htmlFor="file-upload"> Ajouter une photo</label>
            <input
              id="file-upload"
              style={{ visibility: "hidden" }}
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="white-bloc title">
          <div>
            <label>Titre</label>
            <input
              placeholder="ex: Chemise Sézane verte"
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Décris ton article</label>
            <input
              placeholder="ex: porté quelques fois, taille correctement"
              type="textarea"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className=" white-bloc product_details">
          <div>
            <label>Marque</label>
            <input
              placeholder="ex: Levis"
              type="text"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Taille</label>
            <input
              placeholder="ex: M / 38 / 10"
              type="text"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Couleur</label>
            <input
              placeholder="ex: Turquoise"
              type="text"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div>
            <label>État</label>
            <input
              placeholder="ex: Neuf, très peu porté"
              type="text"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Lieu</label>
            <input
              placeholder="ex: Paris"
              type="text"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="white-bloc price">
          <div>
            <label>Prix</label>
            <input
              placeholder="0,00 €"
              type="text"
              onChange={(event) => {
                setPrice(Number(event.target.value));
              }}
            />
          </div>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Publish;
