import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src="./src/assets/icons/clipboard.png" alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}