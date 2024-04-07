import styles from './moving-block.module.scss';
export const MovingBlock = ({ position }: { position: number }) => (
  <div className={styles.movableBlock} style={{ top: position }}>
    {position}
  </div>
);
