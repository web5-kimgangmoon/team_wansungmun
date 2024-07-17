export interface Product {
  getName(): string;
  getContent(): string;
  getCreatedAt(): string;
  getScore(): number;
}

export class Product implements Product {
  private name: string;
  private content: string;
  private createdAt: string;
  private score: number;
}
