import ofertaFile from './resources/oferta.pdf';
import paperIcon from './resources/paper.svg';
import styles from './AgreementFooter.module.scss';

const AgreementFooter = () => {
	return (
		<div className={styles.container}>
			<a href={ofertaFile} download className={styles.link}>
				<img className={styles.icon} src={paperIcon} alt="" />
				<span className={styles.title}>Пользовательское соглашение</span>
			</a>
		</div>
	);
};

export default AgreementFooter;
