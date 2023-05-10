import { ReactNode, createContext, useEffect, useState } from "react";
import { RequestApiKenzieKars } from "../Requests/RequestApiKenzieKars";
import { IAdvertisementResponse } from "../interfaces/advertisement";

export const AdvertisementContext = createContext({} as IAdvContext);

interface IAdvContext {
  advertisements: IAdvertisementResponse[];
  setAdvertisements: React.Dispatch<
    React.SetStateAction<IAdvertisementResponse[]>
  >;
  deleteCarById: any;
  setCarDeleteId: any;
  setStatusModalDelete: any;
  statusModalDelete: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  deleteComments: (commentId: string) => Promise<void>
}

interface IAdvProps {
  children: ReactNode;
}

export const AdvProvider = ({ children }: IAdvProps) => {
  const [carDeleteId, setCarDeleteId] = useState<string>("");
  const [statusModalDelete, setStatusModalDelete] =
    useState<string>("modalOff");

  const [advertisements, setAdvertisements] = useState<
    IAdvertisementResponse[]
  >([] as IAdvertisementResponse[]);
  const [loading, setLoading] = useState(false);

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
  }, [loading]);

  const deleteCarById = async () => {
    try {
      setLoading(true);
      await RequestApiKenzieKars.delete(`advertisements/${carDeleteId}`);
      setStatusModalDelete("modalOff");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteComments = async (commentId: string) => {
    try {
      setLoading(true);
      await RequestApiKenzieKars.delete(`advertisements/comments/${commentId}`);
      // setStatusModalDelete("modalOff");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        statusModalDelete,
        loading,
        setLoading,
        deleteComments
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
