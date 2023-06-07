import { ButtonCustom } from "../../ButtonCustom";

const MenuButtons = ({ isCreator, isReporter, children, onClickCreator }) => {
  return (
    <div className="py-3 row justify-content-between">
      <div className="col">
        {isCreator && <ButtonCustom className="px-5 w-auto" variant="basic" text="Agregar" onClick={onClickCreator} />}
      </div>
      <div className="col d-flex justify-content-end">
        {children}
        {isReporter && <ButtonCustom className="ms-2 px-4 w-auto" variant="dark" text="Generar Reporte" />}
      </div> 
    </div>
  );
};

export default MenuButtons;
