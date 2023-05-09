import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { RequestApiKenzieKars } from "../Requests/RequestApiKenzieKars";
import { IAdvertisementResponse } from "../interfaces/advertisement";

export const AdvertisementContext = createContext({} as IAdvContext);

interface IAdvContext {
  advertisements: IAdvertisementResponse[];
  setAdvertisements: React.Dispatch<
    React.SetStateAction<IAdvertisementResponse[]>
  >;
  deleteCarById: () => Promise<void>;
  setCarDeleteId: Dispatch<SetStateAction<string>>;
  setStatusModalDelete: Dispatch<SetStateAction<string>>;
  statusModalDelete: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  deleteComments: (id?: string) => Promise<number | undefined>
  setCommentId: Dispatch<SetStateAction<string>>
  statusCommentsModal: string
  setStatusCommentsModal: Dispatch<SetStateAction<string>>
  updateComments: (commentData: string) => Promise<number | undefined>
  valueComment: string
  setValueComment: Dispatch<SetStateAction<string>>
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

  const [commentId, setCommentId] = useState<string>("")
  const [statusCommentsModal, setStatusCommentsModal] = useState<string>('modalOff')
  const [valueComment, setValueComment] = useState<string>('')

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

  const deleteComments = async (id?: string) => {
    try {
      setLoading(true);
      const response = await RequestApiKenzieKars.delete(`advertisements/comments/${commentId || id}`);
      setStatusCommentsModal('modalOff')
      setCommentId('')
      return response.status
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const updateComments = async (commentData: string) => {
    try {
      console.log(commentData)
      setLoading(true);
      const response = await RequestApiKenzieKars.patch(`advertisements/comments/${commentId}`, commentData);
      setStatusCommentsModal('modalOff')
      setCommentId('')
      return response.status
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
        deleteComments,
        setCommentId,
        statusCommentsModal,
        setStatusCommentsModal,
        updateComments,
        setValueComment,
        valueComment
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
