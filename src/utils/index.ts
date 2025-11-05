export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const getIconComponent = (iconName: string) => {
  // This will be used to dynamically render icons
  // We'll implement this in the components that need it
  return iconName;
};