type UserProps = {
  username: string;
  age: any | number;
  college:string;
  handleAge?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCollege?:(event: React.ChangeEvent<HTMLInputElement>)=>void
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
export type User = {
  username: string;
  age: any | number;
};
export default UserProps;
