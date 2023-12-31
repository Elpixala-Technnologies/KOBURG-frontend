import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Cascader, Input } from "antd";
const { TextArea } = Input;
import Swal from "sweetalert2";
import { createProductUrl } from "@/src/Utils/Urls/ProductUrl";
import useProducts from "@/src/Hooks/useProducts";
import { FaTrashAlt } from "react-icons/fa";
import LinearProgress from '@mui/material/LinearProgress';

import { Select, MenuItem, Checkbox, ListItemText, FormControl, InputLabel } from '@mui/material';

const AddProduct = () => {
  // ==== Cloudinary ====
  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
  const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

  const { handleSubmit, register } = useForm();
  const { categoryData } = useProducts();
  const [loading, setLoading] = useState(false);


  const [color, setColor] = useState([
    {
      color: "",
      sizes: [{ size: "" }],
      images: [],
    },
  ]);

  const addColor = () => {
    setColor((prevColors) => [
      ...prevColors,
      {
        color: "",
        sizes: [{ size: "" }],
        images: [],
      },
    ]);
  };

  const removeColor = (colorIndex) => {
    const updatedColors = [...color];
    updatedColors.splice(colorIndex, 1);
    setColor(updatedColors);
  };


  const uploadImageToCloudinary = async (file, onUploadProgress) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("public_id", `${cloud_folder}/Product/${file?.name}`);
    formData.append("upload_preset", upload_preset);
    formData.append("cloud_name", cloud_name);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", cloud_api, true);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          onUploadProgress(progress);
        }
      };
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response.secure_url);
        } else {
          reject("Upload failed");
        }
      };
      xhr.onerror = () => reject("Error during upload");
      xhr.send(formData);
    });
  };

  const [uploadProgress, setUploadProgress] = useState({});

  const handleImageChange = async (event, colorIndex) => {
    const updatedColors = [...color];
    const selectedFiles = Array.from(event.target.files);

    for (const file of selectedFiles) {
      setUploadProgress(prevProgress => ({ ...prevProgress, [file.name]: 0 }));

      try {
        const imageUrl = await uploadImageToCloudinary(file, (progress) => {
          setUploadProgress(prevProgress => ({ ...prevProgress, [file.name]: progress }));
        });

        if (imageUrl) {
          updatedColors[colorIndex].images.push(imageUrl);
          // Remove the file's progress from state to hide the progress bar
          setUploadProgress(prevProgress => {
            const newProgress = { ...prevProgress };
            delete newProgress[file.name];
            return newProgress;
          });
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
    setColor(updatedColors);
  };


  // const onChange = (event, colorIndex, sizeIndex) => {
  //   setColor((prevColors) => {
  //     const updatedColors = [...prevColors];

  //     if (event.target.name === "color") {
  //       updatedColors[colorIndex].color = event.target.value;
  //     } else if (event.target.name === "quantity1") {
  //       updatedColors[colorIndex].quantity = event.target.value;
  //     } else if (event.target.name === "isSizeApplicable") {
  //       updatedColors[colorIndex].isSizeApplicable = event.target.checked;
  //       if (!event.target.checked) {
  //         updatedColors[colorIndex].sizes = [];
  //       }
  //     } else if (event.target.name === "size") {
  //       if (!updatedColors[colorIndex].sizes[sizeIndex]) {
  //         updatedColors[colorIndex].sizes[sizeIndex] = {};
  //       }
  //       updatedColors[colorIndex].sizes[sizeIndex].size = event.target.value;
  //     } else if (event.target.name === "quantity") {
  //       if (!updatedColors[colorIndex].sizes[sizeIndex]) {
  //         updatedColors[colorIndex].sizes[sizeIndex] = {};
  //       }
  //       updatedColors[colorIndex].sizes[sizeIndex].quantity =
  //         event.target.value;
  //     } else {
  //       updatedColors[colorIndex][event.target.name] = event.target.value;
  //     }
  //     return updatedColors;
  //   });
  // };

  const onChange = (event, colorIndex, sizeIndex) => {
    setColor((prevColors) => {
      const updatedColors = [...prevColors];
      const { name, value } = event.target;

      switch (name) {
        case "color":
          // Update the color
          updatedColors[colorIndex].color = value;
          break;
        case "size":
          // Ensure the sizes array exists and is properly initialized
          if (!updatedColors[colorIndex].sizes[sizeIndex]) {
            updatedColors[colorIndex].sizes[sizeIndex] = { size: "" };
          }
          // Update the size
          updatedColors[colorIndex].sizes[sizeIndex].size = value;
          break;
        case "images":
          // Ensure the images array exists and is properly initialized
          if (!updatedColors[colorIndex].images[sizeIndex]) {
            updatedColors[colorIndex].images[sizeIndex] = { images: "" };
          }
          // Update the images
          updatedColors[colorIndex].images[sizeIndex].images = value;
          break;

        default:
          // Handle other types of inputs generically, if there are any
          updatedColors[colorIndex][name] = value;
      }

      return updatedColors;
    });
  };


  // add size +++++
  const addSize = (colorIndex) => {
    setColor((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors[colorIndex].sizes.push({ size: "" });
      return updatedColors;
    });
  }

  // remove size +++++

  const removeSize = (colorIndex, sizeIndex) => {
    setColor((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors[colorIndex].sizes.splice(sizeIndex, 1);
      return updatedColors;
    });
  }




  // ===== category +++++

  // ===
  const productDetailTamplate = {
    heading: "",
    details: ""
  }
  const [description, setdescription] = useState([productDetailTamplate]);

  const addDetails = () => {
    setdescription([...description, productDetailTamplate])
  }

  const removeDetails = (index) => {
    const newDetails = description.filter((description, i) => i !== index);
    setdescription(newDetails)
  }
  const onChangeDetail = (event, index) => {
    const updatedDetails = description.map((item, i) => {
      if (i === index) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setdescription(updatedDetails);
  };


  const featuresTamplate = {
    heading: "",
    details: ""
  }

  const [features, setfeatures] = useState([featuresTamplate]);

  const addfeatures = () => {
    setfeatures([...features, featuresTamplate])
  }

  const removefeatures = (index) => {
    const newfeatures = features.filter((features, i) => i !== index);
    setfeatures(newfeatures)
  }

  const onChangefeatures = (event, index) => {
    const updatedfeatures = features.map((item, i) => {
      if (i === index) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setfeatures(updatedfeatures);
  };


  const additionalInfoTamplate = {
    heading: "",
    details: ""
  }

  const [additionalInfo, setAdditonalInfo] = useState([additionalInfoTamplate]);

  const addadditionalInfo = () => {
    setAdditonalInfo([...additionalInfo, additionalInfoTamplate])
  }

  const removeadditionalInfo = (index) => {
    const newadditionalInfo = additionalInfo.filter((additionalInfo, i) => i !== index);
    setAdditonalInfo(newadditionalInfo)
  }

  const onChangeadditionalInfo = (event, index) => {
    const updatedadditionalInfo = additionalInfo.map((item, i) => {
      if (i === index) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setAdditonalInfo(updatedadditionalInfo);
  };


  const handleDeleteImage = (colorIndex, imageIndex) => {
    const updatedColors = [...color];
    updatedColors[colorIndex].images.splice(imageIndex, 1);
    setColor(updatedColors);
  };


  const [selectedCategories, setSelectedCategories] = useState([]);

  const prepareCategoryOptions = (categories = [], parentName = null, level = 0) => {
    return categories?.filter(category => category?.parent === parentName)
      .flatMap(category => ([
        { value: category.name, label: category.name, level },
        ...prepareCategoryOptions(categories, category.name, level + 1)
      ]));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const categoryOptions = categoryData ? prepareCategoryOptions(categoryData) : [];

  const onSubmit = async (inputValue) => {
    try {
      setLoading(true);
      const productData = {
        name: inputValue.name,
        categories: selectedCategories,
        brand: inputValue.brand,
        price: inputValue.price,
        discount: inputValue.discountPercentage,
        type: inputValue.type,
        status: inputValue.status,
        description: description,
        features: features,
        additionalInfo: additionalInfo,
        colors: color,
        amazonlink: inputValue.amazonlink,
        flipcartlink: inputValue.flipcartlink,
        myntralink: inputValue.myntralink,
      };

      const res = await fetch(createProductUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const dataRes = await res.json();

      if (!dataRes) {
        Swal.fire({
          position: "center",
          timerProgressBar: true,
          title: "Something went wrong!",
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
          title: "Successfully Added!",
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
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Something went wrong!",
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
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="my-4">
      <div className="flex flex-col w-full gap-4 mx-auto add-book-form">
        <div className="add-book-form w-full md:w-[60%] mx-auto flex flex-col gap-4 ">
          <div
            className="border-2 border-gray-300 rounded-md p-2"
          >
            <input
              type="text"
              placeholder="Product Name"
              className="w-full border-2 border-gray-300 rounded-md p-2"
              {...register("name")}
            />
          </div>

          <FormControl fullWidth>
            {/* <InputLabel>Categories</InputLabel> */}
            <Select
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {categoryOptions.map((category) => (
                <MenuItem key={category.value} value={category.value}
                  style={{ marginLeft: `${category.level * 20}px` }}>
                  <Checkbox checked={selectedCategories.indexOf(category.value) > -1} />
                  <ListItemText primary={category.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="border-2 border-gray-300 rounded-md p-2 w-full">
            <input
              type="text"
              placeholder="Brand"
              className="border-2 border-gray-300 rounded-md p-2 w-full"
              {...register("brand")}
            />
          </div>
          <div className="border-2 border-gray-300 rounded-md p-2 w-full">
            <input
              type="number"
              placeholder="Price"
              className="border-2 border-gray-300 rounded-md p-2 w-full"
              {...register("price")}
            />
          </div>

          <div className="border-2 border-gray-300 rounded-md p-2 w-full">

            <input
              type="number"
              placeholder="Discount Percentage"
              className="border-2 border-gray-300 rounded-md p-2 w-full"
              {...register("discountPercentage")}
            />
          </div>

          <select
            name="status"
            id="status"
            className="border-2 border-gray-300 rounded-md p-2"
            {...register("status")}
          >
            <option value="status">Status</option>
            <option
              value="Tranding"
              className="border-2 border-gray-300 rounded-md p-4 my-2"
            >
              Tranding
            </option>
            <option
              value="New Arrival"
              className="border-2 border-gray-300 rounded-md p-4 my-2"
            >
              New Arrival
            </option>
            <option
              value="Best Seller"
              className="border-2 border-gray-300 rounded-md p-4 my-2"
            >
              Best Seller
            </option>
            <option
              value="Featured"
              className="border-2 border-gray-300 rounded-md p-4 my-2"
            >
              Featured
            </option>

            <option
              value="Popular"
              className="border-2 border-gray-300 rounded-md p-4 my-2"
            >
              Popular
            </option>
          </select>


          <div className='flex flex-col gap-4'>
            <h1 className='my-2'>description</h1>
            {
              description.map((description, index) => {
                return (
                  <section
                    key={index}
                    className=""
                  >
                    <div className="form-control w-full">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="heading"
                          onChange={(event) => onChangeDetail(event, index)}
                          value={description.heading}
                          placeholder="heading"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>

                    <div className="form-control w-full my-2">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="details"
                          onChange={(event) => onChangeDetail(event, index)}
                          value={description.details}
                          placeholder="description"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>


                    <div>
                      <button
                        className="commonBtn flex items-center gap-2"
                        onClick={() => removeDetails(index)}
                      >
                        <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                        Delete
                      </button>
                    </div>
                  </section>
                )
              })
            }
            <button className="commonBtn" onClick={() => addDetails()}>
              Add More Details
            </button>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='my-2'>features</h1>
            {
              features.map((features, index) => {
                return (
                  <section
                    key={index}
                    className=""
                  >
                    <div className="form-control w-full">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="heading"
                          onChange={(event) => onChangefeatures(event, index)}
                          value={features.heading}
                          placeholder="heading"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>

                    <div className="form-control w-full my-2">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="details"
                          onChange={(event) => onChangefeatures(event, index)}
                          value={features.details}
                          placeholder="description"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>


                    <div>
                      <button
                        className="commonBtn flex items-center gap-2"
                        onClick={() => removefeatures(index)}
                      >
                        <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                        Delete
                      </button>
                    </div>
                  </section>
                )
              })
            }
            <button className="commonBtn" onClick={() => addfeatures()}>
              Add More features
            </button>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='my-2'>Additional Info</h1>
            {
              additionalInfo.map((info, index) => {
                return (
                  <section
                    key={index}
                    className=""
                  >
                    <div className="form-control w-full">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="heading"
                          onChange={(event) => onChangeadditionalInfo(event, index)}
                          value={info.heading}
                          placeholder="heading"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>

                    <div className="form-control w-full my-2">
                      <div className='border p-2'>
                        <input
                          type="text"
                          name="details"
                          onChange={(event) => onChangeadditionalInfo(event, index)}
                          value={info.details}
                          placeholder="details"
                          className="border-2 w-full border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </div>


                    <div>
                      <button
                        className="commonBtn flex items-center gap-2"
                        onClick={() => removeadditionalInfo(index)}
                      >
                        <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                        Delete
                      </button>
                    </div>
                  </section>
                )
              })
            }
            <button className="commonBtn" onClick={() => addadditionalInfo()}>
              Add More Additonal Info
            </button>
          </div>


          <div
            className="border-2 border-gray-300 rounded-md p-2"
          >
            <input
              type="text"
              placeholder="Amazon Link"
              className="w-full border-2 border-gray-300 rounded-md p-2"
              {...register("amazonlink")}
            />
          </div>
          <div
            className="border-2 border-gray-300 rounded-md p-2"
          >
            <input
              type="text"
              placeholder="Flipcart Link"
              className="w-full border-2 border-gray-300 rounded-md p-2"
              {...register("flipcartlink")}
            />
          </div>
          <div
            className="border-2 border-gray-300 rounded-md p-2"
          >
            <input
              type="text"
              placeholder="Myntra Link"
              className="w-full border-2 border-gray-300 rounded-md p-2"
              {...register("myntralink")}
            />
          </div>


          {/* ========color ========= */}

          <div>
            {color &&
              color?.map((item, colorIndex) => (
                <div
                  key={colorIndex}
                  className="border-2 border-gray-300 rounded-md p-4 my-2"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Color: </span>
                    </label>
                    <div className="border-2 w-full border-gray-300 rounded-md p-2 w-full">
                      <input
                        type="text"
                        name="color"
                        value={item.color}
                        onChange={(event) => onChange(event, colorIndex)}
                        placeholder="Color"
                        className="border-2 w-full border-gray-300 rounded-md p-2 w-full"
                      />
                    </div>
                  </div>

                  {/*  for size */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Size: </span>
                    </label>
                    <div className="flex flex-col gap-4">
                      {item.sizes && item.sizes.map((size, sizeIndex) => {
                        return (
                          <div key={sizeIndex} className="flex gap-4 ">
                            <div className="border-2 w-full border-gray-300 rounded-md p-2 w-full">
                              <input
                                type="text"
                                name="size"
                                value={size.size}
                                onChange={(event) => onChange(event, colorIndex, sizeIndex)}
                                placeholder="Size"
                                className="border-2 w-full border-gray-300 rounded-md p-2 w-full"
                              />
                            </div>
                            <button
                              className="commonBtn flex items-center gap-2"
                              onClick={() => removeSize(colorIndex, sizeIndex)}
                            >
                              <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                              Delete
                            </button>
                          </div>
                        )
                      })}
                      <button className="commonBtn" onClick={() => addSize(colorIndex)}>
                        Add More Size
                      </button>
                    </div>
                  </div>

                  <div className="form-control my-4">
                    <div className="w-full h-full">
                      <div className="rounded-lg shadow-xl bg-gray-50 p-4">
                        <label className="inline-block mb-2 text-gray-500">
                          Upload Product Image
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col w-full max-w-xs md:max-w-md h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Attach file{" "}
                              </p>
                            </div>
                            <input
                              type="file"
                              name={`images-${colorIndex}`}
                              accept="image/*"
                              multiple
                              onChange={(event) =>
                                handleImageChange(event, colorIndex)
                              }
                              className="px-4 pb-4"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* ------ show seleted image------- */}

                      <div className="flex gap-4 my-4">
                        {item.images &&
                          item.images.map((image, index) => (
                            <div key={index} className="relative w-1/2">
                              <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                              <button className="absolute top-0 right-0 m-2 p-2 bg-red-500 text-white rounded-full"
                                onClick={() => handleDeleteImage(colorIndex, index)}
                              >
                                {/* Replace with your preferred delete icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))
                        }
                        {Object.keys(uploadProgress).map((fileName) => (
                          <div key={fileName} className="w-full my-2">
                            <p className="text-sm text-gray-600 mb-1">{fileName}</p>
                            <LinearProgress variant="determinate" value={uploadProgress[fileName]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    className="commonBtn flex items-center justify-center"
                    onClick={() => removeColor(colorIndex)}
                  >
                    <FaTrashAlt className="text-2xl mr-2" />
                    Delete Color
                  </button>
                </div>
              ))}
            <button className="btn commonBtn mx-4" onClick={addColor}>
              Add Color
            </button>
          </div>

          {/* ========color ========= */}

          <button
            style={{
              marginTop: "20px",
            }}
            onClick={handleSubmit(onSubmit)}
            className="commonBtn"
          >
            {loading ? "Loading..." : "Add Product"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
