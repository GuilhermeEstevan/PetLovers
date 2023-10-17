import Wrapper from "../assets/wrappers/petInfo";

export type TPetInfo = {
  icon: React.ReactElement | string;
  text: string;
};

const PetInfo = ({ icon, text }: TPetInfo) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};
export default PetInfo;
