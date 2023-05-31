import { ButtonDashboard } from "@/components/ButtonDashboard";
import { useStep } from "@/contexts/steps";
import { BsPersonCircle } from "react-icons/bs";
import { WalletIcon } from "../components/WalletIcon";

export const Step1 = () => {
  const { setStep } = useStep();

  return (
    <>
      <ButtonDashboard
        leftIcon={<BsPersonCircle size={"33px"} color="#C1FD35" />}
        label={"Transferência bancária"}
      />

      <ButtonDashboard
        label={"Selecionar cartão"}
        onClick={() => setStep(2)}
        leftIcon={<WalletIcon />}
      />
    </>
  );
};
