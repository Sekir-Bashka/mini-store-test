import { useState } from 'react';
import styles from './App.module.css';
import { AppCard } from './componentsAppCard/AppCard.jsx';
import { apps } from "./data/app.js";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFree, setOnlyFree] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setOnlyFree(event.target.checked);
  };

  const filteredApps = apps.filter((app) => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFree = onlyFree ? app.price === "Бесплатно" : true;

    return matchesSearch && matchesFree;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>MiniStore</h1>
          <img 
            src="dist/favicon.svg" 
            alt="Favicon" 
            className={styles.favicon} 
          />
        </div>
        
        <div className={styles.filters}>
          <input 
            type="text" 
            placeholder="Поиск по названию..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange} 
          />
          <label className={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              checked={onlyFree}
              onChange={handleCheckboxChange}
            />
            <span>Только бесплатное</span>
          </label>
        </div>
      </header>

      <main className={styles.block}>
        <div className={styles.cards}>
          {filteredApps.map((props) => (
            <AppCard {...props} key={props.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
