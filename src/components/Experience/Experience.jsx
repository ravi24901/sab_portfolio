import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience <hr/></h2>
      <div className={styles.content}>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <ul key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <p>{ `${historyItem.role},${historyItem.organisation}` }</p>
                  
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <pre>  </pre>
                  <p>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id} className={styles}>{experience}</li>;
                    })}
                  </p>
                </div>
              </ul>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
