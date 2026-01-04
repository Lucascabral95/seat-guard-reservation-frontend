export interface CookieType {
  name: string;
  provider: string;
  duration: string;
  purpose: string;
  category: 'necessary' | 'analytics' | 'functional';
}
