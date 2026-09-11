import Image from "next/image";
import Block from "../ui/Block";
import { AUDIENCES } from "@/lib/content";
import styles from "./WhoWeHelp.module.css";

const byId = (id: string) => AUDIENCES.find((a) => a.id === id)!;

export default function WhoWeHelp() {
  const families = byId("families");
  const professionals = byId("professionals");
  const seniors = byId("seniors");
  const quiet = ["temporary", "ndis", "dva"].map(byId);
  const playful = byId("housework-haters");

  return (
    <section className="section section--lg" id="who-we-help">
      <div className="container">
        <Block className={styles.head}>
          <h2 className="h2">Every household is different.</h2>
        </Block>

        <div className={styles.mosaic}>
          <Block className={`${styles.tile} ${styles.tileWide}`}>
            <figure className={`${styles.frame} ${styles.ratioWide}`}>
              <Image
                src={families.image!.src}
                alt={families.image!.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 767px) 100vw, 56vw"
              />
            </figure>
            <h3 className={styles.tileTitle}>{families.title}</h3>
            <p className={styles.tileBody}>{families.body}</p>
          </Block>

          <Block className={`${styles.tile} ${styles.tileTall}`}>
            <figure className={`${styles.frame} ${styles.ratioTall}`}>
              <Image
                src={professionals.image!.src}
                alt={professionals.image!.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 767px) 100vw, 40vw"
              />
            </figure>
            <h3 className={styles.tileTitle}>{professionals.title}</h3>
            <p className={styles.tileBody}>{professionals.body}</p>
          </Block>

          <Block className={`${styles.tile} ${styles.tileMid}`}>
            <figure className={`${styles.frame} ${styles.ratioMid}`}>
              <Image
                src={seniors.image!.src}
                alt={seniors.image!.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 767px) 100vw, 40vw"
              />
            </figure>
            <h3 className={styles.tileTitle}>{seniors.title}</h3>
            <p className={styles.tileBody}>{seniors.body}</p>
          </Block>

          <Block className={styles.panel}>
            {quiet.map((item) => (
              <div key={item.id} className={styles.panelItem}>
                <h3 className={styles.panelTitle}>{item.title}</h3>
                <p className={styles.panelBody}>{item.body}</p>
              </div>
            ))}
          </Block>
        </div>

        <Block className={styles.playful}>
          <h3 className={styles.playfulTitle}>
            Anyone who <em>hates</em>
            <br />
            housework.
          </h3>
          <p className={styles.playfulBody}>{playful.body}</p>
        </Block>
      </div>
    </section>
  );
}
