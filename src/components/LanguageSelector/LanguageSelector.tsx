import React, { useState } from 'react'
import './LanguageSelector.css'

const languages = [
    { code: 'en', name: 'English', icon: '/icons/united-kingdom.png' },
    { code: 'es', name: 'Spanish', icon: '/icons/spain.png' },
    { code: 'fr', name: 'French', icon: '/icons/france.png' }
]

type LanguageSelectorProps = {
    onChange: (language: { code: string; name: string, icon: string }) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleLanguageChange = (language: { code: string; name: string, icon: string }) => {
        setSelectedLanguage(language)
        setIsDropdownOpen(false)
        onChange(language)
    }

    return (
        <div className='language-selector'>
            <button className='selector-button' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img src={selectedLanguage.icon} alt={selectedLanguage.name} className="language-icon" />
                <span className='full-name'>{selectedLanguage.name}</span>
                <span className='short-code'>{selectedLanguage.code}</span>
            </button>
            <ul className={`language-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                {languages.map(language => (
                    <li key={language.code} className="language__selector-item" onClick={() => handleLanguageChange(language)}>
                        <img src={language.icon} alt={language.name} className="language-icon" />
                        <span className='full-name'>{language.name}</span>
                        <span className='short-code'>{language.code}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageSelector
