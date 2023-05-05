import { useEffect, useState } from "react";
import Modal from "../Modal";
import { Input, Select, Textarea } from "../input";
import { ButtonContainerStyle, FormRegisterAdvertiseStyle } from "../FormCreateAdvertise/style";
import Button from "../button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAdvertisementRequest, IAdvertisementResponse } from "../../interfaces/advertisement";
import { CreateAdvertiseSchema } from "../../schema/CreateAdvertiseSchema";
import { RequestApiFIPE } from "../../Requests/RequestApiFIPE";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";
import { toast } from "react-toastify";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { useContext } from "react";

interface Iprops {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  advertisementData: IAdvertisementResponse
}

export const FormUpdateAdvertisement = ({ setIsOpen, isOpen, advertisementData }: Iprops) => {

  const [id, ...rest] = Object.values(advertisementData.images[0])

  const [brands, setBrands] = useState([""]);
  const [brandValue, setBrandValue] = useState("");
  const [models, setModels] = useState<string[]>([""]);
  const [modelValue, setModelValue] = useState("");
  const [years, setYears] = useState<string[]>([""]);
  const [yearValue, setYearValue] = useState("");
  const [fuel, setFuel] = useState([""]);
  const [fuelValue, setFuelValue] = useState("");
  const [kmValue, setkmValue] = useState(advertisementData.km)
  const [colorValue, setColorValue] = useState(advertisementData.color)
  const [priceValue, setPriceValue] = useState(advertisementData.price)
  const [descValue, setDescValue] = useState(advertisementData.description)
  const [coverValue, setCoverValue] = useState(advertisementData.cover_img)
  const [FIPE, setFIPE] = useState<number>();
  const [inputImage, setInputImage] = useState([1, 2]);
  const [isActive, setIsActive] = useState(advertisementData.is_active);
  const [imageValueArray, setImageValueArray] = useState(rest)

  const imageValueArrayHandler = rest

  const { setStatusModalDelete, setCarDeleteId } = useContext(AdvertisementContext)

  const setCarDeleteFunction = () => {
    setStatusModalDelete("modalOn")
    setCarDeleteId(advertisementData.id)
    // console.log(id)
  }

  useEffect(() => {
    async function ApiFIPE() {
      try {
        const { data } = await RequestApiFIPE.get("cars");
        setBrands(Object.keys(data));
      } catch (error) {
        console.log(error);
      }
    }
    ApiFIPE();
  }, [brandValue]);

  useEffect(() => {
    if (brandValue) {
      const findModels = async () => {
        try {
          const { data } = await RequestApiFIPE.get(`cars?brand=${brandValue}`);
          const name = data.map((car: any) => car.name);
          setModels(name);
        } catch (error) {
          console.log(error);
        }
      };
      findModels();
    }
  }, [brandValue]);

  useEffect(() => {
    if (modelValue) {
      const findYears = async () => {
        try {
          const { data } = await RequestApiFIPE.get(
            `cars/?brand=${brandValue}`,
          );

          const model = data.filter((car: any) => {
            return car.name == modelValue;
          });

          setYears(Array(model[0].year));

          if (model[0].fuel === 1) {
            setFuel(["Flex"]);
          } else if (model[0].fuel === 2) {
            setFuel(["Híbrido"]);
          } else if (model[0].fuel === 3) {
            setFuel(["Elétrico"]);
          }

          setFIPE(model[0].value);
        } catch (error) {
          console.log(error);
        }
      };
      findYears();
    }
  }, [modelValue]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAdvertisementRequest>({
    resolver: yupResolver(CreateAdvertiseSchema),
  });

  const addInputImage = () => {
    if (inputImage.length < 6) {
      setInputImage([...inputImage, inputImage.length + 1]);
    }
  };

//   for (let value of Object.values(advertisementData.images[0])){

//         if(value.length > 2){
//             addInputImage()
//         }
//     }

    useEffect(() => {
        if(isOpen){
                const fetchCurrentData = async () => {
            
                setBrandValue(advertisementData.brand)
                setModelValue(advertisementData.model)
                setFuelValue(advertisementData.fuel)
                setYearValue(advertisementData.year.toString())
            }
            fetchCurrentData()
        }
    }, [isOpen])

  const submitForm = async (data: IAdvertisementRequest) => {
    const token = localStorage.getItem("@userTokenKenzieKars");
    const userId = localStorage.getItem("@userIdKenzieKars");

    let {
      FIPE_price,
      brand,
      color,
      description,
      fuel,
      km,
      model,
      price,
      year,
      is_active,
      is_goodSale,
      cover_img,
      ...rest
    } = data;

    is_active = isActive;

    if (FIPE_price > price) {
      is_goodSale = true;
    } else {
      is_goodSale = false;
    }

    const images = Array(rest);

    let advertisement = {
      brand,
      color,
      description,
      fuel,
      km,
      model,
      price,
      year,
      cover_img,
      images: images,
      userId,
      is_goodSale,
      is_active,
    };

    console.log(advertisement)

    try {
      await RequestApiKenzieKars.patch(`advertisements/${advertisementData.id}`, advertisement, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Anúncio editado com sucesso", {
        autoClose: 1500,
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Não foi possível editar o anúncio", {
        autoClose: 1500,
      });
    } finally {
      window.location.reload();
    }
};

  return (
    <Modal headerTitle="Editar anúncio" setIsOpen={setIsOpen} isOpen={isOpen}>
      <FormRegisterAdvertiseStyle onSubmit={handleSubmit(submitForm)}>
        <h3>Informações do veículo</h3>
        <Select
          label="Marca"
          id="brand"
          register={register}
          errors={errors?.brand?.message}
          setSelect={setBrandValue}
          optionValues={brands}
          value={brandValue}
          selectedValue={brandValue}
        />

        <Select
          label="Modelo"
          id="model"
          register={register}
          errors={errors?.model?.message}
          setSelect={setModelValue}
          optionValues={models}
          disabled={brandValue ? false : true}
          value={modelValue}
          selectedValue={modelValue}
        />

        <div className="selectContainer">
          <Select
            label="Ano"
            id="year"
            register={register}
            errors={errors?.year?.message}
            setSelect={setYearValue}
            optionValues={years}
            disabled={brandValue && modelValue ? false : true}
            selectedValue={yearValue}
          />

          <Select
            label="Combustível"
            id="fuel"
            register={register}
            errors={errors?.fuel?.message}
            setSelect={setFuelValue}
            optionValues={fuel}
            disabled={brandValue && modelValue && yearValue ? false : true}
            selectedValue={fuelValue}
          />
        </div>

        <div className="inputContainer">
          <Input
            id="km"
            label="Quilometragem"
            type="text"
            placeholder={"Ex.: 30.000"}
            register={register}
            errors={errors?.km?.message}
            defaultValue={kmValue}
            setValue={(e) => setkmValue(Number(e.currentTarget.value))}
          />

          <Input
            register={register}
            id="color"
            label="Cor"
            type="text"
            placeholder={"Ex.: Branco"}
            errors={errors?.color?.message}
            defaultValue={colorValue}
            setValue={(e) => setColorValue(e.currentTarget.value)}
          />
        </div>

        <div className="inputContainer">
          <Input
            register={register}
            id="FIPE_price"
            label="Preço tabela FIPE"
            type="text"
            value={fuelValue ? FIPE : 0}
            errors={errors?.FIPE_price?.message}
            readOnly={true}
          />

          <Input
            id="price"
            label="Preço"
            type="text"
            placeholder={"Ex.: 50.000,00"}
            register={register}
            errors={errors?.price?.message}
            defaultValue={priceValue}
            setValue={(e) => setPriceValue(Number(e.currentTarget.value))}
          />
        </div>

        <Textarea
          register={register}
          id="description"
          label="Descrição"
          length={500}
          placeHolder="Escreva detalhes do seu veículo"
          row={3}
          errors={errors?.description?.message}
          defaultValue={descValue}
          setValue={setDescValue}
        />

        <div className="div--buttons">
          <h3>Publicado</h3>
          <Button
            size={"2"}
            hover={"hover2"}
            background={"whiteFixed"}
            color={"grey0"}
            onClick={() => {
              setIsActive(true);
            }}
            border={"2px solid var(--grey0)"}
            type={"button"}
            text="Sim"
            is_active={"brand1"}
          />

          <Button
            size={"2"}
            hover={"hover1"}
            background={"whiteFixed"}
            color={"grey0"}
            border={"2px solid var(--grey0)"}
            onClick={() => {
              setIsActive(false);
            }}
            type={"button"}
            text="Não"
            is_active={"brand1"}
          />
        </div>

        <Input
          register={register}
          id="cover_img"
          label="Imagem da capa"
          type="text"
          placeholder={"Ex.: https://image.com"}
          errors={errors?.cover_img?.message}
          defaultValue={coverValue}
          setValue={(e) => setCoverValue(e.currentTarget.value)}
        />

        {imageValueArrayHandler.map((image, index) => (
          <Input
            register={register}
            key={index}
            id={`image${index}`}
            label={`${index + 1}ª Imagem da Galeria`}
            type="text"
            placeholder={"Ex.: https://image.com"}
            defaultValue={imageValueArrayHandler[index]}
            setValue={(e) => {
                imageValueArrayHandler[index] = e.currentTarget.value
                setImageValueArray(imageValueArrayHandler)
            }}
            errors={errors?.images?.message}
          />
        ))}

        <Button
          onClick={addInputImage}
          size="5"
          background="brand4"
          color="brand1"
          hover="hover2"
          text="Adicionar campo para imagem da galeria"
          type="button"
          disabled={imageValueArray.length == 6 ? true : false}
        />

        <ButtonContainerStyle>
          <Button
            size="3"
            background="grey6"
            hover="hover2"
            text="Excluir Anúncio"
            color={"grey2"}
            onClick={() => {
              setCarDeleteFunction()
              setIsOpen(false)
            }}
            type="button"
          />

          <Button
            type="submit"
            size="3"
            background="brand3"
            hover="hover2"
            text="Salvar alterações"
            color={"brand4"}
          />
        </ButtonContainerStyle>
      </FormRegisterAdvertiseStyle>
    </Modal>
  );
};
