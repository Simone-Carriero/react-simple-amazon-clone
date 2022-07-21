import './form-input.styles.css'

const FormInput = ({ label, ...props }) => {
    const allProps = {...props}
    const {id} = allProps
    return (
        <div className='input-container'>
            <label
                className='input-container__label'
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="input-container__input"
                {...props}
            />
        </div>
    )
}

export default FormInput