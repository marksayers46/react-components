import styles from "./select.module.css"

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {
    return(
        <>
            <div className={styles.container}>
                
            </div>
            <div className={styles.container}>
                
            </div>
        </>
    )   
}