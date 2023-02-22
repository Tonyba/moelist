import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { getAnimes } from "../../Api/Anime/anime";
import { getManhuas } from "../../Api/Manhuas/mahuas";
import { getManhwas } from "../../Api/Manhwas/manhwas";
import { getMangas } from "../../Api/Mangas/mangas";
export const Sidebar = () => {
  const [animes, setAnimes] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [manhwas, setManhwas] = useState([]);
  const [manhuas, setManhuas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const anime = await getAnimes();
      const mangas = await getMangas();
      const manhwas = await getManhwas();
      const manhuas = await getManhuas();
      const orderManhuas = manhuas?.data.sort((a, b) => b - a);
      const orderManhwas = manhwas?.data.sort((a, b) => b - a);
      const orderMangas = mangas?.data.sort((a, b) => b - a);
      const orderAnimes = anime?.data.sort((a, b) => b - a);

      console.log(orderManhuas, orderManhwas, orderMangas, orderAnimes);
      setManhuas(orderManhuas);
      setManhwas(orderManhwas);
      setMangas(orderMangas);

      setAnimes(orderAnimes);
    };
    fetchData();
  }, []);
  return (
    <div className="sidebar-container-rigth">
      <div className="sidebar-container-cards">
        <div className="sidebar-content-title-list-cards">
          <h2 className="sidebar-text-title-list-cards">Ultimos Agregados</h2>
        </div>
        <div className="row row-cols-3 row-cols-lg-1 p-3 pt-5">
          {animes?.slice(0, 2).map((anime, index) => {
            anime.type = "anime";
            return <CardItemSidebar key={index} {...anime} />;
          })}

          {mangas.map((manga, index) => {
            anime.type = "manga";
            return <CardItem key={index} {...manga} />;
          })}

          {manhwas.map((manhwa, index) => {
            manhwa.type = "manwha";
            return <CardItem key={index} {...manhwa} />;
          })}

          {manhuas.map((manhua, index) => {
            manhua.type = "manhua";
            return <CardItem key={index} {...manhua} />;
          })}
        </div>
      </div>
    </div>
  );
};
