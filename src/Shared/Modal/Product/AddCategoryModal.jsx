import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { createCategoryUrl } from '@/src/Utils/Urls/ProductUrl';
import useProducts from '@/src/Hooks/useProducts';

const AddCategoryModal = ({ isCategoryModalOpen, setIsCategoryModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {refetchAllCategory} = useProducts()

  const handleCancel = () => {
    setIsCategoryModalOpen(false);
  };

  const onSubmit = async (data) => {
    const res = await fetch(createCategoryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.category,
      }),
    });
    const dataRes = await res.json();

    if (!dataRes) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Somthing wento wrang !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "error",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Product Added!",
        iconColor: "#ED1C24",
        toast: true,
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
      refetchAllCategory();
    }

  }


  return (
    <Modal title="Add Category" 
    open={isCategoryModalOpen} 
    onCancel={handleCancel}
    okButtonProps={{ style: { display: 'none' } }} 
    >
      <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <div className="w-full">
              <input
                type="text"
                className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                placeholder="Category Name"
                name="category"
                {...register("category")}
                required
              />
            </div>
          </div>

          <div className="">
            <button className="mb-5 common-btn">Create Category</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategoryModal;