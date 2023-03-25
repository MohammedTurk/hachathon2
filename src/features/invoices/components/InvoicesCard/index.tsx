import { useRouter } from "next/router";
import { Card, Logo, IconButton } from "components";
import { ChevronLeftIconMini } from "lib/@heroicons";

export const InvoicesCard = ({
  children,
  className,
  formTitle,
  formCaption,
  withBackButton = false,
  ...rest
}) => {
  const router = useRouter();
  const cardClassName = `mt-20 w-full max-w-[400px] relative py-8 px-6 min-[440px]:px-12 ${
    className || ""
  }`;

  return (
    <Card {...rest} className={cardClassName}>
      <div>
        {formTitle && <h6 className="text-xl my-4">{formTitle}</h6>}
        {children}
      </div>
      {/* {formCaption && <p className="text-sm text-center mt-8">{formCaption}</p>} */}
    </Card>
  );
};

export default InvoicesCard;