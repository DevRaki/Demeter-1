import React from 'react'
import { useForm } from 'react-hook-form';
import { useSupplier } from '../Context/Supplier.context'; 

function ModalSupplier({ onClose, onCreated }) {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { createSupplier, supplier } = useSupplier();

  return (
    <div>ModalSupplier</div>
  )
}

export default ModalSupplier