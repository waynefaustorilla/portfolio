// Font Awesome configuration and icon mappings
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  // Brand icons
  faGithub,
  faLinkedin,
  faGoogle,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import {
  // Solid icons
  faDownload,
  faChevronDown,
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faMapPin,
  faPaperPlane,
  faExternalLinkAlt,
  faCode,
  faDatabase,
  faGlobe,
  faMobile,
  faServer,
  faPalette,
  faTrophy,
  faCoffee,
  faLightbulb,
  faBullseye,
  faHeart,
  faArrowRight,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faEllipsisH,
  faSearch,
  faCircle,
  faMinus,
  faGripVertical,
  faSpinner,
  faCamera,
  faPaintBrush,
  faDroplet
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  // Brand icons
  faGithub,
  faLinkedin,
  faGoogle,
  faMicrosoft,
  // Solid icons
  faDownload,
  faChevronDown,
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faMapPin,
  faPaperPlane,
  faExternalLinkAlt,
  faCode,
  faDatabase,
  faGlobe,
  faMobile,
  faServer,
  faPalette,
  faTrophy,
  faCoffee,
  faLightbulb,
  faBullseye,
  faHeart,
  faArrowRight,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faEllipsisH,
  faSearch,
  faCircle,
  faMinus,
  faGripVertical,
  faSpinner,
  faCamera,
  faPaintBrush,
  faDroplet
);

// Icon mapping from Lucide to Font Awesome
export const iconMap = {
  // Hero section icons
  Download: 'download',
  Github: ['fab', 'github'],
  Linkedin: ['fab', 'linkedin'],
  Camera: 'camera',
  ChevronDown: 'chevron-down',

  // Navigation icons
  Menu: 'bars',
  X: 'times',

  // Contact icons
  Mail: 'envelope',
  Phone: 'phone',
  MapPin: 'map-pin',
  Send: 'paper-plane',

  // Project icons
  ExternalLink: 'external-link-alt',

  // Skills icons
  Code: 'code',
  Database: 'database',
  Globe: 'globe',
  Smartphone: 'mobile',
  Server: 'server',
  Palette: 'palette',

  // About section icons
  Trophy: 'trophy',
  Coffee: 'coffee',
  Lightbulb: 'lightbulb',
  Target: 'bullseye',
  Heart: 'heart',
  ArrowRight: 'arrow-right',

  // UI component icons
  CheckIcon: 'check',
  ChevronRightIcon: 'chevron-right',
  ChevronLeftIcon: 'chevron-left',
  ChevronUpIcon: 'chevron-up',
  ChevronDownIcon: 'chevron-down',
  CircleIcon: 'circle',
  MoreHorizontal: 'ellipsis-h',
  SearchIcon: 'search',
  XIcon: 'times',
  MinusIcon: 'minus',
  GripVerticalIcon: 'grip-vertical',
  Loader2Icon: 'spinner',
  PanelLeftIcon: 'bars'
} as const;

export type FontAwesomeIconName = keyof typeof iconMap;