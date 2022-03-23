import React from "react";
import styles from "../styles/Home.module.scss";

export const Home = () => {
  return (
    <div>
      <div className={styles.banner} id="home">
        <h1>GAVISTORE</h1>
        <p>
          _Lorem ipsum <br /> Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div
        style={{ position: "relative" }}
        className={styles.bannerSmall}
        id="libarts"
      >
        <div className={styles.bannerSmallContent}>
          <div></div>
          <div>
            <h3>Gavisto La gi ?</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laboriosam. Id distinctio ducimus, fuga excepturi,
              ullam sint nostrum cum nam, vel repellat perspiciatis? Aliquam,
              optio rem. Earum, dignissimos eaque! Cumque, cupiditate
              voluptatem, doloremque pariatur error eius, ullam iure nesciunt
              consectetur ab perspiciatis doloribus laboriosam delectus dolorum
              hic. Repellendus iure quasi facilis soluta ipsa, aspernatur beatae
              iste repellat quo neque provident veritatis vitae similique cum
              ratione possimus illum! Ex praesentium nesciunt aspernatur
              recusandae necessitatibus odio error eos ad? Aut quisquam
              excepturi possimus soluta accusantium, dicta sapiente esse nulla!
              Possimus consequuntur ut placeat culpa fugiat delectus
              voluptatibus, corrupti, saepe beatae aperiam temporibus!
            </p>
          </div>
        </div>
        <div className={styles.bannerHasTitle}>
          <div>Gavisto co gi</div>
          <hr />
        </div>
        <div className={styles.bannerHas}>
          <div className={styles.item}>
            <div></div>
            <h2>Libats</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laboriosam. Id distinctio ducimus, fuga excepturi,
              ullam sint nostrum cum nam, vel repellat perspiciatis? Aliquam,
              optio rem. Earum, dignissimos eaque! Cumque, cupiditate voluptatem
            </p>
          </div>
          <div className={styles.item}>
            <div></div>
            <h2>Libats</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laboriosam. Id distinctio ducimus, fuga excepturi,
              ullam sint nostrum cum nam, vel repellat perspiciatis? Aliquam,
              optio rem. Earum, dignissimos eaque! Cumque, cupiditate voluptatem
            </p>
          </div>
          <div className={styles.item}>
            <div></div>
            <h2>Libats</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laboriosam. Id distinctio ducimus, fuga excepturi,
              ullam sint nostrum cum nam, vel repellat perspiciatis? Aliquam,
              optio rem. Earum, dignissimos eaque! Cumque, cupiditate voluptatem
            </p>
          </div>
        </div>
      </div>
      <div className={styles.comment} id="callab">
        <hr />
        <div className={styles.content}>
          <h2>{`''`}</h2>
          <p>
            orem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            laboriosam. Id distinctio ducimus, fuga excepturi, ullam sint
            nostrum cum nam, vel repellat perspiciatis? Aliquam, optio rem.
            Earum, dignissimos eaque! Cumque, cupiditate voluptatem, doloremque
            pariatur error eius, ullam iure nesciunt consectetur ab perspiciatis
            doloribus laboriosam delectus dolorum hic. Repellendus iure quasi
            facilis soluta ipsa, aspernatur beatae iste repellat quo neque
            provident veritatis vitae similique cum ratione possimus illum! Ex
            praesentium nesciunt aspernatur recusandae necessitatibus odio error
            eos ad? Aut quisquam excepturi possimus soluta accusantium, dicta
            sapiente esse nulla! Possimus consequuntur ut placeat culpa fugiat
            delectus voluptatibus, corrupti, saepe beatae aperiam temporibus!
          </p>
        </div>
        <hr />
      </div>
      <div className={styles.aboutUs} id="aboutus">
        <div className={styles.aboutUsContent}>
          <div>
            <h3>About Us</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laboriosam. Id distinctio ducimus, fuga excepturi,
              ullam sint nostrum cum nam, vel repellat perspiciatis? Aliquam,
              optio rem. Earum, dignissimos eaque! Cumque, cupiditate
              voluptatem, doloremque pariatur error eius, ullam iure nesciunt
              consectetur ab perspiciatis doloribus laboriosam delectus dolorum
              hic. Repellendus iure quasi facilis soluta ipsa, aspernatur beatae
              iste repellat quo neque provident veritatis vitae similique cum
              ratione possimus illum! Ex praesentium nesciunt aspernatur
              recusandae necessitatibus odio error eos ad? Aut quisquam
              excepturi possimus soluta accusantium, dicta sapiente esse nulla!
              Possimus consequuntur ut placeat culpa fugiat delectus
              voluptatibus, corrupti, saepe beatae aperiam temporibus!
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.newspaper}>
        <div className={styles.headerNews}>
          <div />
          <h2>Lên Báo</h2>
        </div>
        <div className={styles.contentNews}>
          <div className={styles.itemsNews}>
            <div className={styles.square} />
            <h2>Lorem ipsum</h2>
          </div>
          <div className={styles.itemsNews}>
            <div className={styles.square} />
            <h2>Lorem ipsum</h2>
          </div>
          <div className={styles.itemsNews}>
            <div className={styles.square} />
            <h2>Lorem ipsum</h2>
          </div>
        </div>
      </div>
      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
      </div>
    </div>
  );
};
