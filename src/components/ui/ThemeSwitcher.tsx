import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore, type ThemeColor } from "../../store/themeStore";
import { Button } from "../ui/button";

export const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeStore();

  const themes: Array<{
    id: ThemeColor;
    name: string;
    icon: "heart" | "droplet";
    description: string;
    preview: string;
  }> = [
    {
      id: 'shell-pink',
      name: 'Shell Pink',
      icon: 'heart',
      description: 'Soft and elegant pink tones',
      preview: 'bg-linear-to-r from-pink-400 to-rose-500',
    },
    {
      id: 'chameleon-blue',
      name: 'Chameleon Blue',
      icon: 'droplet',
      description: 'Dynamic blue and cyan hues',
      preview: 'bg-linear-to-r from-blue-500 to-cyan-500',
    },
  ];

  const handleThemeChange = (themeId: ThemeColor) => {
    setTheme(themeId);
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-3 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <FontAwesomeIcon 
            icon="palette" 
            className="w-4 h-4 text-slate-600 dark:text-slate-400" 
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Theme
          </span>
        </div>
        
        <div className="flex gap-2">
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={currentTheme === theme.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleThemeChange(theme.id)}
                className={`
                  relative group transition-all duration-300 px-3 py-2
                  ${currentTheme === theme.id 
                    ? `bg-linear-to-r ${theme.preview} text-white border-0 shadow-md` 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                  }
                `}
                title={theme.description}
              >
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon 
                    icon={theme.icon} 
                    className="w-3 h-3" 
                  />
                  <span className="text-xs font-medium hidden sm:inline">
                    {theme.name}
                  </span>
                </div>
                
                {/* Preview gradient indicator */}
                <motion.div
                  className={`
                    absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                    w-6 h-1 rounded-full ${theme.preview}
                    ${currentTheme === theme.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
                  `}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentTheme === theme.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};