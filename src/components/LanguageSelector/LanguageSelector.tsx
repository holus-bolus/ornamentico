import React from 'react'
import Select, { ActionMeta, OnChangeValue, StylesConfig } from 'react-select'
import ReactCountryFlag from 'react-country-flag'

const options = [
    { value: 'en', label: <><ReactCountryFlag countryCode="US" svg style={{ marginRight: '8px' }} /> English</> },
    { value: 'es', label: <><ReactCountryFlag countryCode="ES" svg style={{ marginRight: '8px' }} /> Spanish</> },
    { value: 'fr', label: <><ReactCountryFlag countryCode="FR" svg style={{ marginRight: '8px' }} /> French</> },
]

const customStyles: StylesConfig<{ value: string; label: JSX.Element }, boolean> = {
    control: (provided) => ({
        ...provided,
        minHeight: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 480px)': {
            minHeight: '38px',
            height: '38px',
            minWidth: '120px',
        },
    }),
    valueContainer: (provided) => ({
        ...provided,
        minHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 480px)': {
            minHeight: '38px',
            height: '38px',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        minHeight: '48px',
        '@media (max-width: 480px)': {
            minHeight: '38px',
            height: '38px',
        },
    }),
    option: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        minHeight: '48px',
        '@media (max-width: 480px)': {
            minHeight: '38px',
            height: '38px',
        },
    }),
}

type LanguageSelectorProps = {
    onChange: (newValue: OnChangeValue<{ value: string; label: JSX.Element }, boolean>, actionMeta: ActionMeta<{ value: string; label: JSX.Element }>) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    return (
        <Select
            options={options}
            styles={customStyles}
            onChange={onChange}
            defaultValue={options[0]}
        />
    )
}

export default LanguageSelector
