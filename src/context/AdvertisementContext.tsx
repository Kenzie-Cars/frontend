import { ReactNode, createContext, useEffect, useState } from "react";
import { RequestApiKenzieKars } from "../Requests/RequestApiKenzieKars";
import { IAdvertisementResponse } from "../interfaces/advertisement";

export const AdvertisementContext = createContext({} as IAdvContext);

interface IAdvContext {
  advertisements: IAdvertisementResponse[];
  setAdvertisements: React.Dispatch<
    React.SetStateAction<IAdvertisementResponse[]>
  >;
}

interface IAdvProps {
  children: ReactNode;
}

export const AdvProvider = ({ children }: IAdvProps) => {
  const [advertisements, setAdvertisements] = useState<
    IAdvertisementResponse[]
  >([] as IAdvertisementResponse[]);

  useEffect(() => {
    const getAdvertisements = async () => {
      try {
        const { data } = await RequestApiKenzieKars.get("advertisements");
        setAdvertisements(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAdvertisements();
  }, []);

  return (
    <AdvertisementContext.Provider
      value={{
        advertisements,
        setAdvertisements,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
