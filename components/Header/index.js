import styles from './styles.module.css'
import Link from 'next/link'
import Cart from '../icons/Cart'
import UchuritaLogo from '../icons/UchuritaLogo'

export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <UchuritaLogo />
          </a>
        </Link>
        <Link href='/cart'>
          <a>
            <Cart width={32} height={28}/>
          </a>
        </Link>
      </div>
    </header>
  )
}
