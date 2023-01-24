import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import getSuppliers from "../../services/getSuppliers";
import { addData } from "../../reducers/getSuppliersSlice";

const TableCustom = () => {
  const dispatcher = useDispatch();
  const dataSuppliers = useSelector((state) => state.getSuppliersReducer);

  useEffect(() => {
    getSuppliers("/api/get-all-suppliers").then((data) =>
      dispatcher(addData(data))
    );
  }, []);

  useEffect(() => {}, [dataSuppliers]);

  console.log(dataSuppliers);

  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="shadow-sm p-3 mb-2 bg-white rounded"
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ubicación</th>
            <th>Giro del proveedor</th>
            <th>Clave del giro</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {dataSuppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td>{supplier.name}</td>
              <td>{supplier.email}</td>
              <td>{supplier.location}</td>
              <td>{supplier.suppliers}</td>
              <td>{supplier.twistkey}</td>
              <td>{supplier.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCustom;
