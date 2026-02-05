export interface confessionType {
  id: number;
  name: string;
  confession: string;
  minutes: number;
  seconds: number;
  endTime: number;
  reload?: () => void;
}
