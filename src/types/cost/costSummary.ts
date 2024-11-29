interface CostSummaryType {
  date: string;
  amount: number;
  description: string;
  note?: string;
  file: File;
}

export default CostSummaryType;