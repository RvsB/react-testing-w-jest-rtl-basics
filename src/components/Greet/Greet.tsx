import { GreetProps } from "./Greet.interface";

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : "Guest"} </div>;
};
export default Greet;
