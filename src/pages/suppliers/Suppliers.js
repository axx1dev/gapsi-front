import { useEffect } from "react";
import TableCustom from "../../components/Table/TableCustom";
import { Card } from "react-bootstrap";

const Suppliers = () => {
  return (
    <div>
      <Card className="w-75 shadow p-3 mb-5 bg-white rounded">
        <Card.Title>Gapsi proveedores</Card.Title>
        <Card.Body>
          <TableCustom />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Suppliers;
