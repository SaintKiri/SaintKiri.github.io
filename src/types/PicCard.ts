export type PicCard = {
  title: string;
  description: React.ReactNode; // Supports (styled) string
  languageIcons: string[];

  backgroundPicURL?: string;

  url: string;
}