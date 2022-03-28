import { ReactChild, ReactFragment, ReactPortal } from "react";
import getGreetingTime from "utils/getGreetingTime";

function Footer(props: {
  t: (
    arg0: string,
    arg1: { date: Date; context: string },
  ) => boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) {
  return <div>{props.t("footer.date", { date: new Date(), context: getGreetingTime() })}</div>;
}

export default Footer;
