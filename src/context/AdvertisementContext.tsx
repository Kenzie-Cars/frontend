import { ReactNode, createContext, useEffect, useState } from "react";
import { RequestApiKenzieKars } from "../Requests/RequestApiKenzieKars";
import { IAdvertisementResponse } from "../interfaces/advertisement";

export const AdvertisementContext = createContext({} as IAdvContext);

interface IAdvContext {
  advertisements: IAdvertisementResponse[];
  setAdvertisements: React.Dispatch<
    React.SetStateAction<IAdvertisementResponse[]>
  >;
  deleteCarById: any
  setCarDeleteId: any
  setStatusModalDelete: any
  statusModalDelete: string

}

interface IAdvProps {
  children: ReactNode;
}

export const AdvProvider = ({ children }: IAdvProps) => {
  const [carDeleteId, setCarDeleteId] = useState<string>("")
  const [statusModalDelete, setStatusModalDelete] = useState<string>("modalOff")


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

  const deleteCarById = async () => {
    try {
      await RequestApiKenzieKars.delete(`advertisements/${carDeleteId}`);
      setStatusModalDelete("modalOff")
      console.log(carDeleteId)
      await getAdvertisements()
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <AdvertisementContext.Provider
      value={{
        advertisements,
        setAdvertisements,
        deleteCarById,
        setCarDeleteId,
        setStatusModalDelete,
        statusModalDelete
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
