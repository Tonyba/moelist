import React from "react";
import style from "./Anime.module.css";
export const Anime = () => {
  return (
    <div className={`container-fluid ${style.bg_card}`}>
      <div className={`row pt-5 ${style.content_sinopsis_and_banner}`}>
        <div className="col-3">
          <img
            className={style.content_primary_card__img}
            src="https://cdn.myanimelist.net/images/anime/1170/124312l.jpg"
            alt="Title"
          />
        </div>
        <div className="col-9">
          <div className={style.content_sinopsis}>
            <div className={style.title_card_content}>
              <h1 className={style.content_card__title}>VINLAND SAGA</h1>
            </div>
            <h2 className={style.content_sinopsis__title}>Sinopsis</h2>
            <p className={style.content_sinopsis__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas repellendus et, asperiores labore harum. Debitis accusamus
              quidem dicta, natus, minima voluptas ipsa quas, consequatur
              officiis cum nobis aliquam deleniti. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Maxime ipsa sint aspernatur rem
              asperiores enim voluptatibus quas quos aliquid sed porro soluta
              dolores delectus illo veniam, consequatur officia vel neque! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              fugiat earum at maiores consectetur neque consequuntur assumenda,
              quaerat quisquam alias! Ab quo, minus ducimus cumque incidunt
              maxime itaque atque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur molestias numquam laboriosam porro.
              Mollitia, expedita voluptas ducimus neque nesciunt at. Ex ad
              consequatur explicabo saepe consectetur in quas, dolorem nulla!
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam facilis voluptate natus repellendus
              adipisci veritatis, quasi et maiores deleniti officia voluptatem
              ea sunt eos dicta architecto ut deserunt corrupti ex. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eaque quas
            </p>
            <div className={style.content_title_genres}>
              <h2 className={style.content_genre_title}>Generos</h2>
            </div>
            <div className={style.content_sinopsis__generos}>
              <li className={style.content_sinopsis__generos__item}>Acción</li>
              <li className={style.content_sinopsis__generos__item}>
                Aventura
              </li>
              <li className={style.content_sinopsis__generos__item}>Comedia</li>
              <li className={style.content_sinopsis__generos__item}>Drama</li>
              <li className={style.content_sinopsis__generos__item}>
                Fantasía
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className={style.content_sinopsis_and_banner}></div>
      <div className="row mx-3 py-5">
        <div className="col-3">
          <div className={style.content_primary_card__info}>
            <div className={style.content_primary_card__info__title}>
              <h2 className={style.content_primary_card__info__title__text}>
                Información
              </h2>
            </div>
            <div className={style.content_primary_card__info__content}>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Tipo
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  TV
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Episodios
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  12
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Source
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Manga
                </p>
              </div>

              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estado
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Finalizado
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estreno
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  12/12/2020
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Duración
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  24 min
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Demografia
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Seinen
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Temporada
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Verano 2020
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estudio
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Studio Pierrot
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Autor
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Kamada
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Artista
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Renken
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Producido
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  Mainichi Broadcasting System
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 ">
          <div className={`row position-sticky ${style.scan_list}`}>
            <div className={style.title_scans_list}>
              Disfruta de todo el contenido en las siguientes paginas
            </div>
            <div className="col-4">
              <div className={style.content_afiliates_logos}>
                <img
                  className={style.afiliate_logo}
                  src="https://i.ibb.co/7gsC0b5/666777.png"
                  alt="Title"
                />

                <h3 className="text-white text-center">AnimeFenix</h3>
              </div>
            </div>
            <div className="col-4">
              <div className={style.content_afiliates_logos}>
                <img
                  className={style.afiliate_logo}
                  src="https://i.ibb.co/7gsC0b5/666777.png"
                  alt="Title"
                />

                <h3 className="text-white text-center">AnimeFenix</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={style.content_primary_card__info_all_content}></div>
      </div>
    </div>
  );
};
