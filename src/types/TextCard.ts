export type TextCard = {
  companyName: string;
  date: string;
  location?: string;
  companyURL: [text: string, url: string];

  descriptionTitle: string;
  description: string;
}