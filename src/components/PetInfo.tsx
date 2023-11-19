import Wrapper from "../assets/wrappers/petInfo";

export type TPetInfo = {
  icon: React.ReactElement | string;
  text?: string;
};

const PetInfo = ({ icon, text }: TPetInfo) => {
  return (
    <Wrapper>
      {text ? <span className="text">{text}</span> : null}
      <span className="icon">{icon}</span>
    </Wrapper>
  );
};
export default PetInfo;
