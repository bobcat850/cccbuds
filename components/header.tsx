import Image from "next/image";
import { Aurora } from "./Aurora";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import {
  accountAbstraction,
  appMetadata,
  client,
  wallets,
} from "../utils/constants";

const Header: React.FC = () => {
  const address = useActiveAccount()?.address;
  return (
    <header className="w-full p-4 mb-12">
      <Aurora
        size={{ width: "1800px", height: "700px" }}
        pos={{ top: "0%", left: "50%" }}
        color="hsl(277deg 59% 39% / 20%)"
      />
      <div className="flex items-center justify-between max-w-5xl mx-auto ">
        <div>
          <Image
            className="md:hidden"
            width={48}
            height={48}
            src="/ccc.svg"
            alt="ccc"
          />
          <Image
            className="hidden md:block"
            width={32}
            height={32}
            src="/logo.png"
            alt="ccc"
          />
        </div>

        <div className="max-w-xs">
          {address ? (
            <ConnectButton
              client={client}
              appMetadata={appMetadata}
              wallets={wallets}
              accountAbstraction={accountAbstraction}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
