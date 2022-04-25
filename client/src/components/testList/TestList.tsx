interface IProps {
    names: string[],
    order: 'ASC' | 'DSC'
}
function TestList({order, names}: IProps) {
    return <>
        {
            order === "ASC" 
            ? names.sort().map(p => (
                <div key={p}>{p}</div>
                ))
                : names.sort().reverse().map(p => (
                    <div key={p}>{p}</div>
                ))
        }
    </>
}

export default TestList;