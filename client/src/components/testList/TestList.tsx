// @ts-ignore
import styles from './TestList.module.scss'

interface IProps {
    names: string[],
    order: 'ASC' | 'DSC'
}
function TestList({order, names}: IProps) {
    return <div className={styles.container}>
        <ul>{
            order === "ASC"
                ? names.sort().map(p => (
                    <li key={p}>{p}</li>
                ))
                : names.sort().reverse().map(p => (
                    <li key={p}>{p}</li>
                ))
        }</ul>
    </div>
}

export default TestList;