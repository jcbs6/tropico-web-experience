import { useLanguage } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', name: 'ES', flag: 'fi fi-es' },
    { code: 'en', name: 'EN', flag: 'fi fi-gb' },
    { code: 'fr', name: 'FR', flag: 'fi fi-fr' }
  ];

  return (
    <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-lg px-3 py-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as any)}
          className={`flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium transition-all hover:scale-105 ${
            language === lang.code
              ? 'bg-accent text-accent-foreground shadow-sm'
              : 'text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/20'
          }`}
          title={lang.name}
        >
          <span className={`${lang.flag} text-lg`}></span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
