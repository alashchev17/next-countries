'use client'
import { useRouter } from 'next/navigation'
import styles from './BackButton.module.css'

export const BackButton = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className={styles.button}>
      Back
    </button>
  )
}
