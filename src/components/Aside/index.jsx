import Image from 'next/image';
import styles from './aside.module.css';

import logo from './logo.png';

/**
 * Componente Aside que renderiza o lado esquerdo da tela com o logo da Code Connect.
 * @returns {JSX.Element} Um elemento <aside> contendo a logo.
 */
export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
}
