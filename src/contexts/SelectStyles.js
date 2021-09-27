export const selectStyle = {
    control: styles => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: 'white',
        color: 'var(--clr-primary-500)',
        fontSize: '1.2rem',
        padding: '0.3rem',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        fontSize: '1.2rem',
        backgroundColor: 'var(--clr-primary-200)',
        borderBottom: '1px dotted rgba(0,0,0,0.4)',
        ':hover': {
            backgroundColor: 'var(--clr-primary-300)',
            color: 'var(--clr-primary-500)',
        },
    }),
    multiValue: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: 'var(--clr-primary-300)',
        color: 'var(--clr-primary-500)',
    }),
    multiValueLabel: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: 'var(--clr-primary-500)',
        color: 'var(--clr-primary-100)',
        padding: '0.3rem',
        overflow: 'visible'
    }),
}


export const customColorStyle = {
    control: styles => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: 'white',
        color: 'var(--clr-primary-500)',
        fontSize: '1.2rem',
        padding: '0.3rem',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        fontSize: '1.2rem',
        backgroundColor: 'var(--clr-primary-200)',
        color: data.value,
        borderBottom: '1px dotted rgba(0,0,0,0.4)',
        ':hover': {
            backgroundColor: data.value,
            color: 'var(--clr-primary-500)',
        },
    }),
    multiValue: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: 'var(--clr-primary-300)',
        color: 'var(--clr-primary-500)',

    }),
    multiValueLabel: (styles, {data, isDisabled, isFocused, isSelected}) => ({
        ...styles,
        fontFamily: 'var(--ff-body-bold)',
        backgroundColor: data.value,
        color: 'var(--clr-primary-500)',
        padding: '0.3rem',
        overflow: 'visible'
    }),
}
