import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
    </main>
  )
}

export default Landing
