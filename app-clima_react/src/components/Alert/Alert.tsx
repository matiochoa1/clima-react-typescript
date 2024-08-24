import styles from "./Alert.module.css";

export const Alert = ({ children }: { children: React.ReactNode }) => {
	return <p className={styles.error}>{children}</p>;
};
