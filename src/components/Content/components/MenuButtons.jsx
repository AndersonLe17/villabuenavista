import { ButtonCustom } from "../../ButtonCustom";

const MenuButtons = ({ isCreator, isReporter, children }) => {
  return (
    <div className="py-4 row justify-content-between">
      <div className="col">
        {isCreator && <ButtonCustom className="px-5 w-auto" variant="basic" text="Agregar" />}
      </div>
      <div className="col d-flex justify-content-end">
        {children}
        {isReporter && <ButtonCustom className="ms-2 px-4 w-auto" variant="dark" text="Generar Reporte" />}
      </div> 
    </div>
  );
};

export default MenuButtons;
