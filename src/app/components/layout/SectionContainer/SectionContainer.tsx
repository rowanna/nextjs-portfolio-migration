import { ReactNode } from "react";
import styles from "./SectionContainer.module.css";
export default function Container({
  children,
  sectionId,
}: {
  children: ReactNode;
  sectionId: string;
}) {
  return (
    <>
      <section id={sectionId} className={styles[sectionId]}>
        <div className={styles.container}>{children}</div>
      </section>
    </>
  );
}
