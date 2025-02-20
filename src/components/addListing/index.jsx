import React, { useState } from "react";
import Header from "../Header";
import carDetails from "@/Shared/carDetails.json";
import features from "@/Shared/features.json"
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "../ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import IconField from "./components/IconField";


const AddListing = () => {

  const [formData, setFormData] = useState([]);
  const [featureData, setFeatureData] = useState([]);

  const handleInputChange=(name, value)=>{
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))

    console.log(formData);
  }

  const handleFeatureChange=(name, value)=>{
    setFeatureData((prevData)=>({
      ...prevData,
      [name]: value
    }))

    console.log(featureData);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Deatils</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {carDetails.carDetails.map((item, index) => (
                  <div key={index}>
                    <label className="text-sm flex gap-2 items-center mb-1">
                      <IconField icon={item?.icon}/>
                      {item?.label} {item.required&&<span className="text-red-500">*</span>}
                    </label>
                    {item.fieldType == "text" || item.fieldType == "number" ? (
                      <InputField item={item} handleInputChange={handleInputChange} />
                    ) 
                    : item.fieldType=='dropdown'?<DropdownField item={item} handleInputChange={handleInputChange} />
                    : item.fieldType=='textarea'?<TextAreaField item={item} handleInputChange={handleInputChange} />
                    : null}

                  </div>
                ))}
            </div>
          </div>

          <Separator className='my-6'/>

          {/* Feature List */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {features.features.map((item, index)=>(
                  <div className="flex gap-2 items-center">
                    <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name, value)} /> <h2>{item.label}</h2>
                  </div>
                ))}
            </div>
          </div>

          {/* Car Images */}

          <div className="mt-10 flex justify-end">
            <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddListing;
