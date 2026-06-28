import { Moon, Sun } from 'lucide-react';
import { TodayQuoteView } from './components/TodayQuoteView';
import { DEFAULT_QUOTES } from './data/defaultQuotes';
import { useThemeMode } from './hooks/useThemeMode';
import { Quote } from './types';

function getTodayQuote(quotes: Quote[]): Quote | null {
  if (quotes.length === 0) return null;

  const todayStr = new Date().toDateString();
  let hash = 0;
  for (let index = 0; index < todayStr.length; index++) {
    hash = todayStr.charCodeAt(index) + ((hash << 5) - hash);
  }

  return quotes[Math.abs(hash) % quotes.length];
}

export function DailyQuotesApp() {
  const { isDarkMode, toggleDarkMode } = useThemeMode();
  const todayQuote = getTodayQuote(DEFAULT_QUOTES);

  return (
    <div className={isDarkMode ? "dark min-h-screen bg-brand-pine-dark text-brand-pistachio select-text transition-colors duration-200" : "min-h-screen bg-brand-pistachio text-brand-earth select-text transition-colors duration-200"}>
      <div className="min-h-screen flex flex-col justify-between py-8 px-6 relative">
        <div className="max-w-7xl mx-auto w-full flex justify-end items-center select-none z-50">
          <button
            id="landing-theme-toggle"
            onClick={toggleDarkMode}
            className="p-2.5 bg-brand-green/10 hover:bg-brand-green/25 dark:bg-brand-sage/10 dark:hover:bg-brand-sage/20 text-brand-green dark:text-brand-sage rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 px-3.5 min-h-[40px] border border-brand-sage/30 dark:border-brand-sage/15 text-xs font-semibold"
            title={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-brand-clay animate-pulse" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-brand-green" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center -mt-6">
          <TodayQuoteView quote={todayQuote} />
        </div>
      </div>
    </div>
  );
}
