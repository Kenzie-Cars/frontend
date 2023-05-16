import { ReactNode, createContext, useState } from "react";
import { IAdvertisementResponse } from "../interfaces/advertisement";

export interface IProductCardContext {
  currentAdvertisement: IAdvertisementResponse;
  setCurrentAdvertisement: React.Dispatch<
    React.SetStateAction<IAdvertisementResponse>
  >;
}

interface IProductCardContextProps {
  children: ReactNode;
}

export const ProductCardContext = createContext({} as IProductCardContext);

export const CurrentProductCardProvider = ({
  children,
}: IProductCardContextProps) => {
  const [currentAdvertisement, setCurrentAdvertisement] =
    useState<IAdvertisementResponse>({} as IAdvertisementResponse);

  return (
    <ProductCardContext.Provider
      value={{
        currentAdvertisement,
        setCurrentAdvertisement,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
